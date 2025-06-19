import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>365 Days BBG</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/surprise">Surprise</Link>
      </div>
    </nav>
  );
};

export default Navbar;
