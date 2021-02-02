import React, { useState } from "react";
import { Seat } from './Seat.js';

function App() {

  // function handleClick(e) {
  //   console.log(e);
  // }
  
const [nums, setNums] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);


  return (
    <div className="carriage-row">

    {
    nums.map((value, index) => {

        return < Seat seatNum={value} key={index}/>
      })
      
      }

    </div>
  );

  }

export default App;
