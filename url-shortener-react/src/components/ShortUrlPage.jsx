import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ShortUrlPage = () => {

  const {url} = useParams(); //gets the slug from url (dynamic part)

  useEffect(()=>{
    if(url){
      window.location.href = import.meta.env.VITE_BACKEND_URL + `/${url}` //redirecting the user to this url (browser navigates to the value of href property) -> redirected to original URL
    }
  },[url])

  return <p>Redirecting ...</p>;
}

export default ShortUrlPage