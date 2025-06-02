import React from 'react';
import OrganismoExemplo from '@organisms/OrganismoExemplo';

interface TemplateExemploProps {
  tituloPagina: string;
}

export default function TemplateExemplo({ tituloPagina }: TemplateExemploProps) {
  return (
    <div className="template">
      <header>
        <h1>Isso é um Template: {tituloPagina}</h1>
      </header>
      <main>
        <OrganismoExemplo tituloSecao="Seção de Exemplo" />
      </main>
      <footer>
        Desenvolvido com Atomic Design
      </footer>
    </div>
  );
}