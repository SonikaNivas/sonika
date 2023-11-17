import React from "react";

const Profile = () => {
  return (
    <div>
      <center>
        <h1>USER DETAILS</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label for="name">Name: &emsp;</label>
        <input id="name" type="box" placeholder="Name"></input>
        <br></br>
        <br></br>
        <label for="phone">Phone: &emsp;</label>
        <input id="phone" type="box" placeholder="Phone"></input>
        <br></br>
        <br></br>
        <label for="mail">Email Id: &emsp;</label>
        <input id="mail" type="box" placeholder="Email ID"></input>
        <br></br>
        <br></br>
        <label for="na">Password: &emsp;</label>
        <input id="na" type="box" placeholder="Password"></input>
        <br></br>
        <br></br>
        <button>Submit</button>
      </center>
    </div>
  );
};

export default Profile;


