import { CONTACT } from "../data";

const Stat = ({ top, left, right, bottom, title, sub }) => (
  <div
    style={{ top, left, right, bottom }}
    className="hidden lg:grid absolute w- h- rounded-full bg-white border border-slate-200/60 shadow-[0_8px_24px_rgba(0,0,0,0.06)] place-items-center text-center"
  >
    <div>
      <div className="font-bold text- text-slate-900 leading-none">{title}</div>
      <div className="text- text-slate-500 leading-tight mt-1">{sub}</div>
    </div>
  </div>
);

export const Hero = () => {
  return (
    <div className="relative w-full h- md:h- flex items-center justify-center px-6 overflow-hidden bg-[#FFFB]">
      <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,rgba(255,200,200,0.5),transparent_35%),radial-gradient(at_100%_100%,rgba(255,200,200,0.4),transparent_35%)]" />

      <Stat
        top="22%"
        left="6%"
        title="+84%"
        sub={
          <>
            authority
            <br />
            lift
          </>
        }
      />
      <Stat
        bottom="22%"
        left="15%"
        title="DR 80+"
        sub={
          <>
            average
            <br />
            strength
          </>
        }
      />
      <Stat
        top="20%"
        right="6%"
        title="99.4%"
        sub={
          <>
            index
            <br />
            rate
          </>
        }
      />
      <Stat bottom="18%" right="5%" title="Zero" sub="Footprint" />

      <div className="relative text-center max-w-">
        <h1 className="text- md:text- font-extrabold leading-[0.95] tracking-tight text-slate-900">
          PBNs That Actually
          <br />
          Rank You on{" "}
          <span className="font-instrument italic font-normal text-[#DC2626]">
            Page 1
          </span>
        </h1>
        <p className="mt-4 text- md:text- text-slate-500 leading-relaxed max-w- mx-auto">
          Our private authority network drives critical ranking shifts across
          your SEO ecosystem — so your agency moves first, ranks faster, and
          earns bigger.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={CONTACT.telegram}
            className="bg-[#DC2626] text-white px-7 py-3 rounded-full font-semibold text- shadow-[0_10px_20px_rgba(220,38,38,0.25)]"
          >
            Order on Telegram
          </a>
          <a
            href={CONTACT.whatsapp}
            className="bg-white border border-slate-200 px-6 py-3 rounded-full text-"
          >
            WhatsApp Us
          </a>
          <a
            href={CONTACT.teams}
            className="bg-white border border-slate-200 px-6 py-3 rounded-full text-"
          >
            MS Teams
          </a>
        </div>
        <div className="mt-5 flex items-center justify-center gap-2 text- text-slate-500">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />{" "}
          23 agencies ordered today
        </div>
      </div>
    </div>
  );
};
