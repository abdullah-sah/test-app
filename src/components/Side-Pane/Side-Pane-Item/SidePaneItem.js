import "./SidePaneItem.css";

const SidePaneItem = ({ imgSrc, title, alt, link }) => {
	return (
		<div className="side-pane-item">
			<a href={link} class="side-pane-link">
				<img src={imgSrc} alt={alt} />
				<header>{title}</header>
			</a>
		</div>
	);
};

export default SidePaneItem;
