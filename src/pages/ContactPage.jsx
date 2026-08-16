function ContactPage() {
  return (
    <div className="page narrow">
      <p className="eyebrow">Kontakt</p>
      <h1>Lad os tale sammen.</h1>
      <p className="lead">
        Skriv en mail eller find mig på GitHub og LinkedIn — jeg svarer
        gerne på spørgsmål om projekter og samarbejde.
      </p>

      <ul className="contact-list">
        <li>
          <a href="mailto:fredrikmoellenbergdot@gmail.com">fredrikmoellenbergdot@gmail.com</a>
        </li>
        <li>
          <a href="https://github.com/frea999" rel="noreferrer" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/fredrik-m%C3%B8llenberg-22ba24368/" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactPage;
