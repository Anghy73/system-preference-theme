import { useEffect } from 'react'

function App () {
  useEffect(() => {
    if (window.localStorage.theme === 'dark' || (!('theme' in window.localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const handleClickDark = () => {
    document.documentElement.classList.add('dark')
    window.localStorage.theme = 'dark'
  }

  const handleClickLight = () => {
    document.documentElement.classList.remove('dark')
    window.localStorage.theme = 'light'
  }

  const handleClickSystem = () => {
    window.localStorage.removeItem('theme')
  }

  return (
    <main className='w-screen h-screen bg-slate-300 text-stone-800  dark:bg-gray-900 dark:text-sky-400 flex flex-col justify-center items-center gap-2'>
      <button className='w-full max-w-52 border-2 rounded dark:border-white border-black px-2 py-1' onClick={handleClickDark}>Theme Dark</button>
      <button className='w-full max-w-52 border-2 rounded dark:border-white border-black px-2 py-1' onClick={handleClickLight}>Theme Light</button>
      <button className='w-full max-w-52 border-2 rounded dark:border-white border-black px-2 py-1' onClick={handleClickSystem}>Theme System</button>
    </main>
  )
}

export default App
