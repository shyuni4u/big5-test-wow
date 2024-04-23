import React from 'react'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@redux-slice'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import '@locales/i18n'
import '@styles/globals.css'

import Wrapper from '@components/atoms/Wrapper'

const RootApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const queryClient = new QueryClient()

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
          <Head>
            <title>WoW - Class recommendation by Machine learning</title>
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
              name="keywords"
              content="심리테스트, 직업 선택, 와우, 월드 오브 워크래프트, WOW, World of warcraft, MBTI, Big five test"
            ></meta>
            <meta
              name="description"
              content="재미로 보는 머신러닝을 통한 와우 직업 추천 / 뉴비를 위한 유저들의 데이터. Big 5 test for selecting wow class. Wow class recommendation through machine learning for fun / by Korean user datas."
            />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Big 5 test." />
            <meta
              property="og:description"
              content="재미로 보는 머신러닝을 통한 와우 직업 추천 / 뉴비를 위한 유저들의 데이터. Big 5 test for selecting wow class. Wow class recommendation through machine learning for fun / by Korean user datas."
            />
            <meta property="og:url" content="http://wow.enzo.kr/" />
          </Head>
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  )
}

export default RootApp
