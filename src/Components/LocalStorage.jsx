import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userDetail, setuserDetail] = useState({
    username: " ",
    email: " ",
    mobile: " ",
    gender: " ",
    city: " ",
    address: " ",
    dob: " ",
  });

  const getinputdata = (e) => {
    const { name, value } = e.target;
    setuserDetail({
      ...userDetail,
      [name]: value,
    });
  };

  function userData() {
    let existingUsers = JSON.parse(localStorage.getItem("user")) || []; // Get existing users or an empty array
    existingUsers.push(userDetail); // Add the new user detail to the array
    localStorage.setItem("user", JSON.stringify(existingUsers)); // Save the updated array back to localStorage
  }

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("user")) || [];
    setuserDetail(storedUsers); // Load data from localStorage into state
  }, []);

  const storeData = JSON.parse(localStorage.getItem("user")) || [];
  // console.log(storeData);

  return (
    <>
      <div className="container">
        <div className="main">
          <h2>Registration Form</h2>
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={getinputdata}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={getinputdata}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                onChange={getinputdata}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                type="select"
                onChange={getinputdata}
                required
              >
                <option value="">-----</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={getinputdata}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={getinputdata}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                onChange={getinputdata}
                required
              />
            </div>
            <div className="form-group">
              <button type="button" onClick={userData}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="table">
        <table border={2}>
          <tr>
            <th>username</th>
            <th>email</th>
            <th>phone</th>
            <th>gender</th>
            <th>city</th>
            <th>address</th>
            <th>d.o.b</th>
          </tr>

          <tbody>
            {storeData.map((item) => (
              <tr>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.gender}</td>
                <td>{item.city}</td>
                <td>{item.address}</td>
                <td>{item.dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
