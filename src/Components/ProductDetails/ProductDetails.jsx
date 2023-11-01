import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductGallery from './ProductGallery/ProductGallery'
import ProductText from './ProductText/ProductText'
import { useParams } from 'react-router-dom'

const ProductDetails = ({id}) => {
    

    return (
        <Row className="py-3">
            <Col lg='4' md="6" sm="12">
                <ProductGallery id={id} />
            </Col>
            <Col lg='8' md="6" sm="12">
                <ProductText id={id}/>
            </Col>
        </Row>
    )
}

export default ProductDetails