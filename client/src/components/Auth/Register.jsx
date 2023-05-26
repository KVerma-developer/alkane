import React,{ useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
	const [data, setData] = useState({
		
		name: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8000/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div >
			<div >
				<div >
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" >
							Sing in
						</button>
					</Link>
				</div>
				<div >
					<form  onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder=" Name"
							name="name"
							onChange={handleChange}
							value={data.name}
							required
							
						/>
						
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
						
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
						
						/>
						{error && <div className={""}>{error}</div>}
						<button type="submit" >
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
