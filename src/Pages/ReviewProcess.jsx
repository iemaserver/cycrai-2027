import { motion } from "framer-motion";
import Logo from "../components/Logo";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

import Footer from "../components/Footer";

export default function ReviewProcess() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#F7FAFF]">
        <Logo />

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
          {/* Background Glow */}

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

          {/* Hero Content */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
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
              text-sm
              font-medium
              leading-7
              tracking-wide
              text-blue-100/80
              sm:text-base
              md:text-lg
            "
          >
            Review process of CYCRAI 2027
          </p>
          </motion.div>
        </div>

        {/* =========================================================
            CONTENT
        ========================================================= */}

        <div
          className="
            relative
            overflow-hidden
            bg-gradient-to-b
            from-white
            via-[#F8FBFF]
            to-[#F1F6FD]
            px-5
            py-14
            sm:px-6
            sm:py-16
            lg:px-8
            lg:py-20
          "
        >
          {/* Background Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -left-40
              top-20
              h-[450px]
              w-[450px]
              rounded-full
              bg-[#BFDBFE]/20
              blur-[140px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-40
              -right-40
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
              max-w-6xl
            "
          >

            {/* =====================================================
                INTRODUCTION BOX
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
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
              {/* Box Header */}

              <div
                className="
                  flex
                  items-center
                  gap-5
                  border-b
                  border-[#E2E8F0]
                  px-7
                  py-7
                  sm:px-9
                  md:px-11
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#E8F1FF]
                    text-[#075DB8]
                  "
                >
                  <ShieldCheck size={27} />
                </div>

                <div>
                  

                  <h2
                    className="
                      mt-1
                      text-2xl
                      font-bold
                      text-[#172554]
                      sm:text-3xl
                    "
                  >
                    Review Process
                  </h2>
                </div>
              </div>

              {/* Box Content */}

              <div
                className="
                  px-7
                  py-8
                  sm:px-9
                  md:px-11
                  md:py-10
                "
              >
                <div
                  className="
                    space-y-6
                    text-base
                    font-semibold
                    leading-8
                    text-[#334155]
                    sm:text-lg
                  "
                >
                  <p>
                    We will not accept{" "}
                    <strong className="font-black text-[#172554]">
                      plagiarized papers
                    </strong>{" "}
                    in CYCRAI-2027. The technical committee of CYCRAI 2027
                    will be checking the plagiarism level of all the submitted
                    papers to ensure the originality of the content using a
                    professional plagiarism checking tool.
                  </p>

                  <p>
                    We will use{" "}
                    <strong className="font-black text-[#075DB8]">
                      Turnitin
                    </strong>{" "}
                    as plagiarism-checking software (which the university
                    already has), and thus any paper having a{" "}
                    <strong className="font-black text-[#075DB8]">
                      similarity score above 15%
                    </strong>{" "}
                    and{" "}
                    <strong className="font-black text-[#075DB8]">
                      AI score above 0%
                    </strong>{" "}
                    will not be processed further.
                  </p>

                  <p>
                    The conference aims at carrying out{" "}
                    <strong className="font-black text-[#172554]">
                      two rounds of the review process
                    </strong>
                    .
                  </p>

                  <p>
                    In the first round, the papers submitted by the authors
                    will be assessed by the TPC based on their{" "}
                    <strong className="font-black text-[#172554]">
                      technical suitability, scope of work, and plagiarism
                    </strong>
                    . Once passed, the TPC members then invite{" "}
                    <strong className="font-black text-[#172554]">
                      three external reviewers
                    </strong>{" "}
                    of the relevant research area to review the paper.
                  </p>

                  <p>
                    The corresponding authors of qualifying submissions will
                    be intimated for their papers to be{" "}
                    <strong className="font-black text-[#172554]">
                      double-blind reviewed by three experts
                    </strong>{" "}
                    based on{" "}
                    <strong className="font-black text-[#075DB8]">
                      originality, novelty, clarity, completeness, relevance,
                      significance, and research contribution
                    </strong>
                    .
                  </p>

                  <p>
                    The final decision regarding acceptance of papers will be
                    based upon the{" "}
                    <strong className="font-black text-[#172554]">
                      review remarks received after the second round
                    </strong>{" "}
                    of the review process.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =====================================================
                DETAILED REVIEW PROCESS BOX
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="
                mt-10
                overflow-hidden
                rounded-[16px]
                border
                border-[#DCE3EB]
                border-t-4
                border-t-[#075DB8]
                bg-white
              "
            >
              {/* Box Header */}

              <div
                className="
                  border-b
                  border-[#E2E8F0]
                  px-7
                  py-7
                  sm:px-9
                  md:px-11
                "
              >
                <h2
                  className="
                    text-2xl
                    font-black
                    text-[#172554]
                    sm:text-3xl
                    md:text-4xl
                  "
                >
                  A detailed review process is given below:
                </h2>

                <p
                  className="
                    mt-5
                    text-base
                    font-semibold
                    leading-8
                    text-[#334155]
                    sm:text-lg
                  "
                >
                  With a strong emphasis on quality for maintaining and
                  enhancing the significance and reputation of the conference
                  to its participants and wider community, our review process
                  can be summarized as follows:
                </p>
              </div>

              {/* Bullet Points */}

              <div
                className="
                  px-7
                  py-8
                  sm:px-9
                  md:px-11
                  md:py-10
                "
              >
                <ul
                  className="
                    space-y-6
                    text-base
                    font-semibold
                    leading-8
                    text-[#334155]
                    sm:text-lg
                  "
                >
                  <ReviewPoint>
                    Authors are advised to submit their{" "}
                    <strong>original and unpublished work</strong> related
                    to the theme of the conference. They clearly need to
                    identify the{" "}
                    <strong>
                      problem, their contribution(s), and justification with
                      respect to the state-of-the-art work
                    </strong>
                    .
                  </ReviewPoint>

                  <ReviewPoint>
                    The <strong>maximum number of pages</strong> of paper must
                    not exceed <strong>6 pages</strong>.
                  </ReviewPoint>

                  <ReviewPoint>
                    Authors should take note that it is a{" "}
                    <strong>double-blind submission</strong>. Authors should
                    not disclose their{" "}
                    <strong>
                      names, affiliations, funding sources, and previous works
                    </strong>{" "}
                    that help find them via web search engines.
                  </ReviewPoint>

                  <ReviewPoint>
                    The TPC reviews only those papers that develop, argue,
                    and provide results through{" "}
                    <strong>double-blind reviewing policy</strong>.
                  </ReviewPoint>

                  <ReviewPoint>
                    In the very beginning, if authors do not follow the{" "}
                    <strong>double-blind submission policy</strong>, chairs
                    will make a <strong>desk rejection</strong>.
                  </ReviewPoint>

                  <ReviewPoint>
                    The program committee chairs will then allow TPC members
                    to choose the{" "}
                    <strong>research topics</strong> they are willing to
                    review. Based on feedback and their expertise, PC chairs
                    will assign papers for a review. PC chairs will do it{" "}
                    <strong>manually</strong>.
                  </ReviewPoint>

                  <ReviewPoint>
                    TPC members identify{" "}
                    <strong>
                      competent reviewers outside the Technical Committee
                      board
                    </strong>{" "}
                    and can hand over some papers if the papers are not within
                    their field of expertise, and the whole process is
                    available in the conference management toolkit (CMT)
                    (i.e., taking help from{" "}
                    <strong>sub-reviewers</strong>).
                  </ReviewPoint>

                  <ReviewPoint>
                    TPC members are, however, still responsible for the{" "}
                    <strong>quality and timeliness of the reviews</strong>{" "}
                    allocated originally to them. Accordingly, the
                    paper/review management system supports the allocation of
                    reviews at the initiation of PC members.
                  </ReviewPoint>

                  <ReviewPoint>
                    In all cases, program committee chairs will work closely.
                    Based on the{" "}
                    <strong>review reports and the scores</strong>, program
                    committee chairs send notification to the authors via
                    email along with the{" "}
                    <strong>review reports and scores</strong>.
                  </ReviewPoint>

                  <ReviewPoint>
                    Notification is based on an{" "}
                    <strong>average score</strong> provided by the assigned
                    reviewers.
                  </ReviewPoint>

                  <ReviewPoint>
                    Note that notification, in the first review, will be
                    straight: <strong>accept and reject</strong>. The papers
                    with an{" "}
                    <strong>average score less than 0</strong> will be
                    rejected. For accepted papers, TPC chairs will provide a{" "}
                    <strong>month for an additional revision</strong>, if any.
                    This will be mostly useful for those authors who have
                    received <strong>major comments</strong>.
                  </ReviewPoint>
                </ul>
              </div>
            </motion.div>

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
   BULLET POINT
========================================================= */

function ReviewPoint({ children }) {
  return (
    <li className="flex items-start gap-4">
      <CheckCircle2
        size={20}
        className="
          mt-1
          shrink-0
          text-[#075DB8]
        "
      />

      <span className="flex-1">
        {children}
      </span>
    </li>
  );
}