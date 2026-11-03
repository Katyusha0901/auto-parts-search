import { useDispatch, useSelector } from "react-redux";
import { setSelectedBrand } from "../partsSlice";

function BrandList() {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.parts.brands);

  const handleBrandClick = (brand) => dispatch(setSelectedBrand(brand));

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
