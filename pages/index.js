import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>LevTheDev</title>
      </Head>

      <main>
        <Header title="Coming Soon :D" />
      </main>

    </div>
  )
}
