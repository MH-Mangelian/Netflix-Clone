import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>NetFlix - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>
      <main>
        {/* {------------------------------Banner----------------------------------} */}
        <section>
          {/* {--------------row------------------} */}
          {/* {--------------row------------------} */}
          {/* {--------------row------------------} */}
          {/* {--------------row------------------} */}
          {/* {--------------row------------------} */}
          {/* {--------------row------------------} */}
        </section>
      </main>
      {/* {-------Modal-------} */}
    </div>
  )
}
