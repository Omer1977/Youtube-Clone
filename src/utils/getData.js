import axios from "axios";

axios.defaults.baseURL = 'https://yt-api.p.rapidapi.com';

const options = {
    params:{geo:"TR", lang:"tr"},
    headers: {
      'X-RapidAPI-Key': '2ee14f57d6mshd3977ce4e513e62p10f679jsn6fa1ca938602',
      'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
  };

export const getData = async(path) => {
   try{
    const response = await axios.get(path, options);
    return response.data
} catch(err) {
    console.log(err)
}

};