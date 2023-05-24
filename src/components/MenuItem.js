import { addItem, deleteItem } from "../utils/cartSlice";
import { RESTAURANT_CDN_LINK } from "../utils/constants";
import { useDispatch } from "react-redux";

const MenuItem = ({ card, isAddButton }) => {
  const { imageId, name, count } = card;
  const dispatch = useDispatch();
  const addItemToCart = (card) => {
    dispatch(addItem(card));
  };

  const deleteItemFromCart = (card) => {
    dispatch(deleteItem(card));
  };
  return (
    <div className="m-5 p-2 border border-black w-4/5 flex">
      <img className="w-44 rounded-lg" src={RESTAURANT_CDN_LINK + imageId} />
      <div className="p-2">
        <h1 className="text-xl font-bold">{name}</h1>
        {isAddButton && (
          <button
            className="border border-black p-1 w-20 m-1 rounded-md"
            onClick={() => addItemToCart(card)}
          >
            Add
          </button>
        )}
        {!isAddButton && (
          <div className="items-center my-2">
            <button
              className="border border-black w-5"
              onClick={() => deleteItemFromCart(card)}
            >
              -
            </button>
            <span className="mx-3">{count}</span>
            <button
              className="border border-black w-5"
              onClick={() => addItemToCart(card)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
