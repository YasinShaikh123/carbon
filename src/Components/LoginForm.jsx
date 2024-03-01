import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const LoginForm = ({ 
  userName, 
  setUserName, 
  password, 
  setPassword ,
  regUserName,
  regPassword,
  setRegister
}) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    if (userName === regUserName && password === regPassword) {
      alert("Login Successfull !");
      navigate("/home");
    } else {
      alert("Wrong credentials");
      setRegister(false)
    }
    setUserName("");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div className="inner-login-div">
        <h3 className="fw-bold">EcoBilling Login</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label corbon-black"
          >
            User Name
          </label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            className="form-control p-3 form-input"
            placeholder="Please enter user name"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label corbon-black"
          >
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control p-3 form-input"
            placeholder="Please enter password"
          />
        </div>

        <div className="chekbox">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked={false}
            />
            <label className="form-check-label fs-6" htmlFor="flexCheckChecked">
              Remember me
            </label>
          </div>

          <span className="fs-6">Forgot Passowrd ?</span>
        </div>

        {/* <div className="mb-3"> */}
        <Button
        title="Login"
        />
        {/* </div> */}
      </div>
    </form>
  );
};

export default LoginForm;
