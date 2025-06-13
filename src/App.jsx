import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PopularPage from "./pages/PopularPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/genres" element={<HomePage />} />
        <Route path="/favourites" element={<HomePage />} />
        <Route path="/movies" element={<HomePage />} />
        <Route path="/tv-shows" element={<HomePage />} />
        <Route path="/popular-movies" element={<PopularPage />} />
      </Routes>
    </div>
  );
}
export default App;
