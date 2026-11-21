import { useEffect, useRef, useState } from "react";
import { T, PROJ, STACK, LINK } from "./data.js";
import Hero from "./Hero.jsx";

const ls = (k, d) => { try { return localStorage.getItem(k) || d; } catch { return d; } };
const IDS = ["about", "stack", "projects", "contact"];
const STAGES = ["extract", "transform", "load", "serve"];
const B = import.meta.env.BASE_URL;
const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Sec = ({ id, n, title, children }) => (
  <section id={id} className="sec">
    <i className="node" />
    <p className="stage">{`0${n + 1} ${STAGES[n]}`}</p>
    <h2>{title}</h2>
    {children}
  </section>
);

const Chip = ({ c, col }) => (
  <li className="chip">
    {c.i ? <img src={`https://cdn.simpleicons.org/${c.i}/${col}`} alt="" width="22" height="22" onError={(e) => (e.currentTarget.style.display = "none")} /> : <span className="g">{c.g}</span>}
    {c.n}
  </li>
);

export default function App() {
  const [lang, setLang] = useState(() => ls("lang", "it"));
  const [theme, setTheme] = useState(() => ls("theme", "dark"));
  const t = T[lang], flow = useRef(), fill = useRef();
  const col = theme === "dark" ? "e6edf6" : "0f172a";

  useEffect(() => {
    document.documentElement.dataset.theme = theme; document.documentElement.lang = lang;
    try { localStorage.setItem("theme", theme); localStorage.setItem("lang", lang); } catch {}
  }, [theme, lang]);

  useEffect(() => {
    const f = () => {
      const r = flow.current.getBoundingClientRect(), y = innerHeight * 0.6;
      fill.current.style.height = Math.min(Math.max((y - r.top) / r.height, 0), 1) * 100 + "%";
      document.querySelectorAll(".node").forEach((n) => n.classList.toggle("on", n.getBoundingClientRect().top < y));
    };
    f(); addEventListener("scroll", f, { passive: true }); addEventListener("resize", f);
    return () => { removeEventListener("scroll", f); removeEventListener("resize", f); };
  }, [lang]);

  return (
    <>
      <header className="bar">
        <button className="logo" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>JOSH<span>_</span></button>
        <nav>{IDS.map((id, i) => <button key={id} className="btn sm" onClick={() => go(id)}>{t.nav[i]}</button>)}</nav>
        <div className="tools">
          {Object.keys(T).map((l) => <button key={l} className={"btn sm" + (l === lang ? " act" : "")} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}
          <button className="btn sm" aria-label="Toggle theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? "☀" : "☾"}</button>
        </div>
      </header>

      <Hero name="Joshua Galarza" role={t.role} tag={t.tag} cta={t.cta} go={go} />

      <main className="wrap" ref={flow}>
        <div className="rail"><div className="fill" ref={fill} /></div>

        <Sec id="about" n={0} title={t.aTitle}>
          <div className="about">
            <div className="photo"><span>JG</span><img src={B + "foto.jpg"} alt="Joshua Galarza" onError={(e) => (e.currentTarget.style.display = "none")} /></div>
            <p>{t.about}</p>
          </div>
          <ul className="tl">{t.tl.map(([d, x]) => <li key={x}><b>{d}</b><span>{x}</span></li>)}</ul>
          <div className="cards">{t.svc.map(([a, b]) => <div className="card" key={a}><h3>{a}</h3><p>{b}</p></div>)}</div>
        </Sec>

        <Sec id="stack" n={1} title={t.sTitle}>
          <div className="layers">
            {STACK.map((items, i) => (
              <div className="layer" key={i}>
                <h3>{t.layers[i]}</h3>
                <ul>{items.map((c) => <Chip key={c.n} c={c} col={col} />)}</ul>
              </div>
            ))}
          </div>
        </Sec>

        <Sec id="projects" n={2} title={t.pTitle}>
          <div className="projs">
            {PROJ.map((p) => (
              <article className="proj" key={p.name}>
                <div className="shot">{p.img && <img src={p.img} alt={p.name} loading="lazy" onError={(e) => (e.currentTarget.style.display = "none")} />}</div>
                <h3>{p.name}</h3>
                <p>{p.desc[lang]}</p>
                <dl>
                  <dt>{t.meta[0]}</dt><dd>{p.year}</dd>
                  <dt>{t.meta[1]}</dt><dd>{p.team[lang]}</dd>
                  <dt>{t.meta[2]}</dt><dd>{p.stack}</dd>
                </dl>
                <div className="row">
                  {p.gh ? <a className="btn sm pri" href={p.gh} target="_blank" rel="noopener noreferrer">GitHub</a> : <button className="btn sm" disabled>{t.soon}</button>}
                  {p.demo && <a className="btn sm" href={p.demo} target="_blank" rel="noopener noreferrer">Demo</a>}
                </div>
              </article>
            ))}
          </div>
        </Sec>

        <Sec id="contact" n={3} title={t.cTitle}>
          <p className="lead">{t.cText}</p>
          <div className="row">
            <a className="btn pri" href={`mailto:${LINK.email}`}>{t.btn[0]}</a>
            <a className="btn" href={LINK.linkedin} target="_blank" rel="noopener noreferrer">{t.btn[1]}</a>
            <a className="btn" href={LINK.github} target="_blank" rel="noopener noreferrer">{t.btn[2]}</a>
            <a className="btn" href={B + "cv.pdf"} download>{t.btn[3]}</a>
          </div>
        </Sec>
      </main>
      <footer>Joshua Galarza, {new Date().getFullYear()}</footer>
    </>
  );
}
