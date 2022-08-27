import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./routes/Signup";

import Todo from "./routes/Todo";
import Login from "./routes/Login";
import Cointracker from "./routes/Cointracker";
import MovieHome from "./routes/MovieHome";
import MovieDetail from "./routes/MovieDetail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/coin-tracker" element={<Cointracker />} />
        <Route path="/Movie-home" element={<MovieHome />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
