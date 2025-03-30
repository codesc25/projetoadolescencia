import Head from 'next/head';
import Link from 'next/link';

export default function Sobre() {
  return (
    <div>
      <Head>
        <title>Sobre o Projeto - Adolescência em Debate</title>
      </Head>

      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f4f4f9' }}>
        <h1>Sobre o Projeto</h1>
      </header>

      <main style={{ padding: '20px' }}>
        <section>
          <h2>Justificativa</h2>
          <p>
            A adolescência é um período de intensas transformações físicas, psicológicas e sociais. A série "Heartstopper" aborda com sensibilidade temas como identidade, sexualidade, bullying, saúde mental e relações interpessoais. Este projeto cria um espaço de diálogo sobre questões relevantes para os estudantes, utilizando a linguagem audiovisual como ponto de partida para reflexões profundas e desenvolvimento de competências linguísticas e argumentativas.
          </p>

          <h2>Competências e Habilidades</h2>
          <ul>
            <li>Valorizar conhecimentos sobre o mundo físico, social e cultural.</li>
            <li>Utilizar diferentes linguagens para defender pontos de vista.</li>
            <li>Exercitar a empatia, o diálogo e a resolução de conflitos.</li>
          </ul>

          <Link href="/">
            <a style={{ color: 'blue', textDecoration: 'underline' }}>Voltar à Página Inicial</a>
          </Link>
        </section>
      </main>
    </div>
  );
}