import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (item, amount) => {},
});

export function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items];

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({
        id: action.item.id,
        name: action.item.name,
        price: action.item.price,
        quantity: +1,
      });
    }
    return { ...state, items: updatedItems };
  }
  if (action.type === 'UPDATE_ITEM') {
    const updatedItems = [...state.items];
    const updatedCartItemsIndex = updatedItems.findIndex(
      (item) => item.id === action.payloads.item.id
    );
    const updatedItem = {
      ...updatedItems[updatedCartItemsIndex],
    };

    updatedItem.quantity += action.payloads.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedCartItemsIndex, 1);
    } else {
      updatedItems[updatedCartItemsIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
  return {
    items: [],
  };
}

export function CartContextProvider({ children }) {
  const [cartState, dispatchCartState] = useReducer(cartReducer, {
    items: [],
  });

  function handleAddItemToCart(item) {
    dispatchCartState({
      type: 'ADD_ITEM',
      item,
    });
  }

  function handleUpdateCartItemQuantity(item, amount) {
    dispatchCartState({
      type: 'UPDATE_ITEM',
      payloads: {
        item,
        amount,
      },
    });
  }

  const ctxValue = {
    items: cartState.items,
    addItem: handleAddItemToCart,
    removeItem: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

export default CartContext;
