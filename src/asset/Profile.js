import profilePhoto from './img/profile.jpg'

function Profile(){
    return(
        <div className="profile">
            <div className="title-box">
                <img src={profilePhoto} alt=""></img>
                <h1 className="my-name">Jiyeon Lee (she/her)</h1>
                <h2 className="title">Front End Developer</h2>
            </div>
            <a href="mailto:dlwldus12341234@gmail.com" className="email-link">Email me</a>
            <div className="link-box">
                <a href="https://www.linkedin.com/in/jiyeon3243/" className="linked-in" target="_blank"><span className="vh">linkedin</span></a>
                <a href="https://github.com/apple3243" className="github" target="_blank"><span className="vh">github</span></a>
                <a href="https://www.instagram.com/lizzy_lee94/" className="instagram" target="_blank"><span className="vh">instagram</span></a>
            </div>

        </div>
    )
}

export default Profile;