import logo from "./images/logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Welcome to my first React app, I will like to tell you how it working
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}

			<header className="App-header">
				<div className="logo-name">
					<img src={logo} alt="logo" className="App-logo" />
					<h2 className="h2-logo">ReactFacts</h2>
				</div>
				<div>
					<h3>React Course - Project 1</h3>
				</div>
			</header>
			<div className="background_image">
				<div className="headline">
					<h1>Fun facts about React</h1>
				</div>
				<div className="headline_body">
					<ul>
						<li>Was first released in 2013</li>
						<li>Was originally created by Jordan walke</li>
						<li>Has well over 100k stars on GitHub</li>
						<li>Is maintained by Facebook</li>
						<li>Powers thousands the enterprise apps, including mobile apps</li>
					</ul>
				</div>
			</div>
			{/* <img src={logo} alt="background" className="lami_ground" /> */}
		</div>
	);
}

export default App;
