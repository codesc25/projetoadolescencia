import Head from 'next/head';
import Link from 'next/link';

export default function Avaliacao() {
  return (
    <div>
      <Head>
        <title>Avaliação - Adolescência em Debate</title>
      </Head>

      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f4f4f9' }}>
        <h1>Avaliação do Projeto</h1>
      </header>

      <main style={{ padding: '20px' }}>
        <section>
          <h2>Critérios de Avaliação</h2>
          <ul>
            <li><strong>Avaliação Continuada (60%):</strong> Participação, diário de bordo, pesquisa, artigo de opinião e preparação para o júri.</li>
            <li><strong>Avaliação Final - Júri Simulado (40%):</strong> Qualidade da argumentação, uso da linguagem formal, embasamento teórico e postura.</li>
          </ul>

          <Link href="/">
            <a style={{ color: 'blue', textDecoration: 'underline' }}>Voltar à Página Inicial</a>
          </Link>
        </section>
      </main>
    </div>
  );
}