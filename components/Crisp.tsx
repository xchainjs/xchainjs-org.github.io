'use client'

import { useEffect } from 'react'

export default function Crisp () {
  useEffect(() => {
    (window as any).$crisp = [];
    (window as any).CRISP_WEBSITE_ID = '0fb81e6a-3f24-495f-81df-5b7d2e497f95';
    (function () {
      const d = document
      const s = d.createElement('script')
      s.src = 'https://client.crisp.chat/l.js'
      s.async = Boolean(1)
      d.getElementsByTagName('head')[0].appendChild(s)
    })()
  }, [])
  return (
    <div></div>
  )
}
