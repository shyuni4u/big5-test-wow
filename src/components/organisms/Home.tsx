import React, { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import Router from 'next/router'
import { useDispatch } from 'react-redux'

import { set } from '@redux-slice/testResult'
import Article from '@components/atoms/Article'

const DEFAULT_LANGUAGE = 'kr'

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()

  const [lang, setLang] = useState<string>(DEFAULT_LANGUAGE)

  const langFromLocalStorage = useMemo(() => {
    return window ? window.localStorage.getItem('lang') || DEFAULT_LANGUAGE : DEFAULT_LANGUAGE
  }, [])

  useEffect(() => {
    setLang(langFromLocalStorage)
  }, [langFromLocalStorage])

  useEffect(() => {
    i18n.changeLanguage(lang)
    if (window) window.localStorage.setItem('lang', lang)
  }, [lang])

  const changeLanguage = (ln: string = DEFAULT_LANGUAGE) => {
    setLang(ln)
    if (window) window.localStorage.setItem('lang', ln)
  }

  const goGameClass = (newbie: boolean) => {
    const temp = {
      firstClass: '',
      firstTalent: '',
      secondClass: '',
      secondTalent: '',
      thirdClass: '',
      thirdTalent: ''
    }
    dispatch(set({ ...temp, newbie: newbie }))
    Router.push('./testing')
  }

  return (
    <>
      <img src="/logo-wow-small.png" alt="WOW Logo" className="mx-auto my-3 h-10 w-10" />
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <button
          type="button"
          className="m-8 animate-bounce rounded-full border-2 border-gray-800 p-2"
          onClick={() => changeLanguage(lang === 'en' ? 'kr' : 'en')}
        >
          {lang === 'en' ? '한국어' : 'English'}
        </button>

        <Article>
          <h2 className="text-yellow-500">
            {t('home.big5Test')} + {t('home.statClass')}
          </h2>
          <h4 className="text-yellow-200">{t('home.big5testTitle')}</h4>
          <p className="indent-2 text-sm">{t('home.big5testDesc')}</p>
          <a
            href={t('home.big5testLink') ?? ''}
            title={t('home.big5testLinkTitle') ?? ''}
            target={'_blank'}
            className="user-select-none hover:text-main-200 cursor-pointer px-1 py-3 text-center text-xs"
          >
            {t('home.detail')}
          </a>
        </Article>

        <Article>
          <img src={'/logo-wow.png'} alt={'WOW LOGO'} className="max-w-[380px]" />
          <h5 className="text-yellow-100">{t('home.checkNewbie')}</h5>
          <div className="flex w-full items-center justify-center gap-10">
            <button onClick={() => goGameClass(true)}>{t('home.yes')}</button>
            <button onClick={() => goGameClass(false)}>{t('home.no')}</button>
          </div>
        </Article>
      </div>
    </>
  )
}

export default Home
