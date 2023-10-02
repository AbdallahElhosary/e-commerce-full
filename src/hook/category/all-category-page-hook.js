import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCaetgory, getAllCaetgoryPage } from '../../redux/actions/categoryAction';

const AllCategoryPageHook = () => {
  const dispatch = useDispatch();

  // Get All Category with limit
  useEffect(() => {
    dispatch(getAllCaetgory(6));
  }, [])
  // Select Category
  const category = useSelector(state => state.allCategory.category);
  // Select Loading
    const loading = useSelector(state => state.allCategory.loading);
    //name pageCount to get the page numbers 
  let pageCount = 0;
  if (category.paginationResult) {
    pageCount = category.paginationResult.numberOfPages;
  }
  // Function to get the page
  const getPage = (page)=>{
    dispatch(getAllCaetgoryPage(page));
  }

    return [category, loading, pageCount, getPage]
}

export default AllCategoryPageHook
