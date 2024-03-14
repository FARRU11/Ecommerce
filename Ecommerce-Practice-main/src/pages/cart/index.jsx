import { useSelector, useDispatch } from "react-redux";
import {
  incAtCart,
  decAtCart,
  resetCart,
} from "../../redux/cartAuth/cartAction";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddItem = (index) => {
    dispatch(incAtCart(index));
  };

  const handleRemoveItem = (index) => {
    dispatch(decAtCart(index));
  };

  const handleProceed = () => {
    alert(
      "Order Successfull! It Will Be Delieverd To You As it will be Dispatch"
    );
    dispatch(resetCart());
    navigate("/products");
  };
  let totalPrice = 0;
  return (
    <div className="container-full">
      <h1>CART</h1>

      {cartItems.map((e, index) => {
        const totalProductPrice = e.item.price * e.quantity;
        totalPrice += totalProductPrice;
        return (
          <div className="cart-item" key={index}>
            <img src={e.item.image} alt={e.item.title} />
            <div className="item-details">
              <h1>
                {e.item.title}(${e.item.price})
              </h1>

              <h3>${totalProductPrice}</h3>
              <div className="quantity-controls">
                <h2>{e.quantity}</h2>
                <button onClick={() => handleAddItem(index)}>+</button>
                <button onClick={() => handleRemoveItem(index)}>-</button>
              </div>
            </div>
          </div>
        );
      })}
      <h3>
        The Total Payable Value:{" "}
        <span className="totalPrice">${totalPrice}</span>
      </h3>
      <button className="proceed-button" onClick={handleProceed}>
        Proceed To Checkout
      </button>
    </div>
  );
}

export default Cart;
