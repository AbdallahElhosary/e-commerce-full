import { Form, FormControl, Row } from 'react-bootstrap'
import "./SideBar.scss";

const SideBar = () => {
    return (
        <div className="mt-3">
            <Row>
                <div className="d-flex flex-column mt-2">
                    <div className="filter-title">Type</div>
                    <Form>
                        <Form.Check // prettier-ignore
                            type="checkbox"
                            id={`default-checkbox`}
                            label="All"
                        />
                    </Form>
                    <Form>
                        <Form.Check // prettier-ignore
                            type="checkbox"
                            id={`Electoric`}
                            label="Electoric"
                        />
                    </Form>
                    <Form>
                        <Form.Check // prettier-ignore
                            type="checkbox"
                            id={`Clothes`}
                            label="Clothes"
                        />
                    </Form>
                </div>

                <div className="d-flex flex-column mt-2">
                    <div className="filter-title mt-3">The brand</div>
                    <Form>
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="HP"
                        />
                    </Form>
                    <Form>
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Dell"
                        />
                    </Form>
                    <Form>
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Apple"
                        />
                    </Form>
                </div>

                <div className="filter-title my-3">Price</div>
                <div className="d-flex filter-item flex-column">
                    <FormControl type="number" step={50} className='my-2' placeholder='From' />
                </div>
                <div className="d-flex filter-item flex-column">
                    <FormControl type="number" step={50} className='my-2' placeholder='To' />
                </div>
            </Row>
        </div>
    )
}

export default SideBar