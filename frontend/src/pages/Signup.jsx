import { useState } from "react";
import api from "../utils/api";
import { Link } from "react-router-dom";

export default function Signup() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (x) => {
        setForm({ ...form, [x.target.name]: x.target.value });
    };

    const handleSubmit = async (x) => {
        x.preventDefault();

        try {
            const res = await api.post("/auth/signup", form);
            alert(res.data.message);
        } catch (err) {
            alert(err.response?.data?.message || "Error");
        }
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "#111",
            flexDirection: "column",
        }}>
            <h1
            style={{
                color: "white",
                fontSize: "48px",
                marginBottom: "100px"
            }}
        >
            Welcome to TaskFlow
            </h1>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    padding: "20px",
                    background: "#222",
                    borderRadius: "10px",
                    width: "500px",
                    color: "white",
                    marginBottom: "60px"
                }}
            >
                <h2>Creat Your Account</h2>

                <input
                    name="name"
                    onChange={handleChange}
                    placeholder="Name"
                    style={{ padding: "20px" }}
                />

                <input
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    style={{ padding: "20px" }}
                />

                <input
                    name="Password"
                    type="password"
                    onChange={handleChange}
                    placeholder="Password"
                    style={{ padding: "20px" }}
                />

                <button style={{ padding: "15px", cursor: "pointer", fontSize : "20px" }}>
                    Signup
                </button>

                <p style={{ marginTop: "10px", fontSize: "14px", color: "white" }}>
                    Have an account?{" "}
                    <Link to="/login" style={{ color: "cyan", textDecoration: "underline" }}>
                    Sign in
                    </Link>
                </p>

              </form>
          </div>
    );
}