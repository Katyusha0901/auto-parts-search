import { useDispatch, useSelector } from "react-redux";
import {
  setArticle,
  setBrands,
  setSelectedBrand,
  setOffers,
  setLoading,
  setError,
} from "../partsSlice";
import { fetchBrands } from "../partsApi";

function PartSearch() {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.parts.article);
  const isLoading = useSelector((state) => state.parts.isLoading);
  const error = useSelector((state) => state.parts.error);

  const handleSearch = async () => {
    dispatch(setSelectedBrand(null));
    dispatch(setOffers([]));
    dispatch(setBrands([]));
    dispatch(setError(null));
    dispatch(setLoading(true));

    const brands = await fetchBrands(article);

    try {
      const brands = await fetchBrands(article);
      dispatch(setBrands(brands));
    } catch (error) {
      dispatch(setError("Не удалось загрузить производителей"));
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
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
        {isLoading ? "Загрузка..." : "Найти"}
      </button>

      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

export default PartSearch;
