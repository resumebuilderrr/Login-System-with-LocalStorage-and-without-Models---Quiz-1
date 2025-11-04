import React, { useState, useContext } from "react";
import axios from "../api/axiosConfig";
import { validateRegister } from "../validation/regValidation";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [serverErrors, setServerErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setServerErrors(null);

    const { isValid, errors: clientErrors } = validateRegister(form);
    if (!isValid) {
      setErrors(clientErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const resp = await axios.post("/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      if (resp.data.success) {
        localStorage.setItem("token", resp.data.token);
        setUser(resp.data.user);
        navigate("/");
      } else {
        setServerErrors(resp.data);
      }
    } catch (err) {
      if (err.response?.data?.errors) {
        const se = {};
        err.response.data.errors.forEach((e) => {
          se[e.param || "server"] = e.msg;
        });
        setServerErrors(se);
      } else {
        setServerErrors({
          server: err.response?.data?.message || "Server error",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "6rem auto 10rem auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        color: "white",
        border: "1px solid #eee",
        borderRadius: 6,
      }}
    >
      <h2>Create Account</h2>
      <form onSubmit={onSubmit} noValidate>
        <div style={{ margin: "5px" }}>
          <label style={{ paddingRight: "31px" }}>Name</label>
          <input name="name" value={form.name} onChange={onChange} />
          <div style={{ color: "red" }}>
            {errors.name || serverErrors?.name}
          </div>
        </div>

        <div style={{ margin: "5px" }}>
          <label style={{ paddingRight: "35px" }}>Email</label>
          <input name="email" value={form.email} onChange={onChange} />
          <div style={{ color: "red" }}>
            {errors.email || serverErrors?.email}
          </div>
        </div>

        <div style={{ margin: "5px" }}>
          <label style={{ paddingRight: "6px" }}>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
          />
          <div style={{ color: "red" }}>
            {errors.password || serverErrors?.password}
          </div>
        </div>

        <div style={{ margin: "5px" }}>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={onChange}
          />
          <div style={{ color: "red" }}>{errors.confirmPassword}</div>
        </div>

        <button
          className="btn btn-primary"
          type="submit"
          disabled={loading}
          style={{ marginTop: 12 }}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <div style={{ color: "red", marginTop: 8 }}>{serverErrors?.server}</div>
      </form>

      <p style={{ marginTop: 12 }}>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Register;
