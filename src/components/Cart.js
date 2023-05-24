import { useDispatch, useSelector } from "react-redux";
import { RESTAURANT_CDN_LINK } from "../utils/constants";
import MenuItem from "./MenuItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItemsObject = useSelector((store) => store.cart.items);

  const cartItems = Object.values(cartItemsObject);

  const dispatch = useDispatch();

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        <h1 className="font-bold text-3xl mr-3">Cart</h1>
        <button
          className="border border-black p-1 m-1"
          onClick={() => clearCartItems()}
        >
          Clear cart
        </button>
      </div>
      {cartItems.length > 0 ? (
        cartItems.map((card) => {
          return <MenuItem key={card?.id} card={card} />;
        })
      ) : (
        <h1>No Cart Items added</h1>
      )}
    </div>
  );
};

export default Cart;
