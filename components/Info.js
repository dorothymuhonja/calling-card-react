import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img src="./img/Dorothy.jpg" className="img"/>
            <h2>Dorothy Muhonja</h2>
            <p className="title">Frontend Developer</p>
            <p className="website">dorothymuhonja.website</p>
            <button className="btn"><img src="./img/Mail.svg" className="email-icon"/> Email</button>
        </div>
    )
}