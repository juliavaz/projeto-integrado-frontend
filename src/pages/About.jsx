import React from 'react';
import { Carousel } from 'react-bootstrap';

function About() {
	return (
		<>
		<h1>Sobre</h1>
		<hr />
		<Carousel variant="dark">
			<Carousel.Item interval={5000}>
				<center>
					<img className="d-block w-50 borderRadiusImportant"
					src="https://avatars.githubusercontent.com/u/9681303?v=4/text=Angela Oliveira"
					height="480px"
					border-radius="10px"
					alt="Angela Oliveira" />	
				</center>
				<Carousel.Caption>
					<span style={{ color: 'white' }}><h3>Angela Oliveira</h3></span>
					<span style={{ color: 'white' }}><p>Ideas, Planning & Feedback 💻</p></span>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={5000}>
				<center>
					<img className="d-block w-50 borderRadiusImportant"
					src="https://avatars.githubusercontent.com/u/64426814?v=4/text=Carlos Daniel"
					height="480px"
					alt="Carlos Daniel" />	
				</center>
				<Carousel.Caption>
					<span style={{ color: 'white' }}><h3>Carlos Daniel</h3></span>
					<span style={{ color: 'white' }}><p>Ideas, Planning & Feedback 💻</p></span>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={5000}>
				<center>
					<img className="d-block w-50 borderRadiusImportant"
					src="https://avatars.githubusercontent.com/u/50247060?v=4/text=Júlia Vaz"
					height="480px"
					alt="Júlia Vaz" />	
				</center>
				<Carousel.Caption>
					<span style={{ color: 'white' }}><h3>Júlia Vaz</h3></span>
					<span style={{ color: 'white' }}><p>Ideas, Planning & Feedback 💻</p></span>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={5000}>
				<center>
					<img className="d-block w-50 borderRadiusImportant"
					src="https://avatars.githubusercontent.com/u/14020366?v=4/text=Leandro Faria"
					height="480px"
					alt="Leandro Faria" />	
				</center>
				<Carousel.Caption>
					<span style={{ color: 'white' }}><h3>Leandro Faria</h3></span>
					<span style={{ color: 'white' }}><p>Ideas, Planning & Feedback 💻</p></span>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
		</>
	);
}

export default About;
