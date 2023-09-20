import React from 'react'
import "./HomeScreen.css"
import Nav from '../Nav'
import Banner from '../Banner'
import requests from '../Requests'
import Row from '../Row'
function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav />
        <Banner />
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documented movies" fetchUrl={requests.fetchDocumentaries}/>




    </div>
  )
}

export default HomeScreen