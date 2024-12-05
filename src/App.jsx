import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import themeConfiguration from './styles/theme';
import Header from './Pages/Header/Header';

import Home from "./Pages/Home/Home";
import ConnectionDetails from './Pages/ConnectionDetails/ConnectionDetails';
function App() {
  const isAllowed = ['ID', 'Applicant_Name', 'Gender', 'District', 'State', 'Pincode', 'Ownership', 'Category', 'Load_Applied', 'Date_of_Application', 'Date_of_Approval', 'Modified_Date', 'Status', 'Reviewer_ID', 'Reviewer_Name', 'Reviewer_Comments'];
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={themeConfiguration()}>
      <div className="App">
        <Router>
          <Notifications />
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/details/:id" element={<ConnectionDetails isAllowed={isAllowed} />}></Route>
          </Routes>
        </Router>
      </div>
    </MantineProvider>
  );
}

export default App;
