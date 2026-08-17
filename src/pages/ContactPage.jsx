const contactLinks = [
  {
    label: "Mail",
    value: "fredrikmoellenbergdot@gmail.com",
    href: "mailto:fredrikmoellenbergdot@gmail.com",
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/frea999",
    href: "https://github.com/frea999",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Fredrik Møllenberg",
    href: "https://www.linkedin.com/in/fredrik-m%C3%B8llenberg-22ba24368/",
    external: true,
  },
];

function ContactPage() {
  return (
    <div className="page narrow">
      <p className="eyebrow">Kontakt</p>
      <h1>Lad os tale sammen.</h1>
      <p className="lead">
        Skriv en mail eller find mig på GitHub og LinkedIn, jeg svarer
        gerne på spørgsmål om projekter og samarbejde.
      </p>

      <ul className="contact-list">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              rel={link.external ? "noreferrer" : undefined}
              target={link.external ? "_blank" : undefined}
            >
              <span className="contact-label">{link.label}</span>
              <span className="contact-value">{link.value}</span>
            </a>
          </li>
        ))}
      </ul>

      <p className="contact-note">
        Baseret i Aarhus. Åben for praktik, studiejob og samarbejder.
      </p>
    </div>
  );
}

export default ContactPage;
