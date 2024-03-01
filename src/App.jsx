
function App() {
  const handleClickScheme = () => {
    const theme = window.matchMedia('(prefers-color-scheme: light)').matches
    console.log(theme);
  }
  const handleClickSystem = () => {
    console.log('system');
  }

  return (
    <main className="main">
      <h1>Hello World</h1>
      <button className="buttonTheme" onClick={handleClickScheme}>Change Theme</button>
      <button className="buttonTheme" onClick={handleClickSystem}>Change Theme to System</button>
    </main>
  )
}

export default App
