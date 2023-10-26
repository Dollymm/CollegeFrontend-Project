import React , { useState } from 'react'

import { Typography,Button } from '@mui/material'


const AboutButton = () => {

    const [showMission, setShowMission] = useState(false);
    const [showVision, setShowVision] = useState(false);
  
    const missionText = (
      <Typography>
        To produce quality manpower equipped with such human and social values
        required to integrate excellent technical skills, leadership, creativity,
        and innovation for the benefit of mankind, for the sustainable development
        of the State of Uttarakhand and to promote research in the emerging
        discipline.
      </Typography>
    );
  
    const visionText = (
      <Typography>
        To develop into a systematic leader and pivot for excellence in technical
        education sector in the state, and catalyzing absorption, innovation,
        diffusion, and transfer of high technology for improved productivity,
        quality of life, and empowerment, thereby affecting regional growth in the
        State of Uttarakhand.
      </Typography>
    );
  
    const handleMissionClick = () => {
      setShowMission(!showMission);
      setShowVision(false); // Hide the vision text
    };
  
    const handleVisionClick = () => {
      setShowVision(!showVision);
      setShowMission(false); // Hide the mission text
    };
  
    return (
      <div>
        <Button variant="outlined" onClick={handleMissionClick}>
          Mission
        </Button>
        <Button variant="outlined" onClick={handleVisionClick}>
          Vision
        </Button>
  
        {showMission && missionText}
        {showVision && visionText}
      </div>
    );
  };
  

export default AboutButton