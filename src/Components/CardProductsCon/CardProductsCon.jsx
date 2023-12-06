import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTitle from '../uttilies/subTitle/SubTitle'
import ProductCard from '../ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUserWishlist } from '../../redux/actions/wishlistAction'
import { useState } from 'react'

const CardProductsCon = ({ btnTitle, title, pathText, products }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState();
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getUserWishlist())
            setLoading(false)
        }
        get();
    }, [])
    
    const wishListRes = useSelector((state) => state.wishList.userWishlist)

    useEffect(() => {
        if (loading === false) {
            if (wishListRes.data) {
                setWishList(wishListRes.data.map((item => item._id)))
                console.log(wishList)
            }
        }
    },[loading])

    return (
        <Container>
            <SubTitle title={title} btntitle={btnTitle} pathText="/products" />
            <Row className="my-2 justify-content-around d-flex">
                    {
                    products ?  (
                        products.map((item, index) => <ProductCard key={index} item={item} wishList={wishList} />)
                    ) : <Spinner animation="border" variant="primary" /> 
                    }

            </Row>
        </Container>
    )
}

export default CardProductsCon