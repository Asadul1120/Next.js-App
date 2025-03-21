import Link from 'next/link';

export default function Nav() {
  return (
    <ul className="nav flex-column ">
      <li className="nav-item  bg-dark p-2  mb-2 rounded  ">
        <Link href="/admin/addPerson" className=" text-white text-decoration-none text-center ">
          AddPerson
        </Link>
      </li>
      <li className="nav-item  bg-dark p-2  mb-2 rounded">
        <Link href="/admin/AddDuty" className=" text-white text-decoration-none text-center" >
          AddDuty
        </Link>
      </li>
      <li className="nav-item  bg-dark p-2  mb-2 rounded">
        <Link href="/admin/ads" className=" text-white text-decoration-none text-center">
         addAdmin
        </Link>
      </li>
    </ul>
  );
}
