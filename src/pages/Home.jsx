import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import Service from "../components/Service/Service";
import Techstack from "../components/TechStack";
import Testimonial from "../components/Testimonial/Testimonial";
import data from "../data.json";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Preloader from '../components/Preloader/Preloader';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log("loading...............")
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        console.log("done..................")
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setUserData(userData);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(error)
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <Preloader />; // Show preloader while loading
  }

  if (error) {
    navigate('/error'); // Redirect to /error page
    return null; // Render nothing while redirecting
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { heroData, aboutData, experienceData, portfolioData, serviceData, contactData, footerData } = data;
  const { user, skills } = userData;

  return (
    <main className="wrapper">
      <Hero data={user} />
      {aboutData && <About data={aboutData} fetched={user} />}
      {experienceData && <Experience data={experienceData} fetched={user} />}
      {serviceData && <Service data={user} />}
      {portfolioData && <Portfolio data={user} />}
      <Testimonial data={user} />
      {skills && <Techstack data={skills} />}
      <Contact data={contactData} />
      <Footer data={footerData} fetched={user} />
    </main>
  );
}

export default Home;
