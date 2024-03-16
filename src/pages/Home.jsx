import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import Service from "../components/Service/Service";
import Techstack from "../components/TechStack";
import Testimonial from "../components/Testimonial/Testimonial";
import data from "../data.json";
import { useState,useEffect } from "react";

const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Define a function to fetch the API
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setUserData(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Call the fetchUserData function when the component mounts
    fetchUserData();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render
console.log(userData)
  const { heroData, aboutData, experienceData, portfolioData, serviceData, blogData, sliderData, contactData, footerData } = data;
  return (
    <>
      <main className="wrapper">
      {userData && <Hero data={userData.user} />}
        {userData && <About data={aboutData} fetched={userData.user} />}
        {userData && <Experience data={experienceData} fetched={userData.user} />}
        {userData && <Service data={userData.user} />}
        {userData && <Portfolio data={userData.user} />}
        {userData && <Testimonial data={userData.user} />}
        {userData && <Techstack data={userData.user.skills}/>}
        {/* <Blog data={blogData} /> */}
        <Contact data={contactData} />
        {userData && <Footer data={footerData} fetched={userData.user} />}
      </main>
    </>
  )
}

export default Home;
