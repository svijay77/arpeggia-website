import React from "react"
import "./styles.css"

export default function OurTeam() {
    return (
        <div className = "bg-1">
            <h1 className = "header-1">Our Team.</h1>
            <div className = "info-box">
                <div className = "quick-facts">
                    <p> 
                        <span> Name: </span> Julien Jin-Asma
                        <br></br>
                        <span> Major: </span> Business
                        <br></br>
                        <span> Chief Executive Officer</span>
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
                <div className = "quick-facts">
                <p> 
                        <span> Name: </span> Joseph Anderson
                        <br></br>
                        <span> Major: </span> Music Education
                        <br></br>
                        <span> Chief Operations Officer</span>
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
                <div className = "quick-facts">
                    <p> 
                        <span> Name: </span> Sarvagnya Vijay
                        <br></br>
                        <span> Major: </span> CS and Statistics
                        <br></br>
                        <span> Chief Technical Officer</span>
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
                <div className = "quick-facts>">
                    <p> 
                        <span> Name: </span> Saumya Madhan
                        <br></br>
                        <span> Major: </span> CS and Economics
                        <br></br>
                        <span> Chief Marketing Officer</span>
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