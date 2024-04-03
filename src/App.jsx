// import { useState } from 'react'
import './App.css';
import './index.css'

import Header from './modules/header';
import Main from './modules/main';
import ProfileCard from './modules/dynamic-profile';
import MessageFromGrandParent from './modules/multilevel-props';




function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='w-screen min-h-full shrink-0 flex flex-col'>
      <Header />
      <Main>

      </Main>
      <ProfileCard />
      <MessageFromGrandParent />
    </div>
  )
}

export default App



{/* <div>
  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>  */}

