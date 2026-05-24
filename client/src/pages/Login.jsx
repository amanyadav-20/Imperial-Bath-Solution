import { useState } from "react";
import { authApi } from "../api/http";

const Login = () => {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      const payload =
        mode === "signup"
          ? form
          : { email: form.email, password: form.password };
      const response =
        mode === "signup" ? await authApi.signup(payload) : await authApi.login(payload);

      localStorage.setItem("token", response.data.token);
      setMessage(`${mode === "signup" ? "Signup" : "Login"} successful.`);
    } catch (apiError) {
      setError(apiError.response?.data?.message || "Authentication failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section auth-page">
      <div className="auth-card">
        <span className="eyebrow">Account</span>
        <h1>{mode === "signup" ? "Create account" : "Login"}</h1>
        <form className="form" onSubmit={handleSubmit}>
          {mode === "signup" && (
            <label>
              Name
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>
          )}
          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>
          {error && <p className="form__error">{error}</p>}
          {message && <p className="form__success">{message}</p>}
          <button className="btn btn--primary btn--full" disabled={isLoading}>
            {isLoading ? "Please wait..." : mode === "signup" ? "Sign up" : "Login"}
          </button>
        </form>
        <button
          className="auth-card__switch"
          onClick={() => setMode((value) => (value === "login" ? "signup" : "login"))}
        >
          {mode === "login" ? "Need an account? Sign up" : "Already have an account? Login"}
        </button>
      </div>
    </section>
  );
};

export default Login;