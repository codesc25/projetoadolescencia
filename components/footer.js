import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f4f4f9',
      marginTop: '20px',
      borderTop: '1px solid #ddd'
    }}>
      <p>&copy; 2023 Adolescência em Debate</p>
      <p>
        Desenvolvido para o Projeto Didático: 
        <Link href="/sobre">
          <a style={{ color: '#0070f3', textDecoration: 'underline' }}> Saiba mais sobre o projeto</a>
        </Link>
      </p>
      <p>
        Referências:
        <Link href="https://www.netflix.com/title/81177754" target="_blank" rel="noopener noreferrer">
          <a style={{ color: '#0070f3', textDecoration: 'underline' }}> Heartstopper - Netflix</a>
        </Link>
      </p>
    </footer>
  );
}