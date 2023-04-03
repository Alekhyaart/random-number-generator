// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  changeValue = () => {
    const getRandomNumber = Math.ceil(Math.random() * 100)
    return this.setState(() => ({
      count: getRandomNumber,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="num-container">
        <div className="mid-container">
          <h1 className="num-head">Random Number</h1>
          <p className="num-para">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="button-container">
            <button type="button" className="button" onClick={this.changeValue}>
              Generate
            </button>
            <p className="count-value">{count}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
