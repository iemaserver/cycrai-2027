
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  FileText,
  CalendarDays,
  ClipboardCheck,
  Scale,
  ArrowRight,
} from "lucide-react";

import Footer from "../components/Footer";

export default function Guidelines() {

  const [showSubmitPopup, setShowSubmitPopup] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const timeline = [
    {
      title: "Submission Opens",
      date: "22 June 2026",
    },
    {
      title: "Submission Deadline",
      date: "31 August 2026",
    },
    {
      title: "Acceptance",
      date: "02 November 2026",
    },
    {
      title: "Camera Ready",
      date: "16 November 2026",
    },
    {
      title: "Conference",
      date: "December 2026",
    },
  ];

  const quickRules = [
    {
      icon: ShieldCheck,
      title: "Original Research",
      desc:
        "Only original and unpublished research papers are accepted.",
    },
    {
      icon: FileText,
      title: "IEEE Format",
      desc:
        "Prepare your manuscript using the official IEEE Conference Template.",
    },
    {
      icon: ClipboardCheck,
      title: "Double Blind Review",
      desc:
        "Do not include author names or affiliations in the submitted manuscript.",
    },
    {
      icon: Scale,
      title: "Publication Ethics",
      desc:
        "IEEE plagiarism and publication ethics policies strictly apply.",
    },
  ];

  return (
    <>
          {/* =========================================
              HERO
      ========================================= */}

      <section className="relative overflow-hidden bg-[#020817] min-h-screen pt-6 pb-24">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

        {/* Glow */}

        <div className="absolute -top-40 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[170px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[170px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity:0,y:40 }}
            animate={{ opacity:1,y:0 }}
            transition={{ duration:.8 }}
            className="text-center"
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 uppercase tracking-[3px] text-sm text-cyan-300">

              <Sparkles size={16}/>

              IEEE Conference Policies

            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-white">

              Guidelines

              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">

                & Policies

              </span>

            </h1>

           

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <button
                className="group rounded-full bg-cyan-400 px-8 py-4 font-bold text-slate-900 transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,.35)]"
              >

                Download IEEE Template

              </button>

              <button
                onClick={() => setShowSubmitPopup(true)}
                className="rounded-full border border-cyan-400/40 bg-white/5 px-8 py-4 text-white backdrop-blur-xl transition hover:border-cyan-400 hover:bg-cyan-500/10"
              >

                Submit Paper

              </button>

            </div>

          </motion.div>

          {/* Quick Rules */}

          <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {quickRules.map((item,index)=>{

              const Icon = item.icon;

              return(

                <motion.div
                  key={item.title}
                  initial={{opacity:0,y:30}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true}}
                  transition={{
                    duration:.6,
                    delay:index*.08
                  }}
                  className="group rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-8 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-500"
                >

                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">

                    <Icon
                      size={28}
                      className="text-cyan-300"
                    />

                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-white">

                    {item.title}

                  </h3>

                  <p className="mt-5 text-slate-400 leading-8">

                    {item.desc}

                  </p>

                </motion.div>

              )

            })}

          </div>

        </div>

      </section>
            {/* =========================================
              IMPORTANT DATES
      ========================================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#020817] via-[#071326] to-[#020817] overflow-hidden">

        {/* Background Grid */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-0 top-20 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[170px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="text-center mb-20"
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 uppercase tracking-[3px] text-sm">

              <CalendarDays size={16} />

              Conference Schedule

            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-black text-white">

              Important

              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">

                Dates

              </span>

            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-slate-400">

              Please keep track of all conference milestones and ensure
              your submission is completed before the deadlines.

            </p>

          </motion.div>

          {/* Timeline */}

          <div className="relative">

            {/* Desktop Line */}

            <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-blue-500/20"></div>

            <div className="grid lg:grid-cols-5 gap-10">

              {timeline.map((item, index) => (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .55,
                    delay: index * .1,
                  }}
                  className="relative text-center"
                >

                  <div className="mx-auto w-20 h-20 rounded-full border-4 border-cyan-400 bg-[#071326] flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,.15)]">

                    <span className="text-cyan-300 font-black text-xl">

                      {index + 1}

                    </span>

                  </div>

                  <div className="mt-8 rounded-[28px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-6 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-500">

                    <h3 className="text-xl font-bold text-white">

                      {item.title}

                    </h3>

                    <p className="mt-4 text-cyan-300 font-semibold">

                      {item.date}

                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>
            {/* =========================================
              AUTHOR GUIDELINES
      ========================================= */}

      <section className="relative py-28 bg-[#020817] overflow-hidden">

        {/* Background */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-0 top-40 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute right-0 bottom-20 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[160px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity:0,y:30 }}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }}
            transition={{ duration:.7 }}
            className="text-center mb-20"
          >

            <span className="inline-flex px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 uppercase tracking-[3px] text-sm">

              Author Instructions

            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-black text-white">

              Submission

              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">

                Guidelines

              </span>

            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-slate-400 text-lg leading-8">

              Authors should carefully review the following guidelines
              before preparing and submitting manuscripts.

            </p>

          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
                        <motion.div
              initial={{opacity:0,x:-30}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400/20">

                <ShieldCheck className="text-cyan-300"/>

              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">

                Originality

              </h3>

              <ul className="mt-8 space-y-5 text-slate-400 leading-8">

                <li>• Original unpublished research only.</li>

                <li>• Must not be under review elsewhere.</li>

                <li>• IEEE plagiarism policy applies.</li>

                <li>• Publication ethics violations lead to rejection.</li>

                <li>• Authors are responsible for authenticity.</li>

              </ul>

            </motion.div>
                        <motion.div
              initial={{opacity:0,x:30}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400/20">

                <FileText className="text-cyan-300"/>

              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">

                Formatting

              </h3>

              <ul className="mt-8 space-y-5 text-slate-400 leading-8">

                <li>• IEEE Conference Template.</li>

                <li>• English language only.</li>

                <li>• Maximum six pages.</li>

                <li>• Submit PDF format.</li>

                <li>• References included within page limit.</li>

              </ul>

            </motion.div>
                        <motion.div
              initial={{opacity:0,x:-30}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400/20">

                <ClipboardCheck className="text-cyan-300"/>

              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">

                Double-Blind Review

              </h3>

              <ul className="mt-8 space-y-5 text-slate-400 leading-8">

                <li>• Remove author names.</li>

                <li>• Remove affiliations.</li>

                <li>• No acknowledgements.</li>

                <li>• Self references in third person.</li>

                <li>• No identifying information.</li>

              </ul>

            </motion.div>
                        <motion.div
              initial={{opacity:0,x:30}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400/20">

                <Scale className="text-cyan-300"/>

              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">

                Publication Policy

              </h3>

              <ul className="mt-8 space-y-5 text-slate-400 leading-8">

                <li>• Papers undergo peer review.</li>

                <li>• Registration is mandatory after acceptance.</li>

                <li>• Presentation is compulsory.</li>

                <li>• IEEE copyright transfer required.</li>

                <li>• Eligible papers will be submitted to IEEE Xplore.</li>

              </ul>

            </motion.div>

          </div>

        </div>

      </section>
            {/* =========================================
              SUBMISSION WORKFLOW
      ========================================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#071326] via-[#020817] to-[#071326] overflow-hidden">

        {/* Background */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-0 top-20 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute right-0 bottom-10 w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-[160px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="text-center mb-20"
          >

            <span className="inline-flex px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 uppercase tracking-[3px] text-sm">

              Author Workflow

            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-black text-white">

              Paper Submission

              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">

                Process

              </span>

            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-slate-400">

              Follow these steps to complete a successful manuscript
              submission.

            </p>

          </motion.div>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {[
              {
                number:"01",
                title:"Prepare Manuscript",
                desc:"Write your paper using the official IEEE Conference Template."
              },
              {
                number:"02",
                title:"Check Originality",
                desc:"Verify originality and ensure compliance with IEEE publication ethics."
              },
              {
                number:"03",
                title:"Create CMT Account",
                desc:"Register or sign in to the Microsoft CMT submission system."
              },
              {
                number:"04",
                title:"Upload Paper",
                desc:"Upload the anonymous PDF manuscript together with metadata."
              },
              {
                number:"05",
                title:"Peer Review",
                desc:"The Technical Program Committee performs double-blind review."
              },
              {
                number:"06",
                title:"Camera Ready",
                desc:"Accepted papers must complete registration and final submission."
              }

            ].map((step,index)=>(

              <motion.div
                key={step.number}
                initial={{opacity:0,y:40}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{
                  duration:.6,
                  delay:index*.08
                }}
                className="
                  group
                  relative
                  rounded-[30px]
                  border
                  border-cyan-400/20
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  hover:border-cyan-400/40
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >

                <div className="absolute top-8 right-8 text-6xl font-black text-cyan-500/10">

                  {step.number}

                </div>

                <div className="relative z-10">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-6">

                    <FileText
                      size={26}
                      className="text-cyan-300"
                    />

                  </div>

                  <h3 className="text-2xl font-bold text-white">

                    {step.title}

                  </h3>

                  <p className="mt-5 text-slate-400 leading-8">

                    {step.desc}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>
                    <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{once:true}}
            transition={{delay:.3}}
            className="grid lg:grid-cols-2 gap-8 mt-20"
          >

            <div className="rounded-[30px] border border-cyan-400/20 bg-cyan-500/5 backdrop-blur-xl p-10">

              <h3 className="text-2xl font-bold text-white">

                Submission Requirements

              </h3>

              <ul className="mt-8 space-y-5 text-slate-400 leading-8">

                <li>✓ IEEE two-column format</li>

                <li>✓ English language only</li>

                <li>✓ Maximum six pages</li>

                <li>✓ Anonymous manuscript</li>

                <li>✓ PDF submission</li>

                <li>✓ Complete metadata</li>

              </ul>

            </div>

            <div className="rounded-[30px] border border-cyan-400/20 bg-cyan-500/5 backdrop-blur-xl p-10">

              <h3 className="text-2xl font-bold text-white">

                After Submission

              </h3>

              <ul className="mt-8 space-y-5 text-slate-400 leading-8">

                <li>✓ Technical review</li>

                <li>✓ Decision notification</li>

                <li>✓ Camera-ready upload</li>

                <li>✓ Copyright form</li>

                <li>✓ Author registration</li>

                <li>✓ Conference presentation</li>

              </ul>

            </div>

          </motion.div>

        </div>

      </section>
            {/* =========================================
              MANUSCRIPT & REVIEW
      ========================================= */}

      <section className="relative py-28 bg-[#020817] overflow-hidden">

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute -left-20 top-40 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />
        <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-[170px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:.7}}
            className="text-center mb-20"
          >

            <span className="inline-flex px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 uppercase tracking-[3px] text-sm">

              IEEE Requirements

            </span>

            <h2
  className="
    mt-8
    text-5xl
    md:text-6xl
    font-black
    leading-[1.15]
    text-white
    overflow-visible
  "
>
  Manuscript

  <span
    className="
      block
      pb-3
      bg-gradient-to-r
      from-cyan-300
      via-sky-400
      to-blue-500
      bg-clip-text
      text-transparent
    "
  >
    Preparation
  </span>
</h2>

          </motion.div>
                    <div className="grid lg:grid-cols-2 gap-8">

            <motion.div
              initial={{opacity:0,x:-30}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10"
            >

              <h3 className="text-3xl font-bold text-white">

                Manuscript Checklist

              </h3>

              <div className="mt-8 space-y-5">

                {[
                  "IEEE Conference Template",
                  "Maximum 6 Pages",
                  "PDF Format",
                  "English Language",
                  "Original Research",
                  "Anonymous Submission",
                  "No Page Numbers",
                  "References Included",
                  "Figures & Tables Embedded",
                  "No Plagiarism"
                ].map((item)=>(

                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-cyan-400/10 bg-cyan-500/5 p-4"
                  >

                    <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-[#020817] font-black">

                      ✓

                    </div>

                    <span className="text-slate-300">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </motion.div>
                        <motion.div
              initial={{opacity:0,x:30}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10"
            >

              <h3 className="text-3xl font-bold text-white">

                Publication Ethics

              </h3>

              <div className="mt-8 space-y-6 text-slate-400 leading-8">

                <p>
                  Authors must submit only original, unpublished research.
                </p>

                <p>
                  Simultaneous submission to another conference or journal is not permitted.
                </p>

                <p>
                  Every manuscript undergoes plagiarism screening before review.
                </p>

                <p>
                  Any violation of IEEE publication ethics may result in immediate rejection.
                </p>

                <p>
                  Authors are responsible for the authenticity and integrity of all submitted work.
                </p>

              </div>

            </motion.div>

          </div>
                    <div className="mt-24">

            <h3 className="text-center text-4xl font-black text-white mb-16">

              Review Process

            </h3>

            <div className="grid md:grid-cols-3 xl:grid-cols-6 gap-6">

              {[
                "Plagiarism Check",
                "Double-Blind Review",
                "Technical Evaluation",
                "Acceptance",
                "Camera Ready",
                "Presentation"
              ].map((step,index)=>(

                <motion.div
                  key={step}
                  initial={{opacity:0,y:30}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true}}
                  transition={{
                    duration:.5,
                    delay:index*.08
                  }}
                  className="rounded-[26px] border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-cyan-400/40 transition-all"
                >

                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/20 mx-auto flex items-center justify-center text-cyan-300 font-black text-xl">

                    {index+1}

                  </div>

                  <h4 className="mt-6 text-white font-bold">

                    {step}

                  </h4>

                </motion.div>

              ))}

            </div>

          </div>
                    <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{once:true}}
            transition={{delay:.3}}
            className="mt-24 rounded-[35px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-2xl p-14"
          >

            <h3 className="text-4xl font-black text-white text-center">

              Publication Policy

            </h3>

            <div className="grid md:grid-cols-4 gap-8 mt-14">

              {[
                "Paper Accepted",
                "Author Registration",
                "Conference Presentation",
                "IEEE Xplore Submission"
              ].map((item,index)=>(

                <div
                  key={item}
                  className="text-center"
                >

                  <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 font-black text-2xl">

                    {index+1}

                  </div>

                  <p className="mt-6 text-slate-300 leading-7">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            <p className="mt-14 max-w-4xl mx-auto text-center text-slate-400 leading-8">

              All accepted papers that are registered and presented at the
              conference will be submitted for inclusion in IEEE Xplore,
              subject to IEEE Xplore's scope and quality requirements.

            </p>

          </motion.div>

        </div>

      </section>
      {/* =========================================
        IEEE AUTHOR CENTER
========================================= */}

<section className="relative py-28 bg-gradient-to-b from-[#071326] via-[#020817] to-[#071326]">

  <div className="max-w-7xl mx-auto px-6">

    <motion.div
      initial={{opacity:0,y:30}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className="text-center mb-20"
    >

      <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 uppercase tracking-[3px] text-sm">

        IEEE Resources

      </span>

      <h2 className="mt-8 text-5xl md:text-6xl font-black text-white">

        IEEE Author

        <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">

          Center

        </span>

      </h2>

    </motion.div>
    <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

{[
{
title:"Become an IEEE Author",
link:"https://conferences.ieeeauthorcenter.ieee.org/become-an-ieee-conference-author/"
},
{
title:"Author Ethics",
link:"https://conferences.ieeeauthorcenter.ieee.org/author-ethics/"
},
{
title:"Write Your Paper",
link:"https://conferences.ieeeauthorcenter.ieee.org/write-your-paper/"
},
{
title:"Peer Review",
link:"https://conferences.ieeeauthorcenter.ieee.org/understand-peer-review/"
},
{
title:"Publishing Guide",
link:"https://conferences.ieeeauthorcenter.ieee.org/get-published/"
}

].map((item,index)=>(

<motion.a
key={item.title}
href={item.link}
target="_blank"
initial={{opacity:0,y:25}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{
duration:.5,
delay:index*.08
}}
className="
group
rounded-[30px]
border
border-cyan-400/20
bg-white/5
backdrop-blur-xl
p-8
hover:border-cyan-400
hover:-translate-y-2
transition-all
duration-500
"
>

<h3 className="text-2xl font-bold text-white">

{item.title}

</h3>

<p className="mt-6 text-slate-400">

Open IEEE Resource →

</p>

</motion.a>

))}

</div>

</div>

</section>
{/* =========================================
        CAMERA READY
========================================= */}

<section className="relative py-28 bg-[#020817]">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-center text-5xl font-black text-white">

Camera Ready

</h2>

<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

{[
"Prepare Final IEEE PDF",
"Run IEEE PDF eXpress",
"Complete Copyright",
"Register Conference",
"Upload Final Paper",
"Present at Conference",
"IEEE Xplore Submission",
"Publication"

].map((item,index)=>(

<motion.div

key={item}
initial={{opacity:0,y:25}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{
duration:.5,
delay:index*.07
}}

className="
rounded-[30px]
border
border-cyan-400/20
bg-white/5
backdrop-blur-xl
p-8
text-center
hover:border-cyan-400
transition
"

>

<div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/20 mx-auto flex items-center justify-center text-cyan-300 font-black">

{index+1}

</div>

<p className="mt-8 text-white font-semibold">

{item}

</p>

</motion.div>

))}

</div>

</div>

</section>
<section className="py-28 bg-gradient-to-b from-[#071326] to-[#020817]">

<div className="max-w-5xl mx-auto px-6">

<div className="
rounded-[40px]
border
border-cyan-400/20
bg-gradient-to-r
from-cyan-500/10
to-blue-500/10
backdrop-blur-2xl
p-16
text-center
">

<h2 className="text-5xl font-black text-white">

Ready to Submit?

</h2>

<p className="mt-8 text-slate-400 text-lg leading-8">

Ensure your manuscript follows every IEEE requirement,
passes plagiarism screening,
and complies with the conference policies before submission.

</p>

<button

onClick={()=>setShowSubmitPopup(true)}

className="
mt-12
rounded-full
bg-cyan-400
px-10
py-5
font-bold
text-[#020817]
hover:scale-105
transition-all
shadow-[0_0_40px_rgba(34,211,238,.35)]
"

>

Proceed to Submission

</button>

</div>

</div>

</section>
<Footer />
  </>
  );}