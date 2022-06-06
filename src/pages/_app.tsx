import '@fontsource/inter/variable.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from '@components/layout'
import ControlBar from '@components/control-bar'
import globalStyles from '@components/global-styles'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <Layout>
      <Head>
        <title>Hari Libur ✨</title>
        <meta name="description" content="Daftar hari libur nasional." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ControlBar />
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
