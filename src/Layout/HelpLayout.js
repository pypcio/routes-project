import { NavLink, Outlet } from "react-router-dom";
export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Help</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        maiores vitae dolor at, officiis ipsam iste culpa provident. Harum
        adipisci nobis iusto rem odio sequi incidunt doloribus delectus vitae
        doloremque?
      </p>
      <nav className="navbar">
        <div className="links-help">
          <NavLink to="faq">View the faq</NavLink>
          <NavLink to="contact">contact</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
