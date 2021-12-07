import { useState } from "react";

const SearchBox = (props) => {
    const [search, setsearch] = useState('');

    const HandleClick = function(){
        console.log('hello')
        props.setSearchValue(search);
    }
    return ( 
        <div className="search-box">
            <input
                className="form-input-search"
                value={search}
                onChange={(e)=>setsearch(e.target.value)} 
                type="text"
                placeholder="Search" />
            <button onClick={HandleClick} className="form-submit-search"><i class="fas fa-search"></i></button>
        </div>
     );
}
 
export default SearchBox;