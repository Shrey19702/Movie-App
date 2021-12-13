import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import SearchBox from "./SearchBox";
import logo from "../assets/images/text1881.png"

const Navbar = (props) => {

    const [links, Setlinks] = useState([
        {   id: 1, content: 'Home', ref: '/', type: 'norm'},
        {   id: 2, content: 'Mail', ref: '/mail', type: 'norm'},
        // {   id: 3, content: 'contact', ref: '/contact', type: 'norm'},        
    ]);

    useEffect(
        ()=>handleClick(),
        []
    );

    const handleClick = function(){
        const url = window.location.href;
        var copy_links = links.filter(
            (link)=>{
                if(url.endsWith(link.ref)){
                    link.type='high';
                }
                else{
                    link.type='norm';
                }
                return true;
            }
        );
        Setlinks(copy_links);
    }

    return (
        <div className="Navbar" >
            <img className='logo' src={logo} onClick={()=>props.setSearchValue('')} />
            {
                props.haveSearchBox &&
                    <SearchBox 
                    searchHistory={props.searchHistory}
                    setsearchHistory={props.setsearchHistory}

                    // showHistory={props.showHistory}
                    // setshowHistory={props.setshowHistory}
                    
                    searchValue={props.searchValue}
                    setSearchValue={props.setSearchValue}
                />
            }

            <div className="nav-links" onClick={handleClick}>
                {
                    links.map(link => (
                        <Link to={link.ref} className={'nav-link-'+link.type} key={link.id}>
                            {link.content}
                        </Link>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Navbar;