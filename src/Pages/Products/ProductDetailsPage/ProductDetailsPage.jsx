import React, { useState } from 'react'
import CategorieHeader from "../../../Components/Categorie/CategorieHeader/CategorieHeader";
import { Container } from 'react-bootstrap';
import ProductDetails from '../../../Components/ProductDetails/ProductDetails';
import RateContainer from '../../../Components/Rate/RateContainer';
import CardProductsCon from "../../../Components/CardProductsCon/CardProductsCon";
import { useParams } from 'react-router-dom';
import ViewProductsDetalisHook from '../../../hook/products/view-product-details-hook';
import ViewHomeProductHook from '../../../hook/products/view-home-product-hook';
import AllCategoryPageHook from '../../../hook/category/all-category-page-hook';
import AllBrandPageHook from '../../../hook/brand/all-brand-page-hook';
import { useEffect } from 'react';

export default function ProductDetailsPage() {

  // Get the route parameter using useParams
  const { id } = useParams();

  // Retrieve the id from local storage, if available
  const [, , , , similerProducts] = ViewProductsDetalisHook(id);

  const [loading,setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    })
  },[])


  return (
    <div>
    {
      
      loading === false &&
    
        <>
          <CategorieHeader />
      <Container>
        <ProductDetails id={id}/>
        <RateContainer />
        <CardProductsCon title="Products you may like"  products={similerProducts} />
      </Container>
      </>
    }

    </div>
  )
}




