import React, { Component } from 'react'
class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'myskills': ['HTML','CSS','JS','ReactJs','UAT','SQL','SIT','ReactNative','NodeJs','VB']
        }
    }
    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">Skills</h1>
                <ul>
                    {this.state.myskills.map((value)=>{
                        return<li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Skills