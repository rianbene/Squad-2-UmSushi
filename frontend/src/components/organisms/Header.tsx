import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">UmSushi</h1>
      <nav className="space-x-4">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        <Link href="/cardapio" className="text-blue-600 hover:underline">Cardápio</Link>
        <Link href="/busca" className="text-blue-600 hover:underline">Busca</Link>
      </nav>
    </header>
  );
}