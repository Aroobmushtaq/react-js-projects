import ListApp from "./listApp.jsx";
import Color from "./color.js"
import { BrowserRouter ,Routes, Route,  } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListApp />} />
        <Route path="color" element={<Color />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
