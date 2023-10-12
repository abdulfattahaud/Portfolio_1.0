import Image from 'next/image'
import './styles/page.scss'
import Link from "next/link";

export default function Home() {
  return (
    <main>
        <header className="header">
            <span>
                FETTAH
            </span>
            <div>
                <ul>
                    <li className="active">
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                    <li>
                        <Link href="#projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
      <section className="hero" id="main">
        <h1 className="title">
          Hi there,<br />
          I’m Abdelfettah,<br />
          a Frontend / Creative<br />
          Developer
        </h1>

          <div className="actions">
              <div className="buf buf-primary">
                  <Link href="#projects">See what I do</Link>
              </div>
              <div className="buf buf-black">
                  <Link href="">Hire me</Link>
              </div>
          </div>
      </section>
    </main>
  )
}
