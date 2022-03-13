import React from 'react'

function WeatherHeader() {
  return (
    <div>
      <div className="mb-3">
        <label className="form-label m-2">City</label>
        <select className="form-control" name="city-name" id="city-name">
          <option>Istanbul</option>
        </select>
      </div>
    </div>
  )
}

export default WeatherHeader