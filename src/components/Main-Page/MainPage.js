import CardStrip from "../Card-Strip/CardStrip";
import "./MainPage.css";

const MainPage = () => {
	return (
		<div className="main-page">
			<CardStrip header="Spotify Playlists" numberOfCards={4} />
			<CardStrip header="Focus" numberOfCards={4} />
			<CardStrip header="Mood" numberOfCards={4} />
			<CardStrip header="Popular new releases" numberOfCards={4} />
		</div>
	);
};

export default MainPage;
