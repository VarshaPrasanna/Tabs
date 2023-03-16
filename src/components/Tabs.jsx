import React, { useState } from 'react';
import { useEffect } from 'react';

const Tabs = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("./data/data.json") 
            .then((response)=>response.json())
            .then((json)=>{
                //console.log(json);
                setData(json);
            })
    });
    
    const [currentTab, setCurrentTab] = useState('1');
   

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container'>
            <div className='tabs'>
                {data.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.name}</button>
                )}
            </div>
            <div className='content'>
                {data.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><p className='title'>{tab.text}</p><p>{tab.text}</p></div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;