import { useSelector } from "react-redux";

function OffersList() {
  const offers = useSelector((state) => state.parts.offers);

  return (
    <table className="table table-striped mt-4">
      <thead>
        <tr>
          <th>Название</th>
          <th>Производитель</th>
          <th>Цена</th>
          <th>Остаток</th>
        </tr>
      </thead>
      <tbody>
        {offers.map((offer) => (
          <tr key={offer.id}>
            <td>{offer.name}</td>
            <td>{offer.brand}</td>
            <td>{offer.price}</td>
            <td>{offer.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OffersList;
