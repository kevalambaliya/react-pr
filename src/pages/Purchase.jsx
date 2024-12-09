import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get } from '../redux/Action';

const Purchase = () => {
  const dispatch = useDispatch();
 

  useEffect(()=>{
    dispatch(get());
    
  },[dispatch]);

  const {apidata} = useSelector((store)=> store);
  console.log("with data",apidata);
  

  return (
    <div>
    Purchase
    {apidata && apidata.length > 0 ? (
      apidata.map((item, id) => (
        <div key={id}>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
        </div>
      ))
    ) : (
      <h2>No data available</h2>
    )}
  </div>
  )
}

export default Purchase




// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTodo, get, removeTodo, toggleTodo } from "./redux/Action";
// import "./Home.css";

// const App = () => {
//   const [task, setTask] = useState("");
//   const dispatch = useDispatch();

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   // const todo = {
//   //   //   task: task,
//   //   //   isCompleted: false,
//   //   //   id: Date.now(),
//   //   // };
//   //   // dispatch(addTodo(todo));
//   // };

//   useEffect(() => {
//     dispatch(get());
//   }, []);

//   const { todos } = useSelector((store) => store);
//   console.log(todos);

//   return (
//     <div className="app-background">
//       <div className="white-box">
//         {/* <form onSubmit={handleSubmit}>
//           <div className="input-wrapper">
//             <input
//               type="text"
//               placeholder="Enter..."
//               value={task}
//               onChange={(e) => setTask(e.target.value)}
//               className="todo-input"
//             />
//             <input type="submit" className="submit-button" />
//           </div>
//         </form> */}
//         <hr />
//         {
//           todos.map((item, id) => (
//             <div key={id} className="todo-item">
//               <h2 className="todo-title">{item.title}</h2>
//               <p className="todo-description">{item.description}</p>
//               <p className="todo-price"><strong>Price:</strong> ${item.price}</p>
//               <img src={item.image} alt={item.title} className="todo-image" />
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   );
// };

// export default App;
