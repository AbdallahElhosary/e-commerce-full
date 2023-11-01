import {combineReducers} from 'redux'
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducer'
import subCategoryReducer from './subCategoryReducer'
import productReducer from './productReducer'
import allTypesReducer from "./allTypesReducer"

export default combineReducers ({
    allCategory: categoryReducer,
    allBrand: brandReducer,
    subCategory: subCategoryReducer,
    allProduct: productReducer,
    allTypes:allTypesReducer,
})