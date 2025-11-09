import { useLocation } from "react-router-dom";
import Decoration from "../components/Decoration";

function TicketPage() {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return <Decoration />;
}

export default TicketPage;
