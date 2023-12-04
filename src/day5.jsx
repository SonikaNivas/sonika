1.CLASS COMPONENT -INSTEAD FUNCTIONAL COMPONENT:

APP.JS
import './App.css';


function App() {
  return (
    <div>
          <h1>Hello Functional component</h1>
          <h2>Hello Everyone welcome to react</h2>
    </div>
  );
};

export default App;
---------------------------------
 2.CONDTIONAL RENDERING CLASS-MY ANS (IN FUNCTION)
APP.JS:
import React,{useState} from 'react';
function App(){
  const[count,setCount]=useState(0);
  const handleAddClick=()=>{
    setCount( count +1);

  }
  const handleSubClick=()=>{
    setCount(count - 1);
  }
  return(
  <div>
    <center>
    <h1>Conditional Rendering:</h1>
     <button onClick={handleSubClick} style={{backgroundColor:'pink',width:'100px',height:'40px',fontSize:'25px'}}>-</button>&emsp;&emsp;
      Count:  {count}
      &emsp;&emsp;<button onClick={handleAddClick}style={{backgroundColor:'green',width:'100px',height:'40px',}}>+</button>&emsp;&emsp;
      </center>
  </div>

  )
}
export default App;
-----------------------------------------------
3. Implementation of Communication between Parent and child Components

CHILD.JSX:
import React from 'react';

const Child = ({ parentCallback }) => {
  const onTrigger = (event) => {
    parentCallback(event.target.myname.value);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onTrigger}>
        <input type="text" name="myname" placeholder="Enter Name" />
        <br /><br />
        <input type="submit" value="Submit" />
        <br /><br />
      </form>
    </div>
  );
};

export default Child;

PARENT.JSX:
import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [name, setName] = useState("");

  const handleCallback = (childData) => {
    setName(childData);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Child and Parent Components</h1>

      <Child parentCallback={handleCallback} />

      {name}
    </div>
  );
};

export default Parent;


APP.JS:
import React from 'react';
import Parent from './Parent';
export default function App(){
    return(
        <div>
            <Parent/>
        </div>
    )
}

-------------------------------------------------
4.CARD QUESTION:
APP.JS:
//PACKAGES TO BE INSTALLED:npm install @material/card ,npm install @mui/material

import React from 'react';
import Card from '@mui/material/Card';
function App(){
  return(
  <div>
    <Card style={{height:'700px',width:'600px'}}>
      <div><center>
        <img style={{height:'300px'}} src="https://media.istockphoto.com/id/1436453674/photo/portrait-university-student-black-man-and-graduation-celebration-event-and-achievement-of.jpg?s=612x612&w=is&k=20&c=3Rvji7VSia1-2YcsdR8SKRTtJtrBNiy8oDMlqsfJWzM=" alt=""></img>
        </center>
      </div>
      <div><center>
        <h1>SKCET</h1>
        <p>college infrastructures include classrooms, libraries, laboratories, and administrative buildings that collectively form the physical foundation of an educational institution. Classrooms serve as spaces for lectures and discussions, libraries house extensive resources for research and study, and laboratories facilitate hands-on experiments. Administrative buildings manage various functions like admissions and student services. Additionally, colleges often have recreational areas, sports facilities, and student centers, fostering a holistic learning environment. These infrastructures play a crucial role in supporting academic pursuits, extracurricular activities, and overall student well-being within the college community.</p>
        </center>
      </div>
      <button style={{height:'30px',width:'90px'}}>SHARE</button>&emsp;&emsp;
      <button style={{height:'30px',width:'120px'}}>LEARN MORE</button>&emsp;&emsp;
    </Card>
  </div>

  )
}
export default App;
-------------------------------------------------------------------------------
5.NAVIGATION BAR /APP BAR
(DO NECESSARY M0DIFICATIONS)
//PACKAGES TO BE INSTALLED:npm install @mui/material

APP.JS
import React, { useState } from 'react';
import { AppBar, Menu, MenuItem } from '@mui/material';

function App() {
  const [course, setCourse] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const [profile, setProfile] = useState(false);

  const handleCourse = () => {
    setCourse(!course);
  };
  const handleSchedule = () => {
    setSchedule(!schedule);
  };
  const handleProfile= () => {
    setProfile(!profile);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'lightblue',display: 'flex',height:'60px' }}>
              <div style={{ display: 'flex'}}>
                <p>
                SKCET</p> &emsp; <p>PRODUCTS</p> &emsp; <p>BLOG</p>

      <p><button  onClick={handleCourse} style={{width:'100px',backgroundColor:'lightblue',height:'30px',marginLeft:'900px' }}>
        Courses
      </button>
      {course && (
        <Menu style={{marginLeft:'900px'}} open={course} onClose={() => setCourse(false)} >
          <MenuItem>Math</MenuItem>
          <MenuItem>Science</MenuItem>
          <MenuItem>History</MenuItem>
        </Menu>
      )}
      <button onClick={handleSchedule}style={{width:'100px',height:'30px',backgroundColor:'lightblue'}}>Schedule</button>
      {schedule && (
        <Menu open={schedule} onClose={() => setSchedule(false)} style={{marginLeft:'800px'}}>
          <MenuItem>Math: 10 am</MenuItem>
          <MenuItem>Science: 1 pm</MenuItem>
          <MenuItem>History: 3 pm</MenuItem>
        </Menu>
      )
    }
      <button onClick={handleProfile}style={{width:'100px',height:'30px',backgroundColor:'lightblue'}}>Profile</button></p>
      {profile && (
        <Menu open={profile} onClose={() => setProfile(false)} style={{marginLeft:'700px'}}>
          <MenuItem>Account</MenuItem>
          <MenuItem>DashBoard</MenuItem>
          <MenuItem>Exttra credits</MenuItem>
        </Menu>
      )
    }
      </div>
    </AppBar>
  );
}

export default App;
---------------------------------------------------------------
6.HTTP REQUEST
APP.JS:
import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setUser(res))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  console.log(user);

  return (
    <div >
      {user.map(u => (
        <div key={u.id}>{u.name}, {u.id}, {u.email}</div>
      ))}
    </div>
  );
}
-------------------------------------------------------------------
7.DROPDOWN MENU
APP.JS:
import React from 'react';
import './Dropdown.css';
export default function App() { 

  return (
  <div className="App" >
    <select className="dropdown-container">
    <option className="dropdown-input" value="fruit">Fruit</option>
    <option className="dropdown-input" value="vegetable">Vegetable</option>
    <option className="dropdown-input" value="meat">Meat</option>
    <option className="dropdown-input" value="Groceries">Groceries</option>
    <option className="dropdown-input" value="Snacks">Snacks</option>
    <option className="dropdown-input" value="Footwears">Footwears</option>
    </select>
  </div>
  );
  }


DROPDOWN.CSS:
.dropdown-container {text-align: left;
    border: 2px solid rgb(57, 19, 196);position: relative;
    border-radius: 5px;
    }
    .dropdown-input {padding: 20px; display: flex;
    align-items: center;
    justify-content: space-between;user-select: none;
    }
--------------------------------------------------------------------

8.IMPLEMENTATION OF ROUTING IN REACT

PACKAGES TO BE INSTALLED:npm install react-router-dom@latest

Mainpage.jsx:

import React from 'react';
import { Link } from 'react-router-dom';

const Mainpage = () => {
  return (
    <>
      <div>
        <h1>This is Mainpage</h1>
        <Link to="/returnpage" >
          Next Page
        </Link>
      </div>
    </>
  );
};

export default Mainpage;

Returnpage.jsx:

import React from 'react';
import { Link } from 'react-router-dom';

const Returnpage = () => {
  return (
    <>
      <div>
        <h1>This is Next Page</h1>
        <Link to="/mainpage" >
          Back to mainpage
        </Link>
      </div>
    </>
  );
};

export default Returnpage;

App.js:

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './Mainpage';
import Returnpage from './Returnpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/returnpage" element={<Returnpage />} />
      </Routes>
    </Router>
  );
}

export default App;

--------------------------------------------------------------------
9.FORM VALIDATION:
  
APP.JS:
import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.username || !formData.email || !formData.password) {
      alert('Please fill in all fields.');
    } else if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.');
    } else {
      alert('Form submitted');
      // You can perform further actions here, like sending data to a server.
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label >Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label >Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label >Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
-----------------------------------------------------------
10. Fetch and Display Users with Material-UI Table

App.jsx:
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
       }
        catch (error) {
        console.error('Error fetching user data:', error);
      }
      };
      fetchData(); }, []); 

      return (
            <TableContainer component={Paper}>
               <Table>
                  <TableHead>
                     <TableRow>
                        <TableCell>User ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                     {users.map((user) => (
                        <TableRow key={user.id}>
                           <TableCell>{user.id}</TableCell>
                           <TableCell>{user.name}</TableCell>
                           <TableCell>{user.email}</TableCell>
                           <TableCell>{user.phone}</TableCell>
                        </TableRow>
))}
</TableBody>
</Table>
</TableContainer>
);
}
export default App;
-----------------------------------------------------------
13. Ref Hooks and Forms

app.js:
import React, { useRef } from 'react';

function App() {
  const input1 = useRef(null);
  const input2 = useRef(null);

  const handleSubmit = () => {
    console.log(`Input 1: '${input1.current.value}'`);
    console.log(`Input 2: '${input2.current.value}'`);
  };

  return (
    <div>
      <label>
        Input 1:
        <input type="text" ref={input1} />
      </label>
      <br />
      <label>
        Input 2:
        <input type="text" ref={input2} />
      </label>
      <br />
      
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;

-----------------------------------------------------------
14. Effect Hooks and Component Lifecycle
 ans:
APP.JS:
import React, { useEffect } from 'react';
function App (){
         useEffect(() => {
         console.log('Component is mounted');
         return () => {
               console.log('Component will unmount');
         };
         }, []); 
         useEffect(() => {
            console.log('Component is updated');
          });
return (<div>Component Lifecycle Example</div>);
};
export default App;
//SHOW RESULT IN INSPECT->CONSOLE
-----------------------------------------------------------
15.Controlled Components and Forms
ANS:
QUES NO :9
-----------------------------------------------------------
17 . IMPLEMENTATION OD USESTATE HOOK-FORM VALIDATION:
 ANS:
QUES NO :9
-----------------------------------------------------------
18.Error Boundary
app.js:
import React, { useState, useEffect } from 'react';

const App = () => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    const handleError = (error, errorInfo) => {
      setHasError(true);
      setError(error);
      setErrorInfo(errorInfo);
    };

    if (hasError) {
      setHasError(false);
      setError(null);
      setErrorInfo(null);
    }

    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, [hasError]);

  const throwError = () => {
    throw new Error('This is a deliberate error for demonstration purposes');
  };

  if (hasError) {
    return (
      <div>
        <h2>Something went wrong!</h2>
        <p>{error.toString()}</p>
        <div>{errorInfo.componentStack}</div>
      </div>
    );
  }

  return (
    <div>
      <h1>Example Component</h1>
      <button onClick={throwError}>Click me to throw an error</button>
    </div>
  );
};

export default App;

---------------------------------------------------------------
19. Implementation of useState

APP.JS:
import React, { useState } from 'react';
const App = () => {
const [count, setCount] = useState(0);
const increment = () => {
setCount(count + 1);
};
const decrement = () => {
setCount(count - 1);
};

const reset = () => {
setCount(0);
};
return (
<div>
<p>Count: {count}</p>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
<button onClick={reset}>Reset</button>
</div>
);
};
export default App;
-----------------------------------------------------------
20.Dynamic Theming with React Context and useContext


APP.JS:
import React, { createContext, useState } from "react";
import "./App.css"; 

const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider >
      <div className={`app ${theme}`} >
          <h1>Dynamic Theming Example</h1>
          <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

APP.CSS:
.app.light {
  background-color: #fff;
  color: #000;
}

/* Dark Theme */
.app.dark {
  background-color: #333;
  color: #fff;
}
-----------------------------------------------------------
22.Optimize Component Rendering with useMemo

app.js:
import React, { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  
  const calculation = useMemo(() => {
    console.log("Calculating...");
    let result = count;
    for (let i = 0; i < 1000000000; i++) {
      result += 1;
    }
    return result;
  }, [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        <p>{calculation}</p>
      </div>
    </div>
  );
};

export default App;
--------------------------------------------------------------
