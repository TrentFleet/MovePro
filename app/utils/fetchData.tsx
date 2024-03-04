// utils/fetchData.ts
import axios from 'axios';

export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    "X-RapidAPI-Key": "76c6953a19mshb27dec34834749cp112b4fjsn1bddf03393f7",
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



