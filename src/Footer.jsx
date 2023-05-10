import React from 'react'

export default function Footer() {
    const date= new Date()
  return (
    <footer>
        <p>Copyright {date.getFullYear()} | Murat Çelik</p>
    </footer>
  )
}
