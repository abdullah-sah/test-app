import "./CardStrip.css";
import Card from "./Card/Card";

const CardStrip = ({ header, numberOfCards }) => {
	const loremContent =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id vestibulum tellus, non dapibus nunc.";
	const imgSrc =
		"https://i.scdn.co/image/ab67706f00000002b9c1ff6dac384a87747d5f48";

	const prepCards = (num) => {
		let arr = [];
		for (let i = 0; i < num; i++) {
			arr.push(
				<Card
					key={i}
					imgSrc={imgSrc}
					title="Title"
					content={loremContent}
					link="#"
				/>
			);
		}
		return arr;
	};

	return (
		<>
			{/* Empty tag is a react fragment (temp dummy element, disappears later) */}
			<h3 className="card-strip-header">{header}</h3>
			<div className="card-strip">
				{prepCards(numberOfCards).map((value) => value)}
			</div>
		</>
	);
};

export default CardStrip;
