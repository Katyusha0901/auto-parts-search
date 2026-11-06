export const mockParts = {
  ABC123: {
    goods: [
      {
        goodsID: "1",
        number: "ABC123",
        name: "Масляный фильтр",
        brand: "Bosch",
        warehouses: [
          { price: 850, stock: 12 },
          { price: 790, stock: 5 },
        ],
        analogues: [
          {
            goodsID: "3",
            number: "ABC123-A",
            name: "Аналог масляного фильтра",
            brand: "MANN",
            warehouses: [{ price: 720, stock: 6 }],
          },
        ],
      },
      {
        goodsID: "2",
        number: "ABC123",
        name: "Воздушный фильтр",
        brand: "Valeo",
        warehouses: [{ price: 1200, stock: 8 }],
      },
      {
        goodsID: "4",
        number: "ABC123",
        name: "Масляный фильтр",
        brand: "MANN",
        warehouses: [{ price: 920, stock: 4 }],
      },
    ],
  },

  XYZ789: {
    goods: [
      {
        goodsID: "5",
        number: "XYZ789",
        name: "Свеча зажигания",
        brand: "Toyota",
        warehouses: [{ price: 650, stock: 20 }],
      },
      {
        goodsID: "6",
        number: "XYZ789",
        name: "Свеча зажигания",
        brand: "Denso",
        warehouses: [{ price: 580, stock: 15 }],
      },
    ],
  },

  TEST456: {
    goods: [
      {
        goodsID: "7",
        number: "TEST456",
        name: "Свеча зажигания",
        brand: "NGK",
        warehouses: [{ price: 740, stock: 10 }],
      },
      {
        goodsID: "8",
        number: "TEST456",
        name: "Свеча зажигания",
        brand: "Bosch",
        warehouses: [{ price: 810, stock: 7 }],
      },
    ],
  },
};
