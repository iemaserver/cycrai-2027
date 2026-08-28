import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  SearchCheck,
  Users,
  FileSearch,
  ClipboardCheck,
  Mail,
  CheckCircle2,
  XCircle,
  Eye,
  BrainCircuit,
  MessageSquareText,
  UserCheck,
  ArrowRight,
  RefreshCw,
} from "lucide-react";

import Footer from "../components/Footer";

export default function ReviewProcess() {
  const reviewStages = [
    {
      number: "01",
      title: "Submission",
      icon: FileSearch,
      desc: "Authors submit original and unpublished work related to the theme of CYCRAI 2027.",
    },
    {
      number: "02",
      title: "Initial Screening",
      icon: SearchCheck,
      desc: "The Technical Program Committee checks technical suitability, scope, double-blind compliance and plagiarism.",
    },
    {
      number: "03",
      title: "TPC Assessment",
      icon: ClipboardCheck,
      desc: "Papers that pass the initial screening are assessed for suitability before external review.",
    },
    {
      number: "04",
      title: "Reviewer Assignment",
      icon: Users,
      desc: "Three external reviewers from the relevant research area are invited to review qualifying submissions.",
    },
    {
      number: "05",
      title: "Double-Blind Review",
      icon: Eye,
      desc: "Three experts independently evaluate the paper based on the defined review criteria.",
    },
    {
      number: "06",
      title: "Final Decision",
      icon: CheckCircle2,
      desc: "The final acceptance decision is based on the review remarks and scores received.",
    },
  ];

  const firstRoundCriteria = [
    "Technical suitability",
    "Scope of the work",
    "Originality of submitted content",
    "Plagiarism screening",
    "Compliance with double-blind submission",
    "Relevance to the conference theme",
  ];

  const secondRoundCriteria = [
    "Originality",
    "Novelty",
    "Clarity",
    "Completeness",
    "Relevance",
    "Significance",
    "Research contribution",
  ];

  const authorRequirements = [
    "Submit original and unpublished work.",
    "The paper must be related to the theme of the conference.",
    "Clearly identify the research problem.",
    "Clearly state the contribution or contributions.",
    "Provide justification with respect to state-of-the-art work.",
    "The paper must not exceed six pages.",
    "Follow the double-blind submission policy.",
    "Do not disclose names or affiliations.",
    "Do not disclose funding sources.",
    "Avoid previous-work information that can identify the authors through web searches.",
  ];

  const tpcProcess = [
    {
      letter: "A",
      title: "Topic Selection",
      desc: "TPC members select the research topics they are willing to review based on their expertise.",
    },
    {
      letter: "B",
      title: "Manual Assignment",
      desc: "Program committee chairs manually assign papers to TPC members according to expertise and feedback.",
    },
    {
      letter: "C",
      title: "External Reviewers",
      desc: "TPC members identify competent reviewers outside the Technical Committee board where required.",
    },
    {
      letter: "D",
      title: "Sub-Reviewers",
      desc: "Papers outside a TPC member's expertise may be handed over to sub-reviewers through CMT.",
    },
    {
      letter: "E",
      title: "Review Responsibility",
      desc: "TPC members remain responsible for the quality and timeliness of reviews originally allocated to them.",
    },
    {
      letter: "F",
      title: "Chair Coordination",
      desc: "Program committee chairs work closely based on review reports and reviewer scores.",
    },
  ];

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#020817] min-h-screen pt-6 pb-24">

        {/* Grid Background */}
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

          {/* Hero */}
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
              Review
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Process
              </span>
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-slate-400 text-lg leading-8">
              A structured two-round review process designed to maintain the
              quality, originality and scientific significance of CYCRAI 2027.
            </p>

            <p className="mt-4 text-cyan-300 text-sm uppercase tracking-[3px]">
              Secure Intelligence for a Connected Future
            </p>

          </motion.div>

          {/* =====================================================
              PLAGIARISM NOTICE
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
                hover:-translate-y-2
                hover:shadow-[0_0_45px_rgba(34,211,238,.14)]
              "
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/5" />

              <div className="relative z-10 flex flex-col md:flex-row gap-6">

                <div className="w-16 h-16 shrink-0 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                  <ShieldCheck
                    size={30}
                    className="text-cyan-300"
                  />
                </div>

                <div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Plagiarism & AI Screening
                  </h2>

                  <p className="mt-5 text-slate-400 leading-8">
                    CYCRAI 2027 will not accept plagiarized papers. The
                    Technical Committee will check the plagiarism level of all
                    submitted papers using a professional plagiarism-checking
                    tool to ensure originality of the content.
                  </p>

                  <p className="mt-4 text-slate-400 leading-8">
                    The conference will use{" "}
                    <span className="text-cyan-300 font-semibold">
                      Turnitin
                    </span>{" "}
                    as the plagiarism-checking software. Any paper having a
                    similarity score above{" "}
                    <span className="text-cyan-300 font-bold">
                      15%
                    </span>{" "}
                    and an AI score above{" "}
                    <span className="text-cyan-300 font-bold">
                      0%
                    </span>{" "}
                    will not be processed further.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* =====================================================
              TWO ROUND OVERVIEW
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >

            <SectionHeading
              icon={RefreshCw}
              label="Review Structure"
              title="Two-Round Review Process"
              description="The conference aims at carrying out two rounds of review to evaluate technical quality, originality and research contribution."
            />

            <div className="grid lg:grid-cols-2 gap-8">

              {/* Round 1 */}
              <ReviewRoundCard
                number="01"
                title="First Round"
                icon={SearchCheck}
                description="The papers submitted by the authors will first be assessed by the Technical Program Committee."
                points={[
                  "Technical suitability",
                  "Scope of work",
                  "Plagiarism",
                  "Double-blind compliance",
                ]}
              />

              {/* Round 2 */}
              <ReviewRoundCard
                number="02"
                title="Second Round"
                icon={Users}
                description="Once a paper passes the first round, three external reviewers from the relevant research area are invited to review the submission."
                points={[
                  "Three external experts",
                  "Double-blind review",
                  "Detailed review remarks",
                  "Reviewer scores",
                ]}
              />

            </div>

          </motion.div>

          {/* =====================================================
              REVIEW FLOW
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >

            <SectionHeading
              icon={ArrowRight}
              label="Review Workflow"
              title="From Submission to Decision"
              description="The review process progresses through screening, TPC assessment, external review and final decision."
            />

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

              {reviewStages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <motion.div
                    key={stage.number}
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

                      <div className="flex justify-between items-start">

                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                          <Icon
                            size={26}
                            className="text-cyan-300"
                          />
                        </div>

                        <span className="text-5xl font-black text-cyan-500/10">
                          {stage.number}
                        </span>

                      </div>

                      <h3 className="mt-7 text-2xl font-bold text-white group-hover:text-cyan-300 transition">
                        {stage.title}
                      </h3>

                      <div className="mt-5 h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-24 transition-all duration-500" />

                      <p className="mt-6 text-slate-400 leading-8">
                        {stage.desc}
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
          AUTHOR GUIDELINES
      ========================================================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#071326] via-[#020817] to-[#071326] overflow-hidden">

        <Background />

        <div className="relative max-w-7xl mx-auto px-6">

          <SectionHeading
            icon={UserCheck}
            label="Author Requirements"
            title="Before You Submit"
            description="Authors are expected to ensure that their manuscripts satisfy the basic requirements before entering the review process."
          />

          <div className="grid lg:grid-cols-2 gap-8">

            <PolicyCard
              icon={FileSearch}
              title="Submission Requirements"
              items={authorRequirements}
            />

            <InfoCard
              icon={BrainCircuit}
              title="Research Contribution"
            >

              <p>
                Authors should clearly identify the research problem and
                explain the contribution or contributions made by the work.
              </p>

              <p>
                The manuscript should provide appropriate justification with
                respect to the state-of-the-art work in the relevant research
                area.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <MetricCard
                  value="≤ 6"
                  label="Maximum Pages"
                />

                <MetricCard
                  value="3"
                  label="External Reviewers"
                />

              </div>

            </InfoCard>

          </div>

        </div>
      </section>


      {/* =========================================================
          DOUBLE BLIND
      ========================================================= */}

      <section className="relative py-28 bg-[#020817] overflow-hidden">

        <Background />

        <div className="relative max-w-7xl mx-auto px-6">

          <SectionHeading
            icon={Eye}
            label="Double-Blind Review"
            title="Maintaining Reviewer Anonymity"
            description="CYCRAI 2027 follows a double-blind submission and review policy."
          />

          <div className="grid lg:grid-cols-2 gap-8">

            <InfoCard
              icon={ShieldCheck}
              title="What Authors Must Hide"
            >

              <div className="space-y-4">

                <BlindItem text="Author names" />
                <BlindItem text="Author affiliations" />
                <BlindItem text="Funding sources" />
                <BlindItem text="Identifying previous works" />
                <BlindItem text="Information searchable through web engines" />

              </div>

            </InfoCard>

            <InfoCard
              icon={XCircle}
              title="Desk Rejection"
            >

              <p>
                If authors do not follow the double-blind submission policy
                at the very beginning of the process, the chairs may issue a
                desk rejection.
              </p>

              <p>
                Authors should therefore carefully inspect the manuscript for
                names, affiliations, funding information and previous work
                that could reveal their identity.
              </p>

            </InfoCard>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECOND ROUND REVIEW CRITERIA
      ========================================================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#071326] via-[#020817] to-[#071326] overflow-hidden">

        <Background />

        <div className="relative max-w-7xl mx-auto px-6">

          <SectionHeading
            icon={SearchCheck}
            label="Second Round"
            title="External Review Criteria"
            description="Qualifying submissions are double-blind reviewed by three experts from the relevant research area."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {secondRoundCriteria.map((criterion, index) => (

              <motion.div
                key={criterion}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -6 }}
                className="
                  group
                  rounded-[26px]
                  border
                  border-cyan-400/20
                  bg-white/5
                  backdrop-blur-xl
                  p-7
                  text-center
                  transition-all
                  duration-500
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_35px_rgba(34,211,238,.12)]
                "
              >

                <div className="w-14 h-14 mx-auto rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 font-black text-xl">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-lg font-bold text-white group-hover:text-cyan-300 transition">
                  {criterion}
                </h3>

              </motion.div>

            ))}

          </div>

          {/* Review Explanation */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >

            <div
              className="
                rounded-[35px]
                border
                border-cyan-400/20
                bg-gradient-to-r
                from-cyan-500/10
                to-blue-500/10
                backdrop-blur-2xl
                p-10
                md:p-14
              "
            >

              <div className="flex flex-col md:flex-row gap-6">

                <div className="w-14 h-14 shrink-0 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                  <MessageSquareText
                    size={26}
                    className="text-cyan-300"
                  />
                </div>

                <div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Expert Review
                  </h3>

                  <p className="mt-5 text-slate-400 leading-8">
                    The corresponding authors of qualifying submissions will
                    be intimated for their papers to be double-blind reviewed
                    by three experts. The final decision regarding acceptance
                    will be based upon the review remarks received after the
                    second round of the review process.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          TPC PROCESS
      ========================================================= */}

      <section className="relative py-28 bg-[#020817] overflow-hidden">

        <Background />

        <div className="relative max-w-7xl mx-auto px-6">

          <SectionHeading
            icon={Users}
            label="Technical Program Committee"
            title="TPC Review Management"
            description="The program committee chairs coordinate the assignment and management of reviews based on expertise and reviewer feedback."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {tpcProcess.map((item, index) => (

              <motion.div
                key={item.letter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
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

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 font-black text-xl">
                    {item.letter}
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-white group-hover:text-cyan-300 transition">
                    {item.title}
                  </h3>

                  <div className="mt-5 h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-24 transition-all duration-500" />

                  <p className="mt-6 text-slate-400 leading-8">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          FIRST ROUND DECISION
      ========================================================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#071326] via-[#020817] to-[#071326] overflow-hidden">

        <Background />

        <div className="relative max-w-7xl mx-auto px-6">

          <SectionHeading
            icon={ClipboardCheck}
            label="First Review"
            title="Initial Assessment"
            description="The first round determines whether a manuscript proceeds to external double-blind review."
          />

          <div className="grid lg:grid-cols-2 gap-8">

            <PolicyCard
              icon={SearchCheck}
              title="First-Round Assessment"
              items={firstRoundCriteria}
            />

            <InfoCard
              icon={ScaleIcon}
              title="Review Outcome"
            >

              <div className="grid sm:grid-cols-2 gap-5">

                <div className="rounded-2xl border border-cyan-400/15 bg-cyan-500/5 p-6">

                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                    <CheckCircle2 className="text-cyan-300" />
                  </div>

                  <h4 className="mt-5 text-xl font-bold text-white">
                    Accepted
                  </h4>

                  <p className="mt-3 text-slate-400 leading-7">
                    Papers that pass the first review proceed toward the
                    subsequent review and revision process.
                  </p>

                </div>

                <div className="rounded-2xl border border-cyan-400/15 bg-cyan-500/5 p-6">

                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                    <XCircle className="text-cyan-300" />
                  </div>

                  <h4 className="mt-5 text-xl font-bold text-white">
                    Rejected
                  </h4>

                  <p className="mt-3 text-slate-400 leading-7">
                    Papers failing the required initial conditions will not
                    proceed further in the review process.
                  </p>

                </div>

              </div>

              <p className="mt-7">
                The first review notification is described as straight:
                accept and reject.
              </p>

            </InfoCard>

          </div>

        </div>
      </section>


      {/* =========================================================
          REVISION
      ========================================================= */}

      <section className="relative py-28 bg-[#020817] overflow-hidden">

        <Background />

        <div className="relative max-w-5xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="
              group
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
              transition-all
              duration-500
              hover:border-cyan-400/40
              hover:shadow-[0_0_50px_rgba(34,211,238,.14)]
            "
          >

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-transparent" />

            <div className="relative z-10">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                <RefreshCw
                  size={30}
                  className="text-cyan-300"
                />
              </div>

              <h2 className="mt-8 text-4xl md:text-5xl font-black text-white">
                Revision Stage
              </h2>

              <p className="mt-7 max-w-3xl mx-auto text-slate-400 text-lg leading-8">
                For accepted papers, TPC chairs will provide a month for an
                additional revision, if any. This will be mostly useful for
                authors who have received major comments.
              </p>

              <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-3 text-cyan-300 font-semibold">
                <CalendarIcon />
                One Month Revision Period
              </div>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =========================================================
          FINAL DECISION
      ========================================================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#071326] to-[#020817] overflow-hidden">

        <Background />

        <div className="relative max-w-6xl mx-auto px-6">

          <SectionHeading
            icon={CheckCircle2}
            label="Final Decision"
            title="Acceptance Decision"
            description="The final decision is based upon the review remarks and scores received after the review process."
          />

          <div className="grid md:grid-cols-3 gap-6">

            <DecisionCard
              number="01"
              title="Review Reports"
              icon={MessageSquareText}
              desc="Review reports are collected from the assigned reviewers."
            />

            <DecisionCard
              number="02"
              title="Scores"
              icon={BrainCircuit}
              desc="Reviewer scores are considered as part of the decision process."
            />

            <DecisionCard
              number="03"
              title="Notification"
              icon={Mail}
              desc="Program committee chairs send notification to authors via email along with review reports and scores."
            />

          </div>

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


function ReviewRoundCard({
  number,
  title,
  icon: Icon,
  description,
  points,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[35px]
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

        <div className="flex items-start justify-between">

          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
            <Icon
              size={30}
              className="text-cyan-300"
            />
          </div>

          <span className="text-6xl font-black text-cyan-500/10">
            {number}
          </span>

        </div>

        <h3 className="mt-8 text-3xl font-black text-white group-hover:text-cyan-300 transition">
          {title}
        </h3>

        <p className="mt-5 text-slate-400 leading-8">
          {description}
        </p>

        <div className="mt-7 space-y-3">

          {points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 text-slate-300"
            >
              <CheckCircle2
                size={18}
                className="text-cyan-400 shrink-0"
              />

              <span>{point}</span>
            </div>
          ))}

        </div>

      </div>

    </motion.div>
  );
}


function MetricCard({
  value,
  label,
}) {
  return (
    <div className="rounded-2xl border border-cyan-400/15 bg-cyan-500/5 p-6 text-center">

      <div className="text-3xl md:text-4xl font-black text-cyan-300">
        {value}
      </div>

      <p className="mt-2 text-sm text-slate-500">
        {label}
      </p>

    </div>
  );
}


function BlindItem({ text }) {
  return (
    <div className="flex items-center gap-3">

      <CheckCircle2
        size={20}
        className="text-cyan-400 shrink-0"
      />

      <span className="text-slate-300">
        {text}
      </span>

    </div>
  );
}


function DecisionCard({
  number,
  title,
  icon: Icon,
  desc,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="
        group
        rounded-[30px]
        border
        border-cyan-400/20
        bg-white/5
        backdrop-blur-xl
        p-8
        text-center
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:shadow-[0_0_40px_rgba(34,211,238,.12)]
      "
    >

      <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">

        <Icon
          size={26}
          className="text-cyan-300"
        />

      </div>

      <span className="block mt-6 text-sm uppercase tracking-[3px] text-cyan-400">
        Step {number}
      </span>

      <h3 className="mt-3 text-2xl font-bold text-white group-hover:text-cyan-300 transition">
        {title}
      </h3>

      <p className="mt-5 text-slate-400 leading-7">
        {desc}
      </p>

    </motion.div>
  );
}


/* =========================================================
   SMALL ICON HELPERS
========================================================= */

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}


function ScaleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-cyan-300"
    >
      <path d="m16 16 3-8 3 8a5 5 0 0 1-6 0Z" />
      <path d="m2 16 3-8 3 8a5 5 0 0 1-6 0Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h18" />
    </svg>
  );
}