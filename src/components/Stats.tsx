const stats = [
  {
    value: "Freight",
    label: "Freight modes",
    sub: "Air, sea & land",
  },
  {
    value: "Trade",
    label: "Import & export",
    sub: "Documentation coordination",
  },
  {
    value: "Storage",
    label: "Storage support",
    sub: "Warehousing",
  },
  {
    value: "Delivery",
    label: "Delivery support",
    sub: "Distribution",
  },
];

function StatItem({ stat, last }: { stat: (typeof stats)[0]; last: boolean }) {
  return (
    <div
      className={`relative flex flex-col justify-between p-10 ${!last ? "border-r border-black/10" : ""}`}
    >
      

      {/* big number */}
      <div className="flex-1 font-sentient font-extralight flex flex-col justify-center ">
        <div
          className="leading-none text-[#031926] hover:text-[#9d4810]"
          style={{ fontSize: "clamp(2.5rem, 3.5vw, 3.5rem)", fontWeight: 500, letterSpacing: "-0.03em" }}
        >
          {stat.value}
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
  return (
    <div
      className="w-full flex items-center justify-center bg-[#77aca2]/30"
    >
      {/* MARKER-MAKE-KIT-INVOKED */}
      <section id="stats" className="w-full max-w-7xl px-6 py-20 md:px-12 md:py-28">

        {/* header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span
                className="inline-block w-6 h-px"
                style={{ background: "#9d4810" }}
              />
              <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "#9d4810" }}>
                LOGISTICS SERVICES
              </p>
            </div>
            <h2
              className="mt-12 text-[#031926] font-sentient font-regular mb-4 "
              style={{ fontSize: "clamp(2.8rem, 5vw, 5.5rem)", fontWeight: 500, letterSpacing: "0.02em" }}
            >
              Support for key logistics needs.<br />
            </h2>
          </div>

          <p
            className=" font-generalsans max-w-sm md:text-lg leading-relaxed md:text-right"
            style={{ color: "#031926" }}
          >
            Coordinate freight, trade documentation, storage, and delivery
            through SAUDEX GLOBAL.
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
              last={i === stats.length - 1}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
