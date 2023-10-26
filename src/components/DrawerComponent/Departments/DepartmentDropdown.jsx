import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { SubItem4 } from '../../../constant/SubmenuItem';
import { SubItemStyles } from '../About/Style';
const DepartmentDropdown = () => {
    const [dropdown, setDropdown] = useState(false);
  return (
    <SubItemStyles className={`${dropdown ? "clicked" : ""}`} onClick={() => setDropdown(!dropdown)}>
    {SubItem4.map((item) => (
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
  )
}

export default DepartmentDropdown