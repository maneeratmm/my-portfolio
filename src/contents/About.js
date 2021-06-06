import React, { Component } from 'react'
import profilepic from '../img/profile.PNG'

 class About extends Component {
    render() {
        return (
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src={profilepic} alt="profile" className="profilepic" />
                <h3>Hi,I'm Maneerat</h3>
                <p>I'm started as a programmer with 4 year experience,software engineer 3 year experience but I like testing and I want to be a software tester.I'm work hard to learning testing skills by myself, learning from internet and learning from online course</p>
            </div>
        )
    }
}
export default About