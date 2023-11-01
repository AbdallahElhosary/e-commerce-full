import React from 'react'
import CategorieHeader from '../../Components/Categorie/CategorieHeader/CategorieHeader'
import FilterCount from '../../Components/uttilies/FilterCount/FilterCount'
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from '../../Components/uttilies/SideBar/SideBar'
import CardProductsCon from '../../Components/CardProductsCon/CardProductsCon'
import Pagination from '../../Components/uttilies/Pagination/Pagination'
import ViewHomeProductHook from '../../hook/products/view-home-product-hook'
import AllCategoryPageHook from '../../hook/category/all-category-page-hook'
import AllBrandPageHook from '../../hook/brand/all-brand-page-hook'

const ProductsShop = () => {

    const [products] = ViewHomeProductHook()
    const [category] = AllCategoryPageHook();
    const [brand] = AllBrandPageHook();

    return (
        <div style={{ minHeight: "50vh" }}>
            <CategorieHeader />
            <Container>
                <FilterCount products={products} />

                <Row>
                    <Col sm="2" xs="3" md='2'>
                        <SideBar />
                    </Col>
                    <Col sm="9" xs="9" md='10'>
                        <CardProductsCon products={products} />
                    </Col>
                </Row>
                <Pagination />
            </Container>
        </div>
    )
}

export default ProductsShop