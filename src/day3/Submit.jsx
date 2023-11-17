import React, { useState } from "react";

const TMessage = () => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can use the 'name' state here as needed
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userName">Name:</label>
      <input
        type="text"
        id="userName"
        value={name}
        onChange={handleNameChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default TMessage;
