import SubPageHeader from "../components/SubPageHeader.jsx";

export default function Contact() {
  return (
    <>
      <SubPageHeader />
      <section id="contact">
        <div className="md:mx-auto md:container px-8">
          <p className="text-2xl">You can find me here</p>
          <ul className="list">
            {/*<a href="https://www.fettah.dev/">🌐fettah.dev</a>   */}
            <li>
              <a href="mailto:fettahaud@mail.com">📧 fettahaud@mail.com</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/fettah-aud">
                🔗linkedin.com/fettah-aud
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Fettah_Aud">
                🐦 twitter.com/Fettah_Aud
              </a>
            </li>
            <li>
              <a href="https://github.com/FettahAud">🐱github.com/FettahAud</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
