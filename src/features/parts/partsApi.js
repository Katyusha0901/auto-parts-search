export const fetchBrands = async (article) => {
  const params = new URLSearchParams({ article });

  const response = await fetch(`/api/brands?${params}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Не удалось получить производителей");
  }

  return extractBrands(data.goods);
};

export const fetchOffers = async (article, brand) => {
  const params = new URLSearchParams({ article, brand });

  const response = await fetch(`/api/offers?${params}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Не удалось получить предложения");
  }

  return extractAllOffers(data.goods);
};

export const extractBrands = (goods) => {
  return [...new Set(goods.map((item) => item.brand))];
};

export const extractOffers = (goods) => {
  return goods.flatMap((item) =>
    (item.warehouses ?? []).map((warehouse, index) => ({
      id: `${item.goodsID}-${warehouse.id ?? index}`,
      name: item.name,
      brand: item.brand,
      price: warehouse.price ?? null,
      stock: warehouse.stock ?? null,
    })),
  );
};

export const extractAllOffers = (goods) => {
  const originalOffers = extractOffers(goods).map((offer) => ({
    ...offer,
    isAnalogue: false,
  }));

  const analogues = goods.flatMap((item) => item.analogues ?? []);

  const analogueOffers = extractOffers(analogues).map((offer) => ({
    ...offer,
    isAnalogue: true,
  }));

  return [...originalOffers, ...analogueOffers];
};
