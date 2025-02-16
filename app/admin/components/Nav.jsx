import Link from 'next/link';
import AddPerson from '../add/page';

export default function Nav() {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link href="/admin/add" >
          AddPerson
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/admin/users" >
          Users
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/settings">
         set
        </Link>
      </li>
    </ul>
  );
}
