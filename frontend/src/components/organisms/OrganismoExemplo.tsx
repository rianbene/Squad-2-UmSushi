"use client";
import React from "react";
import MoleculaExemplo from "@molecules/MoleculaExemplo";
import AtomExemplo from "@atoms/AtomExemplo";

import { useCategorias } from "@hooks/useCategorias";
import { useProdutos } from "@hooks/useProdutos";

interface OrganismoExemploProps {
  tituloSecao: string;
}

export default function OrganismoExemplo({ tituloSecao }: OrganismoExemploProps) {
  const { categorias, loading: loadingCat, erro: erroCat } = useCategorias();
  const { produtos, loading: loadingProd, erro: erroProd } = useProdutos();

  if (loadingCat || loadingProd) return <p>Carregando dados...</p>;
  if (erroCat || erroProd) return <p>Erro ao carregar dados.</p>;

  return (
    <section className="organism">
      <h1>Isso é um Organismo: {tituloSecao}</h1>

      {/* Mostrando a primeira categoria com uma molécula */}
      {categorias[0] && (
        <MoleculaExemplo
          titulo={`Categoria: ${categorias[0].nome}`}
          textoAtomico="Essa é a primeira categoria da lista."
        />
      )}

      {/* Mostrando o primeiro produto com um átomo */}
      {produtos[0] && (
        <AtomExemplo texto={`Produto: ${produtos[0].nome}`} />
      )}
    </section>
  );
}
