import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { SubItem2 } from '../../../constant/SubmenuItem';



import { SubItemStyles } from '../About/Style';


function AdministrationDropDown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <SubItemStyles className={`${dropdown ? "clicked" : ""}`} onClick={() => setDropdown(!dropdown)}>
      {SubItem2.map((item) => (
        <li key={item.id}>
          <Link
            to={item.path}
            className={item.CName}
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