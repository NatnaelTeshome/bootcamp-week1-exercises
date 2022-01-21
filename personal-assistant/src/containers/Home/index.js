import React, {useEffect, useState} from 'react'
import {HomeContainer, TodoContainer} from './styles'

const Home = () => {
    const [quote, setQuote] = useState({})
    useEffect(() => {
      fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setQuote(data[Math.floor(Math.random() * 100)])
      console.log(data);
    });
    }, [])
    return(
      <TodoContainer>
        <HomeContainer>
          {quote.text}
        </HomeContainer>
      </TodoContainer>
    )
}

export default Home
  