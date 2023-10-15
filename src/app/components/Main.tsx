import Link from "next/link";

export default function Main() {
  return (
    <section className="hero" id="main">
      <h1 className="title">
        Hi there,
        <br />
        I’m Abdelfettah,
        <br />
        a Frontend / Creative
        <br />
        Developer
      </h1>

      <div className="actions">
        <div className="buf buf-primary">
          <Link href={"#projects"}>See what I do</Link>
        </div>
        <div className="buf buf-black">
          <Link href="">Hire me</Link>
        </div>
      </div>
    </section>
  );
}
