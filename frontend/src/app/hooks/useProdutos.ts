import { useEffect, useState } from "react";
import { fetchProdutos } from "../services/apiService";

export function useProdutos() {
  const [produtos, setProdutos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchProdutos();
        setProdutos(data);
      } catch {
        setErro(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { produtos, loading, erro };
}
