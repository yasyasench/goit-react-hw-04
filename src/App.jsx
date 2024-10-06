import React from 'react'
import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'

import ImageGallery from './components/ImageGallery/ImageGallery';
import { fetchImages } from './api';
import Loader from './components/Loader/Loader';


const App = () => {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      try {
        setLoader(true);
        const data = await fetchImages();
        setLoader(false);
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
      {images.length && <ImageGallery images={images} />}
      {loader && <Loader/>}
    </>
  );
};

export default App;

