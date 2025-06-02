import React from 'react';
import MoleculaExemplo from '@molecules/MoleculaExemplo';
import AtomExemplo from '@atoms/AtomExemplo';

interface OrganismoExemploProps {
  tituloSecao: string;
}

export default function OrganismoExemplo({ tituloSecao }: OrganismoExemploProps) {
  return (
    <section className="organism">
      <h1>Isso é um Organismo: {tituloSecao}</h1>
      <MoleculaExemplo titulo="Primeiro Grupo de Texto" textoAtomico="Este texto vem de um átomo dentro de uma molécula." />
      <AtomExemplo texto="Este texto é um átomo diretamente no organismo." />
    </section>
  );
}