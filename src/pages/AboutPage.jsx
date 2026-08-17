function AboutPage() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="page">
      <div className="about-layout">
        <div>
          <p className="eyebrow">Om mig</p>
          <h1>Hvem er jeg?</h1>
          <p className="lead">
            Jeg studerer multimediedesign på Aarhus Erhvervsakademi, og jeg
            har interesse for både design og programmering. Det som jeg godt
            kan lide ved det jeg laver er, at man får lov til at komme med
            kreative løsninger, som også kræver en del eftertanke og
            research.
          </p>
          <p className="lead">
            Jeg arbejder bedst i hold, hvor jeg kan få lov at sparre med en
            gruppe og diskutere, hvad den bedste løsning på et problem er.
            Jeg vil rigtig gerne udvikle mig inden for kodning, visuel
            identitet og at bruge React.
          </p>
        </div>

        <div className="about-photos">
          <img src={`${base}mig.jpg`} alt="Fredrik Møllenberg" />
          <img src={`${base}mig2.jpg`} alt="Fredrik Møllenberg" />
          <img src={`${base}cat.jpg`} alt="Kat" />
          <img src={`${base}rolls.jpg`} alt="Rulleskøjter" />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
