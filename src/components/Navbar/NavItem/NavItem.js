import "./NavItem.css";

const NavItem = ({ title, link }) => {
	return (
		<div className="nav-item">
			<a href={link}>
				<p>{title}</p>
			</a>
		</div>
	);
};

export default NavItem;
