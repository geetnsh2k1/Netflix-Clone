import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import requests from './request'
import Modal from './Modal';

export default function HomeScreen() {
    return (
        <div>
            { /* NAV BAR */ }
            <Nav></Nav>

            { /* BANNER */ }
            <Banner></Banner>

            <div style={{paddingTop: "2.5%",}}></div>

            { /* ROWS */ }
            <Row url={requests.trendingAll} title={"Trending Now"} large={true}></Row>
            <Row url={requests.action} title={"Action Movies"}></Row>
            <Row url={requests.crime} title={"Crime Movies"}></Row>
            <Row url={requests.comedy} title={"Comedy Movies"}></Row>
            <Row url={requests.thriller} title={"Thriller Movies"}></Row> 
            <Row url={requests.war} title={"War"}></Row>
            <Row url={requests.romance} title={"Romantic Movies"}></Row>

            <Row url={requests.movies_topRated} title={"Top Rated"}></Row>
            <Row url={requests.documentry} title={"Documentary"}></Row>

            <Row url={requests.history} title={"Historic Movies"}></Row>
            
            <Modal></Modal>
            <div style={{paddingBottom: "1%",}}></div>

            <hr />
        </div>
    )
}
