import React from 'react'
import AdminAllOrdersItem from './AdminAllOrdersItem'
import { Row } from 'react-bootstrap'
import Paginate from '../uttilies/Pagination/Pagination'
const AdminAllOrdersCom = () => {
  return (
    <div>
      <h2>Manage All Orders</h2>
      <Row>
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
      </Row>
      <Paginate />
    </div>
  )
}

export default AdminAllOrdersCom