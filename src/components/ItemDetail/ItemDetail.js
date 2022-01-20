import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useParams } from 'react-router';
import { getDoc, doc } from 'firebase/firestore';
import { database } from '../../Services/firebase/firabe';
import { ItemDetailContainer } from '../../elements/Forms';
import './itemDetail.css';

const ItemDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getDoc(doc(database, 'items', id))
      .then((querySnapshot) => {
        const product = { id: querySnapshot.id, ...querySnapshot.data() };
        setProductDetail(product);
      })
      .catch((error) => {
        console.log('Error shearching the product', error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setProductDetail();
    };
  }, [id]);

  if (loading) {
    return <span className="spinner spinner-slow"></span>;
  }

  return (
    <React.Fragment>
      {productDetail && (
        <React.Fragment>
          <ItemDetailContainer className="itemDetailContainer">
            <ItemDetailContainer className="card">
              <div
                style={{ width: 400 }}
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={productDetail.frontPicture} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={productDetail.backPicture} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div className="card">
                <h5 className="card-header">{productDetail.productName}</h5>
                <div className="card-body">
                  <h5 className="card-title">{productDetail.detail}</h5>
                  <p className="card-text">Precio: {productDetail.price}$ARS</p>
                  <p className="card-text">Stock: {productDetail.stock}</p>
                  <ItemCount productDetail={productDetail} />
                </div>
              </div>
            </ItemDetailContainer>
          </ItemDetailContainer>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ItemDetail;
