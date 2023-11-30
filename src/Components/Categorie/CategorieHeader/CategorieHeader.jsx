import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./CategorieHeader.scss";
import SidebarSearchHook from '../../../hook/search/sidebar-search-hook';

const CategorieHeader = () => {
    const [category, brand, selectCategory, selectBrand, priceFrom, priceTo] = SidebarSearchHook();
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-start flex-wrap">
                    <div className='cat-text-header'>All</div>
                    {
                        category.data &&
                        category.data.map((cat) => {
                            return (
                                <div onClick={selectCategory} className='cat-text-header' key={cat._id}>
                                    {cat.name}
                                </div>
                            )
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default CategorieHeader