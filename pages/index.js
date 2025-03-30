import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adolescência em Debate</title>
        <meta name="description" content="Plataforma educacional para o projeto Adolescência em Debate." />
      </Head>

      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f4f4f9' }}>
        <h1>ADOLESCÊNCIA EM DEBATE</h1>
        <p>Um projeto didático para explorar temas relevantes da adolescência.</p>
      </header>

      <main style={{ padding: '20px' }}>
        <section>
          <h2>Bem-vindo ao Projeto</h2>
          <p>
            Este projeto utiliza a série <strong>"Heartstopper"</strong> como ponto de partida para discutir temas como identidade, sexualidade, bullying e saúde mental.
          </p>
          <Link href="/sobre">
            <a style={{ color: 'blue', textDecoration: 'underline' }}>Saiba mais sobre o projeto</a>
          </Link>
        </section>
      </main>
    </div>
  );
}