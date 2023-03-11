import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header  from '@/components/Header'
import  Banner  from '@/components/Banner'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='relative h-screen bg-gradient-to-b from-slate-900/10 to-[hsl(225,85%,5%)] lg:h-[140vh]'>
      <Head>
        <title>NetFlix - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>
      <main>
        <Banner/>
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
