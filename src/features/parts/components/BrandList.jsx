import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedBrand,
  setOffers,
  setOffersLoading,
  setOffersError,
  setOffersLoaded,
} from "../partsSlice";
import { fetchOffers } from "../partsApi";

function BrandList() {
  const dispatch = useDispatch();

  const brands = useSelector((state) => state.parts.brands);
  const article = useSelector((state) => state.parts.article);
  const selectedBrand = useSelector((state) => state.parts.selectedBrand);
  const isOffersLoading = useSelector((state) => state.parts.isOffersLoading);
  const offersError = useSelector((state) => state.parts.offersError);

  const handleBrandClick = async (brand) => {
    dispatch(setSelectedBrand(brand));
    dispatch(setOffers([]));
    dispatch(setOffersError(null));
    dispatch(setOffersLoaded(false));
    dispatch(setOffersLoading(true));

    try {
      const offers = await fetchOffers(article, brand);

      dispatch(setOffers(offers));
      dispatch(setOffersLoaded(true));
    } catch (error) {
      dispatch(setOffersError(error.message));
      console.error(error);
    } finally {
      dispatch(setOffersLoading(false));
    }
  };

  return (
    <div>
      <ul className="list-group mt-3">
        {brands.map((brand) => (
          <li
            className={`list-group-item ${
              selectedBrand === brand ? "active" : ""
            }`}
            key={brand}
          >
            <button
              type="button"
              className={`btn ${
                selectedBrand === brand ? "btn-link text-white" : "btn-link"
              }`}
              onClick={() => handleBrandClick(brand)}
              disabled={isOffersLoading}
            >
              {brand}
            </button>
          </li>
        ))}
      </ul>

      {isOffersLoading && <p className="mt-3">Загрузка предложений...</p>}

      {offersError && (
        <div className="alert alert-danger mt-3" role="alert">
          {offersError}
        </div>
      )}
    </div>
  );
}

export default BrandList;
