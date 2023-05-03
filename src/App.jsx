
import styles from './App.module.css'
import { Router } from './Router'
import { Header } from './components/Header'
import { Home } from './pages/Home'

function App() {

  return (
    <div className={styles.App}>
       {/* <Header/>      */}
       <Router/>
    </div>
  )
}

export default App
