// About.js
import React, { useState, useEffect } from 'react';
import { getData } from './db';

function About() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getData(); // Assuming getData is an async function that fetches data
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Meet Our Visionary Leader: [CEO's Name]</h2>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <p>
            At the helm of our organization stands a leader whose passion, expertise, and unwavering dedication drive our company forward. [CEO's Name] is more than just a CEO; they are the embodiment of our company's values, guiding principles, and vision for the future.
          </p>
          <h3>A Trailblazer in Leadership</h3>
          <p>
            [CEO's Name] brings with them a wealth of experience and a proven track record of success in the industry. With [X] years of leadership experience, they have demonstrated an exceptional ability to navigate challenges, inspire teams, and cultivate innovation.
          </p>
          <h3>A Visionary with Purpose</h3>
          <p>
            Driven by a relentless pursuit of excellence, [CEO's Name] is committed to steering our company towards greater heights. Their visionary outlook and strategic acumen empower us to embrace change, seize opportunities, and achieve sustainable growth.
          </p>
          <h3>A Champion of Innovation</h3>
          <p>
            In an ever-evolving landscape, innovation is key to staying ahead. [CEO's Name] fosters a culture of creativity and forward thinking, encouraging experimentation and pushing boundaries to deliver cutting-edge solutions that exceed customer expectations.
          </p>
          <h3>A Leader with Integrity</h3>
          <p>
            Integrity lies at the core of [CEO's Name]'s leadership philosophy. They uphold the highest ethical standards, fostering trust and transparency at every level of our organization. Their commitment to integrity ensures that we operate with honesty, fairness, and respect in all our endeavors.
          </p>
          <h3>A Collaborative Partner</h3>
          <p>
            [CEO's Name] understands the power of collaboration and the importance of building strong relationships. They actively engage with stakeholders, listen attentively to feedback, and foster an inclusive environment where diverse perspectives are valued and embraced.
          </p>
          <h3>Driving Positive Change</h3>
          <p>
            Beyond business success, [CEO's Name] is dedicated to making a positive impact on society and the environment. They champion corporate social responsibility initiatives, driving meaningful change through philanthropy, sustainability efforts, and community engagement.
          </p>
          <h3>Join Us in Our Journey</h3>
          <p>
            Under [CEO's Name]'s leadership, we are not just a company; we are a community united by a shared vision and a passion for excellence. Join us as we continue to innovate, inspire, and make a difference in the world.
          </p>
          <p>[Company Name] is proud to have [CEO's Name] at the helm, guiding us towards a future filled with endless possibilities.</p>
        </div>
      </div>
    </div>
  );
}

export default About;



