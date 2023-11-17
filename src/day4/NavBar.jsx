const Navbar = ({ category, handleClick }) => {
    return (
      <nav>
        {category.map((item, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-black m-4 text-white font-medium rounded-lg"
            onClick={() => {
              handleClick(index);
              console.log(index);
            }}
          >
            {item.title}
          </button>
        ))}
      </nav>
    );
  };
  
  export default Navbar;