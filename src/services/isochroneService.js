import axios from 'axios';

const API_URL = 'https://api.traveltimeapp.com/v4/time-map';

// Replace these with your actual TravelTime API credentials
const API_KEY = 'YOUR_API_KEY';
const APP_ID = 'YOUR_APP_ID';

export const fetchIsochrone = async (lat, lon, time) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        departure_searches: [
          {
            id: "stockholm_isochrone",
            coords: {
              lat: parseFloat(lat),
              lng: parseFloat(lon)
            },
            transportation: {
              type: "public_transport"
            },
            departure_time: new Date().toISOString(),
            travel_time: parseInt(time) * 60
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Application-Id': APP_ID,
          'X-Api-Key': API_KEY,
        }
      }
    );
    return response.data.results[0].shapes;
  } catch (error) {
    console.error('Error fetching isochrone data:', error);
    throw error;
  }
};