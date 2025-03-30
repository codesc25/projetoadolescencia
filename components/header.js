import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f4f4f9' }}>
      <h1>ADOLESCÊNCIA EM DEBATE</h1>
      <nav>
        <Link href="/">Início</Link> | 
        <Link href="/sobre">Sobre</Link> | 
        <Link href="/objetivos">Objetivos</Link> | 
        <Link href="/casos">Casos</Link> | 
        <Link href="/recursos">Recursos</Link> | 
        <Link href="/contato">Contato</Link>
      </nav>
    </header>
  );
}