import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import ImageOptimized from '../components/ImageOptimized';

export default function Home() {
  return (
    <main className="p-6 space-y-6">
      <Card>
        <h2 className="text-xl font-bold mb-2">Componente Botão</h2>
        <Button type="primary">Primário</Button>
        <Button type="secondary" className="ml-2">Secundário</Button>
        <Button disabled className="ml-2">Desabilitado</Button>
      </Card>

      <Card>
        <h2 className="text-xl font-bold mb-2">Componente Input</h2>
        <Input label="Seu nome" placeholder="Digite aqui..." />
        <Input label="Email" placeholder="exemplo@email.com" error="Email inválido" />
      </Card>

      <Card>
        <h2 className="text-xl font-bold mb-2">Componente Imagem</h2>
        <ImageOptimized src="/next.svg" alt="Next.js Logo" />
      </Card>
    </main>
  );
}
