import { useEffect, useRef } from "react";

// Puntini "grezzi" che scorrono da sinistra e si ordinano nel nome
export default function Hero({ name, role, tag, cta, go }) {
  const ref = useRef();
  useEffect(() => {
    const c = ref.current, x = c.getContext("2d"), dpr = Math.min(devicePixelRatio || 1, 2);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w, h, ps = [], raf, t0 = performance.now();
    const build = () => {
      w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr;
      x.setTransform(dpr, 0, 0, dpr, 0, 0);
      const o = document.createElement("canvas"); o.width = w; o.height = h;
      const g = o.getContext("2d"), fs = Math.min(w / (name.length * 0.62), 118);
      g.font = `700 ${fs}px "JetBrains Mono", monospace`; g.textAlign = "center"; g.textBaseline = "middle";
      g.fillText(name, w / 2, h / 2);
      const d = g.getImageData(0, 0, w, h).data, st = w < 600 ? 4 : 5; ps = [];
      for (let y = 0; y < h; y += st) for (let i = 0; i < w; i += st)
        if (d[(y * w + i) * 4 + 3] > 128)
          ps.push({ tx: i, ty: y, sx: -Math.random() * w * 0.4, sy: h / 2 + (Math.random() - 0.5) * h * 0.9, dl: Math.random() * 0.6 + (i / w) * 1.3, v: Math.random() < 0.5 });
    };
    const draw = (now) => {
      const t = reduce ? 9 : (now - t0) / 1000, s = getComputedStyle(document.documentElement);
      const a = s.getPropertyValue("--c1"), b = s.getPropertyValue("--c2"), raw = s.getPropertyValue("--mut");
      x.clearRect(0, 0, w, h);
      ps.forEach((p, i) => {
        const k = Math.min(Math.max((t - p.dl) / 1.7, 0), 1), e = 1 - Math.pow(1 - k, 3);
        x.fillStyle = k < 1 ? raw : p.v ? a : b; x.globalAlpha = k < 1 ? 0.55 : 1;
        x.fillRect(p.sx + (p.tx - p.sx) * e, p.sy + (p.ty - p.sy) * e + (1 - e) * Math.sin(t * 4 + i) * 14, 2.3, 2.3);
      });
      raf = requestAnimationFrame(draw);
    };
    build(); document.fonts?.ready.then(build); addEventListener("resize", build);
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", build); };
  }, [name]);

  return (
    <section className="hero">
      <canvas ref={ref} aria-hidden="true" />
      <h1 className="sr">{name}</h1>
      <div className="hero-txt">
        <p className="role">{role}</p>
        <p className="tag">{tag}</p>
        <div className="row">
          <button className="btn pri" onClick={() => go("projects")}>{cta[0]}</button>
          <button className="btn" onClick={() => go("contact")}>{cta[1]}</button>
        </div>
      </div>
    </section>
  );
}
