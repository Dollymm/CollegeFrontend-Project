import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { SubItemStudent } from '../../../constant/SubmenuItem';
import { SubItemStyles } from '../About/Style';

function StudentDropdown() {
    const [dropdown, setDropdown] = useState(false);
  return (
    <SubItemStyles className={`${dropdown ? "clicked" : ""}`} onClick={() => setDropdown(!dropdown)}>
    {SubItemStudent.map((item) => (
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

export default StudentDropdown