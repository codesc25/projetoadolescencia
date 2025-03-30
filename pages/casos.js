import Head from 'next/head';
import Link from 'next/link';

export default function Casos() {
  const casos = [
    {
      titulo: "O Silêncio diante do Bullying",
      contexto: "Ana presenciou situações de bullying contra seu colega Lucas.",
      questao: "Ana deve ser considerada eticamente responsável?"
    },
    {
      titulo: "O Direito à Privacidade vs. Proteção",
      contexto: "Márcia invadiu a privacidade de seu filho Pedro ao verificar suas conversas online.",
      questao: "A atitude de Márcia é justificável?"
    },
    {
      titulo: "Identidade e Aceitação Social",
      contexto: "Gabriel, um estudante transgênero, solicitou participar das atividades conforme sua identidade de gênero.",
      questao: "A escola deve modificar suas políticas para acomodar Gabriel?"
    }
  ];

  return (
    <div>
      <Head>
        <title>Casos para Júri Simulado - Adolescência em Debate</title>
      </Head>

      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f4f4f9' }}>
        <h1>Casos para Júri Simulado</h1>
      </header>

      <main style={{ padding: '20px' }}>
        {casos.map((caso, index) => (
          <section key={index} style={{ marginBottom: '20px' }}>
            <h2>{caso.titulo}</h2>
            <p><strong>Contexto:</strong> {caso.contexto}</p>
            <p><strong>Questão Central:</strong> {caso.questao}</p>
          </section>
        ))}

        <Link href="/">
          <a style={{ color: 'blue', textDecoration: 'underline' }}>Voltar à Página Inicial</a>
        </Link>
      </main>
    </div>
  );
}