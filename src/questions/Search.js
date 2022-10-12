import React from 'react'
import { useState } from 'react'

export default function Search() {
    const [searchText, updateSearchText] = useState('');
    
    const searchList = ['Apple', 'Banana', 'Lund', 'CHut', 'Gaand', 'Bhosda', 'Chutiya'];
    const [displayList, updatedDisplaySearchList] = useState(searchList);
    const handleTextChange = (e) => {
        console.log('inside handle text change')
        var newlist =  e.target.value != '' ? searchList.filter(x => x.toLowerCase().includes(e.target.value)) : searchList;
        // console.log(newlist)
        updatedDisplaySearchList(newlist);
        // console.log(dis)
    }
    return (
        <div>
            <h1>Search</h1>
            <div>
                <input type={Text} onChange={handleTextChange} />
            </div>
            <div>
                {displayList.map(x => (
                    <div>
                        {x}
                    </div>
                ))}
            </div>
        </div>
    )
}