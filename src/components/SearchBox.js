import { useState } from "react";
import SearchHistory from "./SearchHistory";

const SearchBox = (props) => {
    const [historyList, sethistoryList]= useState([]);  //stores which history to show after filter
    const [search, setsearch] = useState('');   //value of input form
    const [showHistory, setshowHistory] = useState(false);  //whether to show history panel
    
    //filtering search history for historyList
    const filterSearch = (search) => {
        if ( !search || search==='' || search===' ') {
            // console.log('return searchHistory');
            return props.searchHistory;
        }

        // console.log('return filer History');
        return props.searchHistory.filter((val) => {
            return val.toLowerCase().includes(search);
        });
    };
    //search button click
    const HandleClick = function(){
        setshowHistory(false);
        props.setSearchValue(search);
    }
    const HandleClick_Deletehistory= function(movie){
        let newSearchHistory = props.searchHistory.filter(
            (val)=>{return movie!==val}
        );
        props.setsearchHistory(newSearchHistory);

        let newHistoryList = historyList.filter(
            (val)=>{return movie!==val}
        );
        sethistoryList(newHistoryList);
    }

    // useEffect(
    //     function(){
    //         sethistoryList(filterSearch(props.searchHistory,search));
    //     }
    // ,[search]);

    return ( 
        <div className="search-box">
            <input
                onClick={()=>
                    {
                        setshowHistory(true);   //shows the search history panel
                        sethistoryList(filterSearch(search)); //this works well in all cases
                    }
                }
                onChange={      ///!!!!!!!!!!!!!!!very confusing behaviour!!!!!!!!!!!!!!!!!!!!!!!!!
                    (e)=>{
                        // setshowHistory(true);   //shows the search history panel
                        setsearch(e.target.value);  //changes seach instantanously
                        console.log(search);
                        sethistoryList(filterSearch(search)); //this works well in all cases
                        // sethistoryList(filterSearch(props.searchHistory,search));
     
                    }
                } 
                className="form-input-search"
                value={search}
                type="text"
                placeholder="Search"
            />
            {
                showHistory
                &&
                (<SearchHistory 
                    searchValue={props.searchValue} setSearchValue={props.setSearchValue}   //searchValue from the app.js to search throught api
                    HandleClick_Deletehistory={HandleClick_Deletehistory}   //function to delete history from historylist, searchhistory
                    search={search} setsearch={setsearch}   //current input value
                    historyList={historyList}   //current filtered history list
                    setshowHistory={setshowHistory} //opening and closig of history list
                />)
            }
            
            <button onClick={HandleClick} className="form-submit-search"><i class="fas fa-search"></i></button>
        </div>
     );
}
 
export default SearchBox;