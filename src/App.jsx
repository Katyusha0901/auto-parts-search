import { useSelector } from "react-redux";
import PartSearch from "./features/parts/components/PartSearch";
import BrandList from "./features/parts/components/BrandList";
import OffersList from "./features/parts/components/OffersList";

function App() {
  const article = useSelector((state) => state.parts.article);
  const selectedBrand = useSelector((state) => state.parts.selectedBrand);

  return (
    <div className="container mt-5">
      <h1>Поиск автозапчастей</h1>

      <PartSearch />
      <BrandList />
      <OffersList />

      <p className="mt-3">
        Выбранный производитель: {selectedBrand || "Не выбран"}
      </p>

      <p className="mt-3">Текущий артикул: {article || "Не указан"}</p>
    </div>
  );
}

export default App;
