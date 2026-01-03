import ReactDOM from 'react-dom/client'

import App from './App'

let counter = 1

const root = 
ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
)

/**const refresh = () => {
  root.render(
    <App counter={counter}/>
  )
} 

setInterval(() => {
    refresh()
    counter += 1
}, 1000)
*/
//it ticks!
//reloading the entire page is not the best way 
// to rerender components