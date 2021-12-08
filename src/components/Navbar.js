import SearchBox from "./SearchBox";

const Navbar = (props) => {
    return (
        <div className="Navbar" >
            <div onClick={()=>props.setSearchValue('')} >LOGO</div>
            <SearchBox 
                searchHistory={props.searchHistory}
                setsearchHistory={props.setsearchHistory}

                // showHistory={props.showHistory}
                // setshowHistory={props.setshowHistory}
                
                searchValue={props.searchValue}
                setSearchValue={props.setSearchValue}
            />
            <div>settings</div>
        </div>
     );
}
 
export default Navbar;