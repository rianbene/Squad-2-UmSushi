  import { useEffect, useState } from "react";
  import { fetchCategorias } from "../services/apiService";

  export function useCategorias() {
    const [categorias, setCategorias] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
      (async () => {
        try {
          const data = await fetchCategorias();
          setCategorias(data);
        } catch {
          setErro(true);
        } finally {
          setLoading(false);
        }
      })();
    }, []);

    return { categorias, loading, erro };
  }
