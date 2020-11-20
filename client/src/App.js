import React from "react";
import AssignmentPage from "./components/Assignment/AssignmentPage";
import Pdf from "./components/Pdf/Pdf";
import Sidebar from "./components/SubjectPage/Sidebar";
import AppRouter from "./routers/AppRouter";
import LinkCard from "./components/LinkCard/LinkCard"
import LinkPage from "./components/LinkCard/LinkPage";
function App() {
	return (
		<div>
			{/* <AppRouter /> */}
			{/* <Sidebar /> */}
			{/* <AssignmentPage /> */}
			<LinkPage />
		</div>
	);
}
export default App;