import {
  HiOutlineCog6Tooth,
  HiOutlineCheckBadge,
  HiOutlinePresentationChartLine,
  HiOutlineSignal,
  HiOutlineArrowPathRoundedSquare,
  HiOutlineDocumentText,
  HiOutlineArrowsRightLeft,
  HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import StackedAreaChart from "../components/StackedAreaChart";
import BubbleChart from "../components/BubbleChart";
import SimpleBarChart from "../components/SimpleBarChart";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import bg3 from "../assets/images/logo_vector.png";
import logoEN from "../assets/images/novasur_op1.png";
import logoEP from "../assets/images/svg_logo_ep_1.png";

const Home = () => {
  const platformRef = useRef(null);
  const [platformInView, setPlatformInView] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) setHasScrolled(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // 👇 esperar 1 frame para que el navegador restaure scroll
    requestAnimationFrame(() => {
      onScroll();
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = platformRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlatformInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "200px 0px 200px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative z-10 page-fade-in text-[#fafafa]">
      {/* HOME / HERO */}
      <section
        id="home"
        className="scroll-mt-[14vh] bg-[#0A0F1A] pt-[120px] lg:pt-[140px] pb-12"
      >
        <div className="w-[94vw] mx-auto mt-4">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 text-left">
            <img
              src="/src/assets/images/marver.jpeg"
              alt="Energías Novasur"
              className="
      w-full
      h-[70vh] lg:h-[88vh]
      object-cover
      object-[center_50%]
    "
            />

            {/* overlay sutil */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />

            {/* Texto HERO */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div
                className="
        px-8 pt-10
        sm:px-10 sm:pt-12
        lg:px-14 lg:pt-16
        max-w-2xl
        text-white
      "
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight drop-shadow-md">
                  Desarrollo de proyectos
                  <br />
                  de energía
                </h1>

                <p className="mt-4 text-base sm:text-lg lg:text-2xl text-white/90 drop-shadow">
                  Centrales diésel para la continuidad
                  <br />y respaldo del sistema
                </p>
              </div>
            </div>

            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20">
              <IoArrowDownCircleOutline className="text-[#fafafa] text-5xl opacity-60 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* SOMOS */}
      <section
        id="somos"
        className="scroll-mt-[14vh] bg-[#0A0F1A] pt-12 lg:pt-24 pb-16 lg:pb-28"
      >
        <div className="w-[94vw] mx-auto text-left">
          <div className="px-4 sm:px-8 lg:px-12">
            {/* Grid principal */}
            <p className="text-[#F6B300] font-semibold text-xl lg:text-3xl mb-6">
              Quiénes somos
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Columna izquierda */}
              <div className="lg:col-span-5">
                <h2 className="text-white font-semibold leading-[1.05] tracking-wide text-[44px] sm:text-[56px] lg:text-5xl">
                  Desarrollamos,
                  <br />
                  construcimos y
                  <br />
                  operamos activos
                  <br />
                  de generación
                  <br />
                  eléctrica
                </h2>
              </div>

              {/* Columna derecha */}
              <div className="lg:col-span-7">
                <p className="text-white/90 text-[18px] sm:text-[20px] lg:text-3xl leading-[1.35] tracking-wide max-w-4xl">
                  Empresa dedicada al desarrollo, operación y mantenimiento de
                  centrales de generación eléctrica de pequeña y mediana escala,
                  operando centrales diésel orientadas a asegurar continuidad,
                  respaldo y confiabilidad del sistema eléctrico.
                </p>

                <p className="mt-10 text-white/80 italic text-[16px] sm:text-[18px] lg:text-2xl leading-[1.35] tracking-wide max-w-4xl">
                  Nuestro trabajo se basa en la operación permanente de activos
                  energéticos, con foco en eficiencia, seguridad y
                  disponibilidad operativa.
                </p>
              </div>
            </div>
            {/* 3 pilares */}
            <div className="mt-16 lg:mt-36">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-14 lg:gap-20">
                {/* Col 1 */}
                <div className="text-left">
                  <h3 className="text-white text-3xl lg:text-4xl font-semibold leading-tight">
                    Operación
                    <br />
                    permanente
                  </h3>

                  <p className="mt-6 text-white/70 italic text-lg lg:text-2xl leading-snug max-w-xs ml-20 font-light">
                    Centrales en
                    <br />
                    funcionamiento continuo.
                  </p>
                </div>

                {/* Col 2 */}
                <div className="text-left">
                  <h3 className="text-white text-3xl lg:text-4xl font-semibold leading-tight">
                    Continuidad y
                    <br />
                    respaldo
                  </h3>

                  <p className="mt-6 text-white/70 italic text-lg lg:text-2xl leading-snug max-w-xs ml-20 font-light">
                    Infraestructura orientada a
                    <br />
                    escenarios críticos.
                  </p>
                </div>

                {/* Col 3 */}
                <div className="text-left">
                  <h3 className="text-white text-3xl lg:text-4xl font-semibold leading-tight">
                    Seguridad y
                    <br />
                    eficiencia
                  </h3>

                  <p className="mt-6 text-white/70 italic text-lg lg:text-2xl leading-snug max-w-xs ml-20 font-light">
                    Gestión operativa de
                    <br />
                    activos energéticos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARD BLANCA: OPERACIÓN + DESARROLLO */}
      <section className="scroll-mt-[14vh] bg-[#0A0F1A] pb-16 lg:pb-24 mt-20">
        <div className="w-[94vw] mx-auto">
          <div className="bg-[#fafafa] text-black/80 rounded-3xl shadow-2xl overflow-hidden border border-black/10">
            {/* =========================
          ACTIVOS EN OPERACIÓN
      ========================== */}
            <section id="operacion" className="scroll-mt-[14vh]">
              <div className="px-6 sm:px-10 lg:px-14 lg:pt-16 pb-12 lg:pb-16">
                <p className="text-[#F6B300] font-bold text-xl lg:text-3xl mb-10 text-left uppercase">
                  Activos en operación
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                  {/* Izquierda: métricas + texto */}
                  <div className="lg:col-span-6">
                    <div className="space-y-8">
                      {/* 10 centrales */}
                      <div className="flex items-baseline gap-4">
                        <p className="text-4xl lg:text-8xl font-bold text-black/90">
                          10
                        </p>
                        <p className="text-black/45 text-base lg:text-4xl">
                          centrales
                        </p>
                      </div>

                      {/* ≈ 34 MW */}
                      <div className="flex items-baseline gap-4">
                        <p className="text-4xl lg:text-8xl font-bold text-black/90">
                          ≈ 34
                        </p>
                        <p className="text-black/45 text-base lg:text-4xl">
                          MW instalados
                        </p>
                      </div>

                      {/* 2 tecnologías */}
                      <div>
                        <div className="flex items-baseline gap-4">
                          <p className="text-4xl lg:text-8xl font-bold text-black/90">
                            2
                          </p>
                          <p className="text-black/45 text-base lg:text-4xl">
                            tecnologías:
                          </p>
                        </div>
                        <p className="mt-2 text-xl lg:text-6xl font-bold text-black/80">
                          Diésel / Hidro
                        </p>
                      </div>

                      {/* Texto descriptivo */}
                      <p className="pt-20 max-w-xl text-black/55 leading-snug font-light text-left text-3xl">
                        <span className="font-bold text-black/80">
                          Desarrollamos, operamos y mantenemos
                        </span>{" "}
                        centrales de generación eléctrica de pequeña y mediana
                        escala, asegurando continuidad operativa, eficiencia y
                        confiabilidad.
                      </p>
                    </div>
                  </div>

                  {/* Derecha: imagen */}
                  <div className="lg:col-span-6">
                    <div className="rounded-2xl overflow-hidden border border-black/10 shadow-lg">
                      <img
                        src="/src/assets/images/gami.jpeg"
                        alt="Activos en operación"
                        className="w-full h-full lg:h-[80vh] object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Lista "Centrales operativas" */}
                <div className="mt-12 lg:mt-40 text-left text-2xl font-semibold">
                  <p className="text-black/35 mb-6 text-2xl text-left">
                    Centrales operativas:
                  </p>
                  <div className="">
                    <div className="h-px bg-black/10" />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
                    {/* Diesel label */}
                    <div className="lg:col-span-2 text-black/40">Diesel</div>

                    {/* Diesel columnas */}
                    <div className="lg:col-span-10">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-2 text-black/60">
                        {[
                          ["Gami", "3 MW"],
                          ["PRP Rapaco", "3 MW"],
                          ["PRP Campesina", "3 MW"],
                          ["PRP Tamborés", "3 MW"],
                          ["PRP Chifín", "3 MW"],
                          ["PRP Los Negros", "3 MW"],
                          ["Lagunitas", "3 MW"],
                          ["Colaco-Pargua", "3 MW"],
                          ["PRP Marver", "3 MW"],
                          ["PRP Las Quemas", "9 MW"],
                          ["PRP Melipulli", "9 MW"],
                        ].map(([name, mw]) => (
                          <div
                            key={name}
                            className="flex justify-between gap-6"
                          >
                            <span>{name}</span>
                            <span className="text-black/35">{mw}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hidro */}
                  <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-2 text-black/40">Hidro</div>

                    <div className="lg:col-span-10">
                      <div className="grid grid-cols-1 gap-x-14 gap-y-2 text-black/60 max-w-2xl">
                        {[
                          ["Muchi", "1 MW"],
                          ["Contra", "0,4 MW"],
                          ["Los Colonos", "0,7 MW"],
                        ].map(([name, mw]) => (
                          <div
                            key={name}
                            className="flex justify-between gap-6"
                          >
                            <span>{name}</span>
                            <span className="text-black/35">{mw}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Separador suave */}
            <div className="px-6 sm:px-10 lg:px-14">
              <div className="h-px bg-black/10" />
            </div>

            {/* =========================
          ACTIVOS EN DESARROLLO
      ========================== */}
            <section id="desarrollo" className="scroll-mt-[14vh]">
              <div className="px-6 sm:px-10 lg:px-14 pt-12 lg:pt-16 pb-14 lg:pb-20">
                <p className="text-[#F6B300] font-bold text-xl lg:text-3xl mb-10 text-left uppercase">
                  Activos en desarrollo
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
                  {/* Izquierda */}
                  <div className="lg:col-span-5">
                    <p className="text-black/60 leading-snug max-w-xl font-light text-left text-3xl">
                      <span className="font-semibold text-black/80 text-3xl lg:text-4xl text-left">
                        Proyectos de generación eléctrica
                      </span>{" "}
                      actualmente en etapa de desarrollo.
                    </p>

                    <p className="mt-10 text-black/45 text-sm lg:text-base">
                      Último activo en desarrollo:
                    </p>

                    <p className="mt-3 text-4xl lg:text-8xl font-bold text-black/85">
                      Diesel
                    </p>

                    <p className="mt-2 text-black/85 text-lg lg:text-6xl">
                      10 × PMGD 3 MW
                    </p>
                  </div>

                  {/* Derecha */}
                  <div className="lg:col-span-7">
                    <div className="rounded-2xl overflow-hidden border border-black/10 shadow-lg">
                      <img
                        src="/src/assets/images/rapaco_interior.jpeg"
                        alt="Activos en desarrollo"
                        className="w-full h-full lg:h-[80vh] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section id="clientes" className="scroll-mt-[14vh] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-center text-2xl font-semibold uppercase tracking-wider text-[#F6B300] uppercase">
            Clientes
          </h2>
          <h3 className="mt-6 text-4xl lg:text-5xl font-semibold tracking-tight text-center text-[#fafafa]">
            Empresas que confían en nuestra gestión
          </h3>

          {/* Botón/píldora */}
          <div className="mt-36 mb-20 flex flex-col items-center px-10">
            {/* <p className="mb-6">Main Partner</p> */}
            <a
              href="https://energypartners.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="
      group
      w-full max-w-[520px]
      bg-white/20
      rounded-full
      px-10 py-7
      shadow-[0_24px_60px_rgba(0,0,0,0.25)]
      border border-black/10
      flex items-center justify-center
      transition-transform duration-300
      hover:-translate-y-[2px]
      active:translate-y-0
    "
              aria-label="Ir a Energy Partners"
            >
              <img
                src={logoEP}
                alt="Energy Partners"
                className="h-14 md:h-32 w-auto"
                draggable="false"
              />
            </a>

            <p className="mt-6 italic text-white/55 text-sm">Haz click aquí</p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="scroll-mt-[14vh] min-h-[75vh] py-24 bg-[#d7d7d7]"
      >
        {/* Wrapper */}
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-8 lg:px-[100px]">
          {/* Titulares */}
          <p className="text-center text-2xl font-semibold uppercase tracking-wider text-[#F6B300]">
            Contacto
          </p>
          <h2 className="mt-6 text-4xl lg:text-5xl font-semibold tracking-tight text-center text-black/80">
            Hablemos
          </h2>

          {/* Grid */}
          <div className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 sm:gap-y-14 lg:gap-y-0 gap-x-10 items-start">
            {/* Menú – solo desktop */}
            <nav className="hidden lg:block lg:col-span-1 text-left">
              <p className="font-bold text-black/80 mb-6 text-2xl">Menu</p>
              <div className="flex flex-col gap-6 text-lg text-black/80">
                <a
                  href="#home"
                  className="hover:text-black/60 transition-colors"
                >
                  Inicio
                </a>
                <a
                  href="#somos"
                  className="hover:text-black/60 transition-colors"
                >
                  Somos
                </a>
                <a
                  href="#operacion"
                  className="hover:text-black/60 transition-colors"
                >
                  Operación
                </a>
                <a
                  href="#desarrollo"
                  className="hover:text-black/60 transition-colors"
                >
                  Desarrollo
                </a>
                <a
                  href="#contacto"
                  className="hover:text-black/60 transition-colors"
                >
                  Contacto
                </a>
              </div>
            </nav>

            {/* Dirección */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <p className="font-bold text-black/80 mb-6 text-2xl">Dirección</p>
              <div className="text-black/45 leading-[1.25] font-light text-2xl">
                <p>Carlos XI 138,</p>
                <p>Las Condes</p>
                <p>RM</p>
                <p>Chile</p>
              </div>
            </div>

            {/* Contacto */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <p className="font-bold text-black/80 mb-6 text-2xl">Contacto</p>
              <a
                href="mailto:operaciones@eep.cl"
                className="text-black/45 hover:text-black/60 transition-colors text-2xl font-light break-words"
              >
                operaciones@eep.cl
              </a>
            </div>

            {/* Logo desktop: dentro de la última columna (col-span-2), abajo a la derecha */}
            <div className="hidden lg:flex lg:col-span-2 justify-end self-end">
              <img
                src={logoEN}
                alt="Energias Novasur"
                className="h-auto w-[240px] object-contain"
              />
            </div>
          </div>
          {/* Logo mobile – centrado real */}
          <div className="lg:hidden mt-16 flex justify-center">
            <img
              src={logoEN}
              alt="Energias Novasur"
              className="h-auto w-[170px] sm:w-[200px] object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
