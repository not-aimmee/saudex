import { useState, useEffect, useRef } from "react";

const stats = [
  {
    value: 10,
    label: "Years Of Experience",
    suffix: "+",
    sub: "Experience Gained",
    up: true,
  },
  {
    value: 20,
    label: "Shipping Routes",
    suffix: "+",
    sub: "Routes Covered",
    up: true,
  },
  {
    value: 15,
    label: "Countries Served",
    suffix: "+",
    sub: "6 continents",
    up: true,
  },
  {
    value: 98,
    label: "On-Time Delivery",
    suffix: "%",
    sub: "Air · Sea · Land",
    up: true,
  },
];

function useCountUp(target: number, duration = 1600, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t0: number | null = null;
    const tick = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      const e = 1 - Math.pow(1 - p, 4);
      setVal(e * target);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, start]);
  return val;
}

function fmt(raw: number, target: number) {
  if (target >= 1_000_000) return (raw / 1_000_000).toFixed(1) + "M";
  if (target >= 1_000) return Math.round(raw).toLocaleString();
  return Math.round(raw).toLocaleString();
}

function StatItem({
  stat,
  index,
  animate,
  last,
}: {
  stat: (typeof stats)[0];
  index: number;
  animate: boolean;
  last: boolean;
}) {
  const raw = useCountUp(stat.value, 1500 + index * 80, animate);
  const display = fmt(raw, stat.value);

  return (
    <div
      className={`relative flex flex-col justify-between p-10 ${!last ? "border-r border-black/10" : ""}`}
    >
      

      {/* big number */}
      <div className="flex-1 font-sentient font-extralight flex flex-col justify-center ">
        <div
          className="leading-none text-[#031926] hover:text-[#9d4810]"
          style={{ fontSize: "clamp(3rem, 5.5vw, 6rem)", fontWeight: 600, letterSpacing: "-0.03em" }}
        >
          {display}
          {stat.suffix && (
            <span className="text-[#031926] hover:text-[#9d4810]" style={{ fontSize: "0.85em", fontWeight: 400 }}>
              {stat.suffix}
            </span>
          )}
        </div>

        <p
          className="mt-4 text-md tracking-widest uppercase"
          style={{ color: "#254d58" }}
        >
          {stat.label}
        </p>
      </div>

      {/* bottom meta */}
      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm" style={{ color: "#254d58" }}>
          {stat.sub}
        </span>
      </div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setAnimate(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className="w-full flex items-center justify-center bg-[#77aca2]/30"
    >
      {/* MARKER-MAKE-KIT-INVOKED */}
      <section ref={ref} className="w-full max-w-7xl px-6 py-20 md:px-12 md:py-28">

        {/* header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span
                className="inline-block w-6 h-px"
                style={{ background: "#9d4810" }}
              />
              <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "#9d4810" }}>
                BY THE NUMBERS
              </p>
            </div>
            <h2
              className="mt-12 text-[#031926] font-sentient font-regular mb-4 "
              style={{ fontSize: "clamp(2.8rem, 5vw, 5.5rem)", fontWeight: 500, letterSpacing: "0.02em" }}
            >
              Our Track Record Speaks for itself.<br />
            </h2>
          </div>

          <p
            className=" font-generalsans max-w-sm md:text-lg leading-relaxed md:text-right"
            style={{ color: "#031926" }}
          >
            Every shipment tracked. Every metric earned. Here's how our
            global network performs.
          </p>
        </div>

        {/* divider */}
        <div className="w-full h-px mb-0 bg-[#031926]/70"  />

        {/* stats grid */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#031926]/70 border-t-0 font-generalsan font-regular ">
          {stats.map((s, i) => (
            <StatItem
              key={s.label}
              stat={s}
              index={i}
              animate={animate}
              last={i === stats.length - 1}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
