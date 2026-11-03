import { useDispatch, useSelector } from "react-redux";
import { setArticle } from "../features/parts/partsSlice";

function PartSearch() {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.parts.article);

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Введите артикул"
      value={article}
      onChange={(event) => dispatch(setArticle(event.target.value))}
    />
  );
}

export default PartSearch;
