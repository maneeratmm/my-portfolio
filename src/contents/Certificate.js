import React, { Component } from 'react'
import Widecard from '../components/Widecard'

 class Certificate extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Certificate</h1>
                <Widecard 
                title="ฝึกสร้าง เว็บ ด้วย React อย่างมือโปร" 
                where="Udemy" 
                from ="april-2020" 
                to="june-2020" 
                credentialid="UC-93b69840-bf1f-4a74-9412-393262d10902"
                link="https://www.udemy.com/certificate/UC-93b69840-bf1f-4a74-9412-393262d10902/"
                />
                <Widecard 
                title="The Complete 2021 Software Testing Bootcamp" 
                where="Udemy" 
                from ="april-2021" 
                to="may-2021" 
                credentialid="UC-7eac825c-9542-4912-a646-97f4f7f4950f"
                link="https://www.udemy.com/certificate/UC-7eac825c-9542-4912-a646-97f4f7f4950f/"
                />
            </div>
        )
    }
}

export default Certificate
