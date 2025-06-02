import Card from '@atoms/Card';
import ImageOptimized from '../components/ImageOptimized';

type Props = {
  titulo: string;
  imagemUrl: string;
};

export default function CardComImagemETitulo({ titulo, imagemUrl }: Props) {
  return (
    <Card>
      <ImageOptimized src={imagemUrl} alt={titulo} width={200} height={150} />
      <h3 className="text-center mt-2 font-semibold">{titulo}</h3>
    </Card>
  );
}