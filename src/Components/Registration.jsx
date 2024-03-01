import React from "react";
import Button from "./Button";

const Registration = ({
  regUserName,
  setRegUserName,
  regPassword,
  setRegPassword,
  regEmail,
  setRegEmail,
  setRegister,
}) => {
  const handleRegister = (e) => {
    e.preventDefault()
    if (regUserName === "" && regPassword === "" && regEmail === "") {
      alert('Please enter details.')
    }else{
    setRegister(true);
    }
  };

  return (
    <form
    onSubmit={handleRegister}
    >
      <div className="inner-login-div">
        <h3 className="fw-bold">Register with EcoBilling</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label  corbon-black"
          >
            Email Address
          </label>
          <input
            value={regEmail}
            onChange={(e) => setRegEmail(e.target.value)}
            type="email"
            className="form-control p-3 form-input"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label corbon-black"
          >
            User Name
          </label>
          <input
            value={regUserName}
            onChange={(e) => setRegUserName(e.target.value)}
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
            value={regPassword}
            onChange={(e) => setRegPassword(e.target.value)}
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

        <Button 
        title="Register" />
      </div>
    </form>
  );
};

export default Registration;
