import React from 'react'

const SiteFooter = () => {
    const date = new Date();
    let year = date.getFullYear()
  return (
    <footer>
      <p>Copyright &copy; <time dateTime={year}>{year}</time></p>
    </footer>
  )
}

export default SiteFooter
