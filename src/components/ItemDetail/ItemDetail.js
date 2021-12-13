import React, { useEffect, useState } from "react"
import ItemCount from "../ItemCount"
import { useParams } from "react-router"
import { getItems } from "../../Services/getItems"
// import { products } from "../../products"

const ItemDetail = ({frontPicture, backPicture, productsName, price, stock}) => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    
    useEffect(() => {
      console.log(getItems());
        const list = getItems();
        
        (async () => {            
            const theProducts = await list;
            setItem(theProducts)
        })()
        },[id])
    
    
    
    
    
    // const [item, setItem] = useState({});
// 
    // useEffect(() => {
// 
      // fetch('./product.json')
      // .then((res) => {
        // return res.json();
      // }).then(data => console.log(data,"dataa"))
// 
        // const list = getItems();
        // (async () => {            
            // const theProducts = await list;
            // setItem(theProducts);
        // })()
      // let itemFind = products.find(product => product.id === id)
      // console.log(itemFind, "find");
      // setItem(itemFind);
      // 
    // console.log(products)
    // },[id])

    return (
        <React.Fragment>
          {
            item && (
              <React.Fragment>
              <div style={{width: 400}} id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={item.frontPicture} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={item.backPicture} className="d-block w-100" alt="..."/>
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
                <h5 className="card-title">{item[productsName]}</h5>
                <p className="card-text">Top de venerano con un diseño único y fresco en la parte trasera del mismo, floreado y colorido para que puedas brillar junto con el sol del verano</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Precio: {item.price}$ARS</li>
                <li className="list-group-item">Stock: {item.stock}</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">Agregar al carrito</a>
              </div>
            </div>
            <ItemCount onAdd='Agregar al carrito'  stock="15" />
            </React.Fragment>
            )
          }
        </React.Fragment>
    )
}

export default ItemDetail