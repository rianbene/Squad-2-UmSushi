import React from 'react';

interface AtomExemploProps {
  texto: string;
}

export default function AtomExemplo({ texto }: AtomExemploProps) {
  return (
    <p className="atom">
      {texto} [Isso é um Átomo]
    </p>
  );
}