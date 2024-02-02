import React from "react";
import "./homepage.css";
import SimpleImageSlider from "react-simple-image-slider";

const HomePage = () => {
  
  const sliderContainerStyle = {
      marginLeft: '15px', // Adjust margin-left as needed
      marginRight: '10px', // Adjust margin-right as needed
    };
  const images = [
    { url: "images/job_portal_4.jpg", title: "Image 1" },
    { url: "images/job_portal_5.jpg", title: "Image 2" },
    { url: "images/job6.jpg", title: "Image 3" },
  ];
  const imageCardsData = [
    {
      imageUrl: "images/job1.jpg",
      title: " ONLINE JOB PORTAL ",
      description: (
        <div>
          Today people are accustomed to accessing <br></br>meaningful information from a
          huge array <br></br>of sources. The reality is that <br></br>workplace learning happens
          continuously <br></br>in lots of different ways.
        </div>
      ),
      images:'images',
    },
    {
      imageUrl: "images/job2.jpg",
      title: " EMPLOYER MANAGEMENT SYSTEM ",
      description: (
        <div>The Employee management system <br></br>runs online , which allows you to<br></br> access any information
        from anywhere <br></br>in the worls at any given <br></br>time , as long as you
         have internet<br></br> access. Manage your employees <br></br>from anywhere.
    </div>
      ),
      images:'images'
      },
    {
      imageUrl: "images/job.jpeg",
      title: " JOB APPLICATION ",
      description:(
        <div>Many UW employees have multiple records<br></br> in this database ,
         either because they <br></br>hold more than one job title or becausce 
       <br></br> their salary is paid out<br></br> of multiple funding sources</div>
      ),
    },
  ];
  return (
    <React.Fragment>
    
      <div className="homepage">
        <div class="container1">
          <div class="row"></div>
        </div>
        <div>
        <section>
        <div class="content">
          <h2>Job Aggregator</h2>
          <h2>Job Aggregator</h2>
        </div>
      </section>
          <br></br>
          <span className="heading2">
            A complete solution for managing Jobs, Companies, and Job Seekers
          </span>
        </div>
        <br></br>
        <div className="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="../about/about/ab.html">AboutUs</a></li>
            <li><a href="/findjob">All Jobs</a></li>
            <li><a href="/company_report">Companies</a></li>
            <li><a href="/selectrole">Login</a></li>
            <li><a href="/selectregisterrole">SignUp</a></li>
            <li><a href="/contactform">Contact</a></li>
          </ul>
        </div>
        
        <div style={sliderContainerStyle}> {/* Apply margin styles to this wrapper */}
          <SimpleImageSlider
          width={1490}
          height={500}
          images={images}
          showBullets={true}
          showNavs={true}
          transitionTime={2000}
          transitionDelay={2500}
          autoPlay={true}
          loop={true}
          />
        </div>
        <br></br>
        <div className="image-cards-container">
          {imageCardsData.map((card, index) => (
            <div className="image-card" key={index}>
              <img src={card.imageUrl} alt={card.title} className="card-image" height={200} width={300}/>
              <div className="card-content">
                <h2 className="card-title">{card.title}</h2>
                <br></br>
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="copyright">Copyright ©2024 Job Aggregator. All rights reserved.</p><br></br>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
