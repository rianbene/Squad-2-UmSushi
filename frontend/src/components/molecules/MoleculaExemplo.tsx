import React from 'react';
import AtomExemplo from '@atoms/AtomExemplo';

interface MoleculaExemploProps {
  titulo: string;
  textoAtomico: string;
}

export default function MoleculaExemplo({ titulo, textoAtomico }: MoleculaExemploProps) {
  return (
    <div className="molecule">
      <h2>Isso é uma Molécula: {titulo}</h2>
      <AtomExemplo texto={textoAtomico} />
    </div>
  );
}