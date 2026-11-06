import { useSelector } from "react-redux";

function OffersList() {
  const isOffersLoaded = useSelector((state) => state.parts.isOffersLoaded);

  const offers = useSelector((state) => state.parts.offers);

  const selectedBrand = useSelector((state) => state.parts.selectedBrand);

  if (!isOffersLoaded) {
    return null;
  }

  if (offers.length === 0) {
    return (
      <div className="alert alert-info mt-4" role="status">
        Предложения не найдены
      </div>
    );
  }

  const formatPrice = (price) => {
    if (price == null) {
      return "Нет данных";
    }

    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 2,
    }).format(price);
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Предложения для {selectedBrand}</h4>

      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Название</th>
              <th>Производитель</th>
              <th>Тип</th>
              <th>Цена</th>
              <th>Остаток</th>
            </tr>
          </thead>

          <tbody>
            {offers.map((offer) => (
              <tr key={offer.id}>
                <td>{offer.name}</td>

                <td>{offer.brand}</td>

                <td>
                  {offer.isAnalogue ? (
                    <span className="badge bg-info text-dark">Аналог</span>
                  ) : (
                    <span className="badge bg-secondary">Основной товар</span>
                  )}
                </td>

                <td className="fw-semibold">{formatPrice(offer.price)}</td>

                <td>
                  {offer.stock == null ? (
                    <span className="text-muted">Нет данных</span>
                  ) : offer.stock > 0 ? (
                    <span className="badge bg-success">{offer.stock} шт.</span>
                  ) : (
                    <span className="badge bg-danger">Нет в наличии</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-muted small">Найдено предложений: {offers.length}</p>
    </div>
  );
}

export default OffersList;
