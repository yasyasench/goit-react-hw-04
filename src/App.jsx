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
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getImages = async () => {
      if (!query) return;  
      try {
        setLoader(true);
        const data = await fetchImages(query, page);  
        setImages(prevImages => [...prevImages, ...data.results]);  
      } catch (error) {
        toast.error('Oops, something went wrong, try reloading the page');
      } finally {
        setLoader(false);
      }
    };

    getImages();
  }, [page, query]);

  const handleChangePage = () => {
    setPage(prev => prev + 1);
  };

  const handleSetQuery = (newQuery) => {
   console.log("Received query:", newQuery);

    if (!newQuery.trim()) {
      console.log("Empty query, triggering toast...");
      toast.error("Enter the word");  // Show error if the query is empty
      return;
    }

    if (newQuery !== query) {
      setQuery(newQuery);  // Set the new search query
      setImages([]);  // Clear the previous images
      setPage(1);  // Reset the page number to 1
    }
  };

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      <Toaster position="top-right" />
      {images.length && <ImageGallery images={images} />}
      {loader && <Loader/>}
      <LoadMoreBtn handleChangePage={ handleChangePage} />
    </>
  );
};

export default App;

