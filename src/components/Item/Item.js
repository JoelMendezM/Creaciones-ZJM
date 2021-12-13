import React from "react"
import { Link } from "react-router-dom"

const Item = ({type, description, stock, frontPicture, id}) => {
    return (
        <React.Fragment>
            <div className="card" style={{width: '18rem', margin:20}}>
                <img src={frontPicture} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Top {type} </h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Modelo: {description}</li>
                    <li className="list-group-item">Stock: {stock}</li>
                </ul>
                <div className="card-body">
                    <Link to={`/products/${id}`} className="btn btn-primary">Ver detalle</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Item