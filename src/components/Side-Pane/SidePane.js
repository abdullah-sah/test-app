// stylesheet
import "./SidePane.css";

// functional component
import SidePaneItem from "./Side-Pane-Item/SidePaneItem";

// icons
import searchIcon from "../../assets/images/search.png";
import homeIcon from "../../assets/images/home.png";
import spotifyLogo from "../../assets/images/spotify-logo.png";
import musicLibraryIcon from "../../assets/images/music-library.png";
import createPlaylistIcon from "../../assets/images/create-playlist.png";
import likedSongsIcon from "../../assets/images/liked-songs.png";

const SidePane = () => {
	// alt texts for images
	const searchImageAlt = "An icon of a magnifying glass";
	const homeImageAlt = "An icon of a house";
	const spotifyLogoAlt = "Spotify brand logo";
	const musicLibraryAlt = "An icon of a music library";
	const createPlaylistAlt = "An icon of a playlist";
	const likedSongsAlt = "An icon for liked songs";

	return (
		<div className="side-pane">
			{/* main spotify logo */}
			<img src={spotifyLogo} alt={spotifyLogoAlt} id="spotify-logo" />

			<SidePaneItem
				imgSrc={homeIcon}
				title="Home"
				alt={homeImageAlt}
				link="#"
			/>
			<SidePaneItem
				imgSrc={searchIcon}
				title="Search"
				alt={searchImageAlt}
				link="#"
			/>
			<SidePaneItem
				imgSrc={musicLibraryIcon}
				title="Your Library"
				alt={musicLibraryAlt}
				link="#"
			/>
			<SidePaneItem
				imgSrc={createPlaylistIcon}
				title="Create Playlist"
				alt={createPlaylistAlt}
				link="#"
			/>
			<SidePaneItem
				imgSrc={likedSongsIcon}
				title="Liked Songs"
				alt={likedSongsAlt}
				link="#"
			/>
		</div>
	);
};

export default SidePane;
