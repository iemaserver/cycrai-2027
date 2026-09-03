import { motion } from "framer-motion";
import Logo from "../components/Logo";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import Footer from "../components/Footer";

export default function ReviewProcess() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F7FAFF]">
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
            pb-12
            pt-8
            sm:px-6
            sm:pb-16
            sm:pt-10
            lg:px-8
            lg:pb-20
            lg:pt-14
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
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
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
                mt-2
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
            py-8
            sm:px-6
            sm:py-10
            lg:px-8
            lg:py-12
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
                REVIEW PROCESS BOX
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45 }}
              className="
                overflow-hidden
                rounded-[14px]
                border
                border-[#DCE3EB]
                border-t-[3px]
                border-t-[#075DB8]
                bg-white
                p-5
                shadow-[0_6px_20px_rgba(15,23,42,0.035)]
                sm:p-6
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#E8F1FF]
                    text-[#075DB8]
                  "
                >
                  <ShieldCheck size={21} />
                </div>

                <h3
                  className="
                    text-lg
                    font-black
                    leading-tight
                    text-[#172554]
                    sm:text-xl
                  "
                >
                  Review Process
                </h3>
              </div>

              <div
                className="
                  mt-4
                  space-y-3.5
                  text-base
                  font-semibold
                  leading-8
                  text-[#334155]
                  sm:text-lg
                "
              >
                <p>
                  We will not accept plagiarized papers in CYCRAI-2027. The
                  technical committee of CYCRAI 2027 will be checking the
                  plagiarism level of all the submitted papers to ensure the
                  originality of the content using a professional plagiarism
                  checking tool.
                </p>

                <p>
                  We will use Turnitin as plagiarism-checking software (which
                  the university already has), and thus any paper having a
                  <strong className="font-black text-black"> similarity score above 15%</strong> and <strong className="font-black text-black">AI score above 0%</strong> will not be
                  processed further.
                </p>

                <p>
                  The conference aims at carrying out two rounds of the review
                  process.
                </p>

                <p>
                  In the first round, the papers submitted by the authors will
                  be assessed by the TPC based on their technical suitability,
                  scope of work, and plagiarism. Once passed, the TPC members
                  then invite three external reviewers of the relevant research
                  area to review the paper.
                </p>

                <p>
                  The corresponding authors of qualifying submissions will be
                  intimated for their papers to be <strong className="font-black text-black">double-blind</strong> reviewed by
                  three experts based on originality, novelty, clarity,
                  completeness, relevance, significance, and research
                  contribution.
                </p>

                <p>
                  The final decision regarding acceptance of papers will be
                  based upon the review remarks received after the second round
                  of the review process.
                </p>
              </div>
            </motion.div>

            {/* =====================================================
                DETAILED REVIEW PROCESS BOX
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45 }}
              className="
                mt-3
                rounded-[14px]
                border
                border-[#DCE3EB]
                border-t-[3px]
                border-t-[#075DB8]
                bg-white
                p-5
                shadow-[0_6px_20px_rgba(15,23,42,0.035)]
                sm:p-6
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#E8F1FF]
                    text-[#075DB8]
                  "
                >
                  <CheckCircle2 size={21} />
                </div>

                <h3
                  className="
                    text-lg
                    font-black
                    leading-tight
                    text-[#172554]
                    sm:text-xl
                  "
                >
                  Detailed Review Process
                </h3>
              </div>

              <p
                className="
                  mt-4
                  text-base
                  font-semibold
                  leading-8
                  text-[#334155]
                  sm:text-lg
                "
              >
                With a strong emphasis on quality for maintaining and
                enhancing the significance and reputation of the conference to
                its participants and wider community, our review process can be
                summarized as follows:
              </p>

              <ul
                className="
                  mt-4
                  space-y-2.5
                  text-base
                  font-semibold
                  leading-8
                  text-[#334155]
                  sm:text-lg
                "
              >
                <ReviewPoint>
                  Authors are advised to submit their original and unpublished
                  work related to the theme of the conference. They clearly
                  need to identify the problem, their contribution(s), and
                  justification with respect to the state-of-the-art work.
                </ReviewPoint>

                <ReviewPoint>
                  The maximum number of pages of paper must not exceed{" "}
                  <strong className="font-black text-black">6 pages</strong>.
                </ReviewPoint>

                <ReviewPoint>
                  Authors should take note that it is a double-blind
                  submission. Authors should not disclose their names,
                  affiliations, funding sources, and previous works that help
                  find them via web search engines.
                </ReviewPoint>

                <ReviewPoint>
                  The TPC reviews only those papers that develop, argue, and
                  provide results through double-blind reviewing policy.
                </ReviewPoint>

                <ReviewPoint>
                  In the very beginning, if authors do not follow the
                  double-blind submission policy, chairs will make a desk
                  rejection.
                </ReviewPoint>

                <ReviewPoint>
                  The program committee chairs will then allow TPC members to
                  choose the research topics they are willing to review. Based
                  on feedback and their expertise, PC chairs will assign papers
                  for a review. PC chairs will do it manually.
                </ReviewPoint>

                <ReviewPoint>
                  TPC members identify competent reviewers outside the Technical
                  Committee board and can hand over some papers if the papers
                  are not within their field of expertise, and the whole process
                  is available in the conference management toolkit (CMT)
                  (i.e., taking help from sub-reviewers).
                </ReviewPoint>

                <ReviewPoint>
                  TPC members are, however, still responsible for the quality
                  and timeliness of the reviews allocated originally to them.
                  Accordingly, the paper/review management system supports the
                  allocation of reviews at the initiation of PC members.
                </ReviewPoint>

                <ReviewPoint>
                  In all cases, program committee chairs will work closely.
                  Based on the review reports and the scores, program committee
                  chairs send notification to the authors via email along with
                  the review reports and scores.
                </ReviewPoint>

                <ReviewPoint>
                  Notification is based on an average score provided by the
                  assigned reviewers.
                </ReviewPoint>

                <ReviewPoint>
                  Note that notification, in the first review, will be
                  straight: accept and reject. The papers with an average score
                  less than 0 will be rejected. For accepted papers, TPC chairs
                  will provide a month for an additional revision, if any. This
                  will be mostly useful for those authors who have received
                  major comments.
                </ReviewPoint>
              </ul>
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
    <li className="flex items-start gap-2.5">
      <span
        className="
          mt-[11px]
          h-1.5
          w-1.5
          shrink-0
          rounded-full
          bg-[#075DB8]
        "
      />

      <span className="min-w-0 flex-1">
        {children}
      </span>
    </li>
  );
}