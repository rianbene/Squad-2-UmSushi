import CardComImagemETitulo from '@molecules/CardComImagemETitulo';

type Produto = {
  id: number;
  nome: string;
  imagemUrl: string;
};

type Props = {
  produtos: Produto[];
  paginaAtual: number;
  totalPaginas: number;
  onPaginaChange: (novaPagina: number) => void;
};

export default function ListaProdutos({
  produtos,
  paginaAtual,
  totalPaginas,
  onPaginaChange
}: Props) {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {produtos.map(produto => (
          <CardComImagemETitulo
            key={produto.id}
            titulo={produto.nome}
            imagemUrl={produto.imagemUrl}
          />
        ))}
      </div>

      <div className="flex justify-center gap-2">
        {Array.from({ length: totalPaginas }, (_, i) => (
          <button
            key={i}
            onClick={() => onPaginaChange(i + 1)}
            className={`px-3 py-1 border rounded ${paginaAtual === i + 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
