import { useState, useEffect } from 'react'
import axios from 'axios'
import './css/index.css'
import Coins from './components/coins/coins'
import Header from './components/header/header'

const url = 'https://api.coinranking.com/v2/coins'

const App = () => {

  const coeficient = 2.7
  const [coinsArr, setCoinArr] = useState([])
  const [coinsArrCopy, setCoinArrCopy] = useState([])
  const [currentCurrency, setCurrentCurrency] = useState('USD')

  const changeCur = (name) => {
    setCurrentCurrency(name)
    if (name === 'USD') {
      setCoinArr(coinsArrCopy)
    } else {
      const copyCoinsArrCopy = [...coinsArrCopy]
      const arrOfGel = copyCoinsArrCopy.map((item) => {
        item.price = Number(Number(item.price) * coeficient).toFixed(4)
        return item
      })
      setCoinArr(arrOfGel)
    }
  }

  const getCoins = () => {
    axios.get(url).then((res) => {
      const coins = res.data.data.coins.map((item) => {
        item.price = Number(item.price).toFixed(4)
        return item
      })
      setCoinArrCopy(coins)
      setCoinArr(coins)
    })
  }

  useEffect(() => {
    getCoins()
  }, [currentCurrency])

  return (
    <div className="App">
      <Header changeCur={changeCur}/>
      <Coins currency={currentCurrency} data={coinsArr}/>
    </div>
  )
}

export default App