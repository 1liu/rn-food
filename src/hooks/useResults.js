import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const searchAPI = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: '92618'
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
    searchAPI('restaurant');
  }, []);

  return [results, errorMsg, searchAPI];
}
