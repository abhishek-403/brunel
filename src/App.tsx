import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Submission from "./pages/Registration/Submission";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<Registration />}></Route>
      <Route path="/submission" element={<Submission />}></Route>
    </Routes>
  );
}

export default App;
