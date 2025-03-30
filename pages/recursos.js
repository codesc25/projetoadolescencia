import Head from 'next/head';
import Link from 'next/link';

export default function Recursos() {
  return (
    <div>
      <Head>
        <title>Recursos - Adolescência em Debate</title>
      </Head>

      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f4f4f9' }}>
        <h1>Recursos e Referências</h1>
      </header>

      <main style={{ padding: '20px' }}>
        <section>
          <h2>Materiais Complementares</h2>
          <ul>
            <li><a href="https://www.netflix.com/title/81177754" target="_blank" rel="noopener noreferrer">Série Heartstopper - Netflix</a></li>
            <li><a href="http://basenacionalcomum.mec.gov.br" target="_blank" rel="noopener noreferrer">Base Nacional Comum Curricular (BNCC)</a></li>
            <li>Livro: <em>Fenômeno Bullying</em> - Cleo Fante</li>
          </ul>

          <Link href="/">
            <a style={{ color: 'blue', textDecoration: 'underline' }}>Voltar à Página Inicial</a>
          </Link>
        </section>
      </main>
    </div>
  );
}