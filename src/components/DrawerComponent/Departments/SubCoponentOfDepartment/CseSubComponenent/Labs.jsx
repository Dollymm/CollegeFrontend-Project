import React, { useState } from "react";
import { DepartmentBox, LabBox } from "../../Style";
import Cprogramming from "./LabsCse/cProgramming";
import PythonProgramming from "./LabsCse/PythonProgramming";

const Labs = () => {
  const [displayText, setDisplayText] = useState(null);

  const handleDisplay = (text) => {
    setDisplayText(text);
  };

  const renderContent = () => {
    switch (displayText) {
      case " C/C++ Programming Lab":
        return <Cprogramming />;
      case " Computer Workshop (Python Programming)":
        return <PythonProgramming />;
      // Add cases for other button texts and their corresponding components
      default:
        return null;
    }
  };

  return (
    <DepartmentBox>
      <div>
        <h3>Labs</h3>
        <p>
          The CSE Engineering department has modern equipped classrooms and
          well-established laboratories to enhance the understanding of the
          concepts through practical exposure.
        </p>
      </div>
      <LabBox>
        <div style={{ flex: 1 }}>
          <button onClick={() => handleDisplay(" C/C++ Programming Lab")}>
            C/C++ Programming Lab
          </button>
          <button onClick={() => handleDisplay(" Computer Workshop (Python Programming)")}>
            Computer Workshop (Python Programming)
          </button>
          <button onClick={() => handleClick("Digital Electronics Lab")}>
            Digital Electronics Lab
          </button>
          <button
            onClick={() =>
              handleClick("Object Oriented Programming & Methodology")
            }
          >
            Object Oriented Programming & Methodology
          </button>
          <button onClick={() => handleClick(" Data Structure Lab")}>
            Data Structure Lab
          </button>
          <button onClick={() => handleClick(" Software Engineering Lab")}>
            Software Engineering Lab
          </button>
          <button
            onClick={() =>
              handleClick("Theory of Automata & Formal Languages Lab")
            }
          >
            Theory of Automata & Formal Languages Lab
          </button>
          <button
            onClick={() =>
              handleClick("   Computer Organization & Architecture Lab")
            }
          >
            Computer Organization & Architecture Lab
          </button>
          <button onClick={() => handleClick(" DBMS Lab")}>DBMS Lab</button>
          <button onClick={() => handleClick("Graphics Lab")}>
            Graphics Lab
          </button>
          <button onClick={() => handleClick("Networking Lab")}>
            Networking Lab
          </button>
          <button onClick={() => handleClick(" Advance JAVA Lab")}>
            Advance JAVA Lab
          </button>
          <button
            onClick={() =>
              handleClick(" Visual Programming & DotNet Technologies LAB")
            }
          >
            Visual Programming & DotNet Technologies LAB
          </button>
          <button onClick={() => handleClick(" Compiler Design Lab")}>
            Compiler Design Lab
          </button>
          <button onClick={() => handleClick(" Operating System Lab")}>
            Operating System Lab
          </button>
          <button onClick={() => handleClick(" Artificial Intelligence Lab")}>
            Artificial Intelligence Lab
          </button>
          <button onClick={() => handleClick("LINUX Administration Lab")}>
            LINUX Administration Lab
          </button>
          <button onClick={() => handleClick("Web Technology Lab")}>
            Web Technology Lab
          </button>
          <button onClick={() => handleClick(" Projects Lab")}>
            Projects Lab
          </button>
        </div>
        <div>
          {renderContent()}
        </div>
      </LabBox>
    </DepartmentBox>
  );
};

export default Labs;
