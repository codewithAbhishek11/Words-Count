import React, { Component } from 'react'

export class Child extends Component {
    componentWillUnmount(){
        alert("Child will Unmount")
    }

    render() {
        return (
            <div>
                Child Component
            </div>
        )
    }
}

export default Child
