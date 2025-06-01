import Button from '../components/Button';

type Props = {
  onConfirmar: () => void;
  onCancelar: () => void;
};

export default function ConfirmarCancelarAcoes({ onConfirmar, onCancelar }: Props) {
  return (
    <div className="flex gap-3">
      <Button type="primary" onClick={onConfirmar}>Confirmar</Button>
      <Button type="secondary" onClick={onCancelar}>Cancelar</Button>
    </div>
  );
}