import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Awesome from "./components/Body/Awesome";
import Ideal from "./components/Body/Ideal";
import Last from "./components/Body/Last";
import Method from "./components/Body/Methods";
import Vision from "./components/Body/Vision";
import WebSite from "./components/Body/WebSite";
import Age from "./components/Body/age";
import Balance from "./components/Body/balance";
import Concern from "./components/Body/concern";
import Email from "./components/Body/email";
import Name from "./components/Body/name";
import ProcessDone from "./components/Body/processDone";
import ProcessFailed from "./components/Body/processFailed";
import Processing from "./components/Body/processing";
import State from "./components/Body/state";
import DataContextProvider from "./components/Context/dataContextProvider";
import NavBar from "./components/NavBar/navBar";

function App() {
  return (
    <div>
      <Router>
        <DataContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Name />} />
            <Route path="/ideal" element={<Ideal />} />
            <Route path="/vision" element={<Vision></Vision>} />
            <Route path="/method" element={<Method />} />
            <Route path="/website" element={<WebSite />} />
            <Route path="/last" element={<Last />} />
            <Route path="/awesome" element={<Awesome />} />

            <Route path="/balance" element={<Balance />} />
            <Route path="/age" element={<Age />} />
            <Route path="/state" element={<State />} />
            <Route path="/concern" element={<Concern />} />
            <Route path="/processing" element={<Processing />} />
            <Route path="/name" element={<Name />} />
            <Route path="/email" element={<Email />} />
            <Route path="/process-done" element={<ProcessDone />} />
            <Route path="/process-failed" element={<ProcessFailed />} />
          </Routes>
        </DataContextProvider>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
