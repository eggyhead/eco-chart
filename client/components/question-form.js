import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const question = "Distance travelled annually by car"
const answerOptions = [{"text": "More than 15,000 miles", "value": 12, "checked": "No"},{"text": "Between 10,000 and 15,000 miles", "value": 10, "checked": "No"}, 
{"text": "Between 1,000 and 10,000 miles", "value": 6, "checked": "No"},{"text": "Less than 1,000 miles", "value": 4, "checked": "No"}, {"text": "No miles by car", "value": 0, "checked": "No"}]

/**
 * COMPONENT
 */
class QuestionForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: {}
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt) {
        let answerIdx = answerOptions.indexOf(evt.target.value)
        console.log('target val', evt.target.value)
        answerOptions.map((val, idx) => {
            if (idx !== answerIdx) val.checked = "No"
            else val.checked = "Yes"
        })
        this.setState({selectedOption: answerOptions[answerIdx]})
    }

  render() {
    return (
        <div>
          <form name={question} >
            <div className="radio">
            {answerOptions.map((answer, index)=> {
                return (
                    <label key={index} >
                        <input type="radio" name={answer} value={answer.value} onChange={this.handleChange}/>
                        {" " + answer.text} 
                    </label>
                )
            })}   
            </div>
          </form>
        </div>
      )
  }  
  
}

export default QuestionForm;

