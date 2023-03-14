import Head from 'next/head';
import Header  from '@/components/Header';
import Footer  from '@/components/Footer';

const account = () => {
  return (
    <div>
      <Head>
        <title>NetFlix - Home</title>
        <link rel="icon" href="/Netflix_icon.svg" />
      </Head>
      <Header />
      <main>
        <h1>Login</h1>
      </main>
      <Footer />
    </div>
  )
}

export default account