import React from 'react'
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

  // Store the id in local storage when you first obtain it
  if (id) {
    localStorage.setItem('id', id);
  }

  // Retrieve the id from local storage, if available
  const storedId = localStorage.getItem('id');
  

  const [products] = ViewHomeProductHook()
  const [category] = AllCategoryPageHook();
  const [brand] = AllBrandPageHook();

  const [, , , , similerProducts] = ViewProductsDetalisHook(storedId);



  return (
    <div>
      <CategorieHeader />
      <Container>
        <ProductDetails id={storedId}/>
        <RateContainer />
        <CardProductsCon title="Products you may like"  products={similerProducts} />
      </Container>
    </div>
  )
}




