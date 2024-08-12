import axios from 'axios';

const API_URL = 'http://localhost:8080/otp/routers/default/isochrone';

export const fetchIsochrone = async (lat, lon, time) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        fromPlace: `${lat},${lon}`,
        cutoffSec: time * 60,
        mode: 'TRANSIT,WALK',
        date: new Date().toISOString().split('T')[0],
        time: '12:00:00',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching isochrone data:', error);
    throw error;
  }
};