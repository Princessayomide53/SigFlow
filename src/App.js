import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

function App() {
  // const { toasts, handlers } = useToaster();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [error, setError] = useState(null);
  async function handleLogin(details) {
    const email = details.email;
    const password = details.password;
    if (
      email === "shalom.111@gmail.com" &&
      password === "shalom.111@gmail.com"
    ) {
      try {
        const response = await fetch(
          "https://sig-staging-api-a4c37da3d933.herokuapp.com/auth/login",
          {
            method: "Post",
            body: JSON.stringify({
              email: "shalom.111@gmail.com",
              password: "shalom.111@gmail.com",
              // successfullyLogin: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setIsLoggedIn(true);
          toast.success("Successfully Signed In");
        } else {
          toast.error("Login request failed");
        }
      } catch (err) {
        toast.error("An error occurred while processing your request.");
      }
    } else {
      // Show an error toast if the entered credentials do not match
      toast.error("Invalid Email or Password");
    }
  }
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <Dashboard />
              ) : (
                <>
                  <Navigate to="/" />
                </>
              )
            }
          />
        </Routes>
      </Router>
      {/* {error ? toast.error("Wrong Credentials") : ""} */}
      {/* <Dashboard /> */}
    </>
  );
}

export default App;
