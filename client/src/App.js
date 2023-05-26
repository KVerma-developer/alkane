import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./components/Auth/Register";
import Login from "./components/Auth/Login";

function App() {
	const user = localStorage.getItem("token");

	return (
    <>
		<Routes>
      
			{user && <Route path="/" exact element={<Home />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
    </>
	);
}

export default App;

