/** https://scotch.io/tutorials/create-a-custom-usefetch-react-hook */
import React, { useEffect } from 'react'

export const useFetch = (url, options, type) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        if (type === 'text') {
          const text = await res.text();
          console.log(text)
          setResponse(text);
        }
        else {
          const json = await res.json();
          setResponse(json);
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error };
};