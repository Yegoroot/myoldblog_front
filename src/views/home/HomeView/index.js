import React from 'react'
import Page from 'src/components/Page'
import { APP_NAME } from 'src/constants'
import { useTranslation } from 'react-i18next'
import Hero from './Hero'
import CTA from './CTA'
import FAQS from './FAQS'

const HomeView = () => {
  const { t } = useTranslation()

  return (
    <Page title={`${t('homepage.title')} - ${APP_NAME}`}>
      <Hero />
      <CTA />
      <FAQS />
    </Page>
  )
}

export default HomeView
