// utils/fetchData.ts
import axios from 'axios';

export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    "X-RapidAPI-Key": "426f8b5603mshc27cae59d370d40p168902jsn8a3ec6e810bb",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    
  }
};

export const fetchData = async (url: string, options: any) => {
  try {
    const response = await axios.request({
      ...options,
      url
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};



