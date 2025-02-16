import Nav from "@/app/admin/components/Nav";

export default function Layout({ children }) {
  return (
    <div className="container">
      <div className="d-flex  ">
        {/* Sidebar */}
        <div className="bg-light col-3  col-lg-2 p-3">
          <Nav />
        </div>

        {/* Main Content */}
        <div className=" col-9  col-lg-10 p-4 overflow-auto">{children}</div>
      </div>
    </div>
  );
}
