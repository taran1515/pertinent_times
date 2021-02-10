
import React, { useState } from 'react';


function NewsTypeLink({selectNews,newsType}) {
   

    return (
       
            <><button onClick={selectNews}>{newsType.title}</button><br></br></>
           


            
            
    )
}

export default NewsTypeLink;