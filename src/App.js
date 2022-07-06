import { useEffect, useState } from "react";
import { dataCars } from "./data/cars"
import './App.css';

function App() {

  const [newCar, setNewCar] = useState({});
  const [cars, setCars] = useState(dataCars);
  const [bannerShowing, setBannerShowing] = useState(false);
 
  useEffect(() => {
    function showBanner(){
      setBannerShowing(true)
    }
    setTimeout(showBanner, 1000)
  },[])

  useEffect(() => {
    console.log(newCar);
    console.log('newCar changed');
  },[newCar])

  useEffect(() => {
    console.log(cars);
  },[cars])

  const submitForm = (e) => {
    e.preventDefault();
    // const updatedCars = cars.push({make: newCar, model: null});
    setCars(cars => [...cars, newCar]);

    // setCars(updatedCars);
  }


  const deleteCar = (position) => {
    console.log(position);
    setCars(cars.filter((_, i) => i !== position))
  }

  return (
    <div className="App">
         <h1>Cars</h1>

         {
            cars.length > 0 ? 
            cars.map((car, i) => {
              return (
                <p key={i}>
                  {car.make} {car.model && car.model} { car.id}
                  <button onClick={() => deleteCar(i)}>Delete car</button>
                </p>
              )
              
            })
            : 
            <p>There are no cars</p>
         }

         

         <p>Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Illum necessitatibus dolorum 
          optio quasi, minima distinctio, voluptate praesentium 
          ea impedit fuga excepturi. Sunt natus ducimus adipisci 
          quis, inventore veniam esse debitis.</p>

          <form onSubmit={submitForm}>

            <h2>Add car</h2>
            <div className="form-row">

                <label htmlFor="make">Make:</label>
                <input 
                type="text" 
                id="make" 
                onChange={
                  (e) => setNewCar({...newCar,  make: e.target.value })
                }
                />

            </div>

            <div className="form-row">

                <label htmlFor="model">Model:</label>
                <input 
                type="text" 
                id="model" 
                onChange={
                  (e) => setNewCar({...newCar,  model: e.target.value })
                }
                />

            </div>
           
            <button type="submit">Submit</button>
          </form>

         
          {
            bannerShowing ?
            <div className="cta-banner">
              <span>Please sign up to the newsletter</span>
              <button onClick={() => setBannerShowing(false)} >
                X
              </button>
            </div>
            :
            ''
          }
          
    </div>
  );
}

export default App;
