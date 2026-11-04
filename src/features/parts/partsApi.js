export const fetchBrands = async (article) => {
  const mockBrands = ["Bosch", "MANN", "Valeo"];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return mockBrands;
  // throw new Error("Сервер недоступен");
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

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return mockOffers;
  //   return [];
  //   throw new Error("Ошибка загрузки предложений");
};
