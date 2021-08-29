import './App.css';
import Header from './header';
import { useEffect, useMemo, useState} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from '../searchresults';
import HouseFromQuery from '../house/HouseFromQuery';

function App() {
  const [allHouses,setAllHouses]=useState([]);
  useEffect(()=>{
    const fetchHouses=async()=>{
      const rsp=await fetch("houses.json");
      const houses=await rsp.json();
      // console.log(houses);
      setAllHouses(houses);
    }
    fetchHouses();
  },
  []);
  //console.log(allHouses);
  let featuredHouse;
  // if(allHouses.length){
  //   const randomIndex=Math.floor(Math.random()*allHouses.length);
  //   featuredHouse=allHouses[randomIndex];
  // }
  // console.log(featuredHouse);
  //useMemo --> Memoisation
  // when you save a change in the website, below code
  // will store the last information for a short time
  useMemo(()=>{
    if(allHouses.length){
      const randomIndex=Math.floor(Math.random()*allHouses.length);
      featuredHouse=allHouses[randomIndex];
    }
  },[allHouses]);
  return (
    <Router>
      <div className="App">
        <Header subtitle='Buy a house'/>
        <HouseFilter allHouses={allHouses}/>
        <Switch>
          <Route exact path="/">
            <FeaturedHouse house={featuredHouse}/>
          </Route>
          <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses}/>
          </Route>
          <Route path="/house/:id">
            <HouseFromQuery allHouses={allHouses}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
