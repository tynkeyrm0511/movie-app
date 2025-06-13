import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PopularPage from "./pages/PopularPage";
import RouteTransition from "./components/RouteTransition";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <RouteTransition>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/popular-movies" element={<PopularPage />} />
          <Route path="/top-rated" element={<HomePage />} />
          <Route path="/genres" element={<HomePage />} />
        </Routes>
      </RouteTransition>
    </div>
  );
}
export default App;
