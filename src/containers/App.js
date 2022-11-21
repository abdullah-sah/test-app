import "./App.css";

// fonts
import "../assets/fonts/Montserrat/Montserrat-Regular.ttf";
import Navbar from "../components/Navbar/Navbar";
import SidePane from "../components/Side-Pane/SidePane";

function App() {
	return (
		<div className="App">
			<div className="navigation-container side-pane-container">
				<SidePane />
				<Navbar />
			</div>
		</div>
	);
}

export default App;
