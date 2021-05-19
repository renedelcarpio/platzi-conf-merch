import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyAIbEziUAOwAHRY5ZmsTVv0lUfan104C2g';

const useGoogleAddress = (address) => {
  const [map, setmap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=&{address}&key=${API_KEY}`;

  useEffect(async () => {
    const response = await axios(API);
    setmap(response.data.results[0].geometry.location);
  }, []);
  return map;
};

export default useGoogleAddress;
