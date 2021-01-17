import React from "react";
import styled from "styled-components";

export default function AboutMe() {
	return (
		<AboutMeSection>
			<img
				src='https://profile-images.xing.com/images/c84a69278abeff4d24088560acefdbb3-4/markus-g%C3%BCrtner.1024x1024.jpg'
				alt='picture_of_myself'
			></img>
		</AboutMeSection>
	);
}

const AboutMeSection = styled.section`
	padding-top: 6vh;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background: rgb(98, 98, 98);
	background: radial-gradient(
		circle,
		rgba(98, 98, 98, 1) 0%,
		rgba(143, 255, 225, 1) 100%
	);

	img {
		width: 400px;
		border-radius: 200px;
	}
`;
