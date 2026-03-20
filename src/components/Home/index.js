import { Component } from "react"

import "./index.css"

import CertCol from "../CertCol"

const backGroundImageList = 
[
    "background-1",
    "background-2",
    "background-3",
    "background-4"

]

const ContentTextOnScreens = 
[
    {heading:"NARWA SAKETH PAVAN KUMAR",para:"Passionate and detail-oriented Frontend Developer with a strong interest in building clean, responsive, and user-friendly web applications. I enjoy turning ideas into reality through code and continuously improving my skills in modern web technologies."},
    {heading:"ACADEMIC JOURNEY",para:"I hold a Master's degree in Computer Applications with a CGPA of 8.11, complemented by a Bachelor's degree with a CGPA of 7.75. My academic journey has provided me with a strong foundation in programming, problem-solving, and software development principles."},
    {heading:"WHY CHOOSE ME?",para:"You’ve come to the right place. I take the time to truly understand your requirements and transform them into meaningful solutions. By combining my technical expertise with creativity and attention to detail, I aim to deliver products that not only meet your expectations but exceed them."},
    {heading:"MY CERTIFICATIONS",para:" These are the certifications I have earned to strengthen my skills and showcase my dedication to learning. Each one represents a step in my journey as a developer, reflecting the technologies and tools I have mastered along the way."}

]

const certifications=
[
    {certName:"static",certUrl:"https://i.postimg.cc/p9BPTC2V/STATIC.png"},
    {certName:"Responsive",certUrl:"https://i.postimg.cc/DWc7Z622/RW.png"},
    {certName:"Programming Foundations",certUrl:"https://i.postimg.cc/VSFz6gYP/Programming-Foundations.png"},
    {certName:"SQL",certUrl:"https://i.postimg.cc/WFbTJZ4Q/SQL.png"},
    {certName:"Build your own dynamic web apps",certUrl:"https://i.postimg.cc/bGRqJgqB/BYODWA.png"},
    {certName:"Javascript essentials",certUrl:"https://i.postimg.cc/f3vMLCwN/JSE.png"},
    {certName:"Responsive Web Designing with Flexbox",certUrl:"https://i.postimg.cc/HJtTxzpT/RWDUF.png"},
    {certName:"Developer Foundations",certUrl:"https://i.postimg.cc/zLkqB7JZ/DF.png"},
    {certName:"NODE JS",certUrl:"https://i.postimg.cc/5Hmf0gxM/NODEJS.png"}
]


class Home extends Component
{
    state = {index:0}
    DecreaseIndex = ()=>
    {
        //we need to decrement the index here
        //but the index should not go below 0

        this.setState
        (
            (PreviousState)=>
            {
                if (PreviousState.index === 0 )
                {
                    const NewState={index:0}
                    return NewState
                }
                else
                {
                    
                    const NewState = {index:PreviousState.index-1}
                    return NewState
                }
            }
        )

    }

    IncreaseIndex = ()=>
    {
        //we need to increment the index here
        //The index should not go above length of array
          this.setState
        (
            (PreviousState)=>
            {
                if (PreviousState.index === backGroundImageList.length-1)
                {
                    const NewState = {index:backGroundImageList.length-1}
                    return NewState
                }
                else
                {
                            
                    const NewState = {index:PreviousState.index+1}
                    return NewState
                }
            }
        )
    }
    render()
    {

            const {index} = this.state

            const selectorForAppropriateWindowSlided = backGroundImageList[index]
            const headingToBeDisplayed = ContentTextOnScreens[index].heading
            const paraToBeDisplayed = ContentTextOnScreens[index].para
            
            let certifcationsElements
            if (index === ContentTextOnScreens.length-1)
            {
                certifcationsElements = certifications.map
                (
                    (certObj)=>
                    {
                          return <CertCol certName={certObj.certName}  certUrl={certObj.certUrl}/>  
                    }
                )
                    

            }


            else 
            {
                certifcationsElements=
                <div className="attributes-container">
  {/* 1. Creativity */}
  <div className="attribute-card">
    <img src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png" alt="Creativity" className="attribute-img"/>
    <p className="attribute-text">
      Ability to design visually appealing and user-friendly interfaces that engage users.
    </p>
  </div>

  {/* 2. Problem Solving */}
  <div className="attribute-card">
    <img src="https://cdn-icons-png.flaticon.com/512/2910/2910763.png" alt="Problem Solving" className="attribute-img"/>
    <p className="attribute-text">
      Skill to debug, optimize, and implement efficient solutions for complex challenges.
    </p>
  </div>

  {/* 3. Responsive Design */}
  <div className="attribute-card">
    <img src="https://cdn-icons-png.flaticon.com/512/1063/1063452.png" alt="Responsive Design" className="attribute-img"/>
    <p className="attribute-text">
      Capability to build websites that work seamlessly on desktops, tablets, and mobiles.
    </p>
  </div>

  {/* 4. Collaboration */}
  <div className="attribute-card">
    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Collaboration" className="attribute-img"/>
    <p className="attribute-text">
      Ability to work effectively with designers, developers, and stakeholders.
    </p>
  </div>

  {/* 5. Adaptability */}
  <div className="attribute-card">
    <img src="https://cdn-icons-png.flaticon.com/512/1055/1055650.png" alt="Adaptability" className="attribute-img"/>
    <p className="attribute-text">
      Quickly learning new tools, frameworks, and technologies as required.
    </p>
  </div>

  {/* 6. Attention to Detail */}
  <div className="attribute-card">
    <img src="https://cdn-icons-png.flaticon.com/512/1055/1055682.png" alt="Attention to Detail" className="attribute-img"/>
    <p className="attribute-text">
      Ensuring accuracy, clean code, and pixel-perfect design implementation.
    </p>
  </div>

  {/* 7. Time Management */}
  <div className="attribute-card">
    <img src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png" alt="Time Management" className="attribute-img"/>
    <p className="attribute-text">
      Efficiently planning tasks to meet deadlines without sacrificing quality.
    </p>
  </div>

  {/* 8. Communication */}
  <div className="attribute-card">
    <img src="https://cdn-icons-png.flaticon.com/512/1250/1250615.png" alt="Communication" className="attribute-img"/>
    <p className="attribute-text">
      Clear and concise communication with team members and clients.
    </p>
  </div>

  {/* 9. Testing & Debugging */}
  <div className="attribute-card">
    <img src="https://cdn-icons-png.flaticon.com/512/2910/2910766.png" alt="Testing & Debugging" className="attribute-img"/>
    <p className="attribute-text">
      Ability to identify and fix bugs efficiently to ensure robust code.
    </p>
  </div>

  {/* 10. Performance Optimization */}
  <div className="attribute-card">
    <img src="https://cdn-icons-png.flaticon.com/512/2910/2910770.png" alt="Performance Optimization" className="attribute-img"/>
    <p className="attribute-text">
      Writing efficient code to enhance website speed and responsiveness.
    </p>
  </div>

  {/* 11. UX/UI Understanding */}
  <div className="attribute-card">
    <img src="https://cdn-icons-png.flaticon.com/512/2910/2910767.png" alt="UX/UI Understanding" className="attribute-img"/>
    <p className="attribute-text">
      Designing interfaces that are intuitive and provide excellent user experiences.
    </p>
  </div>

  {/* 12. Continuous Learning */}
  <div className="attribute-card">
    <img src="https://cdn-icons-png.flaticon.com/512/2910/2910771.png" alt="Continuous Learning" className="attribute-img"/>
    <p className="attribute-text">
      Staying up-to-date with modern technologies and evolving best practices.
    </p>
  </div>
                </div>
            }
            let certificationContainer = 
            <div className="certfications-container">
                <div className="cert-row">
                        {certifcationsElements} 
                </div>
            </div>

            

            const HomePage=
            <div className={`home-page-container ${selectorForAppropriateWindowSlided}`}>

                         
                        <div className="hero-content">
                        <h1 className="hero-title">{headingToBeDisplayed}</h1>
                        <p className="hero-subtitle">{paraToBeDisplayed}</p>
                        </div>
                    
                        {certificationContainer}
                          
                        
                {/* Left Arrow */}
                <div onClick={this.DecreaseIndex} className="arrow arrow-left">
                    &#10094;
                </div>

                {/* Right Arrow */}
                <div onClick={this.IncreaseIndex} className="arrow arrow-right">
                    &#10095;
                </div>

            </div>
            
            return HomePage
    }
    
}

export default Home