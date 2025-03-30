import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px',
      backgroundColor: '#0070f3',
      color: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <Link href="/">
        <a style={{ color: '#fff', textDecoration: 'none' }}>Início</a>
      </Link>
      <Link href="/sobre">
        <a style={{ color: '#fff', textDecoration: 'none' }}>Sobre</a>
      </Link>
      <Link href="/objetivos">
        <a style={{ color: '#fff', textDecoration: 'none' }}>Objetivos</a>
      </Link>
      <Link href="/casos">
        <a style={{ color: '#fff', textDecoration: 'none' }}>Casos</a>
      </Link>
      <Link href="/recursos">
        <a style={{ color: '#fff', textDecoration: 'none' }}>Recursos</a>
      </Link>
      <Link href="/contato">
        <a style={{ color: '#fff', textDecoration: 'none' }}>Contato</a>
      </Link>
    </nav>
  );
}