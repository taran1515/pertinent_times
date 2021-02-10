
import './App.css'
import News from './Component/News'
import NewsTypeLink from './Component/NewsTypeLink'

import NewsType from './NewsType'
import React, { useState } from 'react';


function App() {

    const [type, setType] = useState("");
    
    function selectNews(e) {
        setType(e.target.textContent)
    
    }

    return (
        <div className="App" >
            <h1 > The Pertinent Times </h1> 
            {NewsType.map(newsType =>
               <NewsTypeLink key={newsType.title} selectNews={selectNews} newsType={newsType}/>
            )}
           


            
            
            <News type={type}></News>
        
 

           
        </div>
       
    );
}

export default App;