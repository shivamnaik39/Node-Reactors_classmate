import React from "react";
import AddClasswork from "./components/AddWidgets/AddClasswork";
import Sidebar from "./components/SubjectPage/Sidebar";
import AppRouter from "./routers/AppRouter"
function App() {
	return (
		<div>
			<AppRouter />
			{/* <AddClasswork /> */}
			{/* <Sidebar /> */}
		</div>
	);
}
export default App;