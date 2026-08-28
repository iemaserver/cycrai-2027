
import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  FileText,
  CalendarDays,
  ClipboardCheck,
  Scale,
  BrainCircuit,
  Upload,
  SearchCheck,
  Presentation,
  Copyright,
  Users,
  LockKeyhole,
  Database,
  Bot,
  BookOpen,
  AlertTriangle,
  UserCheck,
  Eye,
  Code2,
  HeartHandshake,
  RefreshCw,
  Mail,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

import Footer from "../components/Footer";

export default function Guidelines() {
  const technicalTracks = [
    {
      number: "01",
      title: "Foundation of Cyber Security",
      icon: ShieldCheck,
    },
    {
      number: "02",
      title: "Foundation of Cryptography",
      icon: LockKeyhole,
    },
    {
      number: "03",
      title: "Foundation of Responsible AI",
      icon: Bot,
    },
    {
      number: "04",
      title: "Emerging Technologies",
      icon: BrainCircuit,
    },
  ];

  const submissionSteps = [
    {
      number: "01",
      title: "Prepare Manuscript",
      desc: "Use the current IEEE Standard two-column conference template for A4 paper.",
      icon: FileText,
    },
    {
      number: "02",
      title: "Check Originality",
      desc: "Ensure the work is original, unpublished and not under review elsewhere.",
      icon: SearchCheck,
    },
    {
      number: "03",
      title: "Create CMT Account",
      desc: "Submit all manuscripts through Microsoft CMT using the required metadata.",
      icon: Users,
    },
    {
      number: "04",
      title: "Upload Anonymous PDF",
      desc: "Upload a readable, unencrypted, text-searchable and properly anonymised PDF.",
      icon: Upload,
    },
    {
      number: "05",
      title: "Double-Blind Review",
      desc: "Compliant manuscripts are assigned to independent reviewers with appropriate expertise.",
      icon: Eye,
    },
    {
      number: "06",
      title: "Camera Ready",
      desc: "Accepted papers must complete registration, copyright and final submission requirements.",
      icon: ClipboardCheck,
    },
  ];

  const manuscriptChecklist = [
    "Current IEEE two-column A4 conference template",
    "Four to six pages including references",
    "English language",
    "Abstract not exceeding 250 words",
    "Three to six keywords",
    "Single readable, unencrypted, text-searchable PDF",
    "No author names or affiliations",
    "No acknowledgements or identifying funding statements",
    "No page numbers, headers or footers",
    "Figures and tables numbered, captioned and cited",
    "Complete and verifiable IEEE-style references",
    "Overall similarity below 15%",
    "No single source above 5% similarity",
    "Scholarly prose written by the listed human authors",
  ];

  const doubleBlindRules = [
    "Remove author names and photographs.",
    "Remove affiliations, postal addresses, emails and telephone numbers.",
    "Remove ORCID identifiers and biographies.",
    "Remove acknowledgements and identifying funding statements.",
    "Remove institutional logos and identifying laboratory or group names.",
    "Anonymise personal and institutional links.",
    "Write self-citations in the third person.",
    "Do not use '[removed for review]' in references.",
    "Anonymise repositories and supplementary material.",
    "Clear author and creator information from PDF metadata.",
    "Use a filename that does not identify the author or institution.",
  ];

  const originalityRules = [
    "The manuscript must report original work by the listed authors.",
    "The work must not have been previously published in substantially the same form.",
    "The manuscript must not be under review or accepted elsewhere.",
    "Concurrent submission results in immediate desk rejection.",
    "Substantial extensions of earlier work are permitted only with genuinely new technical material.",
    "Approximately 30% or more genuinely new technical material is expected for an extended version.",
    "Survey-only papers and tutorial restatements are not accepted.",
    "Implementation reports without technical contribution are not accepted.",
    "Authors are responsible for originality, accuracy and integrity.",
  ];

  const aiPolicy = [
    "Substantive scholarly prose must be written by the listed human authors.",
    "Generative AI must not generate, rewrite, paraphrase, expand, condense or summarise submitted scholarly text.",
    "Disclosure does not make prohibited AI-generated prose acceptable.",
    "Spelling, punctuation and grammar checking are permitted.",
    "Bibliography management, citation formatting and typesetting are permitted.",
    "Statistical analysis, similarity screening and non-generative image processing are permitted.",
    "Human proofreading and professional language editing are permitted.",
    "Machine translation is permitted for text written by the authors, with disclosure at camera-ready stage.",
    "AI must not fabricate data, results, participants, experiments or evidence.",
    "AI must not generate references or citations.",
    "Confidential manuscripts must not be uploaded to public generative services.",
    "AI research is permitted when the model, version, methodology and evaluation are transparently reported.",
    "AI-generated code, images and synthetic datasets forming part of the methodology must be disclosed.",
    "AI detection scores alone will never constitute evidence of a breach.",
    "Human authors remain accountable for every statement, number, figure and reference.",
  ];

  const reviewCriteria = [
    "Relevance to the selected technical track",
    "Originality",
    "Technical correctness",
    "Significance",
    "Experimental or theoretical quality",
    "Fair comparison with prior work",
    "Reproducibility",
    "Support for claims",
    "Research integrity",
    "Clarity of presentation",
  ];

  const cameraReadySteps = [
    "Address mandatory reviewer comments",
    "Restore author names and affiliations",
    "Restore acknowledgements and funding information",
    "Restore full ethical approval details",
    "Observe the maximum eight-page absolute limit",
    "Remove page numbers, headers and footers",
    "Validate PDF through IEEE PDF eXpress",
    "Complete IEEE Electronic Copyright Form",
    "Complete author registration and payment",
    "Upload validated PDF and signed eCF to CMT",
    "Complete final CrossCheck and prohibited-author screening",
    "Proofread before final upload",
  ];

  const integrityIssues = [
    "Plagiarism and substantial undisclosed textual reuse",
    "Fabricated or falsified data",
    "Fabricated citations",
    "Misleading image manipulation",
    "Concurrent or duplicate submission",
    "Duplicate publication",
    "Falsified peer-review information",
    "Authorship manipulation or purchased authorship",
    "Paper-mill activity",
    "Citation manipulation",
    "Serious undisclosed conflicts of interest",
    "Manipulation of similarity screening",
    "Violation of the human-authorship requirement",
    "Deliberate deception of reviewers or Conference officials",
  ];

  const importantDates = [
    ["Full paper submission opens", "15 December 2026"],
    ["Full paper submission deadline", "15 March 2027"],
    ["Notification of acceptance", "15 June 2027"],
    ["Author registration deadline", "10 August 2027"],
    ["Camera-ready submission", "28 August 2027"],
    ["Conference", "29–30 September 2027"],
  ];

  const checklist = [
    "Work is original and not under review or accepted elsewhere.",
    "Manuscript falls within the selected track.",
    "Current IEEE two-column A4 template is used.",
    "Manuscript is four to six pages including references.",
    "Abstract is within 250 words and three to six keywords are supplied.",
    "No author-identifying information appears in the PDF.",
    "Self-citations are written in third person.",
    "Repository and supplementary links are anonymised.",
    "Ethical approval is stated with identifying details withheld.",
    "PDF metadata and filename disclose no identity.",
    "Similarity is below 15% and no single source exceeds 5%.",
    "Scholarly prose was written by the listed human authors.",
    "References and DOI information have been verified.",
    "Figures and tables are legible, captioned and cited.",
    "Results are accurately reported and third-party material is used lawfully.",
    "Conflicts of interest have been disclosed.",
    "Every listed author has approved the manuscript and author order.",
    "Correct file has been uploaded to the correct track.",
  ];

  const ieeeResources = [
    {
      title: "IEEE Author Center",
      link: "https://ieeeauthorcenter.ieee.org/",
    },
    {
      title: "Become an IEEE Conference Author",
      link: "https://conferences.ieeeauthorcenter.ieee.org/become-an-ieee-conference-author/",
    },
    {
      title: "Author Ethics",
      link: "https://conferences.ieeeauthorcenter.ieee.org/author-ethics/",
    },
    {
      title: "Write Your Paper",
      link: "https://conferences.ieeeauthorcenter.ieee.org/write-your-paper/",
    },
    {
      title: "Understand Peer Review",
      link: "https://conferences.ieeeauthorcenter.ieee.org/understand-peer-review/",
    },
    {
      title: "Get Published",
      link: "https://conferences.ieeeauthorcenter.ieee.org/get-published/",
    },
    {
      title: "IEEE Manuscript Templates",
      link: "https://www.ieee.org/conferences/publishing/templates",
    },
    {
      title: "IEEE PDF eXpress",
      link: "https://www.ieee.org/conferences/publishing/pdfexpress.html",
    },
  ];

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}

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

        {/* Glows */}
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[170px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[170px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Hero Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 uppercase tracking-[3px] text-sm text-cyan-300">
              <Sparkles size={16} />
              CYCRAI 2027
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-white">
              Guidelines
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                & Policies
              </span>
            </h1>
          </motion.div>

          {/* =====================================================
              IMPORTANT NOTICE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16"
          >
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-cyan-400/20
                bg-white/5
                backdrop-blur-2xl
                p-8
                md:p-10
                transition-all
                duration-500
                hover:border-cyan-400/40
                hover:shadow-[0_0_45px_rgba(34,211,238,.14)]
                hover:-translate-y-2
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-br
                  from-cyan-500/10
                  via-transparent
                  to-blue-500/5
                "
              />

              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                  <AlertTriangle className="text-cyan-300" size={26} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Important Submission Notice
                  </h3>

                  <p className="mt-4 text-slate-400 leading-8">
                    Read this page in full before preparing a manuscript.
                    Submission constitutes confirmation by every listed author
                    that these guidelines have been read and accepted.
                    Mandatory requirements are enforced by administrative
                    rejection without external review.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              SCOPE & PRECEDENCE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <SectionHeading
              icon={Scale}
              label="Section 01"
              title="Scope & Precedence"
            />

            <div className="grid lg:grid-cols-2 gap-8">

              <InfoCard
                icon={BookOpen}
                title="What These Guidelines Cover"
              >
                <p>
                  These guidelines govern the preparation, submission, review,
                  revision, presentation and publication of every manuscript
                  submitted to CYCRAI 2027.
                </p>

                <p>
                  They apply to main technical tracks, special sessions,
                  posters and work-in-progress categories.
                </p>
              </InfoCard>

              <InfoCard
                icon={Scale}
                title="IEEE & CYCRAI Requirements"
              >
                <p>
                  IEEE publication policy sets the minimum standard for
                  publication. CYCRAI 2027 imposes additional requirements
                  for submission.
                </p>

                <p>
                  Where a binding IEEE requirement cannot be reconciled with
                  a CYCRAI requirement, the IEEE requirement governs
                  eligibility for publication in IEEE Xplore.
                </p>
              </InfoCard>

            </div>
          </motion.div>

          {/* =====================================================
              TECHNICAL TRACKS
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <SectionHeading
              icon={BrainCircuit}
              label="Section 02"
              title="Technical Tracks"
              description="Submit to the single track that best represents the principal contribution."
            />

            <div className="grid md:grid-cols-2 gap-8">
              {technicalTracks.map((track, index) => {
                const Icon = track.icon;

                return (
                  <motion.div
                    key={track.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    whileHover={{ y: -8 }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[30px]
                      border
                      border-cyan-400/20
                      bg-white/5
                      backdrop-blur-2xl
                      p-8
                      transition-all
                      duration-500
                      hover:border-cyan-400/40
                      hover:shadow-[0_0_45px_rgba(34,211,238,.14)]
                    "
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/5" />

                    <div className="relative z-10">
                      <div className="flex justify-between items-center">
                        <span className="text-5xl font-black text-cyan-500/10 group-hover:text-cyan-400/20 transition">
                          {track.number}
                        </span>

                        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                          <Icon className="text-cyan-300" size={30} />
                        </div>
                      </div>

                      <h3 className="mt-8 text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {track.title}
                      </h3>

                      <div className="mt-6 h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-24 transition-all duration-500" />

                      <p className="mt-6 text-slate-400 leading-8">
                        Topic lists on the Call for Papers page are indicative
                        rather than exhaustive. Interdisciplinary work spanning
                        security, cryptography and machine learning is expressly
                        welcome.
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          ORIGINALITY + MANUSCRIPT
      ========================================================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#071326] via-[#020817] to-[#071326] overflow-hidden">

        <Background />

        <div className="relative max-w-7xl mx-auto px-6">

          <SectionHeading
            icon={ShieldCheck}
            label="Sections 03–04"
            title="Originality & Manuscript Preparation"
            description="Every manuscript must satisfy the originality, formatting and file requirements before submission."
          />

          <div className="grid lg:grid-cols-2 gap-8">

            <PolicyCard
              icon={ShieldCheck}
              title="Originality & Exclusive Submission"
              items={originalityRules}
            />

            <PolicyCard
              icon={FileText}
              title="Manuscript Preparation"
              items={[
                "Use the current IEEE Standard two-column conference template for A4 paper.",
                "Do not alter margins, font sizes, line spacing or column widths.",
                "Body text is 10-point, single-spaced and two columns.",
                "Review manuscript must be four to six pages including references.",
                "Manuscripts must be written in English.",
                "Abstract must not exceed 250 words.",
                "Supply three to six keywords.",
                "Every figure and table must be numbered, captioned and cited.",
                "References must be complete, accurate, independently verifiable and in IEEE style.",
                "Upload a single readable, unencrypted, text-searchable PDF.",
                "No author-inserted page numbers, headers, footers, watermarks, tracked changes, comments or annotations.",
              ]}
            />

          </div>
        </div>
      </section>

      {/* =========================================================
          DOUBLE BLIND + SIMILARITY
      ========================================================= */}

      <section className="relative py-28 bg-[#020817] overflow-hidden">

        <Background />

        <div className="relative max-w-7xl mx-auto px-6">

          <SectionHeading
            icon={Eye}
            label="Sections 05–06"
            title="Review Integrity"
            description="CYCRAI 2027 uses strict double-blind review and mandatory similarity screening."
          />

          <div className="grid lg:grid-cols-2 gap-8">

            <PolicyCard
              icon={Eye}
              title="Double-Blind Review"
              items={doubleBlindRules}
            />

            <InfoCard
              icon={SearchCheck}
              title="Similarity & Plagiarism"
            >
              <p>
                Every submission is screened before review, and every accepted
                camera-ready manuscript is screened again using IEEE CrossCheck.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <MetricCard value="< 15%" label="Overall Similarity" />
                <MetricCard value="≤ 5%" label="Single Source" />
              </div>

              <div className="mt-6 space-y-4 text-slate-400 leading-8">
                <p>
                  Similarity is a screening indicator, not a finding. A
                  manuscript below the threshold may still be rejected where
                  substantive plagiarism or unacceptable textual reuse is
                  identified.
                </p>

                <p>
                  Self-plagiarism is plagiarism. Authors must not disguise
                  copied material through synonym substitution, automated
                  paraphrasing, translation, character manipulation or citation
                  fragmentation.
                </p>

                <p>
                  Authors are encouraged to run their own check using Turnitin,
                  iThenticate or an equivalent licensed tool before submission.
                </p>
              </div>
            </InfoCard>

          </div>
        </div>
      </section>

      {/* =========================================================
          GENERATIVE AI
      ========================================================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#071326] via-[#020817] to-[#071326] overflow-hidden">

        <Background />

        <div className="relative max-w-7xl mx-auto px-6">

          <SectionHeading
            icon={Bot}
            label="Section 07"
            title="Generative AI & Human Authorship"
            description="CYCRAI 2027 applies a conference-specific human-authorship requirement."
          />

          <div className="grid lg:grid-cols-2 gap-8">

            <PolicyCard
              icon={UserCheck}
              title="Human Authorship"
              items={aiPolicy.slice(0, 5)}
            />

            <PolicyCard
              icon={CheckCircle2}
              title="Permitted Assistance"
              items={aiPolicy.slice(5, 8)}
            />

            <PolicyCard
              icon={AlertTriangle}
              title="Prohibited Uses"
              items={aiPolicy.slice(8, 11)}
            />

            <PolicyCard
              icon={BrainCircuit}
              title="AI Research & Screening"
              items={aiPolicy.slice(11)}
            />

          </div>
        </div>
      </section>

      {/* =========================================================
          SUBMISSION
      ========================================================= */}

      <section className="relative py-28 bg-[#020817] overflow-hidden">

        <Background />

        <div className="relative max-w-7xl mx-auto px-6">

          <SectionHeading
            icon={Upload}
            label="Section 08"
            title="Submission"
            description="All manuscripts are submitted through Microsoft CMT."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {submissionSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  whileHover={{ y: -8 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-cyan-400/20
                    bg-white/5
                    backdrop-blur-2xl
                    p-8
                    transition-all
                    duration-500
                    hover:border-cyan-400/40
                    hover:shadow-[0_0_45px_rgba(34,211,238,.14)]
                  "
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/5" />

                  <div className="relative z-10">

                    <div className="flex justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                        <Icon size={26} className="text-cyan-300" />
                      </div>

                      <span className="text-5xl font-black text-cyan-500/10">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-2xl font-bold text-white group-hover:text-cyan-300 transition">
                      {step.title}
                    </h3>

                    <p className="mt-5 text-slate-400 leading-8">
                      {step.desc}
                    </p>

                  </div>
                </motion.div>
              );
            })}

          </div>

          {/* CMT Rules */}
          <div className="grid lg:grid-cols-2 gap-8 mt-16">

            <InfoCard icon={Upload} title="Microsoft CMT Requirements">
              <ul className="space-y-4">
                <li>• Submissions by email or other routes are discarded.</li>
                <li>• The submitting author must hold a CMT account.</li>
                <li>• Supply title, abstract, keywords and complete author metadata.</li>
                <li>• The submitting author acts as corresponding author.</li>
                <li>• Author list and order are final at the submission deadline.</li>
                <li>• Revisions may be made before the deadline.</li>
                <li>• Deadlines close at 23:59 Anywhere on Earth (AoE).</li>
              </ul>
            </InfoCard>

            <InfoCard icon={Scale} title="Review Outcomes">
              <ul className="space-y-4">
                <li>• Acceptance</li>
                <li>• Acceptance subject to mandatory correction</li>
                <li>• Acceptance as work-in-progress or poster paper</li>
                <li>• Rejection</li>
              </ul>

              <p className="mt-6">
                There is no rebuttal stage. Reviewer identities are never
                disclosed and reviewing material remains confidential.
              </p>
            </InfoCard>

          </div>
        </div>
      </section>

      {/* =========================================================
          CAMERA READY
      ========================================================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#071326] via-[#020817] to-[#071326] overflow-hidden">

        <Background />

        <div className="relative max-w-7xl mx-auto px-6">

          <SectionHeading
            icon={ClipboardCheck}
            label="Section 10"
            title="Camera-Ready Submission"
            description="Acceptance alone does not secure publication. Every camera-ready requirement must be completed."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {cameraReadySteps.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -6 }}
                className="
                  group
                  rounded-[26px]
                  border
                  border-cyan-400/20
                  bg-white/5
                  backdrop-blur-xl
                  p-6
                  transition-all
                  duration-500
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_30px_rgba(34,211,238,.10)]
                "
              >
                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 shrink-0 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 font-black">
                    {index + 1}
                  </div>

                  <p className="text-slate-300 leading-7">
                    {item}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>

          <div className="mt-16 rounded-[35px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-2xl p-10 md:p-14">

            <div className="grid md:grid-cols-3 gap-8 text-center">

              <MetricCard
                value="6"
                label="Standard Camera-Ready Pages"
              />

              <MetricCard
                value="+2"
                label="Additional Pages Allowed"
              />

              <MetricCard
                value="₹1000"
                label="Per Additional Page"
              />

            </div>

            <p className="mt-10 text-center text-slate-400 leading-8 max-w-4xl mx-auto">
              The camera-ready manuscript may run to six pages, with up to
              two additional pages permitted on payment of ₹1000 per
              additional page. The absolute maximum is eight pages.
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================
          REGISTRATION + PRESENTATION
      ========================================================= */}

      <section className="relative py-28 bg-[#020817] overflow-hidden">

        <Background />

        <div className="relative max-w-7xl mx-auto px-6">

          <SectionHeading
            icon={Presentation}
            label="Section 11"
            title="Registration, Presentation & Withdrawal"
            description="Accepted papers must satisfy registration and presentation requirements."
          />

          <div className="grid lg:grid-cols-2 gap-8">

            <InfoCard icon={Users} title="Registration & Presentation">
              <ul className="space-y-5">
                <li>• At least one author must complete full author registration.</li>
                <li>• Each full registration covers one paper.</li>
                <li>• Valid membership/student proof is required where applicable.</li>
                <li>• Presentation is mandatory.</li>
                <li>• At least one author must present the paper.</li>
                <li>• Registered but unpresented papers are excluded from IEEE Xplore proceedings.</li>
                <li>• Remote presentation may be requested at least fourteen days before the conference.</li>
                <li>• Registration fees are non-refundable.</li>
              </ul>
            </InfoCard>

            <InfoCard icon={RefreshCw} title="Withdrawal">
              <ul className="space-y-5">
                <li>• Withdrawal before acceptance may be made through CMT.</li>
                <li>• Withdrawal after acceptance requires a written request.</li>
                <li>• Agreement of all co-authors is required after acceptance.</li>
                <li>• Withdrawal to submit substantially the same work elsewhere may be treated as abuse of peer review.</li>
              </ul>
            </InfoCard>

          </div>

          <div className="mt-12 rounded-[35px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-2xl p-10 md:p-14 text-center">

            <h3 className="text-3xl md:text-4xl font-black text-white">
              IEEE Xplore Submission
            </h3>

            <p className="mt-6 max-w-4xl mx-auto text-slate-400 text-lg leading-8">
              All accepted papers that are registered and presented will be
              submitted for inclusion in the IEEE Xplore Digital Library,
              subject to IEEE Xplore's scope and quality requirements.
              Acceptance by CYCRAI 2027 does not by itself guarantee inclusion.
            </p>

          </div>

        </div>
      </section>

      {/* =========================================================
          AUTHORSHIP + CONFLICT
      ========================================================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#071326] via-[#020817] to-[#071326] overflow-hidden">

        <Background />

        <div className="relative max-w-7xl mx-auto px-6">

          <SectionHeading
            icon={UserCheck}
            label="Sections 13–15"
            title="Authorship, Conflicts & Confidentiality"
          />

          <div className="grid lg:grid-cols-3 gap-8">

            <InfoCard icon={UserCheck} title="Authorship">
              <p>
                Every listed author must have made a substantive intellectual
                contribution, participated in drafting or critically revising
                the manuscript, approved the submitted version and be prepared
                to take public responsibility for its content.
              </p>

              <p>
                Honorary, gift, guest and coercive authorship are prohibited.
                Purchase, sale or brokerage of authorship and paper-mill
                activity are also prohibited.
              </p>
            </InfoCard>

            <InfoCard icon={Scale} title="Conflicts of Interest">
              <p>
                Authors, reviewers and committee members must disclose any
                circumstance that could reasonably compromise or appear to
                compromise impartiality.
              </p>

              <p>
                Conflicts include employment at the same institution,
                recent collaboration, supervision, close personal relationships,
                material financial interests and direct professional competition.
              </p>
            </InfoCard>

            <InfoCard icon={LockKeyhole} title="Reviewer Confidentiality">
              <p>
                A manuscript under review is a confidential document and
                remains so in perpetuity.
              </p>

              <p>
                Reviewers must not distribute manuscripts, discuss unpublished
                content publicly, use review information for personal advantage
                or transmit manuscripts to public generative services.
              </p>
            </InfoCard>

          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH INTEGRITY
      ========================================================= */}

      <section className="relative py-28 bg-[#020817] overflow-hidden">

        <Background />

        <div className="relative max-w-7xl mx-auto px-6">

          <SectionHeading
            icon={AlertTriangle}
            label="Sections 16–18"
            title="Research Integrity & Responsible Cybersecurity"
            description="Technical quality must be accompanied by responsible and ethical research practice."
          />

          <div className="grid lg:grid-cols-3 gap-8">

            <PolicyCard
              icon={Database}
              title="Data & Result Integrity"
              items={[
                "Report observations, experiments and results honestly.",
                "Do not fabricate participants, experiments or measurements.",
                "Do not falsify or selectively omit material results.",
                "Disclose synthetic data when used.",
                "Do not manipulate images in a way that alters scientific meaning.",
                "Describe material filtering, exclusion, augmentation or transformation of data.",
              ]}
            />

            <PolicyCard
              icon={FileText}
              title="Figures & Third-Party Material"
              items={[
                "Figures, photographs, screenshots and tables must accurately represent evidence.",
                "Obtain permission for copyrighted third-party material where required.",
                "Citation alone does not constitute reproduction permission.",
                "Use datasets and third-party code according to their licences.",
                "Every dataset used must be cited.",
              ]}
            />

            <PolicyCard
              icon={ShieldCheck}
              title="Responsible Cybersecurity Research"
              items={[
                "Experiments against third-party systems require documented authorisation where required.",
                "Previously unknown vulnerabilities should follow coordinated disclosure practice.",
                "Malware and offensive research must describe containment and safety measures.",
                "Operationally weaponisable detail should be handled responsibly.",
                "State foreseeable dual-use risks and safeguards.",
                "Do not disclose unnecessary credentials or personal information.",
              ]}
            />

          </div>
        </div>
      </section>

      {/* =========================================================
          HUMAN PARTICIPANTS + AI RESEARCH
      ========================================================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#071326] via-[#020817] to-[#071326] overflow-hidden">

        <Background />

        <div className="relative max-w-7xl mx-auto px-6">

          <SectionHeading
            icon={HeartHandshake}
            label="Sections 19–22"
            title="Ethics, AI Reporting & Reproducibility"
          />

          <div className="grid lg:grid-cols-2 gap-8">

            <InfoCard icon={HeartHandshake} title="Human Participants & Privacy">
              <p>
                Research involving human participants, behavioural experiments,
                interviews, surveys, biometric or medical data, personally
                identifiable information, private communications or protected
                data must comply with applicable ethical, institutional and
                legal requirements.
              </p>

              <p>
                Where approval or informed consent is required, it must be
                obtained. During double-blind review, identifying approval
                details are withheld rather than the approval itself omitted.
              </p>
            </InfoCard>

            <InfoCard icon={Bot} title="AI Research Reporting">
              <p>
                AI research must be reported with enough transparency for
                reliability, validity and limitations to be assessed.
              </p>

              <p>
                Where relevant, describe dataset provenance, sampling,
                preprocessing, train-validation-test separation, model
                architecture, hyperparameters, random seeds, baselines,
                ablations, fairness, privacy, failure cases and limitations.
              </p>
            </InfoCard>

            <InfoCard icon={LockKeyhole} title="Cryptographic & Security Claims">
              <p>
                Papers proposing cryptographic primitives, authentication
                mechanisms, security protocols, key-management systems or
                privacy-preserving mechanisms must explicitly state their
                security assumptions and threat model.
              </p>

              <p>
                Claims must be supported by appropriate evidence such as formal
                proof, security reduction, cryptanalysis, complexity analysis
                or empirical evaluation.
              </p>
            </InfoCard>

            <InfoCard icon={Code2} title="Reproducibility">
              <p>
                Describe datasets, preprocessing, algorithms, implementation,
                model configuration, evaluation procedure, software environment
                and experimental settings with enough precision for expert
                assessment.
              </p>

              <p>
                Where ethically, legally and practically possible, authors are
                encouraged to release source code, configuration files,
                benchmark scripts, trained models, anonymised data and
                supplementary documentation.
              </p>
            </InfoCard>

          </div>
        </div>
      </section>

      {/* =========================================================
          MISCONDUCT + SANCTIONS
      ========================================================= */}

      <section className="relative py-28 bg-[#020817] overflow-hidden">

        <Background />

        <div className="relative max-w-7xl mx-auto px-6">

          <SectionHeading
            icon={AlertTriangle}
            label="Sections 23–24"
            title="Research Misconduct & Sanctions"
            description="Credible allegations are investigated before a determination is made."
          />

          <div className="grid lg:grid-cols-2 gap-8">

            <PolicyCard
              icon={AlertTriangle}
              title="Serious Integrity Concerns"
              items={integrityIssues}
            />

            <InfoCard icon={Scale} title="Investigation & Possible Sanctions">
              <p>
                A credible allegation is not treated as established misconduct.
                The Committee may request explanations, earlier drafts, source
                files, analysis scripts, records or raw results.
              </p>

              <p>
                Where a breach is substantiated, possible consequences include
                administrative rejection, withdrawal of acceptance, exclusion
                from the programme or proceedings, withdrawal from IEEE Xplore,
                institutional notification, referral to IEEE and exclusion from
                future editions of CYCRAI.
              </p>

              <p>
                Registration fees are not refunded in these circumstances.
              </p>
            </InfoCard>

          </div>
        </div>
      </section>

      {/* =========================================================
          CONFERENCE CONDUCT
      ========================================================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#071326] via-[#020817] to-[#071326] overflow-hidden">

        <Background />

        <div className="relative max-w-7xl mx-auto px-6">

          <SectionHeading
            icon={Users}
            label="Sections 25–26"
            title="Conference Conduct & Interpretation"
          />

          <div className="grid lg:grid-cols-2 gap-8">

            <InfoCard icon={Users} title="Conference Conduct">
              <p>
                CYCRAI 2027 is committed to an environment in which every
                participant can take part without harassment, discrimination
                or intimidation.
              </p>

              <p>
                Authors, reviewers, speakers, delegates, volunteers, sponsors
                and committee members are expected to observe the IEEE Code of
                Ethics and IEEE Code of Conduct.
              </p>

              <p>
                Concerns may be raised confidentially with a member of the
                Organising Committee or by writing to{" "}
                <span className="text-cyan-300 font-semibold">
                  cycrai@iem.edu.in
                </span>
                .
              </p>
            </InfoCard>

            <InfoCard icon={RefreshCw} title="Interpretation & Revision">
              <p>
                These guidelines protect authors, reviewers, participants and
                the integrity of the scientific record.
              </p>

              <p>
                Where a situation is not expressly addressed, the General
                Chairs, Technical Programme Chairs and Publications Chairs will
                determine the appropriate procedure by reference to IEEE
                requirements and recognised principles of publication ethics.
              </p>

              <p>
                The version published on the official conference website at
                the relevant time governs.
              </p>
            </InfoCard>

          </div>
        </div>
      </section>

      {/* =========================================================
          IMPORTANT DATES
      ========================================================= */}

      <section className="relative py-28 bg-[#020817] overflow-hidden">

        <Background />

        <div className="relative max-w-6xl mx-auto px-6">

          <SectionHeading
            icon={CalendarDays}
            label="Section 27"
            title="Important Dates"
            description="All deadlines close at 23:59 Anywhere on Earth (AoE)."
          />

          <div className="overflow-hidden rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl">

            {importantDates.map(([milestone, date], index) => (
              <motion.div
                key={milestone}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="
                  group
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-3
                  p-6
                  md:px-8
                  border-b
                  border-white/5
                  last:border-b-0
                  hover:bg-cyan-500/5
                  transition-all
                "
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-slate-300 font-medium">
                    {milestone}
                  </span>
                </div>

                <span className="text-cyan-300 font-semibold">
                  {date}
                </span>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          CHECKLIST
      ========================================================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#071326] via-[#020817] to-[#071326] overflow-hidden">

        <Background />

        <div className="relative max-w-7xl mx-auto px-6">

          <SectionHeading
            icon={ClipboardCheck}
            label="Section 28"
            title="Checklist Before Submission"
            description="Use this checklist before uploading your manuscript."
          />

          <div className="grid md:grid-cols-2 gap-5">

            {checklist.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.035,
                }}
                className="
                  group
                  flex
                  items-start
                  gap-4
                  rounded-2xl
                  border
                  border-cyan-400/10
                  bg-cyan-500/5
                  p-5
                  hover:border-cyan-400/30
                  hover:bg-cyan-500/10
                  transition-all
                "
              >
                <CheckCircle2
                  size={22}
                  className="mt-1 shrink-0 text-cyan-400 group-hover:text-cyan-300"
                />

                <span className="text-slate-300 leading-7">
                  {item}
                </span>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          AUTHOR DECLARATION
      ========================================================= */}

      <section className="relative py-28 bg-[#020817] overflow-hidden">

        <Background />

        <div className="relative max-w-6xl mx-auto px-6">

          <SectionHeading
            icon={UserCheck}
            label="Section 29"
            title="Author Declaration"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="
              group
              relative
              overflow-hidden
              rounded-[35px]
              border
              border-cyan-400/20
              bg-gradient-to-br
              from-cyan-500/10
              via-[#071326]
              to-[#020817]
              backdrop-blur-2xl
              p-8
              md:p-14
              transition-all
              duration-500
              hover:border-cyan-400/40
              hover:shadow-[0_0_45px_rgba(34,211,238,.12)]
            "
          >

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-transparent" />

            <div className="relative z-10">

              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                  <UserCheck className="text-cyan-300" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Corresponding Author Confirmation
                </h3>
              </div>

              <p className="text-slate-400 text-lg leading-9">
                By submitting a manuscript to CYCRAI 2027, the corresponding
                author confirms on behalf of all listed authors that the work
                is original and is neither published nor under review elsewhere;
                every named author has contributed substantively, has approved
                the submitted version, and no other person qualifies for
                authorship; the manuscript meets the format, length and
                anonymity requirements; similarity thresholds are met; the
                scholarly prose complies with the human-authorship requirement;
                references and reported results are accurate; applicable ethical
                and research-integrity requirements have been observed; conflicts
                of interest have been disclosed; and the authors accept the
                registration, presentation and no-show provisions.
              </p>

            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          IEEE AUTHOR RESOURCES
      ========================================================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#071326] via-[#020817] to-[#071326] overflow-hidden">

        <Background />

        <div className="relative max-w-7xl mx-auto px-6">

          <SectionHeading
            icon={ExternalLink}
            label="Section 30"
            title="IEEE Author Resources"
            description="Useful resources for preparing, reviewing and publishing your manuscript."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {ieeeResources.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -8 }}
                className="
                  group
                  rounded-[30px]
                  border
                  border-cyan-400/20
                  bg-white/5
                  backdrop-blur-xl
                  p-7
                  transition-all
                  duration-500
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_40px_rgba(34,211,238,.12)]
                "
              >

                <div className="flex items-start justify-between gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                    <BookOpen size={22} className="text-cyan-300" />
                  </div>

                  <ExternalLink
                    size={18}
                    className="text-slate-600 group-hover:text-cyan-300 transition"
                  />

                </div>

                <h3 className="mt-6 text-xl font-bold text-white group-hover:text-cyan-300 transition">
                  {item.title}
                </h3>

                <p className="mt-5 text-slate-400 text-sm">
                  Open IEEE Resource →
                </p>

              </motion.a>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          ENQUIRIES + CMT
      ========================================================= */}

      <section className="relative py-28 bg-[#020817] overflow-hidden">

        <Background />

        <div className="relative max-w-5xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-cyan-400/20
              bg-gradient-to-r
              from-cyan-500/10
              to-blue-500/10
              backdrop-blur-2xl
              p-10
              md:p-16
              text-center
            "
          >

            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="relative z-10">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                <Mail className="text-cyan-300" size={28} />
              </div>

              <h2 className="mt-8 text-4xl md:text-5xl font-black text-white">
                Enquiries
              </h2>

              <a
                href="mailto:cycrai@iem.edu.in"
                className="inline-flex items-center gap-3 mt-6 text-cyan-300 text-xl font-semibold hover:text-cyan-200 transition"
              >
                <Mail size={20} />
                cycrai@iem.edu.in
              </a>

              <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
                Quote the CMT paper identifier where one exists. Enquiries
                about the scientific judgement of reviewers will not be
                answered. Confidential publication-ethics concerns should be
                addressed directly to the Conference Chairs.
              </p>

            </div>
          </motion.div>

          {/* CMT Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p className="text-slate-500 text-sm leading-7">
              The Microsoft CMT service is used for managing the peer-review
              process for this conference. This service is provided free of
              charge by Microsoft, which bears all expenses, including costs
              for Azure cloud services as well as software development and
              support.
            </p>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
}


/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function Background() {
  return (
    <>
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="absolute left-0 top-20 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-[170px]" />
    </>
  );
}


function SectionHeading({
  icon: Icon,
  label,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      className="text-center mb-16"
    >

      <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 uppercase tracking-[3px] text-sm">
        <Icon size={15} />
        {label}
      </span>

      <h2 className="mt-7 text-4xl md:text-6xl font-black text-white leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-400">
          {description}
        </p>
      )}

    </motion.div>
  );
}


function InfoCard({
  icon: Icon,
  title,
  children,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-cyan-400/20
        bg-white/5
        backdrop-blur-2xl
        p-8
        md:p-10
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:shadow-[0_0_45px_rgba(34,211,238,.14)]
      "
    >

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/5" />

      <div className="relative z-10">

        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
          <Icon size={26} className="text-cyan-300" />
        </div>

        <h3 className="mt-7 text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>

        <div className="mt-5 h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-24 transition-all duration-500" />

        <div className="mt-6 space-y-5 text-slate-400 leading-8">
          {children}
        </div>

      </div>
    </motion.div>
  );
}


function PolicyCard({
  icon: Icon,
  title,
  items,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-cyan-400/20
        bg-white/5
        backdrop-blur-2xl
        p-8
        md:p-10
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:shadow-[0_0_45px_rgba(34,211,238,.14)]
      "
    >

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/5" />

      <div className="relative z-10">

        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
          <Icon size={26} className="text-cyan-300" />
        </div>

        <h3 className="mt-7 text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>

        <div className="mt-5 h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-24 transition-all duration-500" />

        <ul className="mt-7 space-y-4 text-slate-400 leading-7">

          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3"
            >
              <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-cyan-400" />

              <span>{item}</span>
            </li>
          ))}

        </ul>

      </div>
    </motion.div>
  );
}


function MetricCard({
  value,
  label,
}) {
  return (
    <div className="rounded-2xl border border-cyan-400/15 bg-cyan-500/5 p-6">

      <div className="text-3xl md:text-4xl font-black text-cyan-300">
        {value}
      </div>

      <p className="mt-2 text-sm text-slate-500">
        {label}
      </p>

    </div>
  );
}