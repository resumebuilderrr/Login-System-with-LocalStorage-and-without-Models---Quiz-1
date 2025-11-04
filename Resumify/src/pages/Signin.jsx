import React, { useState, useContext } from "react";
import axios from "../api/axiosConfig"; // ✅ Make sure the file exists
import { validateLogin } from "../validation/loginValidation"; // ✅ validation function
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext"; // ✅ context

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setServerError(null);

    const { isValid, errors: clientErrors } = validateLogin(form);
    if (!isValid) {
      setErrors(clientErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const resp = await axios.post("/auth/login", form);
      if (resp.data.success) {
        localStorage.setItem("token", resp.data.token);
        setUser(resp.data.user);
        navigate("/");
      } else {
        setServerError("Invalid response");
      }
    } catch (err) {
      if (err.response?.data?.errors) {
        setServerError(
          err.response.data.errors[0].msg || "Invalid credentials"
        );
      } else {
        setServerError(err.response?.data?.message || "Server error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "6rem auto 12rem auto",
        padding: 20,
        color: "white",
        border: "1px solid #eee",
        borderRadius: 6,
      }}
    >
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div style={{ margin: "5px" }}>
          <label style={{ paddingRight: "35px" }}>Email</label>
          <input name="email" value={form.email} onChange={onChange} />
          <div style={{ color: "red" }}>{errors.email}</div>
        </div>

        <div style={{ margin: "5px" }}>
          <label style={{ paddingRight: "6px" }}>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
          />
          <div style={{ color: "red" }}>{errors.password}</div>
        </div>

        <button
          className="btn btn-primary"
          type="submit"
          disabled={loading}
          style={{ marginTop: 12 }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div style={{ color: "red", marginTop: 8 }}>{serverError}</div>
      </form>

      <p style={{ marginTop: 12 }}>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default Login;
