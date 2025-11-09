import { Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";
import TicketPage from "./pages/TicketPage";

function App() {
  return (
    <Routes>
      <Route index element={<FormPage />} />
      <Route path="/ticket" element={<TicketPage />} />
    </Routes>
  );
}

export default App;
