import { useDispatch, useSelector } from "react-redux";
import { setArticle, setBrands } from "../partsSlice";
import { fetchBrands } from "../partsApi";

function PartSearch() {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.parts.article);

  const handleSearch = async () => {
    const brands = await fetchBrands(article);

    dispatch(setBrands(brands));
    console.log("Полученные производители:", brands);
  };

  return (
    <div className="d-flex gap-2">
      <input
        type="text"
        className="form-control"
        placeholder="Введите артикул"
        value={article}
        onChange={(event) => dispatch(setArticle(event.target.value))}
      />

      <button type="button" className="btn btn-primary" onClick={handleSearch}>
        Найти
      </button>
    </div>
  );
}

export default PartSearch;
