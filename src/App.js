import React from "react";
import "./App.css";
import HighScoreTable from "./HighScoreTable";
import WorldWideTable from "./WorldWideTable";
function App() {
	return (
		<div className="App">
			<div>
				<h1>High Scores Per Country</h1>
			</div>
			<HighScoreTable />
			<WorldWideTable />
		</div>
	);
}

export default App;
