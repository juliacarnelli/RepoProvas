import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import ChooseActivity from "./pages/ChooseActivity/index";
import Tickets from "./pages/Tickets/index";
import Hotel from "./pages/UserDashboard/ChooseHotel/index";
import UploadTest from "./pages/UploadTest/index";
import Review from "./pages/UserDashboard/Review/index";
import { UserProvider } from "./contexts/UserContext";
import LogIn from "./pages/LogIn/index";
import ChooseActivities from "./pages/UserDashboard/ChooseActivities/index";

function App() {
  return (
    <UserProvider>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/upload-test" exact component={UploadTest} />
          <Route path="/dashboard/" component={Review} />
          <Route path="/test-teacher" exact component={Tickets} />
          <Route path="/test-class" exact component={Hotel} />
          <Route path="/choose-activities" exact component={ChooseActivities} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/" exact component={ChooseActivity} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
