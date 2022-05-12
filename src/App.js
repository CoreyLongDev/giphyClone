import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";


function App() {

  const searchOptions = {
    key: process.env.REACT_APP_GIPHY_KEY,
    limit: 25,
    rating: 'G',
    api: 'https://api.giphy.com/v1/gifs',
    endpoint: '/search'
  }

  const [images, setImages] = useState([])
  useEffect(() => {
    getImages()
  }, [])

  function handleChange(event) {
    setSearchString(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    getImages()
  }
  function getImages() {
  
    const [searchString, setSearchString] = useState('minions')

    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString}&limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&land=en`
  
    fetch(url)
    .then(res => res.json())
    .then(res => {
      setImages(res.data)
    })
    .catch(console.error)
  }
  return(
    <div>
      <h1>Giphy Searcher</h1>
      <SearchForm 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      <SearchResults images={images} />
    </div>
  )
}

export default App