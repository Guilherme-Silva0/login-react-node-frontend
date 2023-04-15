import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Thanks from "./pages/Thanks";
import useTheme from "./hooks/useTheme";
import { ThemeButton } from "./components";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <ThemeButton theme={theme} onClick={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </>
  );
};

export default App;
