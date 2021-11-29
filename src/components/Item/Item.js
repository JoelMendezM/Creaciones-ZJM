import React from "react"

const Item = ({name, description, stock, picture}) => {

    return (
        <React.Fragment>
            <div className="card" style={{width: '18rem', margin:20}}>
                <img src={picture} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Modelo: {description}</li>
                    <li className="list-group-item">Stock: {stock}</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="btn btn-primary">Agregar al carrito</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Item