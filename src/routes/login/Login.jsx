import "./Login.css";
import { useEffect, useState } from "react";
import * as auth from "../../stores/auth";
import { useNavigate } from "react-router";
import Input from "../../components/input/Input";

function Login() {
  const [login, setLogin] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthorized()) {
      navigate("/main");
    }
  }, []);

  const handleLogin = () => {
    if (login === "") {
      return;
    }
    auth.authorize(login);
    navigate("/main");
    window.location.reload();
  };

  return (
    <>
      <div className="hbox">
        <div className="box">
          <h1>Welome to our site with cats!</h1>
          <span>Just look at them, they are so beautiful and cute!</span>
          <div className="login-input-form">
            <label htmlFor="login-page-input">
              Enter login to continue:
            </label>
            <Input
              id="login-page-input"
              type="text"
              placeholder="Login"
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <button id="login-button" onClick={handleLogin}>
            Continue
          </button>
          <span className="copyright-block">
            &copy; 2025 Site with funny. All rights reserved.
          </span>
        </div>
      </div>
    </>
  );
}

export default Login;
