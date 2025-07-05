import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import TopHeader from './components/TopHeader'

function App() {
  return (
    <div className="bg">
      <TopHeader/>
      <Header/>
      <main className="content">
        <Main/>
      </main>
      <Footer/>
    </div>
  )
}

export default App;
