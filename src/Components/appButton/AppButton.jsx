const AppButton = (props) => {
    return (
      // <button className={`px-4 py-2 bg-${props.color}-500 rounded-lg text-`}>
      //   {props.children}
      // </button>4
      <>
        <button style={{ display: "block", backgroundColor: "red" }}>
          Increase
        </button>
        <button>Decrease</button>
      </>
    );
  };
  
  export default AppButton;