const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src="../public/images/brand_logo.png" alt="brand logo" />
        <ul>
          {/* <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li> */}

          <li>
            <a href="#">Menu </a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">About </a>
          </li>
          <li>
            <a href="#"> Contact</a>
          </li>
        </ul>
        <button>Login</button>
      </div>
    </nav>
  );
};
export default Nav;
