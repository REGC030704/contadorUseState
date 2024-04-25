import Head from 'next/head';
import Counter from '../components/counter';
import '../app/globals.css';

export default function Home() {
  return (
    <div className="bg-black-500 min-h-screen flex items-center justify-center">
      <Head>
        <title>Contador con useState</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <Counter />
      </main>
    </div>
  );
}
