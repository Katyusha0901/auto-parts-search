import { useSelector } from "react-redux";

function OffersList() {
  const selectedBrand = useSelector((state) => state.parts.selectedBrand);
  const isOffersLoaded = useSelector((state) => state.parts.isOffersLoaded);
  const offers = useSelector((state) => state.parts.offers);
  const offersError = useSelector((state) => state.parts.offersError);

  if (!isOffersLoaded) {
    return null;
  }

  if (offers.length === 0) {
    return <p className="mt-4">Предложения не найдены</p>;
  }

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
