import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { database } from '../../Services/firebase/firabe';
import { doc, addDoc, collection, Timestamp, writeBatch, getDoc } from 'firebase/firestore';
import fotoCarritoVacio from '../../images/carrito-compra-vacio.jpg';
import './Cart.css';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactForm } from '../contactForm/ContactForm';
import { Button, Container } from '../../elements/Forms.js';

const Cart = () => {
  const [processingOrder, setProcessingOrder] = useState(false);
  const [showFormContact, setShowFormContact] = useState(false);
  const { cart, removeItem, cleanTheCart } = useCart();
  const totalToPay = cart.reduce((a, c) => a + c.price * c.quantity, 0);

  const confirmOrder = (e) => {
    setProcessingOrder(true);
    // let buyerName = document.getElementById('name').value;
    // let buyerEmail = document.getElementById('email').value;
    // let buyerNumber = document.getElementById('number').value;

    const objOrder = {
      buyer: localStorage.getItem('buyerName'),
      items: cart,
      total: totalToPay,
      phoneNumber: localStorage.getItem('buyerPhoneNumber'),
      email: localStorage.getItem('buyerEmail'),
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
        return `Item: ${order.name}, cantidad: ${order.quantity};\n`;
      })
    );
    localStorage.setItem('totalToPay', totalToPay);
    localStorage.setItem('date', Date());
  };
  if (processingOrder) {
    return (
      <Container>
        <h1>Estamos procesando su orden, aguarde un momento por favor</h1>
        <br></br>
        <br></br>
        <h3>comprador: {`${localStorage.getItem('buyerName')}`}</h3>
        <p>Orden: {`${localStorage.getItem('cart')}`}</p>
        <p>Total a pagar: {`${localStorage.getItem('totalToPay')}`}</p>
        <p>Fecha: {`${localStorage.getItem('date')}`}</p>
      </Container>
    );
  }

  return (
    <>
      <Container>
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
      </Container>
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
            <Button className="btn btn-success" onClick={() => setShowFormContact(true)}>
              Comprar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => {
                setShowFormContact(false);
                cleanTheCart();
              }}>
              Limpiar carrito
            </Button>
          </>
        )}

        {showFormContact ? (
          <ContactForm cancelForm={() => setShowFormContact(false)} confirmOrder={confirmOrder} />
        ) : null}
      </div>
    </>
  );
};

export default Cart;
