import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  return (
    <header className=" shadow-lg p-4 bg-primary">
      
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <div>
            <Link href="/" className="navbar-brand">
              LOGO
            </Link>
          </div>

          <div className="d-flex gap-4 list-unstyled ">
            <li className="nav-item">
              <Link
                className="nav-link text-white d-flex flex-column align-items-center fs-4"
                href="/"
              >
                <i className="fa-solid fa-house-chimney"></i>
                <p>Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white d-flex flex-column align-items-center fs-4"
                href="/ads"
              >
                <i className="fa-solid fa-database"></i>
                <p> Ads</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white d-flex flex-column align-items-center fs-4"
                href="/admin"
              >
                <i className="fa-solid fa-database"></i>
                <p> Admin</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white d-flex flex-column align-items-center fs-4"
                href="/login"
              >
                <i className="fa-solid fa-user-plus"></i>
                <p> LogIn</p>
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
