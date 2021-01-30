
import './App.css'
import News from './Component/News'
import NewsType from './NewsType'
import React, { useState } from 'react';


function App() {
    // const type = ['world', 'science', 'politics']

    const [type, setType] = useState("");
    const [data,setData] = useState("")

    
    function selectNews(e) {
        setType(e.target.textContent)
    
    }

    return (
        <div className="App" >
            <h1 > The Pertinent Times </h1> 

            <button onClick={selectNews}>{NewsType[0].title}</button><br></br>
            <button onClick={selectNews}>{NewsType[1].title}</button><br></br>
            <button onClick={selectNews}>{NewsType[2].title}</button><br></br>

            
            
            <News type={type}></News>
        
 

           
        </div>
       
    );
}

export default App;