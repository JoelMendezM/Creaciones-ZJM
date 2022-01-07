import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { database } from '../../Services/firebase/firabe';
import { doc, addDoc, collection, Timestamp, writeBatch, getDoc } from 'firebase/firestore';
import fotoCarritoVacio from '../../images/carrito-compra-vacio.jpg';
import './Cart.css';

const Cart = () => {
  const [processingOrder, setProcessingOrder] = useState(false);
  const [showFormContact, setShowFormContact] = useState(false);
  const { cart, removeItem, cleanTheCart } = useCart();
  const totalToPay = cart.reduce((a, c) => a + c.price * c.quantity, 0);

  const confirmOrder = (e) => {
    setProcessingOrder(true);
    e.preventDefault();
    let buyerName = document.getElementById('contactName').value;
    let buyerEmail = document.getElementById('contactEmail').value;
    let buyerNumber = document.getElementById('contactNumber').value;

    const objOrder = {
      buyer: buyerName,
      items: cart,
      total: totalToPay,
      phoneNumber: buyerNumber,
      email: buyerEmail,
      date: Timestamp.fromDate(new Date()),
    };

    const batch = writeBatch(database);
    const outOfStock = [];

    objOrder.items.forEach((prod) => {
      getDoc(doc(database, 'items', prod.id)).then((documentSnapshot) => {
        if (documentSnapshot.data().stock >= prod.quantity) {
          batch.update(doc(database, 'items', documentSnapshot.id), {
            stock: documentSnapshot.data().stock - prod.quantity,
          });
        } else {
          outOfStock.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        }
      });
    });
    if (outOfStock.length === 0) {
      addDoc(collection(database, 'orders'), objOrder)
        .then(({ id }) => {
          batch.commit().then(() => {
            console.log(`id`, id);
          });
        })
        .catch((error) => {
          console.log('Error adding products', error);
        })
        .finally(() => {
          setTimeout(() => {
            alert(
              'Su compra fue procesada con éxito, en brevedad será contactado a través de los datos suministrados en el formulario'
            );
            setProcessingOrder(false);
            cleanTheCart();
            setShowFormContact(false);
          }, 2000);
        });
    }
    console.log(`cart`, cart);
    localStorage.setItem(
      'cart',
      cart.map((order) => {
        return `Item: ${order.name} cantidad: ${order.quantity}\n`;
      })
    );
    localStorage.setItem('buyerName', buyerName);
    localStorage.setItem('totalToPay', totalToPay);
    localStorage.setItem('date', Date());
  };
  if (processingOrder) {
    return (
      <div>
        <h1>Procesando su orden, aguarde un momento por favor</h1>
        <br></br>
        <br></br>
        <h3>comprador: {`${localStorage.getItem('buyerName')}`}</h3>
        <p>Orden: {`${localStorage.getItem('cart')}`}</p>
        <p>Total a pagar: {`${localStorage.getItem('totalToPay')}`}</p>
        <p>Fecha: {`${localStorage.getItem('date')}`}</p>
      </div>
    );
    // (
    //
    //
    //
    //
    //     <p>Total a pagar: `${totalToPay}`</p>
    // ;
    //
    // );
  }

  return (
    <>
      <h1>Items agregados al carrito:</h1>
      {cart.length === 0 && (
        <div>
          <br></br>
          <h2>EL CARRITO ESTA VACIO</h2>
          <img
            className="carritoCompraVacio"
            src={fotoCarritoVacio}
            alt="carrito de compras vacío"
          />
          <br></br>
          <h3>
            Para empezar a comprar puede ver nuestros productos y servicios a través del siguiente
            enlace:
          </h3>
          <NavLink to="/">
            <b>Productos y servicios</b>
          </NavLink>
        </div>
      )}
      <div>
        <table className="table table-light table-hover m-0">
          <tbody>
            {cart.map((productCart, index) => {
              return (
                <tr key={index} id={productCart.id}>
                  <td>
                    <img src={productCart.picture} alt="asdf" style={{ width: '3rem' }} />
                  </td>
                  <td>{productCart.name}</td>
                  <td>Precio: {productCart.price}</td>
                  <td>Cantidad deseada: {productCart.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeItem(index, productCart.quantity)}>
                      Remover Item
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          {cart.length !== 0 && (
            <tfoot>
              <tr>
                <td> Total a pagar:</td>
                <td>${totalToPay}</td>
              </tr>
            </tfoot>
          )}
        </table>
        {cart.length !== 0 && (
          <>
            <button className="btn btn-success" onClick={() => setShowFormContact(true)}>
              Comprar
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                setShowFormContact(false);
                cleanTheCart();
              }}>
              Limpiar carrito
            </button>
          </>
        )}

        {showFormContact ? (
          <div className="container mt-5">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Nombre y apellido
                </label>
                <input type="text" className="form-control" id="contactName" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="contactEmail"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Número de contacto
                </label>
                <input type="text" className="form-control" id="contactNumber" />
              </div>
              <button type="submit" className="btn btn-success" onClick={confirmOrder}>
                Confirmar compra
              </button>
              <button className="btn btn-danger" onClick={() => setShowFormContact(false)}>
                Cancelar
              </button>
            </form>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
