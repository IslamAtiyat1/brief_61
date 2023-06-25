import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Footer from '../Footer';
import Navbar from '../Navbar';
import Header from '../Header';

export default function ListUser() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("http://localhost/api_breef6/api-user/users").then(function (response) {
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios.delete(`http://localhost/api_breef6/api-user/user/${id}/delete`).then(function (response) {
      setMessage(response.data.message);
      getUsers();
    });
  };

  return (
    
     
      
      <div >
        <Header/>
      <Navbar />
      <div className="container " style={{ marginTop: "100px" ,paddingLeft: "30px"   }}   >
      {message && <p className=" alert  alert-info"   >{message}</p>} 
      <Link to={`/CreateUser`} >
                  <button  className="btn btn-info" >Create</button>
                </Link>
      <table className="table table-info
      ">

        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>phone</th>
            <th>Password</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => (
            <tr key={key}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.password}</td>
              <td>{user.name}</td>

              <td>
                <Link to={`/Edit/${user.id}/User`} style={{ marginRight: "10px" }}>
                  <button style={{ background: "grey", color: "white"  ,  borderRadius:"5px"   }}>Edit</button>
                </Link>

                <button onClick={() => deleteUser(user.id)} style={{ background: "red", color: "white"  , borderRadius:"5px"    }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    
  );
}
