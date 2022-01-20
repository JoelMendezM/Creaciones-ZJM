import cartImage from '../../images/logo-carrito-compras.png';
import { useCart } from '../../context/CartContext';

const CardWidget = () => {
  const { cart, totalItemsQuantity } = useCart();

  return (
    <>
      {cart.length === 0 && (
        <div className="buttonCartContainer">
          <h4 className="countingItems">{totalItemsQuantity}</h4>
          <img
            src={cartImage}
            alt="carrito de compras"
            style={{ widht: 30, height: 30, margin: 15, opacity: 0.3 }}
          />
        </div>
      )}
      {cart.length > 0 && (
        <div className="buttonCartContainer">
          <h4 className="countingItems">{totalItemsQuantity}</h4>
          <img
            src={cartImage}
            alt="carrito de compras"
            style={{ widht: 30, height: 30, margin: 15 }}
          />
        </div>
      )}
    </>
  );
};

export default CardWidget;
