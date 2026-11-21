import { useEffect, useRef } from "react";

// Puntini "grezzi" che scorrono da sinistra e si ordinano nel nome.
// Su schermi stretti il nome si divide in due righe e le parole si formano una alla volta.
export default function Hero({ name, role, tag, replay }) {
  const ref = useRef();
  useEffect(() => {
    const c = ref.current, x = c.getContext("2d"), dpr = Math.min(devicePixelRatio || 1, 2);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w, h, ps = [], raf, t0 = performance.now();
    const build = () => {
      w = c.clientWidth;
      const lines = w < 640 ? name.split(" ") : [name], L = Math.max(...lines.map((l) => l.length));
      const fs = Math.min(w / (L * 0.62), 118), lh = fs * 1.3;
      h = Math.ceil(lh * lines.length);
      c.style.height = h + "px"; c.width = w * dpr; c.height = h * dpr;
      x.setTransform(dpr, 0, 0, dpr, 0, 0);
      const o = document.createElement("canvas"); o.width = w; o.height = h;
      const g = o.getContext("2d");
      g.font = `700 ${fs}px "JetBrains Mono", monospace`; g.textAlign = "center"; g.textBaseline = "middle";
      lines.forEach((l, k) => g.fillText(l, w / 2, lh * (k + 0.5)));
      const d = g.getImageData(0, 0, w, h).data, st = w < 600 ? 4 : 5; ps = [];
      for (let y = 0; y < h; y += st) for (let i = 0; i < w; i += st)
        if (d[(y * w + i) * 4 + 3] > 128)
          ps.push({ tx: i, ty: y, sx: -Math.random() * w * 0.4, sy: y + (Math.random() - 0.5) * fs * 0.8, dl: Math.random() * 0.6 + (i / w) * 1.3 + Math.floor(y / lh) * 1.8, v: Math.random() < 0.5 });
    };
    const draw = (now) => {
      const t = reduce ? 9 : (now - t0) / 1000, s = getComputedStyle(document.documentElement);
      const a = s.getPropertyValue("--p1"), b = s.getPropertyValue("--p2"), raw = s.getPropertyValue("--mut");
      x.clearRect(0, 0, w, h);
      ps.forEach((p, i) => {
        const k = Math.min(Math.max((t - p.dl) / 1.7, 0), 1), e = 1 - Math.pow(1 - k, 3);
        x.fillStyle = k < 1 ? raw : p.v ? a : b; x.globalAlpha = k < 1 ? 0.55 : 1;
        x.fillRect(p.sx + (p.tx - p.sx) * e, p.sy + (p.ty - p.sy) * e + (1 - e) * Math.sin(t * 4 + i) * 10, 2.3, 2.3);
      });
      raf = requestAnimationFrame(draw);
    };
    build(); document.fonts?.ready.then(build); addEventListener("resize", build);
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", build); };
  }, [name, replay]);

  return (
    <section className="hero">
      <canvas ref={ref} aria-hidden="true" />
      <h1 className="sr">{name}</h1>
      <div className="hero-txt">
        <p className="role">{role}</p>
        <p className="tag">{tag}</p>
      </div>
    </section>
  );
}
