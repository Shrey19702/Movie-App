import SearchBox from "./SearchBox";

const Navbar = (props) => {
    return (
        <div className="Navbar">
            <div>LOGO</div>
            <SearchBox searchValue={props.searchValue} setSearchValue={props.setSearchValue}/>
            <div>settings</div>
        </div>
     );
}
 
export default Navbar;