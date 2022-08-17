import * as React from "react";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import { Routes, Route} from "react-router-dom";
import Profile from "./pages/profile/profile";
import Customers from "./pages/customers/customers";
import Reports from "./pages/reports/Reports"
import Calendar from "./pages/calendar-tasks/calendar";
import Reset from "./pages/reset-pass/reset";
import Salesmen from "./pages/salesmen/salesman";
import ResetConfirm from "./pages/reset-pass-confirm/resetconf";
import Activate from "./pages/activation/activate";
import {Provider} from 'react-redux';
import store from "./components/store/store";

function App() {
  return (
    <Provider store={store}>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
          <Route path="customers" element={<Customers />} />
          <Route path="reports" element={<Reports />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="forgotpass" element={<Reset />} />
          <Route path="salesmen" element= {<Salesmen/>}/>
          <Route path="/password/reset/confirm/:uid/:token" element = {<ResetConfirm/>}/>
          <Route path="/activate/:uid/:token" element = {<Activate/>}/>
        </Routes>
    </Provider>
  );
}

export default App;
