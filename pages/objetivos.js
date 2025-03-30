import Head from 'next/head';
import Link from 'next/link';

export default function Objetivos() {
  return (
    <div>
      <Head>
        <title>Objetivos - Adolescência em Debate</title>
      </Head>

      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f4f4f9' }}>
        <h1>Objetivos do Projeto</h1>
      </header>

      <main style={{ padding: '20px' }}>
        <section>
          <h2>Objetivo Geral</h2>
          <p>
            Desenvolver competências de leitura crítica, produção textual e oralidade a partir da análise da série "Heartstopper" e dos temas por ela abordados.
          </p>

          <h2>Objetivos Específicos</h2>
          <ul>
            <li>Analisar elementos da narrativa audiovisual (personagens, enredo, conflitos).</li>
            <li>Reconhecer e discutir temas contemporâneos relevantes para os adolescentes.</li>
            <li>Produzir textos argumentativos sobre os temas abordados.</li>
            <li>Desenvolver habilidades de pesquisa e seleção de informações confiáveis.</li>
          </ul>

          <Link href="/">
            <a style={{ color: 'blue', textDecoration: 'underline' }}>Voltar à Página Inicial</a>
          </Link>
        </section>
      </main>
    </div>
  );
}