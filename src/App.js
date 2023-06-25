import { Fragment } from "react";
import Banking from "./Components/Banking";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import CustomerInfo from "./Components/CustomerInfo";
import Scrutiny from "./Components/Scrutiny";

function App() {
  return (
    <Fragment>
      {/* <Banking /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Banking />} />
          <Route path="/customerinfo" element={<CustomerInfo />} />
          <Route path="/scrutiny" element={<Scrutiny />} />
        </Routes>
      </Router>

    </Fragment>
  );
}

export default App;
