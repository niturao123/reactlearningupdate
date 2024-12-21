import React, { useState, useEffect } from 'react';
import '../styling.css/Herobar.css'
export const Herobar = () => {
  // State for the heading
  const [heading, setHeading] = useState('Business Services');

  // useEffect to toggle the heading every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeading((prevHeading) =>
        prevHeading === 'Business Services' ? 'Business Template' : 'Business Services'
      );
    }, 2000);

    // Cleanup function for the interval
    return () => clearInterval(interval);
  }, []);

  // JSX to render the UI
  return (
    <div className="containers">
      <h1  className = "h1">{heading}</h1>
      <p className='p'>
        Aria is a top consultancy company specializing in business growth using<br></br>
        online marketing and conversion optimization tactics.
      </p>
      <button className="button">DISCOVER</button>
    </div>
  );
};
