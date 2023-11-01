import React from 'react'
import "./ProductGallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import ViewProductsDetalisHook from '../../../hook/products/view-product-details-hook';

export default function ProductGallery({ id }) {

  const [, mappedImages] = ViewProductsDetalisHook(id);
  


  


  return (
    <ImageGallery
      items={mappedImages}
      showFullscreenButton={false}
      isRTL={true}
      showPlayButton={false}
      showThumbnails={false}
       />
  )
}





