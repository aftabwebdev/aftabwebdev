import React, { useEffect } from "react";
import profilePic from "../../images/Aftab_10032023.jpg";
import LogoCss from "../../component/LogoCss";

const Home = () => {
	document.title = "Aftab Web Development";

	useEffect(() => {}, []);

	return (
		<div class="page">
			<figure className="profile-picture">
				<img src={profilePic} alt="" />
			</figure>
			<div style={{ textAlign: "center", padding: "20px" }}>
				<h1></h1>
				<h1 className="profile-name"></h1>
				<p style={{ fontSize: "1.2rem" }}>
					Hi, I am Aftab Ahmed, a fullstack web developer. I have four years of
					experience in html, css, sass, javaScript, jQuery, php, laravel, and
					one year experience in React. I am an ambitious problem solver with a
					passion for online businesses, and who would like to join a team of
					like-minded developers. I have much experience of creating logical and
					innovative solutions to complex problems. I am thorough and precise in
					everything I do, and have a keen interest in technology, mobile
					applications and user experience. As someone who takes responsibility
					for my own personal development, I am continually evaluating and
					upgrading my skills so that I stay at the cutting edge of web
					development.
				</p>
			</div>
			<center style={{ marginTop: "50px", fontSize: "min(0, 1.5em)" }}>
				<LogoCss />
			</center>
		</div>
	);
};

export default Home;
