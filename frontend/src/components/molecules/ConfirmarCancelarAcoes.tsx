import Button from '@atoms/Button';

type Props = {
  onConfirmar: () => void;
  onCancelar: () => void;
};

export default function ConfirmarCancelarAcoes({ onConfirmar, onCancelar }: Props) {
  return (
    <div className="molecule">
      <Button type="primary" onClick={onConfirmar}>Confirmar</Button>
      <Button type="secondary" onClick={onCancelar}>Cancelar</Button>
    </div>
  );
}