export const fetchBrands = async (article) => {
  const mockBrands = ["Bosch", "MANN", "Valeo"];

  return mockBrands;
};

export const fetchOffers = async (article, brand) => {
  const mockOffers = [
    {
      id: 1,
      name: "Масляный фильтр",
      brand: "Bosch",
      price: 850,
      stock: 12,
    },
    {
      id: 2,
      name: "Воздушный фильтр",
      brand: "Bosch",
      price: 1200,
      stock: 5,
    },
  ];

  return mockOffers;
};
