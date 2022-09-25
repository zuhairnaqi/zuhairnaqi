import React from "react"
import "./style.css"
import ProfileImg from "../../assets/images/profile.jpeg"

export default function AboutMe() {
  return (
    <div className="me-container">
      <div className="me-left-container">
        <img src={ProfileImg} className="profile-img" />
      </div>
      <div>
        <h2 className="heading">About Me</h2>
        <p className="me-description">
          Hi I'm Zuhair Naqi, a passionate Software Engineer and an Open Source
          Contributor for Web and Mobile Apps, mainly Javascript ♥
        </p>
      </div>
    </div>
  )
}
