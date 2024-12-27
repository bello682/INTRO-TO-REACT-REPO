import "./App.css";
import BarbingListTable from "./components/tables/BarbingList";

function App() {
	return (
		<div className="App">
			{/* <header className="App-header">
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
			</div> */}
			<BarbingListTable />
		</div>
	);
}

export default App;
