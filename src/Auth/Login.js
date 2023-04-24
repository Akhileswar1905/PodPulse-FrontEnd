import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const res = fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await (await res).json();
    console.log(data.token);
    localStorage.setItem("token", data.token);
  };

  return (
    <div className="form container">
      <div className="form">
        <h1 className="mb-3 mt-3">Login Page</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="username"
              placeholder="Enter Your Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit} type="submit">
            Submit
          </Button>
          <Form.Group className="text-muted mt-3">
            Don't Have An Account? <NavLink to="/signup">SignUp</NavLink>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default Login;
