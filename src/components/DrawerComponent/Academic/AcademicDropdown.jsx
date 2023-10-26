import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { SubItem3 } from '../../../constant/SubmenuItem';



import { SubItemStyles } from '../About/Style';


function AdministrationDropDown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <SubItemStyles className={`${dropdown ? "clicked" : ""}`} onClick={() => setDropdown(!dropdown)}>
      {SubItem3.map((item) => (
        <li key={item.id}>
          <Link
            to={item.path}
            className={item.cName}
            onClick={() => setDropdown(false)}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </SubItemStyles>
  );
}



export default AdministrationDropDown