import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
// import { addDoc, collection } from 'firebase/firestore';
import { database } from '../Services/firebase/firabe';
import { doc, addDoc, collection, Timestamp, writeBatch, getDoc } from 'firebase/firestore';

const  Cart = () => {
    const [processingOrder, setProcessingOrder] = useState(true);
    const [showFormContact, setShowFormContact] = useState(false);
    const { cart, removeItem, cleanTheCart } = useCart();
    const totalToPay = cart.reduce((a, c) => a + c.price * c.quantity, 0);
    
    const confirmOrder = () => {
        const objOrder = {
            buyer: 'Joel',
            items: cart,
            total: totalToPay,
            phoneNumber: 1166662222,
            email: 'asdf@asdf.com',
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(database);
        const outOfStock = [];

        objOrder.items.forEach((prod) => {
            getDoc(doc(database, 'items', prod.id)).then((documentSnapshot) => {
                if(documentSnapshot.data().stock >= prod.quantity) {
                    batch.update(doc(database, 'items', documentSnapshot.id), {
                        stock: documentSnapshot.data().stock - prod.quantity
                    })
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data()})
                }
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(database, 'orders'), objOrder).then(({ id }) => {
                batch.commit().then(() => {
                    console.log(`id`, id);

                })    
            }).catch((error) => {
                console.log('Error adding products', error);
            }).finally(() => {
                setProcessingOrder(false);
                cleanTheCart();
            })
        }

        if(processingOrder) {
            return <h1>Procesando su orden, aguarde un momento por favor</h1>;
        }
    }

    return (
        <>
            <h1>Items agregados al carrito:</h1>
            {cart.length === 0 && (
                <div>
                    <br></br>
                    <h2>EL CARRITO ESTA VACIO</h2>
                    <br></br>
                    <h3>Para empezar a comprar puede ver nuestros productos y servicios a través del siguiente enlace:</h3>
                    <NavLink to="/"><b>Productos y servicios</b></NavLink>
                </div>
            )}
            <div>
                <table className='table table-light table-hover m-0'>
                    <tbody>
                    {cart.map((productCart,index) => {
                    return (
                        <tr key={index} id={productCart.id}>
                            <td>
                                <img src={ productCart.picture } alt="asdf" style={{width: "3rem"}}/>
                            </td>
                            <td>{productCart.name}</td>
                            <td>Precio: {productCart.price}</td>
                            <td>Cantidad deseada: {productCart.quantity}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => removeItem(index, productCart.quantity)}>Remover Item</button>
                            </td>
                        </tr>
                    )
                }
                )}
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
                      <button className='btn btn-success' onClick={() => setShowFormContact(true)}>Contacto</button>
                      <button className='btn btn-success' onClick={confirmOrder}>Confirmar compra</button>
                      <button className='btn btn-danger' onClick={() => {setShowFormContact(false); cleanTheCart();}}>Limpiar carrito</button>
                    </>
                )}

        {
          showFormContact ?
              <div className='container mt-5'>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Nombre y apellido</label>
                    <input type="password" className="form-control" id="exampleInputName1"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                  {/* <button className='btn btn-success' onClick={() => confirmOrder}>Confirmar compra</button> */}
                  <button className='btn btn-danger' onClick={() => setShowFormContact(false)}>Cancelar</button>
                </form>
              </div>
            :
            null
            }
                
            </div>
            </>
    )
}

export default Cart
