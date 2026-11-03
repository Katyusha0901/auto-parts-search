import { useDispatch, useSelector } from "react-redux";
import { setSelectedBrand, setOffers } from "../partsSlice";
import { fetchOffers } from "../partsApi";

function BrandList() {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.parts.brands);
  const article = useSelector((state) => state.parts.article);

  const handleBrandClick = async (brand) => {
    dispatch(setSelectedBrand(brand));

    const offers = await fetchOffers(article, brand);

    dispatch(setOffers(offers));

    console.log("Полученные предложения:", offers);
  };

  return (
    <ul className="list-group mt-3">
      {brands.map((brand) => (
        <li className="list-group-item" key={brand}>
          <button
            type="button"
            className="btn btn-link"
            onClick={() => handleBrandClick(brand)}
          >
            {brand}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default BrandList;
