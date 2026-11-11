import "../assets/css/components/header.css";
import uinLogo from "../assets/img/uinLogo.png";
import testPfp from "../assets/img/tigrdop.jpg";

export default function Header() {
  const navItems = [
    {
      label: "Explore",
      route: "/",
    },
    {
      label: "My Jobs",
      route: "/jobs",
    },
    {
      label: "For Employers",
      route: "/",
    },
  ];

  return (
    <header>
      <img src={uinLogo} />
      <h1>Internship Sharing Board</h1>

      <div className="flex-fullgap"></div>

      <div className="navbar-container">
        {navItems.map((n) => (
          <a href={n.route}>{n.label}</a>
        ))}
      </div>

      <img className="pfp" src={testPfp} />
    </header>
  );
}
