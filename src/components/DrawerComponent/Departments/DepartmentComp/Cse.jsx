import React,{useState} from 'react'
import CseSwipeImages from '../imageSwipe/CseSwipeImages';
import { Container } from '../Style';
import { Typography } from '@mui/material';
import AboutDepartment from '../SubCoponentOfDepartment/CseSubComponenent/AboutDepartment';
import VisionMision from '../SubCoponentOfDepartment/CseSubComponenent/VisionMision';
import Courses from '../SubCoponentOfDepartment/CseSubComponenent/Courses';
import Labs from '../SubCoponentOfDepartment/CseSubComponenent/Labs';
  import Sybllabus from '../SubCoponentOfDepartment/CseSubComponenent/Sybllabus'
import HodFaculty from '../SubCoponentOfDepartment/CseSubComponenent/HodFaculty';
const Cse = () => {
  var paragraphs = {
    department: <AboutDepartment/>,
    vision: <VisionMision/>,
    courses:<Courses/>,
    labs: <Labs/>,
    hod: <HodFaculty/>,
    syllabus: <Sybllabus/>,
    events:'abot vision',
  };
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };
  return (
    <>
    <div>
    <CseSwipeImages/>
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
          <Typography>{selectedButton ? paragraphs[selectedButton] :<AboutDepartment/>}</Typography>
        </div>
      </Container>
      </>
  )
}

export default Cse