import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function Boot(){
 let [api,setApi] = useState([])
 useEffect(()=>{
    fetch("https://api.themoviedb.org/3/trending/movie/day?&api_key=6f695dd3151a1b9752e3c201e9de6651&language=en-US").then(x=>x.json()).then(y=>setApi(y.results))
 },[])
 console.log (api)
 console.log( setApi)
 let[ search, setsearch] = useState("")
 function movies(){
    fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=4010f125677ceb848cba3ea144e40c8c`).then(x=>x.json()).then(y=>setApi(y.results))
}
let Navigate =useNavigate()

    return(
        <div>
             <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>{setsearch(e.target.value)}}
            />
            <Button variant="outline-success" onClick={movies}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Carousel>
        {api.map(x =>{
            return(

                <div >
                   
                    <img src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`} />
                    <div className="legend">
                    <h3>{x.title}</h3>
                    <p>{x.overview}</p>
                </div>
                </div>
            )
        })}
                
     </Carousel >
     {/* cards */}
     <section style={{display: 'flex', flexWrap: 'wrap' , justifyContent: "space-between", margin:20}}>
    {
      api.map(cards=>{
        return(
          <>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${cards.backdrop_path}`} />
      <Card.Body>
        <Card.Title>{cards.title}</Card.Title>
        <Card.Text>
        {cards.overview }
        </Card.Text>
        <Button  variant="primary" onClick={()=>Navigate("/description", {state:{cards}})}>more about</Button>
      </Card.Body>
    </Card>
          </>
        )
      })
    }
    </section>
        </div>
    )


}
export default Boot