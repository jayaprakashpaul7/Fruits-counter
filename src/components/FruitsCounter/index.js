// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncrementMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>
            Bob ate <span>{mango}</span> mangoes <span>{banana}</span> bananas
          </h1>
          <div>
            <div className="div2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="Mango"
              />
              <button onClick={this.onIncrementMango} type="submit">
                Eat Mango
              </button>
            </div>
            <div className="div2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="Banana"
              />
              <button type="submit" onClick={this.onIncrementBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
