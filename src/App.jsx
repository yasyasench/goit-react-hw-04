import React from 'react'
import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'

import ImageGallery from './components/ImageGallery/ImageGallery';
import { fetchImages } from './api';
import Loader from './components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';


const App = () => {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getImages = async () => {
      try {
        setLoader(true);
        const data = await fetchImages(page);
        setLoader(false);
        setImages(prevImages => [...prevImages, ...data.results]);
      } catch (error) {
        toast.error("Oops, something went wrong, try reloading the page");
      } finally {
        setLoader(false);
      }
    };

    getImages();
  }, [page]);

  const handleChangePage = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <SearchBar />
      <Toaster position="top-right" />
      {images.length && <ImageGallery images={images} />}
      {loader && <Loader/>}
      <LoadMoreBtn handleChangePage={ handleChangePage} />
    </>
  );
};

export default App;

