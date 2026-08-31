import { motion } from "framer-motion";
import {
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
  Scale,
  CalendarDays,
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
          PAGE
      ========================================================= */}

      <section className="relative min-h-screen overflow-hidden bg-[#F7FAFF]">

        {/* =========================================================
            HERO
        ========================================================= */}

        <div
          className="
            relative
            overflow-hidden
            bg-[#07152F]
            px-5
            pb-20
            pt-12
            sm:px-6
            sm:pb-24
            sm:pt-16
            lg:px-8
            lg:pb-28
            lg:pt-20
          "
        >

          {/* Soft blue glow */}

          <div
            className="
              pointer-events-none
              absolute
              -left-40
              -top-40
              h-[420px]
              w-[420px]
              rounded-full
              bg-blue-500/10
              blur-[140px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-48
              -right-40
              h-[500px]
              w-[500px]
              rounded-full
              bg-sky-400/10
              blur-[150px]
            "
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              z-10
              mx-auto
              max-w-5xl
              text-center
            "
          >

            <h1
              className="
                text-5xl
                font-black
                leading-tight
                tracking-tight
                text-white
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              Review

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#93C5FD]
                  via-[#60A5FA]
                  to-[#BFDBFE]
                  bg-clip-text
                  pb-3
                  text-transparent
                "
              >
                Process
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-base
                font-semibold
                leading-8
                tracking-wide
                text-blue-100/90
                sm:text-lg
                md:text-xl
              "
            >
              A structured two-round review process designed to maintain
              the quality, originality and scientific significance of
              CYCRAI 2027.
            </p>

          </motion.div>
        </div>


        {/* =========================================================
            LIGHT CONTENT AREA
        ========================================================= */}

        <div
          className="
            relative
            bg-gradient-to-b
            from-white
            via-[#F8FBFF]
            to-[#F1F6FD]
            px-5
            py-12
            sm:px-6
            sm:py-16
            lg:px-8
            lg:py-20
          "
        >

          {/* Soft Background Glows */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-20
              h-[450px]
              w-[450px]
              rounded-full
              bg-[#BFDBFE]/20
              blur-[130px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              right-0
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#DBEAFE]/30
              blur-[140px]
            "
          />


          <div
            className="
              relative
              z-10
              mx-auto
              max-w-7xl
            "
          >

            {/* =====================================================
                ACADEMIC INTEGRITY
            ===================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mx-auto max-w-6xl"
            >

              <div
                className="
                  overflow-hidden
                  rounded-[16px]
                  border
                  border-[#DCE3EB]
                  border-t-4
                  border-t-[#075DB8]
                  bg-white
                "
              >

                <div
                  className="
                    flex
                    flex-col
                    gap-5
                    border-b
                    border-[#E2E8F0]
                    px-7
                    py-7
                    sm:flex-row
                    sm:items-center
                    sm:px-9
                    md:px-11
                  "
                >

                  <IconBox>
                    <ShieldCheck size={27} />
                  </IconBox>

                  <div>

                    <Eyebrow>
                      Academic Integrity
                    </Eyebrow>

                    <h2
                      className="
                        mt-1
                        text-2xl
                        font-bold
                        text-[#172554]
                        sm:text-3xl
                      "
                    >
                      Plagiarism &amp; AI Screening
                    </h2>

                  </div>

                </div>


                <div
                  className="
                    px-7
                    py-8
                    sm:px-9
                    md:px-11
                    md:py-10
                  "
                >

                  <p
                    className="
                      text-lg
                      font-semibold
                      leading-8
                      text-[#334155]
                      md:text-xl
                    "
                  >
                    CYCRAI 2027 will not accept plagiarized papers.
                    The Technical Committee will check the plagiarism
                    level of all submitted papers using a professional
                    plagiarism-checking tool to ensure originality of
                    the content.
                  </p>

                  <p
                    className="
                      mt-6
                      text-lg
                      font-semibold
                      leading-8
                      text-[#334155]
                    "
                  >
                    The conference will use{" "}
                    <span className="font-bold text-[#075DB8]">
                      Turnitin
                    </span>{" "}
                    as the plagiarism-checking software. Any paper having
                    a similarity score above{" "}
                    <span className="font-bold text-[#075DB8]">
                      15%
                    </span>{" "}
                    and an AI score above{" "}
                    <span className="font-bold text-[#075DB8]">
                      0%
                    </span>{" "}
                    will not be processed further.
                  </p>

                </div>

              </div>

            </motion.div>


            {/* =====================================================
                REVIEW STRUCTURE
            ===================================================== */}

            <section className="mt-28">

              <SectionHeading
                icon={RefreshCw}
                label="Review Structure"
                title="Two-Round Review Process"
                description="The conference aims at carrying out two rounds of review to evaluate technical quality, originality and research contribution."
              />

              <div className="grid gap-8 lg:grid-cols-2">

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

            </section>


            {/* =====================================================
                REVIEW WORKFLOW
            ===================================================== */}

            <section className="mt-28">

              <SectionHeading
                icon={ArrowRight}
                label="Review Workflow"
                title="From Submission to Decision"
                description="The review process progresses through screening, TPC assessment, external review and final decision."
              />

              <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

                {reviewStages.map((stage, index) => {

                  const Icon = stage.icon;

                  return (
                    <Card
                      key={stage.number}
                      delay={index * 0.06}
                    >

                      <div className="flex items-start justify-between">

                        <IconBox light>
                          <Icon size={26} />
                        </IconBox>

                        <span
                          className="
                            text-5xl
                            font-black
                            text-[#DBEAFE]
                          "
                        >
                          {stage.number}
                        </span>

                      </div>

                      <h3
                        className="
                          mt-7
                          text-2xl
                          font-bold
                          text-[#172554]
                          md:text-3xl
                        "
                      >
                        {stage.title}
                      </h3>

                      <p
                        className="
                          mt-5
                          text-lg
                          font-semibold
                          leading-8
                          text-[#334155]
                        "
                      >
                        {stage.desc}
                      </p>

                    </Card>
                  );
                })}

              </div>

            </section>


            {/* =====================================================
                AUTHOR REQUIREMENTS
            ===================================================== */}

            <section className="mt-28">

              <SectionHeading
                icon={UserCheck}
                label="Author Requirements"
                title="Before You Submit"
                description="Authors are expected to ensure that their manuscripts satisfy the basic requirements before entering the review process."
              />

              <div className="grid gap-8 lg:grid-cols-2">

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
                    Authors should clearly identify the research problem
                    and explain the contribution or contributions made
                    by the work.
                  </p>

                  <p>
                    The manuscript should provide appropriate
                    justification with respect to the state-of-the-art
                    work in the relevant research area.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-5">

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

            </section>


            {/* =====================================================
                DOUBLE BLIND
            ===================================================== */}

            <section className="mt-28">

              <SectionHeading
                icon={Eye}
                label="Double-Blind Review"
                title="Maintaining Reviewer Anonymity"
                description="CYCRAI 2027 follows a double-blind submission and review policy."
              />

              <div className="grid gap-8 lg:grid-cols-2">

                <InfoCard
                  icon={ShieldCheck}
                  title="What Authors Must Hide"
                >

                  <div className="space-y-5">

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
                    If authors do not follow the double-blind submission
                    policy at the very beginning of the process, the chairs
                    may issue a desk rejection.
                  </p>

                  <p>
                    Authors should therefore carefully inspect the
                    manuscript for names, affiliations, funding information
                    and previous work that could reveal their identity.
                  </p>

                </InfoCard>

              </div>

            </section>


            {/* =====================================================
                SECOND ROUND CRITERIA
            ===================================================== */}

            <section className="mt-28">

              <SectionHeading
                icon={SearchCheck}
                label="Second Round"
                title="External Review Criteria"
                description="Qualifying submissions are double-blind reviewed by three experts from the relevant research area."
              />

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                {secondRoundCriteria.map((criterion, index) => (

                  <Card
                    key={criterion}
                    delay={index * 0.05}
                    className="text-center"
                  >

                    <div
                      className="
                        mx-auto
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        bg-[#E8F1FF]
                        text-lg
                        font-black
                        text-[#075DB8]
                      "
                    >
                      {index + 1}
                    </div>

                    <h3
                      className="
                        mt-6
                        text-lg
                        font-bold
                        text-[#172554]
                      "
                    >
                      {criterion}
                    </h3>

                  </Card>

                ))}

              </div>


              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.55,
                }}
                className="mt-10"
              >

                <div
                  className="
                    rounded-[16px]
                    border
                    border-[#DCE3EB]
                    border-t-4
                    border-t-[#075DB8]
                    bg-white
                    p-8
                    md:p-10
                  "
                >

                  <div className="flex flex-col gap-6 sm:flex-row">

                    <IconBox>
                      <MessageSquareText size={26} />
                    </IconBox>

                    <div>

                      <Eyebrow>
                        External Assessment
                      </Eyebrow>

                      <h3
                        className="
                          mt-1
                          text-2xl
                          font-bold
                          text-[#172554]
                          md:text-3xl
                        "
                      >
                        Expert Review
                      </h3>

                      <p
                        className="
                          mt-5
                          text-lg
                          font-semibold
                          leading-8
                          text-[#334155]
                        "
                      >
                        The corresponding authors of qualifying submissions
                        will be intimated for their papers to be double-blind
                        reviewed by three experts. The final decision regarding
                        acceptance will be based upon the review remarks
                        received after the second round of the review process.
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            </section>


            {/* =====================================================
                TPC PROCESS
            ===================================================== */}

            <section className="mt-28">

              <SectionHeading
                icon={Users}
                label="Technical Program Committee"
                title="TPC Review Management"
                description="The program committee chairs coordinate the assignment and management of reviews based on expertise and reviewer feedback."
              />

              <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

                {tpcProcess.map((item, index) => (

                  <Card
                    key={item.letter}
                    delay={index * 0.06}
                  >

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#E8F1FF]
                        text-xl
                        font-black
                        text-[#075DB8]
                      "
                    >
                      {item.letter}
                    </div>

                    <h3
                      className="
                        mt-7
                        text-2xl
                        font-bold
                        text-[#172554]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        text-lg
                        font-semibold
                        leading-8
                        text-[#334155]
                      "
                    >
                      {item.desc}
                    </p>

                  </Card>

                ))}

              </div>

            </section>


            {/* =====================================================
                FIRST ROUND DECISION
            ===================================================== */}

            <section className="mt-28">

              <SectionHeading
                icon={ClipboardCheck}
                label="First Review"
                title="Initial Assessment"
                description="The first round determines whether a manuscript proceeds to external double-blind review."
              />

              <div className="grid gap-8 lg:grid-cols-2">

                <PolicyCard
                  icon={SearchCheck}
                  title="First-Round Assessment"
                  items={firstRoundCriteria}
                />

                <InfoCard
                  icon={Scale}
                  title="Review Outcome"
                >

                  <div className="grid gap-5 sm:grid-cols-2">

                    <OutcomeCard
                      icon={CheckCircle2}
                      title="Accepted"
                      desc="Papers that pass the first review proceed toward the subsequent review and revision process."
                    />

                    <OutcomeCard
                      icon={XCircle}
                      title="Rejected"
                      desc="Papers failing the required initial conditions will not proceed further in the review process."
                    />

                  </div>

                  <p className="mt-7">
                    The first review notification is described as straight:
                    accept and reject.
                  </p>

                </InfoCard>

              </div>

            </section>


            {/* =====================================================
                REVISION
            ===================================================== */}

            <section className="mt-28">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  mx-auto
                  max-w-6xl
                  rounded-[16px]
                  border
                  border-[#DCE3EB]
                  border-t-4
                  border-t-[#075DB8]
                  bg-white
                  p-9
                  text-center
                  md:p-14
                "
              >

                <IconBox>
                  <RefreshCw size={30} />
                </IconBox>

                <div className="mt-7">

                  <Eyebrow>
                    Accepted Papers
                  </Eyebrow>

                  <h2
                    className="
                      mt-1
                      text-3xl
                      font-black
                      text-[#172554]
                      md:text-5xl
                    "
                  >
                    Revision Stage
                  </h2>

                  <p
                    className="
                      mx-auto
                      mt-6
                      max-w-3xl
                      text-lg
                      font-semibold
                      leading-8
                      text-[#334155]
                    "
                  >
                    For accepted papers, TPC chairs will provide a month
                    for an additional revision, if any. This will be mostly
                    useful for authors who have received major comments.
                  </p>

                  <div
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-[#BFDBFE]
                      bg-[#F5F9FF]
                      px-6
                      py-3
                      font-bold
                      text-[#075DB8]
                    "
                  >
                    <CalendarDays size={18} />
                    One Month Revision Period
                  </div>

                </div>

              </motion.div>

            </section>


            {/* =====================================================
                FINAL DECISION
            ===================================================== */}

            <section className="mt-28">

              <SectionHeading
                icon={CheckCircle2}
                label="Final Decision"
                title="Acceptance Decision"
                description="The final decision is based upon the review remarks and scores received after the review process."
              />

              <div className="grid gap-7 md:grid-cols-3">

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

            </section>


            {/* =====================================================
                PROCESS SUMMARY
            ===================================================== */}

            <section className="mt-28">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  rounded-[16px]
                  bg-[#07152F]
                  p-9
                  text-center
                  sm:p-12
                  md:p-16
                "
              >

                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white/10
                    text-blue-200
                  "
                >
                  <ShieldCheck size={26} />
                </div>

                <p
                  className="
                    mt-6
                    text-xs
                    font-bold
                    uppercase
                    tracking-[2px]
                    text-blue-200/70
                  "
                >
                  CYCRAI 2027
                </p>

                <h2
                  className="
                    mt-2
                    text-4xl
                    font-black
                    text-white
                    md:text-5xl
                  "
                >
                  A Transparent Review Journey
                </h2>

                <p
                  className="
                    mx-auto
                    mt-6
                    max-w-3xl
                    text-lg
                    font-semibold
                    leading-8
                    text-blue-100/75
                  "
                >
                  From initial submission and technical screening to
                  external expert assessment and final notification,
                  every stage is designed to support a fair, structured
                  and academically rigorous review process.
                </p>

              </motion.div>

            </section>

          </div>
        </div>
      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />
    </>
  );
}


/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  icon: Icon,
  label,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.6,
      }}
      className="mb-14 text-center"
    >

      <div className="flex items-center justify-center gap-3">

        <Icon
          size={20}
          className="text-[#075DB8]"
        />

        <span
          className="
            text-xs
            font-bold
            uppercase
            tracking-[2px]
            text-[#075DB8]
          "
        >
          {label}
        </span>

      </div>

      <h2
        className="
          mt-4
          text-4xl
          font-black
          leading-tight
          text-[#172554]
          sm:text-5xl
          md:text-6xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mx-auto
            mt-5
            max-w-3xl
            text-base
            font-semibold
            leading-8
            text-[#334155]
            md:text-lg
          "
        >
          {description}
        </p>
      )}

    </motion.div>
  );
}


/* =========================================================
   GENERIC CARD
========================================================= */

function Card({
  children,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.55,
        delay,
      }}
      className={`
        rounded-[16px]
        border
        border-[#DCE3EB]
        border-t-4
        border-t-[#075DB8]
        bg-white
        p-7
        sm:p-9
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}


/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({
  icon: Icon,
  title,
  children,
}) {
  return (
    <Card>

      <IconBox>
        <Icon size={26} />
      </IconBox>

      <h3
        className="
          mt-7
          text-2xl
          font-bold
          text-[#172554]
          md:text-3xl
        "
      >
        {title}
      </h3>

      <div
        className="
          mt-6
          space-y-5
          text-base
          font-semibold
          leading-8
          text-[#334155]
          md:text-lg
        "
      >
        {children}
      </div>

    </Card>
  );
}


/* =========================================================
   POLICY CARD
========================================================= */

function PolicyCard({
  icon: Icon,
  title,
  items,
}) {
  return (
    <Card>

      <IconBox>
        <Icon size={26} />
      </IconBox>

      <h3
        className="
          mt-7
          text-2xl
          font-bold
          text-[#172554]
          md:text-3xl
        "
      >
        {title}
      </h3>

      <ul
        className="
          mt-7
          space-y-4
          text-base
          font-semibold
          leading-7
          text-[#334155]
          md:text-lg
        "
      >

        {items.map((item, index) => (

          <li
            key={index}
            className="flex items-start gap-3"
          >

            <CheckCircle2
              size={19}
              className="
                mt-1
                shrink-0
                text-[#075DB8]
              "
            />

            <span>
              {item}
            </span>

          </li>

        ))}

      </ul>

    </Card>
  );
}


/* =========================================================
   REVIEW ROUND CARD
========================================================= */

function ReviewRoundCard({
  number,
  title,
  icon: Icon,
  description,
  points,
}) {
  return (
    <Card>

      <div className="flex items-start justify-between">

        <IconBox>
          <Icon size={28} />
        </IconBox>

        <span
          className="
            text-6xl
            font-black
            text-[#DBEAFE]
          "
        >
          {number}
        </span>

      </div>

      <h3
        className="
          mt-7
          text-3xl
          font-black
          text-[#172554]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-5
          text-lg
          font-semibold
          leading-8
          text-[#334155]
        "
      >
        {description}
      </p>

      <div className="mt-7 space-y-4">

        {points.map((point) => (

          <div
            key={point}
            className="
              flex
              items-center
              gap-3
              text-base
              font-semibold
              text-[#334155]
              md:text-lg
            "
          >

            <CheckCircle2
              size={19}
              className="
                shrink-0
                text-[#075DB8]
              "
            />

            <span>
              {point}
            </span>

          </div>

        ))}

      </div>

    </Card>
  );
}


/* =========================================================
   METRIC CARD
========================================================= */

function MetricCard({
  value,
  label,
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[#BFDBFE]
        bg-[#F5F9FF]
        p-6
        text-center
      "
    >

      <div
        className="
          text-3xl
          font-black
          text-[#075DB8]
          md:text-4xl
        "
      >
        {value}
      </div>

      <p
        className="
          mt-2
          text-sm
          font-semibold
          leading-6
          text-[#334155]
        "
      >
        {label}
      </p>

    </div>
  );
}


/* =========================================================
   ICON BOX
========================================================= */

function IconBox({
  children,
  light = false,
}) {
  return (
    <div
      className={`
        flex
        h-14
        w-14
        shrink-0
        items-center
        justify-center
        rounded-2xl
        ${
          light
            ? "bg-[#E8F1FF] text-[#075DB8]"
            : "bg-[#075DB8] text-white"
        }
      `}
    >
      {children}
    </div>
  );
}


/* =========================================================
   EYEBROW
========================================================= */

function Eyebrow({
  children,
  light = false,
}) {
  return (
    <p
      className={`
        text-xs
        font-bold
        uppercase
        tracking-[2px]
        ${
          light
            ? "text-blue-200/70"
            : "text-[#075DB8]"
        }
      `}
    >
      {children}
    </p>
  );
}


/* =========================================================
   BLIND ITEM
========================================================= */

function BlindItem({
  text,
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
      "
    >

      <CheckCircle2
        size={20}
        className="
          shrink-0
          text-[#075DB8]
        "
      />

      <span>
        {text}
      </span>

    </div>
  );
}


/* =========================================================
   OUTCOME CARD
========================================================= */

function OutcomeCard({
  icon: Icon,
  title,
  desc,
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[#DCE3EB]
        bg-[#F8FBFF]
        p-6
      "
    >

      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-[#E8F1FF]
          text-[#075DB8]
        "
      >
        <Icon size={23} />
      </div>

      <h4
        className="
          mt-5
          text-xl
          font-bold
          text-[#172554]
        "
      >
        {title}
      </h4>

      <p
        className="
          mt-3
          text-base
          font-semibold
          leading-7
          text-[#334155]
        "
      >
        {desc}
      </p>

    </div>
  );
}


/* =========================================================
   DECISION CARD
========================================================= */

function DecisionCard({
  number,
  title,
  icon: Icon,
  desc,
}) {
  return (
    <Card className="text-center">

      <div
        className="
          mx-auto
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-[#075DB8]
          text-white
        "
      >
        <Icon size={26} />
      </div>

      <span
        className="
          mt-6
          block
          text-xs
          font-bold
          uppercase
          tracking-[2px]
          text-[#075DB8]
        "
      >
        Step {number}
      </span>

      <h3
        className="
          mt-3
          text-2xl
          font-bold
          text-[#172554]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-5
          text-base
          font-semibold
          leading-7
          text-[#334155]
        "
      >
        {desc}
      </p>

    </Card>
  );
}