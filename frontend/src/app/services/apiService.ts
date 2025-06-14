import { mockCategorias, mockProdutos } from "../mock/mockData";

const API_BASE = "http://localhost:3000"; // pode deixar assim por enquanto

export async function fetchCategorias() {
  try {
    const res = await fetch(`${API_BASE}/categorias`);
    if (!res.ok) throw new Error("Erro");
    return await res.json();
  } catch {
    console.warn("API de categorias indisponível, usando mock.");
    return mockCategorias;
  }
}

export async function fetchProdutos() {
  try {
    const res = await fetch(`${API_BASE}/produtos`);
    if (!res.ok) throw new Error("Erro");
    return await res.json();
  } catch {
    console.warn("API de produtos indisponível, usando mock.");
    return mockProdutos;
  }
}
