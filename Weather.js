import React from 'react'
import Display from './Display'
import './Weather.css'
class Weather extends React.Component {
  state = {
    fullData: [],
    dailyData: [],
    city: "",
    n: ''

  }
  onSubmit(e) {
    e.preventDefault();
    this.state.city = this.city.value;
    this.state.n = this.n.value;
    console.log(this.state.n);
    console.log(this.state.city);
    this.componentDidMount();
  }
  // onClick(e) {
  // e.preventDefault();
  //  this.state.n = this.n.value;
  //  console.log(this.state.n);
  //  this.componentDidMount();
  //}
  componentDidMount = () => {
    const weatherURL =
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}2&units=imperial&APPID=add5b02e09a099624b9ab722164fb37b`
    fetch(weatherURL)
      .then(res => res.json())
      .then(data => {
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("15:00:00"))
        this.setState({
          fullData: data.list,
          dailyData: dailyData
        }, () => console.log(this.state))
      })
  }

  formatDisplay = () => {
    return this.state.dailyData.slice(0, this.state.n).map((reading, index) => <Display reading={reading} key={index} />)
  }

  refreshPage = () => {
    window.location.reload(false);
  }
  
  render() {
    return (
      <div >
        <div className="header"><h3><b>WEATHER FORECAST</b></h3><br/><h6><b>By Harshada Thombre</b></h6><br/></div>
        <form className="form">
        <br/>
          <div className="row">
            <div className="col" >
              <h5><b>Enter City, country</b></h5>
            </div>
            <div className="col" >
              <input type="text" placeholder="Enter city,country example: Pune, IN" ref={(c) => (this.city = c)} autoComplete="off" />
            </div>
          </div>
          <br/>
          <div className="row">
          <div className="col" >
            <h5><b>Enter number of days:</b></h5>
            </div>
            <div className="col" >
            <input type="number" placeholder="number of days" ref={(d) => (this.n = d)} />
          </div>
          </div>
          <br/>
          <div className="row">
            <div className="col">
            <button className="btn btn-danger" onClick={this.refreshPage}>Refresh</button>
            </div>
            <div className="col">
              <button className="btn btn-success" onClick={this.onSubmit.bind(this)}>Get Weather</button>
            </div>
          </div>
          <br />
        </form>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div class="card" >
        <div className="row">
         
        <div class="col-md-12">
          <h5><b style={{color: "black"}}>City Entered: {this.state.city}</b></h5>
          </div>
          </div>
        <div className="row">
        <div class="col-md-12">
          <h5><b style={{color: "black"}}>Number of Days Entered: {this.state.n}</b></h5>
          </div>
        </div>
        </div>
        <br /><br />
        <div className="row justify-content-center">
          {this.formatDisplay()}
        </div>

      </div>

    )
  }
}
export default Weather;