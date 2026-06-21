import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../utils/api";

export default function Login() {

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await api.post("/auth/login", form);

            localStorage.setItem("token", res.data.token);

            setMessage("Login successful, Redirecting...");
            navigate("/projects")

        } catch (err) {

            setMessage(err.response?.data?.message || "Error");

        }
    };

    return (

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: "#111",
                marginBottom : "150px"
            }}
        >

            <h1
                style={{
                    color: "white",
                    fontSize: "70px",
                    marginBottom: "100px"
                }}
            >
                TaskFlow
            </h1>

            <p style={{ color: "white", marginBottom : "20px"}}>
                {message}
            </p>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                    padding: "20px",
                    background: "#222",
                    borderRadius: "10px",
                    width: "400px",
                    color: "white",
                    marginBottom : "120px"
                }}
            >

                <input
                    name="email"
                    onChange={handleChange}
                    placeholder="email"
                    style={{ padding: "20px" }}
                />

                <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    placeholder="password"
                    style={{ padding: "20px" }}
                />

                <button
                    style={{
                        padding: "20px",
                        cursor: "pointer"
                    }}
                >
                    Login
                </button>

            </form>

        </div>
    );
}

