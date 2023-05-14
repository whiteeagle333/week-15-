// import "./App2.css";
// import { useState, useEffect } from "react";

// const MOCK_API_URL = "https://645f13aa9d35038e2d1caaa0.mockapi.io/user/user";

// function refreshPage() {
//   window.location.reload(false);
// }

// function App2() {
//   const [users, setUsers] = useState([{}]);

//   const [newUserName, setNewUserName] = useState("");
//   const [newUserArtTitle, setNewUserArtTitle] = useState("");
//   const [newUserMedium, setNewUserMedium] = useState("");

//   const [updatedName, setUpdatedName] = useState("");
//   const [updatedArtTitle, setUpdatedArtTitle] = useState("");
//   const [updatedMedium, setUpdatedMedium] = useState("");

//   function getUsers() {
//     fetch(MOCK_API_URL)
//       .then((data) => data.json())
//       .then((data) => setUsers(data));
//   }
//   // rest of the code

//   useEffect(() => {
//     getUsers();
//     console.log(users);
//   }, []);

//   function deleteUser(id) {
//     fetch(`${MOCK_API_URL}/${id}`, {
//       method: "DELETE",
//     }).then(() => getUsers());
//   }
//   function postNewUser(e) {
//     e.preventDefault();

//     fetch(MOCK_API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: newUserName,
//         artTitle: newUserArtTitle,
//         medium: newUserMedium,
//       }),
//     })
//       .then(() => {
//         getUsers();
//         setNewUserName("");
//         setNewUserArtTitle("");
//         setNewUserMedium("");
//       })
//       .catch((error) => console.error(error));
//   }

//   function updateUser(e, userObject) {
//     e.preventDefault();

//     let updatedUserObject = {
//       ...userObject,
//       name: updatedName,
//       artTitle: updatedArtTitle,
//       medium: updatedMedium,
//     };

//     fetch(`${MOCK_API_URL}/${userObject.id}`, {
//       method: "PUT",
//       body: JSON.stringify(updatedUserObject),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then(() => getUsers());
//   }

//   return (
//     <div className="App2">
//       <div className="container-md">
//         <form>
//           <h3>Artist Submission Form</h3>
//           <div className="form-group">
//             <label className="form-label">Name</label>
//             <input
//               className="form-input"
//               onChange={(e) => setNewUserName(e.target.value)}
//             ></input>
//           </div>
//           <div className="form-group">
//             <label className="form-label">Art Title</label>
//             <input
//               className="form-input"
//               onChange={(e) => setNewUserArtTitle(e.target.value)}
//             ></input>
//           </div>
//           <div className="form-group">
//             <label className="form-label">Medium</label>
//             <input
//               className="form-input"
//               onChange={(e) => setNewUserMedium(e.target.value)}
//             ></input>
//           </div>
//           <button onClick={(e) => postNewUser(e)}>Submit</button>
//         </form>
//       </div>

//       {users.map((user, index) => (
//         <div className="usercontainer" key={index}>
//           <div>
//             Name: {user.name} <br />
//             Art Title: {user.artTitle} <br />
//             Medium: {user.medium} <br />
//             <button onClick={() => deleteUser(user.id)}>Delete</button>
//           </div>
//           <form class="update-form">
//             <h3>Artist and Work Update</h3>
//             <label>Update Name</label>
//             <input
//               onChange={(e) => setUpdatedName(e.target.value)}
//             ></input>{" "}
//             <br></br>
//             <label>Update Art Title</label>
//             <input
//               onChange={(e) => setUpdatedArtTitle(e.target.value)}
//             ></input>{" "}
//             <br></br>
//             <label>Update Medium</label>
//             <input
//               onChange={(e) => setUpdatedMedium(e.target.value)}
//             ></input>{" "}
//             <br></br>
//             <button onClick={(e) => updateUser(e, user)}>Update</button>
//           </form>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App2;
