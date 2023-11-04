import React from 'react';

const AcademicClender = () => {
  const navigateToLink = () => {
    window.open("https://uktech.ac.in/en/page/academic-calender", '_blank');
  };

  return (
    <div onClick={navigateToLink} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
      Navigate to Academic Calendar
    </div>
  );
};

export default AcademicClender;
