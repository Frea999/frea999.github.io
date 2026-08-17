function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>© {year} Fredrik Møllenberg</p>
      <ul className="footer-links">
        <li>
          <a href="https://github.com/frea999" rel="noreferrer" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/fredrik-m%C3%B8llenberg-22ba24368/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:fredrikmoellenbergdot@gmail.com">Email</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
