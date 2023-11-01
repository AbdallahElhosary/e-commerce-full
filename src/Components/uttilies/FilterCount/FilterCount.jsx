import React from 'react'
import UnopDropdown from 'unop-react-dropdown'
import sort from "../../../assets/images/sort.png";
import "./FilterCount.scss";

const FilterCount = ({products}) => {
    const handler = () => {
        // console.log("Hello")
    }
    return (
        <div className="d-flex justify-content-between pt-3 px-2 container">
            <div className="sub-tile">{`${products.length} Avilable product`}</div>
            <div className="search-count-text d-flex ">
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <p className="mx-1">
                            sort by
                            <img
                                width="20px"
                                height="20px"
                                className="ms-1"
                                src={sort}
                                alt=""
                            />
                        </p>
                    }
                    delay={0}
                    align="RIGHT"
                    hover>
                    <div className="card-filter">
                        <div className="border-bottom card-filter-item">Best Seller</div>
                        <div className="border-bottom card-filter-item">Most Rate</div>
                        <div className="border-bottom card-filter-item">
                            Price from high to low
                        </div>
                        <div className=" card-filter-item">
                            Price from low to high
                        </div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}

export default FilterCount