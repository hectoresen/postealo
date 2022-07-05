import Access from "./pages/access/Access";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import './App.scss';

function App() {
  return (
    <div className="postealo">
      <Routes>
        <Route path="/">
          <Route path="/" element={<Access />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
