import Weather from "./WEATHER/weather"

import styles from './WEATHER/Weather.module.css'

function App() {

  return(
    <div className={styles.app}>
      <Weather />
    </div>
  )
}

export default App
