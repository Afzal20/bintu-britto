

import React from 'react';

const CartItem = ({ item, updateQuantity }) => {
  return (
    <div className="cart-item">
      <p>{item.name}</p>
      <p>{item.price}৳</p>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
      />
      <p>{item.price * item.quantity}৳</p>
    </div>
  );
};

export default CartItem;
