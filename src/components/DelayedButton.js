// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

    blh = (event) => {
        event.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }
        


    render() {
        return (
            <button onClick={this.blh}>
                Delayed
                </button>
        )
    }

}
    



export default DelayedButton