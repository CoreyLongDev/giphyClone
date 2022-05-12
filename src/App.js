import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import SearchHeader from "./components/SearchHeader";


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

  const [searchString, setSearchString] = useState('')

  const [lastSearchString, setLastSearchString] = useState('')

  useEffect(() => {
    getImages(searchString)
  }, [])

  function handleChange(event) {
    setSearchString(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    getImages(searchString)
  }

  function getImages(searchString) {
    console.log(searchString)
    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString}&limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&land=en`
  
    fetch(url)
    .then(res => res.json())
    .then(res => {
      setImages(res.data)
      setLastSearchString(searchString)
      setSearchString('')
    })
    .catch(console.error)
  }
  return(
    <div>
      <SearchHeader lastSearchString={lastSearchString}/>
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