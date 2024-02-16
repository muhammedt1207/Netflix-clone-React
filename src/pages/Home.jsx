import React from 'react'
import NaveBar from '../components/NaveBar'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'
function Home() {
    return (
        <div>
            <NaveBar />
            <Main />
            <Row rowId='1'   title='Popular' fetchURL={requests.requestPopular} />
            <Row rowId='2'  title='Top Rated' fetchURL={requests.requestTopRated} />
            <Row rowId='3'  title='Trending' fetchURL={requests.requestTrending} />
            <Row rowId='4'  title='Horror' fetchURL={requests.requestHorror} />
            <Row rowId='5'  title='Up Coming' fetchURL={requests.requestUpcoming} />2
        </div>
    )}

export default Home
