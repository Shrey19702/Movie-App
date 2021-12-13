import emailjs from 'emailjs-com';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import {useState} from 'react';

const Mailing = (props) => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState(''); 
    let html_list='<ul>';
    for(let i=0; i<props.favorite.length; i++){
        html_list+= `<li>${props.favorite[i].Title} </li>`;
    }
    html_list+= '</ul>';

    const sendEmail = async function(e) {
        // console.log(props.favorite);
        try{
            e.preventDefault();
            console.log(html_list); 
            let result = await emailjs.sendForm('Gmail', 'template_8cuw7jo', e.target, 'user_I68gX8xwagSbHTMCmGnm5');
            console.log(result.text);
        }
        catch(error){
              console.log(error.text);
        }
    }

    return ( 
        <div className='mailing-page'>
            <Navbar haveSearchBox={false}/>
            <div className="contact-form-box">
                <h1 className="contact-form-heading" >Mail yourself the list of Favorite Movies</h1>
                <form className="contact-form" onSubmit={sendEmail}>
                    <label className='form-input-label'>Name*</label>
                    <input
                        name='name'
                        type="text"
                        required
                        className="form-input"
                        placeholder="Your Name"
                        value={name} 
                        onChange={(e)=>setname(e.target.value)}
                    />
                    <label className='form-input-label'>Email*</label>
                    <input
                        name='email'
                        type="email"
                        required
                        className="form-input"
                        placeholder="Your Email"
                        value={email} 
                        onChange={(e)=>setemail(e.target.value)}
                    />
                    <label className='form-input-label'>Message</label>
                    <textarea
                        name='message'
                        className="form-input"
                        // required
                        placeholder="Message"
                        value={message}
                        onChange={(e)=>setmessage(e.target.value)}
                    ></textarea>
                    <input type="text" value={html_list} name='html_list' className='display-none' />
                    <input className="contact-submit-button" type="submit" value="Submit" />       
                </form>
            </div>
            <br/>
            {props.favorite && 
                <MovieList 
                    align_center={true}
                    isPending={props.isPending}
                    heading={"Favorites"}
                    movies={props.favorite} 
                    favorite={props.favorite}
                    HandleClick_favorite={props.HandleClick_favorite}
                    HandleClick_MovieList={props.HandleClick_MovieList}
                />
            }
        </div>
    );
}
 
export default Mailing;