import React from "react";

const Home = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div >
			<nav >
				<h1>fakebook</h1>
				<button  onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Home;