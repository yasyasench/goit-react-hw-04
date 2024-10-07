import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { fetchImages } from './api';
import Loader from './components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

const App = () => {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [modalImg, setModalImg] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      if (!query) return;
      try {
        setLoader(true);
        const data = await fetchImages(query, page);
        if (data.results.length === 0) {
          toast.error(`Nothing was found for the word "${query}"`);
          return;
        }
        setImages(prevImages => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);  // Set total pages correctly
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
    if (newQuery !== query) {
      setQuery(newQuery);
      setImages([]);
      setTotalPages(0);
      setPage(1);
    }
  };

  const openCloseModal = () => {
    setOpenModal(!openModal);
    if (openModal) document.body.style.overflow = "auto";
    else document.body.style.overflow = "hidden";
  };

  const handleOpenModel = (currentId) => {
    const [currentImg] = images.filter(({ id }) => id === currentId);
    setModalImg(currentImg);
    openCloseModal();
  };

  const visibleBtnMore = () => images.length > 0 && page < totalPages;

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      <Toaster position="top-right" />
      {images.length > 0 && <ImageGallery images={images} handleOpenModel={handleOpenModel} />}
      {loader && <Loader />}
      {visibleBtnMore() && <LoadMoreBtn handleChangePage={handleChangePage} />}
      <ImageModal
        isOpen={openModal}
        openCloseModal={openCloseModal}
        modalImg={modalImg} />
    </>
  );
};

export default App;
