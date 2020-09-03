import { useEffect, useState } from 'react';
import yelp from '../api/yelp';
import { Alert } from 'react-native';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation(position);
      },
      error => Alert.alert("Could not get location"),
      { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
    )
  }
  const searchAPI = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          //location: '92618'
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.log(error);
      setErrorMsg("Something went wrong!")
    }
  }

  //call searchAPI when component rendered first time
  useEffect(() => {
    getLocation();
  }, []);
  useEffect(() => {
    if (location !== null) {
      searchAPI('restaurant');
    }
  }, [location]);

  return [results, errorMsg, searchAPI];
}
