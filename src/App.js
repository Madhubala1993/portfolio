import { useHistory } from "react-router-dom";
import Home from "./PortfolioContainer/Home/Home";

export default function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Home />
    </div>
  );
}
