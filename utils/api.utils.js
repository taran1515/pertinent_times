import axios from "axios";

const NYT_API_BASE_URL = "`https://api.nytimes.com/svc/topstories/v2/"



export const nytApi = {
  async get(path) {
     const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=${API_KEY}`)
            setData(response.data['results'])
            console.log('ds')
            console.log(data[0]['section'])
            console.log(typeof data[0])
  }
}