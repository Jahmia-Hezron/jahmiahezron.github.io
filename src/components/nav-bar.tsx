

const Nav_bar = () => {
    return (
      < nav className="navbar">
        <div className="navbar-start">
           <ul className="navbar-items p-0">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/tech-stack">Tech Stack</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="/" className="btn btn-ghost normal-case text-xl">RESUME</a>
        </div>
      </nav>
    );
}

export default Nav_bar;