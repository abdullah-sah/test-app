import "./Button.css";
import { useState } from "react";

const Button = ({ title, color, bg, hoverColor }) => {
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => setIsHover(true);
	const handleMouseLeave = () => setIsHover(false);

	const buttonStyle = {
		color: isHover ? hoverColor : color,
		backgroundColor: bg,
	};

	return (
		<button
			className="button"
			style={buttonStyle}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{title}
		</button>
	);
};

export default Button;
