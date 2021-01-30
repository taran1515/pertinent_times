import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const API_KEY = 'JoCd7NoAcsFGjcOTS01ldNI0U4hOpmNs'
const axios = require('axios');


const [data] = ''

async function getData(url) {
    let data = await fetch(url)
    let arr = await data.json()
    
    return arr
    }

function News(props) {  
    // const [data, setData] = useState("")
    let data = getData(`https://api.nytimes.com/svc/topstories/v2/${props.type}.json?api-key=${API_KEY}`)
    
    return (
        <div>
            News App  - {props.type}   
            <div>
               
            </div>
        </div>
        )
    
}

export default News