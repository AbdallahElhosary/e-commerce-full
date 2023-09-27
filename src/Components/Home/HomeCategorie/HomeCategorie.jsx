import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTitle from '../../uttilies/subTitle/SubTitle'
import CategorieCard from '../../Categorie/CategorieCard/CategorieCard'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCaetgory } from '../../../redux/actions/categoryAction';
import { useEffect } from "react";
const HomeCategorie = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCaetgory());

  }, [])
  const category = useSelector(state => state.allCategory.category);
  const loading = useSelector(state => state.allCategory.loading);
  const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]

  return (
    <Container>
      <SubTitle title="Categories" btntitle="More" pathText="/allcategorie" />
      <Row className="my-2 justify-content-around d-flex">
        {
          loading === false ? category.data ? (
            category.data.slice(0, 5).map((item,index) => {
              return (
                <CategorieCard key={index} title={item.name} background={colors[Math.floor(Math.random() * 5) + 1]} img={item.image} />

              )
            })
          ) : (<h4>There Is no Categories</h4>)
            : <Spinner animation="border" variant="primary" />
        }
      </Row>
    </Container>
  )
}

export default HomeCategorie