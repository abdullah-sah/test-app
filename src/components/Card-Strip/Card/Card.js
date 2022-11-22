import { useState } from "react";
import "./Card.css";
import PlayButton from "../../../assets/images/play-button.png";

const Card = ({ imgSrc, title, content, link }) => {
	const [playButtonClasses, setPlayButtonClasses] = useState(
		"play-button-container hidden"
	);

	const handleMouseEnter = () => {
		setPlayButtonClasses("play-button-container fadeUpInAnimation");
	};

	const handleMouseLeave = () => {
		setPlayButtonClasses("play-button-container hidden");
	};

	return (
		<div className="card">
			<a
				href={link}
				className="card-container"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<img src={imgSrc} className="card-image" alt="An artist" />
				<div className={playButtonClasses}>
					<img
						src={PlayButton}
						alt="Play button"
						className="card-play-button"
					/>
				</div>
				<h3 className="card-title">{title}</h3>
				<p className="card-content">{content}</p>
			</a>
		</div>
	);
};

export default Card;
