import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import HomePage from "./pages/HomePage";
import "./App.css";
import Contacts from "./pages/Contacts/Contacts";
import AboutUs from "./pages/AboutUs/AboutUs";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          {/* <Route path="/favorite" element={<FavoritePage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
