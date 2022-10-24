import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
      headers: {
        'X-RapidAPI-Key': '4444f80c60mshbad13163f21f034p1d57b9jsnfa9b07ea0eb7',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}