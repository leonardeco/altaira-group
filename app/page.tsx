import Image from "next/image";
import { Cta } from "@/components/cta";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Motion } from "@/components/motion";
import { Nav } from "@/components/nav";
import { EMAIL, INSTAGRAM_URL, MAILTO_URL, TEL_URL, WHATSAPP_NUMBER } from "@/lib/site";

function MailAddress({ email }: { email: string }) {
  const at = email.indexOf("@");
  if (at < 0) return <span>{email}</span>;
  return (
    <span>
      {email.slice(0, at + 1)}
      <wbr />
      {email.slice(at + 1)}
    </span>
  );
}

const services = [
  {
    num: "01",
    span: "s1",
    title: "Licencias y permisos ambientales",
    text: "Vertimientos, concesión de aguas, aprovechamiento forestal y emisiones.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M9 6.5h10.5L24 11v14.5H9V6.5Z" stroke="currentColor" strokeWidth="1.3" />
        <path d="M19.5 6.5V11H24M12.5 16h7M12.5 20h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    span: "s2",
    title: "Estudios de impacto ambiental",
    text: "EIA, diagnóstico de alternativas y planes de manejo ambiental.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 26c-6-3.2-9-7.4-9-12.2C7 9.6 10.2 7 13.4 7c1.7 0 2.8.8 2.6 2.4C16 7.8 17.1 7 18.8 7 22 7 25 9.6 25 13.8 25 18.6 22 22.8 16 26Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "03",
    span: "s3",
    title: "Formulación de proyectos",
    text: "Proyectos ambientales para regalías (SGR), cooperación y entidades públicas.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M7 23V13M13 23V9M19 23v-6M25 23V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "04",
    span: "s4",
    title: "Planes de Manejo Integral de Residuos Sólidos",
    text: "Formulación y estructuración de Planes de Manejo Integral de Residuos Sólidos.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M11 12h10l1.2 3.2a6 6 0 0 1-1.2 6.2V24H11v-2.6a6 6 0 0 1-1.2-6.2L11 12Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M13 12V9.5h6V12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "05",
    span: "s5",
    title: "Ordenamiento territorial",
    text: "Insumos para POT y EOT, determinantes ambientales y cuencas (POMCA).",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 8.5h11.5L24 13v11.5H8V8.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M8 18.5c2.2-1.6 3.8-1.4 5.4.2 1.6 1.6 3 .8 4.6-.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "06",
    span: "s6",
    title: "SIG y cartografía",
    text: "Mapas temáticos, análisis espacial y sensores remotos.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 21.5 14 11l4 6 2.2-3.2L24 21.5H8Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M8 10.5h16M8 24.5h16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "07",
    span: "s7",
    title: "Sistemas de gestión ambiental",
    text: "ISO 14001, uso eficiente del agua (PUEAA) y gestión de residuos.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M10 13a6.2 6.2 0 0 1 10.6-2.2L23 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M22 19a6.2 6.2 0 0 1-10.6 2.2L9 19" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M23 9.5V13h-3.5M9 22.5V19h3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "08",
    span: "s8",
    title: "Seguimiento e interventoría",
    text: "Informes de cumplimiento (ICA), auditorías y acompañamiento técnico.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="6.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M18.8 18.8 24.5 24.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <div className="grain" aria-hidden="true" />
      <Motion />
      <Nav />

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="wrap hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">Servicios profesionales</p>
              <h1>
                Consultoría ambiental con
                <span>raíz en el territorio</span>
              </h1>
              <p className="rule" aria-hidden="true" />
              <p className="lede">
                Ingeniería geográfica y ambiental · Especialistas en gestión ambiental
              </p>
              <div className="hero-actions">
                <WhatsAppButton />
                <Cta href="#servicios" variant="quiet" icon="down">
                  Ver servicios
                </Cta>
              </div>
              <div className="reach">
                <a href={TEL_URL}>
                  <PhoneIcon />
                  <span>{WHATSAPP_NUMBER}</span>
                </a>
                <a href={MAILTO_URL}>
                  <MailIcon />
                  <MailAddress email={EMAIL} />
                </a>
              </div>
            </div>

            <div className="hero-mark reveal" style={{ ["--d" as string]: "80ms" }}>
              <div className="shell">
                <div className="card mark-card">
                  <svg className="corner" viewBox="0 0 140 120" aria-hidden="true">
                    <path d="M70 10 128 104H12Z" fill="none" stroke="currentColor" strokeWidth="1.25" />
                  </svg>
                  <Image
                    className="logo-lockup"
                    src="/logo.png"
                    alt="Altaira Group, Environmental & Coffee"
                    width={658}
                    height={636}
                    priority
                    style={{ width: "100%", height: "auto", maxWidth: 420 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="servicios">
          <div className="wrap">
            <header className="section-head reveal">
              <p className="eyebrow">Lo que acompañamos</p>
              <h2>Ocho frentes de gestión ambiental</h2>
              <p>
                Del permiso al seguimiento: estudios, territorio, residuos y sistemas de gestión, con lectura geográfica del lugar donde ocurre el proyecto.
              </p>
            </header>

            <div className="bento">
              {services.map((service) => (
                <article
                  key={service.num}
                  className={`shell ${service.span} reveal`}
                  style={
                    service.num === "02" || service.num === "06"
                      ? { ["--d" as string]: "50ms" }
                      : service.num === "04" || service.num === "07"
                        ? { ["--d" as string]: "80ms" }
                        : undefined
                  }
                >
                  <div className={service.num === "08" ? "card card-row" : "card"}>
                    <div className="card-top">
                      <span className="ico">{service.icon}</span>
                      <span className="num">{service.num}</span>
                    </div>
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="path" id="asesoria" aria-labelledby="path-title">
          <div className="wrap">
            <header className="section-head reveal">
              <p className="eyebrow">Cómo empezar</p>
              <h2 id="path-title">De la idea a la asesoría</h2>
            </header>
            <ol className="steps">
              <li className="shell reveal">
                <div className="card step">
                  <span className="num">01</span>
                  <div>
                    <strong>Escríbenos</strong>
                    <p>Por el ícono de WhatsApp o con una llamada.</p>
                  </div>
                </div>
              </li>
              <li className="shell reveal" style={{ ["--d" as string]: "70ms" }}>
                <div className="card step">
                  <span className="num">02</span>
                  <div>
                    <strong>Cuéntanos el proyecto</strong>
                    <p>Licencias, estudios, ordenamiento, residuos o seguimiento.</p>
                  </div>
                </div>
              </li>
              <li className="shell reveal" style={{ ["--d" as string]: "140ms" }}>
                <div className="card step">
                  <span className="num">03</span>
                  <div>
                    <strong>Agendamos la asesoría</strong>
                    <p>Revisamos el alcance y quedamos contigo para el siguiente paso.</p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="contact" id="contacto">
          <div className="wrap">
            <div className="shell contact-shell reveal">
              <div className="card contact-card">
                <div>
                  <p className="eyebrow">Mensaje directo</p>
                  <h2>¿Tienes un proyecto en mente?</h2>
                  <p className="lede">
                    Cuéntanos el alcance y agendamos la asesoría. Licencias, estudios, ordenamiento o seguimiento: empezamos por entender el territorio del proyecto.
                  </p>
                  <div className="hero-actions">
                    <WhatsAppButton />
                    <Cta href={INSTAGRAM_URL} variant="quiet">
                      Instagram
                    </Cta>
                  </div>
                </div>
                <div className="contact-meta">
                  <a className="phone" href={TEL_URL}>
                    <PhoneIcon />
                    <span>{WHATSAPP_NUMBER}</span>
                  </a>
                  <a className="mail" href={MAILTO_URL}>
                    <MailIcon />
                    <MailAddress email={EMAIL} />
                  </a>
                  <a className="handle" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    @altairagroupsas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-row">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/mark.png" alt="" width={138} height={160} />
            <div>
              <strong>Altaira Group</strong>
              <span>Environmental &amp; Coffee</span>
            </div>
          </div>
          <p>
            Ingeniería geográfica y ambiental · Especialistas en gestión ambiental
            <br />
            <a className="mail" href={MAILTO_URL}>
              <MailIcon />
              <MailAddress email={EMAIL} />
            </a>
          </p>
          <p className="copy">© {year} Altaira Group</p>
        </div>
      </footer>

      <WhatsAppButton floating />
    </>
  );
}
