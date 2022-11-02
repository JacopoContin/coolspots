import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Coolspots</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-row items-center justify-center px-20 text-center">
        <div className=''>
        <h1 className="text-6xl font-bold">
        Work anywhere,<br/>together,<br/>with{' '}
          <a className="text-blue-600" href="">
            Coolspots
          </a>
        </h1>

        <p className="mt-3 text-2xl">
        Book coffeeshops and co-working spaces all over the world with a single subscription
        </p>
        </div>
        <div className="mt-6 grid max-w-4xl flex-wrap items-center justify-around sm:w-full ">
          <a
            href=""
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Barcelona</h3>
          </a>

          <a
            href=""
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Berlin</h3>
          </a>

          <a
            href=""
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Lisbon</h3>
          </a>

          <a
            href=""
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Paris</h3>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          All rights reserved{' '}
          <Image src="/coolspots-mini.png" alt="Coolspots Logo" width={24} height={24} />
        </a>
      </footer>
    </div>
  )
}

export default Home
