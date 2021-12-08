const SearchHistory = (props) => {

    return (
        <div className="search-history">
                <ul className="history-list">
                    {
                        props.historyList.map(
                            (val, index)=>{
                                return (
                                <li className='history-element' key={index}>
                                    <span 
                                        className= 'history-element-title'
                                        onClick={()=>{
                                            props.setsearch(val);
                                            props.setshowHistory(false);
                                            props.setSearchValue(val);
                                        }
                                    }>{val}</span>
                                    <span onClick={()=>props.HandleClick_Deletehistory(val)} className="delete-history font-weight-700">X</span>
                                </li>)
                            }
                        )
                    }
                    <li className="close-history" onClick={()=>props.setshowHistory(false)} >Close History</li>
                </ul>
        </div> 
    );
}
 
export default SearchHistory;