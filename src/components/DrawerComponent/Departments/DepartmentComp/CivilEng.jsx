import React,{useState} from 'react'
import { Typography } from '@mui/material';
import { Container } from '../Style';
import CivilSwipeImage from '../imageSwipe/CivilSwipeImage'
import AboutDepartment from '../SubCoponentOfDepartment/CivilSubComponent/AboutDepartment';
import VisionMission from '../SubCoponentOfDepartment/CivilSubComponent/VisionMission';
import Courses from '../SubCoponentOfDepartment/CivilSubComponent/Courses';
import Labs from '../SubCoponentOfDepartment/CivilSubComponent/Labs';
import HodFaculty from '../SubCoponentOfDepartment/CivilSubComponent/HodFaculty';
import Syllabus from '../SubCoponentOfDepartment/CivilSubComponent/Syllabus';
import { Events } from '../SubCoponentOfDepartment/CivilSubComponent/Events';

const CivilEng = () => {
  const paragraphs = {
    department: <AboutDepartment/>,
    vision: <VisionMission/>,
    courses:<Courses/>,
    labs: <Labs/>,
    hod: <HodFaculty/>,
    syllabus: <Syllabus/>,
    events: <Events/>,
  };
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };
  return (
    <>
    <div>
    <CivilSwipeImage/>
    </div>
    <Container>
        <div>
          {Object.keys(paragraphs).map((button) => (
            <button key={button} onClick={() => handleButtonClick(button)}
             className={selectedButton === button ? 'selected' : ''}
            >
            
              {button.charAt(0).toUpperCase() + button.slice(1)}
            </button>
          ))}
        </div>
        <div>
          <Typography>{selectedButton ? paragraphs[selectedButton] : <AboutDepartment/>}</Typography>
        </div>
      </Container>
      </>
  )
}

export default CivilEng