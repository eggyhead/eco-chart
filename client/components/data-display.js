import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {SimpleBarChart, SimplePieChart} from '../components'

const DataDisplay = () => {
    return (
        <div>
            <SimpleBarChart />
            <SimplePieChart />
        </div>
    )
}

export default DataDisplay;