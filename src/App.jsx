import React from 'react'
import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'

import ImageGallery from './components/ImageGallery/ImageGallery';
import { fetchImages } from './api';


const App = () => {
  const [images, setImages] = useState([]);


  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await fetchImages();
        setImages(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getImages();
  }, []);

  return (
    <>
      <SearchBar />
      <ImageGallery images={images}/>
    </>
  );
};

export default App;

