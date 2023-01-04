import './App.css'
import Footer from './components/Footer/Footer'
import HeaderMemo from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="container">
      <HeaderMemo />
      <hr />
      <Main />
      <hr />
      <Footer />
    </div>
  )
}

export default App
