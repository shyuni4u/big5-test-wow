import React from 'react'
import { useRouter } from 'next/router'

import Home from '@components/organisms/Home'

export const Index: React.FC = () => {
  const router = useRouter()
  const { resultValue } = router.query as { resultValue: string }

  return <Home />
}

export default Index
