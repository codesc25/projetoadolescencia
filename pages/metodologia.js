import Head from 'next/head';
import Link from 'next/link';

export default function Metodologia() {
  return (
    <div>
      <Head>
        <title>Metodologia - Adolescência em Debate</title>
      </Head>

      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f4f4f9' }}>
        <h1>Metodologia do Projeto</h1>
      </header>

      <main style={{ padding: '20px' }}>
        <section>
          <h2>Etapas do Projeto</h2>
          <ol>
            <li><strong>Aproximação e Contextualização:</strong> Apresentação do projeto e levantamento de conhecimentos prévios.</li>
            <li><strong>Aprofundamento e Pesquisa:</strong> Análise temática da série e pesquisa orientada.</li>
            <li><strong>Preparação para o Júri Simulado:</strong> Definição de papéis e construção de argumentos.</li>
            <li><strong>Realização e Avaliação:</strong> Júri simulado e reflexão final.</li>
          </ol>

          <Link href="/">
            <a style={{ color: 'blue', textDecoration: 'underline' }}>Voltar à Página Inicial</a>
          </Link>
        </section>
      </main>
    </div>
  );
}