import React, { useState } from 'react'
import { Row, Col, FloatingLabel, Form } from 'react-bootstrap'
import avatar from '../../assets/images/avatar.png'
import { createCategory } from "../../redux/actions/categoryAction";
import { useDispatch } from "react-redux";

const AdminAddCategoriyCom = () => {
  const dispatch = useDispatch();

  // The state which contains the image
  const [img, setImg] = useState(avatar);
  const [selectedFile, setSelectedFile] = useState(null);

  const [name, setName] = useState('');


  // When image changed
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  }
  // Handle Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    dispatch(createCategory(formData));
    
  }
  return (
    <div>
      <Row className="justify-content-start ">
        <h2>Add New Categoriy</h2>
        <Col sm="8">
          <div className="text-form pb-2">Categoriy Photo</div>
          <div>
            <label htmlFor="upload-photo">
              <img
                src={img}
                alt="fzx"
                height="150px"
                width="150px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>
          <FloatingLabel controlId="floatingPassword" label="Categoriy Name" className="my-3">
            <Form.Control type="text" placeholder="Categoriy Name" onChange={(e)=> setName(e.target.value)} value={name}/>
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="my-2 btn btn-dark"  onClick={handleSubmit}>Save Edit</button>
        </Col>
      </Row>
    </div>
  )
}
export default AdminAddCategoriyCom