import React from 'react'
import AdminAllOrdersItem from './AdminAllOrdersItem'
import { Row, Col } from 'react-bootstrap'

const AdminOrderDetails = () => {
    return (
        <>
            <h2>Order Details</h2>
            <AdminAllOrdersItem />
            <Row className="justify-content-center mt-4 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-2">تفاصيل العميل</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div>
                        Name :
                    </div>
                    <div

                        className="mx-2">
                        Abdallah Elhosary
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div>
                        رقم الهاتف:
                    </div>

                    <div

                        className="mx-2">
                        0021313432423
                    </div>
                </Col>
                <Col xs="12" className="d-flex mb-2">
                    <div>
                        Email :
                    </div>

                    <div

                        className="mx-2">
                        abdallhelhosary@gmail.com
                    </div>
                </Col>
                <div className=" d-flex justify-content-center align-items-center border">
                    total 4000 EGP
                </div>
                <div className="d-flex mt-2 justify-content-center align-items-center">
                    <select
                        style={{
                            height: "100%",
                            borderRadius: "12px",
                            padding: "5px",
                            outline: "none",
                            background: "#eee",
                        }}
                        name="languages"
                        id="lang"
                        className="select input-form-area mx-2 text-center w-50">
                        <option value="val">Order status</option>
                        <option value="val2">Underway</option>
                        <option value="val2">Completed</option>
                        <option value="val2">Cancel</option>
                    </select>
                    <button className="btn btn-primary">Save</button>
                </div>
            </Row>
        </>
    )
}

export default AdminOrderDetails