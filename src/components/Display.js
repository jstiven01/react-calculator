import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Display extends React.Component {
    static propTypes = {
        result: PropTypes.string.isRequired,
    }

    static defaultProps = {
        result: '0'
    }

    render(){
        const {result} = this.props
        return (

        )
    }
}

export default Display