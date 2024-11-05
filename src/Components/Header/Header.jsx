import React, { useEffect, useState } from "react";
import "./Header.css"; // Keep your existing CSS for any additional styling

const Header = () => {
  const [showModel, setShowModel] = useState(false);

  // Function to open the modal
  const openModal = () => setShowModel(true);

  // Function to close the modal
  const closeModal = () => setShowModel(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getInputData = () => {
    console.log({ name, email, password });
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <header className="header bg-light">
        <div className="container-fluid con">
          <div className="d-flex  py-2">
            <ul className="list-inline ulList mb-0">
              <li className="list-inline-item signIn me-4 " onClick={openModal}>
                Sign In /Join Easier
              </li>
              <li className="list-inline-item signIn me-4">Customer care</li>
            </ul>
          </div>
        </div>
      </header>
      {showModel && (
        <div
          className="modal show fade d-block h-75"
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header ">
                <h5 className="modal-title ">Welcome to Easier</h5>
                <button
                  type="button"
                  className=" close "
                  aria-label="Close"
                  onClick={closeModal}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    textAlign: "center",
                    marginLeft: "320px",
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={getInputData}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter username"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="user@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary w-25 mx-5"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary w-25 mx-5"
                    onClick={getInputData}
                    s
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
