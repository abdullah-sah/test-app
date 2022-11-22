import "./CardStrip.css";
import Card from "./Card/Card";

const CardStrip = () => {
	const loremContent =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id vestibulum tellus, non dapibus nunc.";

	return (
		<>
			{/* Empty tag is a react fragment (temp dummy element, disappears later) */}
			<h3 className="card-strip-header">Spotify Playlists</h3>
			<div className="card-strip">
				<Card
					imgSrc="https://i.scdn.co/image/ab67706f00000002b9c1ff6dac384a87747d5f48"
					title="Title"
					content={loremContent}
					link="#"
				/>
				<Card
					imgSrc="https://i.scdn.co/image/ab67706f00000002b9c1ff6dac384a87747d5f48"
					title="Title"
					content={loremContent}
					link="#"
				/>
				<Card
					imgSrc="https://i.scdn.co/image/ab67706f00000002b9c1ff6dac384a87747d5f48"
					title="Title"
					content={loremContent}
					link="#"
				/>
				<Card
					imgSrc="https://i.scdn.co/image/ab67706f00000002b9c1ff6dac384a87747d5f48"
					title="Title"
					content={loremContent}
					link="#"
				/>
			</div>
		</>
	);
};

export default CardStrip;
