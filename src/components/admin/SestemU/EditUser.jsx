import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from '../Navbar';
import Header from '../Header';
export default function ListUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [inputs, setInputs] = useState({});

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios.get(`http://localhost/api_breef6/api-user/user/${id}`).then(function (response) {
      // console.log(response.data);
      setInputs(response.data);
    });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://localhost/api_breef6/api-user/user/${id}/edit`, inputs).then(function (response) {
      // console.log(response.data);
      navigate("/");
    });
  };

  return (
    <div>
    <Header/>
    <Navbar />
    <div className="container " style={{marginRight: "10px" , marginTop: "100px" ,paddingLeft: "40px"   }}   >
      <h1 className="text-center">Edit User</h1>
      <form onSubmit={handleSubmit} >
        <div className="row justify-content-center">
          <div className="col-lg-8"   >
            <table cellSpacing="10" className="table table-striped table-info border rounded-table  "   >
              <tbody  >

              <tr>
                  <th>
                    <label>Email:</label>
                  </th>
                  <td className="form-group">
                    <input type="email" className="form-control" name="email" onChange={handleChange} />
                  </td>
                </tr>

                <tr>
                  <th>
                    <label>Mobile:</label>
                  </th>
                  <td className="form-group">
                    <input type="text" className="form-control" name="phone" onChange={handleChange} />
                  </td>
                </tr>

                <tr>
                  <th>
                    <label>Password:</label>
                  </th>
                  <td className="form-group">
                    <input type="password" className="form-control" name="password" onChange={handleChange} />
                  </td>
                </tr>

                <tr>
                  <th>
                    <label>Name:</label>
                  </th>
                  <td className="form-group">
                    <input type="text" className="form-control" name="name" onChange={handleChange} />
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" align="right">
                    <button className="btn btn-primary" type="submit">Save</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
    </div>
    
  );
}

