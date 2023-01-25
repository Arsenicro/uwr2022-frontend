import './style.css'
import './style2.scss'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import { box2 } from './box2'
import { box1 } from './box1'
import { box3 } from './box3'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  ${box1()}
  ${box2()}
  ${box3()}
`

setupCounter(document.querySelector('#counter'))
