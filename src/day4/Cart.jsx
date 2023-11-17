const Cart = ({ products }) => {
    return (
      <div className="px-6">
        <button className="flex gap-x-2 py-2 bg-red-500 rounded-lg px-4">
          <h1 className="font-bold">Cart</h1>
        </button>
        <ul>
          {products.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Cart;