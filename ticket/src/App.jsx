import { Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <Routes>
      <Route index element={<FormPage />} />
      <Route />
    </Routes>
  );
}

export default App;
