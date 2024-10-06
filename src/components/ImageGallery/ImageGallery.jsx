import React from 'react';
import css from "./ImageGallery.module.css";
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.list}>
      {images.map((data, index) => (
        <li key={`${data.id}-${index}`}>
          <ImageCard data={data} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
