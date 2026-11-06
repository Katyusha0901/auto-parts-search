import express from "express";
import { mockParts } from "./mockData.js";

const app = express();
const PORT = 3001;

app.get("/api/brands", (req, res) => {
  const { article } = req.query;

  if (typeof article !== "string" || !article.trim()) {
    return res.status(400).json({
      error: "Не указан артикул",
    });
  }

  const normalizedArticle = article.trim().toUpperCase();

  const goods = mockParts[normalizedArticle]?.goods ?? [];

  res.json({ goods });
});

app.get("/api/offers", (req, res) => {
  const { article, brand } = req.query;

  if (
    typeof article !== "string" ||
    !article.trim() ||
    typeof brand !== "string" ||
    !brand.trim()
  ) {
    return res.status(400).json({
      error: "Не указаны артикул или производитель",
    });
  }

  const normalizedArticle = article.trim().toUpperCase();

  const goods = (mockParts[normalizedArticle]?.goods ?? []).filter(
    (item) => item.brand.toLowerCase() === brand.trim().toLowerCase(),
  );

  res.json({ goods });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
