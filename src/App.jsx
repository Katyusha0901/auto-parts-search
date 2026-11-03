import { useSelector } from "react-redux";
import PartSearch from "./components/PartSearch";

function App() {
  const article = useSelector((state) => state.parts.article);

  return (
    <div className="container mt-5">
      <h1>Поиск автозапчастей</h1>

      <PartSearch />

      <p className="mt-3">Текущий артикул: {article || "Не указан"}</p>
    </div>
  );
}

export default App;
