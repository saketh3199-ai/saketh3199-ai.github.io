import {Link} from "react-router-dom"

import "./index.css"
const CertCol = (props)=>
{
    const {certName,certUrl} = props
    const Col=
    <Link to={`/portfolio/certificate/${certName}`}>
        <div className="cert-card">
                        <img src={certUrl} alt="Certification 1" />
                        <p className="cert-text">{certName}</p>
        </div> 

    </Link>
    
    return Col
}



export default CertCol