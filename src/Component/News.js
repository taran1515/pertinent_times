import React, { useState, useEffect } from "react";
import NewsContent from "./NewsContent";
import ReactDOM from "react-dom";
// import API_KEY from '../../env';
const API_KEY = "JoCd7NoAcsFGjcOTS01ldNI0U4hOpmNs";
const axios = require("axios");

function News({ type }) {
  const [data, setData] = useState([]);
  //   const [type] = useState(type);

  if (type == "") {
    type = "science";
  }

  useEffect(() => {
    fetchData(type);
  }, [type]);

  const fetchData = async (type) => {
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=${API_KEY}`
      );
      setData(response.data["results"]);
      console.log("ds");
      console.log(data[0]["section"]);
      console.log(typeof data[0]);
      // console.log(data[0].section)
    } catch (err) {
      console.warn(err);
    }
  };

  // var news = fetchData(type)

  return (
    <div>
      <h3>News App - {type} </h3>
      <br></br>

      {/* {data.title}  */}
      <div className="news">
        {data.map((content) => {
          return <h5> {content.section}</h5>;
          // <NewsContent key={index} section={content['section']}></NewsContent>
        })}
      </div>
    </div>
  );
}

export default News;
