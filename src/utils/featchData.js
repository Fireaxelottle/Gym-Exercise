export const exerciseOptions = {
	method: 'GET',
    headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};



export const featchData = async (url , option)=>{  

    const data  = await fetch(url , option);

    const parsedData = await data.json();

    return parsedData
}