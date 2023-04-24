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
    console.log("submitting....");
    const res = fetch("http://127.0.0.1:8000/api/register/", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(await res.data);
    // localStorage.setItem("token", res.token);
    console.log(form);
  };

  return (
    <div className="form container">
      <div className="form">
        <h1 className="mb-3 mt-3">SignUp Page</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="Enter Your Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Enter Your Email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit} type="submit">
            Submit
          </Button>
          <Form.Group className="text-muted mt-3">
            Have An Account? <NavLink to="/login">Login</NavLink>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default Login;
