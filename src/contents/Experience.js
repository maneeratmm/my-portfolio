import React, { Component } from 'react'
import Widecard from '../components/Widecard'

 class Experience extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Experience</h1>
                <Widecard 
                title="DMS Programmer | SCADA & DMS System | Enova Integration Co.,Ltd." 
                where="Vientiane Capital of Laos" 
                from ="2013" 
                to="2017"
                detail="Get requirement,imprement system and database,testing system,trainning customer,create manual document,support customer when have problem in system" 
                />
                <Widecard 
                title="System Engineer | Sattahip Billing System | Enova Integration Co.,Ltd." 
                where="Sattahip District" 
                from ="2017" 
                to="2021" 
                detail="Get requirement,testing system,trainning customer,create all document,support customer when have problem in system,contact with developer team"
                />
            </div>
        )
    }
}

export default Experience
