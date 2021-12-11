import React from "react"
import ItemCount from "../ItemCount"
import { useParams } from "react-router"

const ItemDetail = ({picture1, picture2, uniqueName, price, stock}) => {
    const { type } = useParams();

    return (
        <React.Fragment>
            <div style={{width: 400}} id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={picture1} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={picture2} className="d-block w-100" alt="..."/>
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
                <h5 className="card-title">{uniqueName}</h5>
                <p className="card-text">Top de venerano con un diseño único y fresco en la parte trasera del mismo, floreado y colorido para que puedas brillar junto con el sol del verano</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Precio: {price}$ARS</li>
                <li className="list-group-item">Stock: {stock}</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">Agregar al carrito</a>
              </div>
            </div>
            <ItemCount onAdd='Agregar al carrito'  stock="15" />
        </React.Fragment>
    )
}

export default ItemDetail