import "./ProductText.scss";

import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ViewProductDetailsHook from "../../../hook/products/view-product-details-hook";

const ProductText = ({id}) => {


  

  
  const [oneProduct, , , oneBrand,] = ViewProductDetailsHook(id);
  

  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">Electronics :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline fs-4 fw-bold">
            {oneProduct.title}
          </div>
            <div className="cat-rate d-inline mx-3">4.5</div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-2">
          <div className="cat-text d-inline">Type :</div>
          <div className="barnd-text d-inline mx-1">IPhone </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-2">
          <div className="cat-text d-inline">Brand :</div>
          <div className="barnd-text d-inline mx-1">{oneBrand.name} </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {
            oneProduct.availableColors.length > 0 &&
            oneProduct.availableColors.map((color,index) => {
              return (
                <div
                  key={index}
                  className="color ms-2 border"
                  style={{ backgroundColor: color }}></div>
              )
            })
          }
        </Col>
      </Row>
      <Row className="mt-4">
        <div className="cat-text">Details :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            {
              oneProduct.description
            }
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">{oneProduct.price} EGP</div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">Add To Cart</div>
        </Col>
      </Row>
    </div>
  )
}

export default ProductText