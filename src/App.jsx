import { useEffect } from "react"

function App() {

  useEffect(() => {
    handleClickScheme(window.localStorage.getItem('theme'))
  }, [])

  const handleClickLight = () => {
    const newTheme = 'light'
    window.localStorage.setItem('theme', newTheme)
    handleClickScheme(newTheme)
  }

  const handleClickDark = () => {
    const newTheme = 'dark'
    window.localStorage.setItem('theme', newTheme)
    handleClickScheme(newTheme)
  }

  const handleClickSystem = () => {
    const newTheme = ''
    window.localStorage.setItem('theme', '')
    handleClickScheme(newTheme)
  }

  const handleClickScheme = (theme) => {

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('os-default')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (theme === 'light') {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('os-default')
    } else {
      document.documentElement.classList.remove('light')
    }

    if (theme === '' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('os-default')
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.remove('light')
    }
  }

  return (
    <main className="main">
      <button className="buttonTheme" onClick={handleClickDark}>Theme Dark</button>
      <button className="buttonTheme" onClick={handleClickLight}>Theme Light</button>
      <button className="buttonTheme" onClick={handleClickSystem}>Theme System</button>
    </main>
  )
}

export default App
