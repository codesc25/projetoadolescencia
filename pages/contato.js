import Head from 'next/head';

export default function Contato() {
  return (
    <div>
      <Head>
        <title>Contato - Adolescência em Debate</title>
      </Head>

      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f4f4f9' }}>
        <h1>Entre em Contato</h1>
      </header>

      <main style={{ padding: '20px' }}>
        <form>
          <label>
            Nome:
            <input type="text" name="nome" style={{ display: 'block', margin: '10px 0' }} />
          </label>
          <label>
            E-mail:
            <input type="email" name="email" style={{ display: 'block', margin: '10px 0' }} />
          </label>
          <label>
            Mensagem:
            <textarea name="mensagem" rows="5" style={{ display: 'block', margin: '10px 0' }}></textarea>
          </label>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>
            Enviar
          </button>
        </form>
      </main>
    </div>
  );
}