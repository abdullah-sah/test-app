import "./NavButton.css";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";

const NavButton = ({ direction }) => {
	const imgSrc = direction === "left" ? leftArrow : rightArrow;
	return (
		<div className="nav-button">
			<img src={imgSrc} alt="This is some alt text" />
		</div>
	);
};

export default NavButton;
