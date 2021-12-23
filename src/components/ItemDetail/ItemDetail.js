import React, { useEffect, useState } from "react"
import ItemCount from "../ItemCount"
import { useParams } from "react-router"
import { getDetailItem } from "../../Services/getDetailItem"


const ItemDetail = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState({});
     
      useEffect(() => {

        getDetailItem(id)
        .then(res => setProductDetail(res));

      },[id])

    return (
        <React.Fragment>
          {
            productDetail && (
              <React.Fragment>
              <div style={{width: 400}} id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={productDetail.frontPicture} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={productDetail.backPicture} className="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div style={{width: 400}} className="card">
              <div className="card-body">
                <h5 className="card-title">{productDetail.productsName}</h5>
                <p className="card-text">{productDetail.detail}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Precio: {productDetail.price}$ARS</li>
                <li className="list-group-item">Stock: {productDetail.stock}</li>
              </ul>
            </div>
            <ItemCount productDetail={productDetail}/>
            </React.Fragment>
          )}
        </React.Fragment>
    )
}

export default ItemDetail