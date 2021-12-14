import React from 'react'
import './Display.css'
var moment = require('moment');

const Display = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  const imgURL = `owi owi-${reading.weather[0].icon} owi-5x`;


  return (
    
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
            <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
            <i className={imgURL}></i>
            <h4>{Math.round(reading.main.temp)} °F</h4>
          </div>
          <div class="flip-card-back">
            <h4>Minimum Temperature: {Math.round(reading.main.temp_min)} °F</h4>
            <h4>Maximum Temperature: {Math.round(reading.main.temp_max)} °F</h4>
            <div className="card-body">
              <p className="card-text">{reading.weather[0].description}</p>
            </div>
          </div>
        </div>
      </div>
    


  )
}
export default Display;