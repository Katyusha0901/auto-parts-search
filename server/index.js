import express from "express";
import { mockParts } from "./mockData.js";

import path from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";

const app = express();
const PORT = process.env.PORT || 3001;

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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, "../dist");

app.use(express.static(distPath));

app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
