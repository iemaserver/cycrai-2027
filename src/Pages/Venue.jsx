import Footer from "../components/Footer.jsx";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  University,
  FlaskConical,
  TreePine,
  Plane,
  Wifi,
  Users,
  Sparkles,
} from "lucide-react";

import uem from "../assets/image/uem.jpeg";

export default function Venue() {
  const stats = [
    {
      value: "IEM Kolkata",
      label: "Host Institution",
    },
    {
      value: "Newtown",
      label: "Conference Location",
    },
    {
      value: "Kolkata",
      label: "City",
    },
    {
      value: "India",
      label: "Country",
    },
  ];

  const venueFeatures = [
    {
      icon: University,
      title: "Modern Infrastructure",
      desc: "Smart classrooms, lecture halls, auditoriums and conference facilities designed for academic and professional events.",
    },
    {
      icon: FlaskConical,
      title: "Research Ecosystem",
      desc: "Advanced laboratories and academic facilities supporting interdisciplinary research, innovation and knowledge exchange.",
    },
    {
      icon: TreePine,
      title: "Green Campus",
      desc: "A vibrant campus environment that provides a comfortable setting for learning, collaboration and networking.",
    },
    {
      icon: Plane,
      title: "Easy Accessibility",
      desc: "Located in New Town with convenient connectivity to the airport, major transport routes and important parts of Kolkata.",
    },
    {
      icon: Wifi,
      title: "Connected Environment",
      desc: "Technology-enabled academic spaces supporting presentations, collaboration and modern conference requirements.",
    },
    {
      icon: Users,
      title: "Collaborative Community",
      desc: "An academic environment where students, researchers, faculty and industry professionals come together.",
    },
  ];

  return (
    <div className="bg-[#020817] text-white overflow-hidden">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#020817] min-h-screen pt-6 pb-24">

        {/* Background Grid */}

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Cyan Glow */}

        <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full" />

        {/* Blue Glow */}

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[170px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Hero Content */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            {/* Badge */}

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-400/30
                bg-cyan-500/10
                px-5
                py-2
                text-cyan-300
                text-sm
                tracking-[3px]
                uppercase
              "
            >
              <Sparkles size={16} />

              Conference Venue
            </span>

            {/* Heading */}

            <h1
              className="
                mt-8
                text-5xl
                md:text-7xl
                font-black
                leading-tight
                text-white
              "
            >
              Conference

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-cyan-300
                  via-sky-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                Venue
              </span>
            </h1>

            {/* Institution */}

            <p
              className="
                mt-7
                text-xl
                md:text-2xl
                font-semibold
                text-cyan-300
              "
            >
              Institute of Engineering & Management, Kolkata
            </p>

            <div
              className="
                mt-3
                flex
                items-center
                justify-center
                gap-3
                text-slate-400
              "
            >
              <MapPin size={18} className="text-cyan-400" />

              <span>
                University Campus • Newtown • Kolkata • India
              </span>
            </div>

            {/* Description */}

            

          </motion.div>


          {/* =================================================
              STATISTICS
          ================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="
              mt-20
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-6
            "
          >

            {stats.map((item) => (

              <div
                key={item.label}
                className="
                  rounded-3xl
                  border
                  border-cyan-400/15
                  bg-white/5
                  backdrop-blur-2xl
                  p-8
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_35px_rgba(34,211,238,.12)]
                "
              >

                <h2
                  className="
                    text-3xl
                    md:text-4xl
                    font-black
                    text-cyan-300
                  "
                >
                  {item.value}
                </h2>

                <p
                  className="
                    mt-3
                    text-slate-400
                    tracking-wide
                  "
                >
                  {item.label}
                </p>

              </div>

            ))}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          HOST INSTITUTION
      ====================================================== */}

      <section
        className="
          relative
          py-28
          overflow-hidden
          bg-gradient-to-b
          from-[#020817]
          via-[#071326]
          to-[#020817]
        "
      >

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-0 top-20 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[170px]" />


        <div className="relative max-w-7xl mx-auto px-6">

          {/* Section Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >

            <span
              className="
                inline-flex
                px-5
                py-2
                rounded-full
                border
                border-cyan-400/30
                bg-cyan-500/10
                text-cyan-300
                uppercase
                tracking-[3px]
                text-sm
              "
            >
              Host Institution
            </span>

            <h2
              className="
                mt-8
                text-4xl
                md:text-6xl
                font-black
                text-white
              "
            >
              Institute of Engineering

              <span
  className="
    block
    mt-3
    pb-1
    leading-normal
    bg-gradient-to-r
    from-cyan-300
    via-sky-400
    to-blue-500
    bg-clip-text
    text-transparent
  "
>
  &amp; Management, Kolkata
</span>
            </h2>

            <p
              className="
                mt-8
                max-w-3xl
                mx-auto
                text-slate-400
                text-lg
                leading-9
              "
            >
              A technology-focused academic environment providing the
              foundation for CYCRAI 2027 to connect research, innovation,
              cybersecurity and responsible artificial intelligence.
            </p>

          </motion.div>


          {/* Main Layout */}

          <div
            className="
              grid
              lg:grid-cols-2
              gap-12
              lg:gap-16
              items-center
            "
          >

            {/* Image */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                relative
                rounded-[30px]
                border
                border-cyan-400/20
                bg-white/5
                backdrop-blur-2xl
                p-3
                shadow-[0_0_50px_rgba(34,211,238,.10)]
                overflow-hidden
              "
            >

              <div className="overflow-hidden rounded-[22px]">

                <img
                  src={uem}
                  alt="Institute of Engineering and Management campus"
                  className="
                    w-full
                    aspect-[4/3]
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.04]
                  "
                />

              </div>

            </motion.div>


            {/* Content */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              {/* Location */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-5
                  py-3
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-500/10
                  text-cyan-300
                  font-semibold
                "
              >

                <MapPin size={18} />

                Kolkata, West Bengal, India

              </div>


              <h3
                className="
                  mt-8
                  text-4xl
                  md:text-5xl
                  font-black
                  text-white
                  leading-tight
                "
              >
                Welcome to the

                <span
                  className="
                    block
                    text-cyan-400
                  "
                >
                  Host Institution
                </span>
              </h3>


              <p
                className="
                  mt-7
                  text-slate-400
                  text-lg
                  leading-8
                "
              >
                The Institute of Engineering & Management, Kolkata,
                provides an academic environment focused on engineering,
                technology, research, innovation and professional development.
              </p>

              <p
                className="
                  mt-5
                  text-slate-500
                  text-lg
                  leading-8
                "
              >
                Located in New Town, the campus provides a suitable setting
                for bringing together researchers, academicians, students and
                industry professionals for an international conference such
                as CYCRAI 2027.
              </p>


              {/* CTA */}

              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="https://maps.app.goo.gl/VFN2t1qFxYAxbgB57"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-cyan-400
                    px-7
                    py-4
                    font-bold
                    text-slate-950
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-[0_0_40px_rgba(34,211,238,.45)]
                  "
                >
                  View on Google Maps

                  <ArrowRight
                    size={19}
                    className="
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />

                </a>


                <a
                  href="https://iem.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-cyan-400/40
                    bg-white/5
                    backdrop-blur-xl
                    px-7
                    py-4
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:border-cyan-400
                    hover:bg-cyan-500/10
                  "
                >
                  Visit IEM Website

                  <ArrowRight size={19} />

                </a>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          VENUE FEATURES
      ====================================================== */}

      <section
        className="
          relative
          py-28
          overflow-hidden
          bg-[#020817]
        "
      >

        {/* Background */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              flex
              flex-col
              md:flex-row
              md:items-end
              md:justify-between
              gap-6
              mb-14
            "
          >

            <div>

              <div className="flex items-center gap-4">

                <span className="h-px w-12 bg-cyan-400" />

                <span
                  className="
                    text-cyan-300
                    text-sm
                    uppercase
                    tracking-[4px]
                    font-semibold
                  "
                >
                  At the Venue
                </span>

              </div>


              <h2
                className="
                  mt-5
                  text-4xl
                  md:text-5xl
                  font-bold
                  text-white
                "
              >
                Everything you need
              </h2>

            </div>


            <p
              className="
                max-w-md
                text-slate-500
                leading-7
                md:text-right
              "
            >
              A connected academic environment designed to support
              research, collaboration, learning and innovation.
            </p>

          </motion.div>


          {/* Feature List */}

          <div className="border-t border-white/10">

            {venueFeatures.map((feature, index) => {

              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="
                    group
                    grid
                    md:grid-cols-[80px_280px_1fr]
                    gap-6
                    md:gap-10
                    items-center
                    py-9
                    border-b
                    border-white/10
                    transition-all
                    duration-500
                    hover:bg-cyan-400/[0.02]
                  "
                >

                  {/* Number */}

                  <span
                    className="
                      text-cyan-500/40
                      text-sm
                      font-mono
                      tracking-[3px]
                      group-hover:text-cyan-400
                      transition-colors
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  {/* Title */}

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        bg-cyan-500/10
                        border
                        border-cyan-400/20
                        flex
                        items-center
                        justify-center
                        text-cyan-300
                        group-hover:bg-cyan-400/15
                        group-hover:border-cyan-400/40
                        transition-all
                      "
                    >
                      <Icon size={22} />
                    </div>

                    <h3
                      className="
                        text-lg
                        md:text-xl
                        font-bold
                        text-white
                        group-hover:text-cyan-300
                        transition-colors
                      "
                    >
                      {feature.title}
                    </h3>

                  </div>


                  {/* Description */}

                  <p
                    className="
                      text-slate-500
                      leading-7
                      max-w-2xl
                    "
                  >
                    {feature.desc}
                  </p>

                </motion.div>
              );

            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          LOCATION SECTION
      ====================================================== */}

      <section
        className="
          relative
          py-28
          overflow-hidden
          bg-gradient-to-b
          from-[#020817]
          via-[#071326]
          to-[#020817]
        "
      >

        <div className="absolute left-0 bottom-0 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute right-0 top-0 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[170px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >

            <span
              className="
                inline-flex
                px-5
                py-2
                rounded-full
                border
                border-cyan-400/30
                bg-cyan-500/10
                text-cyan-300
                uppercase
                tracking-[3px]
                text-sm
              "
            >
              Find the Venue
            </span>


            <h2
              className="
                mt-8
                text-4xl
                md:text-6xl
                font-black
                text-white
              "
            >
              Join Us in

              <span
                className="
                  block
                  mt-3
                  bg-gradient-to-r
                  from-cyan-300
                  via-sky-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                Kolkata
              </span>
            </h2>


            <p
              className="
                mt-7
                max-w-3xl
                mx-auto
                text-lg
                leading-8
                text-slate-400
              "
            >
              Experience CYCRAI 2027 at the Institute of Engineering &
              Management, Newtown, Kolkata — where researchers, innovators
              and technology professionals come together.
            </p>


            {/* Address */}

            <div
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-cyan-400/20
                bg-white/5
                backdrop-blur-xl
                px-6
                py-4
                text-slate-300
              "
            >

              <MapPin
                size={20}
                className="text-cyan-400"
              />

              <span>
                Institute of Engineering & Management,
                Newtown, Kolkata, India
              </span>

            </div>


            {/* CTA */}

            <div className="mt-10 flex justify-center">

              <a
                href="https://maps.app.goo.gl/VFN2t1qFxYAxbgB57"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-cyan-400
                  px-8
                  py-4
                  font-bold
                  text-slate-950
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_40px_rgba(34,211,238,.45)]
                "
              >

                Get Directions

                <ArrowRight
                  size={20}
                  className="
                    group-hover:translate-x-1
                    transition-transform
                  "
                />

              </a>

            </div>

          </motion.div>

        </div>

      </section>
      <Footer/>
    </div>
    
  );
}