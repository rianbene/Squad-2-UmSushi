import { useState } from 'react';
import Input from '@atoms/Input';
import Button from '@atoms/Button';

export default function FormularioSimples() {
  //const [nome, setNome] = useState(''); 
  const [nome] = useState('');
  const [erro, setErro] = useState('');

  function handleSubmit() {
    if (!nome.trim()) {
      setErro('Nome é obrigatório');
    } else {
      setErro('');
      alert(`Nome enviado: ${nome}`);
    }
  }

  return (
    <div className="molecule">
      <Input
        label="Nome"
        placeholder="Digite seu nome"
        error={erro}
      />
      <Button onClick={handleSubmit}>Enviar</Button>
    </div>
  );
}