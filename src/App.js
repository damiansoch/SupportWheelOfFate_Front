import "./App.css";

import { Container } from "react-bootstrap";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import AllEngineersScreen from "./components/screens/AllEngineersScreen";
import HomeScreen from "./components/screens/HomeScreen";
import RosterScreen from "./components/screens/RosterScreen";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/engineers" element={<AllEngineersScreen />} />
          <Route path="/roster" element={<RosterScreen />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
