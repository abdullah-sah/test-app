import "./Navbar.css";
import NavButton from "./NavButton/NavButton";
import Button from "./Button/Button";
import NavItem from "./NavItem/NavItem";

const Navbar = () => {
	// grabbing the css --navbar-font-color variable
	const navbarFontColor = getComputedStyle(
		document.documentElement
	).getPropertyValue("--navbar-font-color");

	return (
		<div className="navbar">
			<div className="directional-arrows">
				<NavButton direction="left" />
				<NavButton direction="right" />
			</div>

			<div className="nav-items-container">
				<NavItem title="Premium" link="" />
				<NavItem title="Support" link="" />
				<NavItem title="Download" link="" />
				<div id="nav-separator"></div>
				<Button
					title="Sign Up"
					color={navbarFontColor}
					bg="transparent"
					hoverColor="white"
				/>
				<Button title="Login" color="black" bg="white" hoverColor="black" />
			</div>
		</div>
	);
};

export default Navbar;
