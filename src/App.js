import Homepage from "./components/Home/Homepage";
import Signup from './Pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/pages/LoginPage.jsx'
import ErrorPage from "./ErrorPage";
import RechargeOne from "./components/Utils/RechargeOne";
import RechargeTwo from './components/Utils/RechargeTwo';
import Tools from "./components/Utils/ChangingComp/Tools";
import ToolsOne from "./components/Utils/ToolsOne";
import Couriers from "./components/Utils/Couriers";
import CouriersPriority from "./components/Utils/CouriersPriority";
import Setting from "./components/Utils/Setting";
import Recharge from "./components/Utils/Recharge";
import FaqGeneralEnquiry from "./components/Utils/FaqGeneralEnquiry";
import Reverse from "./components/Utils/Reverse";
import RadioButton from "./rahulComponent/RadioButton";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/register" element={<Signup />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route exact path="/recharge" element={< Recharge />} />
          <Route exact path="/rechargeone" element={< RechargeOne />} />
          <Route exact path="/rechargetwo" element={< RechargeTwo />} />
          <Route exact path="/tools" element={< Tools />} />
          <Route exact path="/toolsone" element={< ToolsOne />} />
          <Route exact path="/couriers" element={<Couriers />} />
          <Route exact path="/courierspriority" element={<CouriersPriority />} />
          <Route exact path="/setting" element={<Setting />} />
          <Route exact path="/faqgeneralenquiry" element={<FaqGeneralEnquiry />} />
          <Route exact path="/reverse" element={<Reverse />} />
          <Route exact path="/radio" element={<RadioButton />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
