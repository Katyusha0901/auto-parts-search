import { useDispatch, useSelector } from "react-redux";
import {
  setArticle,
  setBrands,
  setSelectedBrand,
  setOffers,
  setBrandsLoading,
  setBrandsError,
  setOffersError,
  setOffersLoaded,
} from "../partsSlice";
import { fetchBrands } from "../partsApi";

function PartSearch() {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.parts.article);
  const isBrandsLoading = useSelector((state) => state.parts.isBrandsLoading);
  const brandsError = useSelector((state) => state.parts.brandsError);

  const handleSearch = async () => {
    dispatch(setSelectedBrand(null));
    dispatch(setBrands([]));
    dispatch(setOffers([]));
    dispatch(setOffersLoaded(false));
    dispatch(setBrandsError(null));
    dispatch(setOffersError(null));
    dispatch(setBrandsLoading(true));

    try {
      const brands = await fetchBrands(article);
      dispatch(setBrands(brands));
    } catch (error) {
      dispatch(setBrandsError(error.message));
    } finally {
      dispatch(setBrandsLoading(false));
    }
  };

  return (
    <div>
      <div className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Введите артикул"
          value={article}
          onChange={(event) => dispatch(setArticle(event.target.value))}
        />

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSearch}
          disabled={isBrandsLoading}
        >
          {isBrandsLoading ? "Загрузка..." : "Найти"}
        </button>
      </div>

      {brandsError && (
        <div className="alert alert-danger mt-3">{brandsError}</div>
      )}
    </div>
  );
}

export default PartSearch;
