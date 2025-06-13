import CardComImagemETitulo from '@molecules/CardComImagemETitulo';

type Categoria = {
  id: number;
  titulo: string;
  imagemUrl: string;
};

type Props = {
  categorias: Categoria[];
};

export default function ListaCategorias({ categorias }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categorias.map(categoria => (
        <CardComImagemETitulo
          key={categoria.id}
          titulo={categoria.titulo}
          imagemUrl={categoria.imagemUrl}
        />
      ))}
    </div>
  );
}