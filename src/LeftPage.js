import React, { Component } from "react";
import "./LeftPage.css";
import CountryData from "./Data/countries.json";
import StateData from "./Data/states.json";
import CityData from "./Data/cities.json";
export default class LeftPage extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", country: "", ustates: "", city: "" };
  }
  mychangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };
  render() {
    return (
      <form>
        <div className="optionselect">
          <h4>Filters</h4>
          <h3>Solution Groups</h3>
          <select
            name="country"
            onChange={this.mychangeHandler}
            value={this.state.country}
          >
            {CountryData.map((countryDetail, index) => {
              return (
                <option value={countryDetail.name}>{countryDetail.name}</option>
              );
            })}
          </select>
          <h3>Solutions</h3>
          <select
            name="ustates"
            value={this.state.ustates}
            onChange={this.mychangeHandler}
          >
            {StateData.map((stateDetail, index) => {
              return (
                <option value={stateDetail.name}>{stateDetail.name}</option>
              );
            })}
          </select>
          <h3>Solution Detail</h3>
          <select
            name="city"
            value={this.state.city}
            onChange={this.mychangeHandler}
          >
            {CityData.map((cityDetail, index) => {
              return <option value={cityDetail.name}>{cityDetail.name}</option>;
            })}
          </select>
          <imput type="sub"
        </div>
      </form>
    );
  }
}
