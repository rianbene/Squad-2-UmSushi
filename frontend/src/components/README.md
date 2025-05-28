# Estrutura Atomic Design
## Estrutura dos diretórios

```
src/components/
├── atoms/       
├── molecules/   
├── organisms/   
└── templates/   
```

## Hierarquia
- 🅰️ Atoms: Componentes básicos (ex: Button, Input, Label)
- ⚛️ Molecules: Combinações de átomos (ex: CardCategoria, CardProduto)
- 🧬 Organisms: Seções complexas (ex: Header, Footer)
- 🖼️ Templates: Layouts de página (ex: Home, Cardápio, Produto)

## Regras
### 1. Use aliases absolutos
Utilize os aliases configurados em vez de caminhos relativos:

// ❌ Evite caminhos relativos
import Button from '../../atoms/Button/Button';

// ✅ Use aliases absolutos
import Button from '@atoms/Button';

### 2. Respeite a hierarquia do Atomic Design
* Atoms podem ser importados por qualquer nível
* Molecules podem importar apenas Atoms
* Organisms podem importar Molecules e Atoms
* Templates podem importar Organisms, Molecules e Atoms

Exemplo correto de importação em um Organism:
```
import Card from '@molecules/Card'; // Organism importando Molecule
import Button from '@atoms/Button'; // Organism importando Atom
```

### 3. Padrão de exportação
Todos os componentes devem usar exportação padrão.
Ex:
``` typescript
...
export default function nomeDaFuncao({ texto }: AtomExemploProps) {
  return (
    <p style={{ border: '1px solid blue', padding: '10px', margin: '5px' }}>
      {texto} [Isso é um Átomo]
    </p>
  );
}
```