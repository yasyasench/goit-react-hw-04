import React from 'react';
import css from "./ImageGallery.module.css";
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.list}>
      {images.map((data) => (
        <li key={data.id}>
          <ImageCard data={data} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
