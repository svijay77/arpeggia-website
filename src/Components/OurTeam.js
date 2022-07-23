import React from "react"
import "./styles.css"

export default function OurTeam() {
    return (
        <div className = "bg-1">
            <h1 className = "header-1">Our Team.</h1>
            <div className = "info-box">
                <img className = "team-photo" src = "../assets/sarv.jpg" alt = "one of our team members"/>
                <div className = "quick-facts">
                    <p> 
                        <strong> Name: </strong> Julien Jin-Asma
                    </p>
                    <br></br>
                    <p>
                        <strong> Major: </strong> Business
                    </p>
                    <br></br>
                    <p>
                        <strong> Chief Executive Officer</strong>
                    </p>
                </div>
                <div className = "bio">
                    <p>
                        Julien has 13 years of experience playing piano. He created Arpeggia in highschool, 
                        teaching music to students from his former elementary school. 
                        Julien focuses on the overall direction of the business aspect of Arpeggia.
                    </p>
                </div>
            </div>
            <div className = "info-box">
                <img className = "team-photo" src = "../assets/sarv.jpg" alt = "one of our team members"/>
                <div className = "quick-facts">
                <p> 
                        <strong> Name: </strong> Joseph Anderson
                    </p>
                    <br></br>
                    <p>
                        <strong> Major: </strong> Music Education
                    </p>
                    <br></br>
                    <p>
                        <strong> Chief Operations Officer</strong>
                    </p>
                </div>
                <div className = "bio">
                    <p>
                        Joseph has experience working with kids in the elementary school range due to being a camp counselor for six years. 
                        He also has experience in music, performing multiple gigs in the Chicago area. 
                        Joseph focuses on creating high-quality music curriculums.
                    </p>
                </div>

                </div>
            <div className = "info-box">
                <img className = "team-photo" src = "../assets/sarv.jpg" alt = "one of our team members"/>
                <div className = "quick-facts">
                <p> 
                        <strong> Name: </strong> Sarvagnya Vijay
                    </p>
                    <br></br>
                    <p>
                        <strong> Major: </strong> CS and Statistics
                    </p>
                    <br></br>
                    <p>
                        <strong> Chief Technical Officer</strong>
                    </p>
                </div>
                <div className = "bio">
                        <p>
                            Sarvagnya has 7 years of experience playing guitar and 4 years of experience teaching children as a swim instructor. 
                            He aids in the development of our website as well as handle the data we create.
                        </p>
                </div>
            </div>
            <div className = "info-box">
                <img className = "team-photo" src = "../assets/sarv.jpg" alt = "one of our team members"/>
                <div className = "quick-facts">
                <p> 
                        <strong> Name: </strong> Saumya Madhan
                    </p>
                    <br></br>
                    <p>
                        <strong> Major: </strong> CS and Economics
                    </p>
                    <br></br>
                    <p>
                        <strong> Chief Marketing Officer</strong>
                    </p>
                </div>
                <div className = "bio">
                    <p>
                        Sam has 7 years of experience playing flute and experience as a marching band student leader and tutor for elementary-aged students. 
                        She focuses on marketing and outreach for Arpeggia.
                    </p>
                </div>

            </div>
        </div>
    );
}