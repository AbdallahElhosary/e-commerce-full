import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../uttilies/subTitle/SubTitle'
import ProductCard from '../ProductCard/ProductCard'
import NotAvailable from '../uttilies/NotAvailable'
import Loading from '../uttilies/Loading'

const CardProductsCon = ({ btnTitle, title, pathText, products }) => {


    return (
        <Container>
            <SubTitle title={title} btntitle={btnTitle} pathText="/products" />
            <Row className="my-2 justify-content-around d-flex">
                    
                    {
                        products.length > 0 ? (
                            products.map((item, index) => <ProductCard key={index} item={item} />)
                        ) : <NotAvailable   />
                    }

            </Row>
        </Container>
    )
}

export default CardProductsCon