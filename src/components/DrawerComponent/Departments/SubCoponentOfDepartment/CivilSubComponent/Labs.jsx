import { Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import { DepartmentBox, LabBox } from '../../Style';
import Survey from './LabComponent/Survey';
const Labs = () => {
  const [displayText, setDisplayText] = useState('');

  const handleClick = (text) => {
    setDisplayText(text);
  };

 

  return (
    <>
    <DepartmentBox>
     <div>
        <h3>Labs</h3>
        <Typography>
          The Civil Engineering department has modern equipped class rooms and well established laboratories to enhance the understanding of the concepts through practical exposure.
        </Typography>
        </div>
      <LabBox > 
      <div style={{flex: 1}}>
        <button  onClick={() => handleClick('Surveying Lab')}>
          Surveying Lab
        </button>
        <button  onClick={() => handleClick('Environmental Engineering Lab')}>
          Environmental Engineering Lab
        </button>
        <button  onClick={() => handleClick('Structural Analysis Lab')}>
          Structural Analysis Lab
        </button>
        <button  onClick={() => handleClick('Building Material Lab')}>
          Building Material Lab
        </button>
        <button  onClick={() => handleClick('Geology Lab')}>
          Geology Lab
        </button>
        <button  onClick={() => handleClick('Geotechnical Lab')}>
          Geotechnical Lab
        </button>
        <button  onClick={() => handleClick('Transportation Lab')}>
          Transportation Lab
        </button>
        <button  onClick={() => handleClick('Hydraulics and Hydraulic Machines Lab')}>
          Hydraulics and Hydraulic Machines Lab
        </button>
        <button  onClick={() => handleClick('CAD Lab')}>
          CAD Lab
        </button>
      </div>
<div>
      {displayText === 'Surveying Lab' && (
        <Typography><Survey/></Typography>
      )}

      {displayText === 'Environmental Engineering Lab' && (
        <Typography>hello</Typography>
      )}

      {displayText === 'Structural Analysis Lab' && (
        <Typography>Content for Structural Analysis Lab...</Typography>
      )}

      {displayText === 'Building Material Lab' && (
        <Typography>Content for Building Material Lab...</Typography>
      )}

      {displayText === 'Geology Lab' && (
        <Typography>Content for Geology Lab...</Typography>
      )}

      {displayText === 'Geotechnical Lab' && (
        <Typography>Content for Geotechnical Lab...</Typography>
      )}

      {displayText === 'Transportation Lab' && (
        <Typography>Content for Transportation Lab...</Typography>
      )}

      {displayText === 'Hydraulics and Hydraulic Machines Lab' && (
        <Typography>Content for Hydraulics and Hydraulic Machines Lab...</Typography>
      )}

      {displayText === 'CAD Lab' && (
        <Typography>Content for CAD Lab...</Typography>
      )}
      </div>
      </LabBox>
      </DepartmentBox>
    </>
  );
};

export default Labs;
