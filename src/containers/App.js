import "./App.css";

// fonts
import "../assets/fonts/Montserrat/Montserrat-Regular.ttf";

// components
import Navbar from "../components/Navbar/Navbar";
import SidePane from "../components/Side-Pane/SidePane";
import MainPage from "../components/Main-Page/MainPage";

function App() {
	return (
		<div className="App">
			<SidePane />
			<div className="main-content">
				<Navbar />
				<MainPage />
			</div>
		</div>
	);
}

export default App;
