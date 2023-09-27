import { useDispatch, useSelector } from "react-redux";
import CategorieContainer from "../../Components/Categorie/CategorieContainer/CategorieContainer";
import Pagination from "../../Components/uttilies/Pagination/Pagination";
import { useEffect } from "react";
import { getAllCaetgory, getAllCaetgoryPage } from "../../redux/actions/categoryAction";


const CategoriePage = () => {
  
  const dispatch = useDispatch();

  // Get All Category with limit
  useEffect(() => {
    dispatch(getAllCaetgory(5));
  }, [])
  // Select Category
  const category = useSelector(state => state.allCategory.category);
  // Select Loading
  const loading = useSelector(state => state.allCategory.loading); 
  let pageCount = 0;
  if (category.paginationResult) {
    pageCount = category.paginationResult.numberOfPages;
  }
  // Function to get the page
  const getPage = (page)=>{
    dispatch(getAllCaetgoryPage(page));
  }

  return (
      <div>
      <CategorieContainer data={category.data} loading={loading} />
      {
        pageCount > 1 ? (
          <Pagination pageCount={pageCount} onPress={getPage} />
        ) : null
      }
    </div>
  )
}

export default CategoriePage