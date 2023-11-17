const Menu = ({ activeCategory, handleAddToCart }) => {
    return (
      <div className="px-6">
        <h1 className="text-2xl font-bold">{activeCategory.title}</h1>
        {activeCategory.items.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-4">
            <p>{item.name}</p>
            <p>$ {item.price}</p>
            <button
              className="bg-green-500 px-3 py-1 rounded-lg font-medium"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Menu;