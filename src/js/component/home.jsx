import React from 'react';
import Navbar from './navbar';
import Jumbotron from './jumbotron';
import Card from './card';
import Footer from './footer';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


const Home = () => {
	const cardsData = [
		{
			title: 'Racismo',
			text: 'El racismo no tiene lugar en una humanidad que se define por su diversidad',
			imgSrc: "https://images.pexels.com/photos/6403353/pexels-photo-6403353.jpeg?auto=compress&cs=tinysrgb&w=600"
		},
		{
			title: 'Feminismo',
			text: 'El feminismo no busca superioridad, sino igualdad; es el camino hacia una sociedad donde cada persona, sin importar su género, pueda vivir con justicia y dignidad',
			imgSrc: "https://images.pexels.com/photos/12231829/pexels-photo-12231829.jpeg?auto=compress&cs=tinysrgb&w=600"
		},
		{
			title: 'Identidad',
			text: 'Respetar la identidad de género de cada persona es un acto de humanidad y empatía; reconocer y valorar la diversidad nos acerca a una sociedad más inclusiva y justa',
			imgSrc: "https://images.pexels.com/photos/10390895/pexels-photo-10390895.jpeg?auto=compress&cs=tinysrgb&w=600"
		},
		{
			title: 'Libertad de expresion',
			text: 'La libertad de expresión es el pilar de toda sociedad democrática; protegerla garantiza que todas las voces puedan ser escuchadas',
			imgSrc: "https://images.pexels.com/photos/3631711/pexels-photo-3631711.jpeg?auto=compress&cs=tinysrgb&w=600"
		},
	];
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row g-2 row-cols-1 row-cols-lg-4">
					{cardsData.map((card, index) => (
						<Card key={index}
							title={card.title}
							text={card.text}
							imgSrc={card.imgSrc}
						/>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
