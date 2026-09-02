import { motion } from "framer-motion";
import Logo from "../components/Logo";

import {
  AlertTriangle,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  FileText,
  Eye,
  HeartHandshake,
  LockKeyhole,
  Mail,
  Scale,
  SearchCheck,
  ShieldCheck,
  Upload,
  UserCheck,
  Users,
} from "lucide-react";

import Footer from "../components/Footer";


export default function Guidelines() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#07152F]">
        <Logo />

        <div
          className="
            pointer-events-none
            absolute
            -left-32
            -top-32
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#075DB8]/20
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            -right-32
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#60A5FA]/15
            blur-[150px]
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-5
            pb-20
            pt-14
            sm:px-6
            sm:pb-24
            sm:pt-16
            lg:px-8
            lg:pb-28
            lg:pt-20
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-5xl text-center"
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
              Guidelines

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
                &amp; Policies
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
              Clear requirements for manuscript preparation, submission,
              review, publication and research integrity at CYCRAI 2027.
            </p>
          </motion.div>
        </div>
      </section>


      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <main
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

        <div className="relative z-10 mx-auto max-w-6xl">

          {/* =======================================================
              IMPORTANT NOTICE
          ======================================================= */}

          <InfoBox
            icon={AlertTriangle}
            title="Read Before Submission"
          >
            <p>
              Read this page in full before preparing a manuscript.
              Submission constitutes confirmation by every listed author
              that these guidelines have been read and accepted.
            </p>

            <p>
              Requirements stated as{" "}
              <strong>mandatory</strong> are enforced by{" "}
              <strong>administrative rejection without external review</strong>,
              and authors will not be given an opportunity to correct a
              defect after the submission deadline.
            </p>
          </InfoBox>


          {/* =======================================================
              SCOPE & PRECEDENCE
          ======================================================= */}

          <SectionHeading
            icon={Scale}
            title="Scope & Precedence"
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <InfoBox
              icon={FileText}
              title="Scope"
            >
              <p>
                These guidelines govern the{" "}
                <strong>
                  preparation, submission, review, revision, presentation
                  and publication
                </strong>{" "}
                of every manuscript submitted to CYCRAI 2027.
              </p>

              <p>
                They apply to the{" "}
                <strong>
                  main technical tracks, special sessions, posters and
                  work-in-progress categories
                </strong>
                .
              </p>
            </InfoBox>

            <InfoBox
              icon={Scale}
              title="IEEE & CYCRAI Requirements"
            >
              <p>
                IEEE publication policy sets the{" "}
                <strong>minimum standard for publication</strong>.
                CYCRAI 2027 imposes additional requirements for submission.
              </p>

              <p>
                Where a binding IEEE requirement cannot be reconciled with
                a CYCRAI requirement, the{" "}
                <strong>
                  IEEE requirement governs eligibility for publication
                  in IEEE Xplore
                </strong>
                .
              </p>
            </InfoBox>
          </div>


          {/* =======================================================
              TECHNICAL TRACKS
          ======================================================= */}

          <SectionHeading
            icon={BrainCircuit}
            title="Technical Tracks"
          />

          <div className="grid gap-6 md:grid-cols-2">
            <TrackBox
              number="01"
              title="Foundation of Cyber Security"
            />

            <TrackBox
              number="02"
              title="Foundation of Cryptography"
            />

            <TrackBox
              number="03"
              title="Foundation of Responsible AI"
            />
          </div>

          <SimpleBox>
            <p>
              Topic lists on the Call for Papers page are{" "}
              <strong>indicative rather than exhaustive</strong>.
              Interdisciplinary work spanning{" "}
              <strong>
                security, cryptography and machine learning
              </strong>{" "}
              is expressly welcome.
            </p>
          </SimpleBox>


          {/* =======================================================
              ORIGINALITY
          ======================================================= */}

          <SectionHeading
            icon={ShieldCheck}
            title="Originality & Exclusive Submission"
          />

          <PolicyBox
            icon={ShieldCheck}
            title="Originality Requirements"
            items={[
              <>
                The manuscript must report{" "}
                <strong>original work</strong> by the listed authors.
              </>,

              <>
                The work must not have been previously published in
                substantially the same form.
              </>,

              <>
                The manuscript must not be{" "}
                <strong>
                  under review or accepted elsewhere
                </strong>
                .
              </>,

              <>
                <strong>Concurrent submission</strong> results in immediate
                desk rejection.
              </>,

              <>
                Substantial extensions of earlier work are permitted only
                with genuinely new technical material.
              </>,

              <>
                Approximately{" "}
                <strong>
                  30% or more genuinely new technical material
                </strong>{" "}
                is expected for an extended version.
              </>,

              <>
                Survey-only papers and tutorial restatements are not accepted.
              </>,

              <>
                Implementation reports without technical contribution are
                not accepted.
              </>,

              <>
                Authors are responsible for{" "}
                <strong>
                  originality, accuracy and integrity
                </strong>
                .
              </>,
            ]}
          />


          {/* =======================================================
              MANUSCRIPT PREPARATION
          ======================================================= */}

          <SectionHeading
            icon={FileText}
            title="Manuscript Preparation"
          />

          <PolicyBox
            icon={FileText}
            title="Manuscript Requirements"
            items={[
              <>
                Use the current{" "}
                <strong>
                  IEEE Standard two-column conference template
                </strong>{" "}
                for A4 paper.
              </>,

              <>
                Do not alter{" "}
                <strong>
                  margins, font sizes, line spacing or column widths
                </strong>
                .
              </>,

              <>
                Body text is{" "}
                <strong>
                  10-point, single-spaced and two columns
                </strong>
                .
              </>,

              <>
                Review manuscript must be{" "}
                <strong>four to six pages</strong>, including references.
              </>,

              <>
                Manuscripts must be written in{" "}
                <strong>English</strong>.
              </>,

              <>
                Abstract must not exceed{" "}
                <strong>250 words</strong>.
              </>,

              <>
                Supply{" "}
                <strong>three to six keywords</strong>.
              </>,

              <>
                Every figure and table must be{" "}
                <strong>numbered, captioned and cited</strong>.
              </>,

              <>
                References must be{" "}
                <strong>
                  complete, accurate, independently verifiable and in
                  IEEE style
                </strong>
                .
              </>,

              <>
                Upload a single{" "}
                <strong>
                  readable, unencrypted and text-searchable PDF
                </strong>
                .
              </>,

              <>
                No author-inserted{" "}
                <strong>
                  page numbers, headers, footers, watermarks, tracked
                  changes, comments or annotations
                </strong>
                .
              </>,
            ]}
          />


          {/* =======================================================
              DOUBLE BLIND REVIEW
          ======================================================= */}

          <SectionHeading
            icon={Eye}
            title="Double-Blind Review"
          />

          <PolicyBox
            icon={Eye}
            title="Anonymisation Requirements"
            items={[
              "Remove author names and photographs.",
              "Remove affiliations, postal addresses, emails and telephone numbers.",
              "Remove ORCID identifiers and biographies.",
              "Remove acknowledgements and identifying funding statements.",
              "Remove institutional logos and identifying laboratory or group names.",
              "Anonymise personal and institutional links.",
              "Write self-citations in the third person.",
              <>
                Do not use{" "}
                <strong>
                  "[removed for review]"
                </strong>{" "}
                in references.
              </>,
              "Anonymise repositories and supplementary material.",
              "Clear author and creator information from PDF metadata.",
              "Use a filename that does not identify the author or institution.",
            ]}
          />


          {/* =======================================================
              SIMILARITY & PLAGIARISM
          ======================================================= */}

          <SectionHeading
            icon={SearchCheck}
            title="Similarity & Plagiarism"
          />

          <InfoBox
            icon={SearchCheck}
            title="Similarity Screening"
          >
            <p>
              Every submission is screened before review, and every accepted
              camera-ready manuscript is screened again using{" "}
              <strong>IEEE CrossCheck</strong>.
            </p>

            <ul className="space-y-4">
              <Bullet>
                Overall similarity must remain{" "}
                <strong>below 15%</strong>.
              </Bullet>

              <Bullet>
                Similarity from a single source must not exceed{" "}
                <strong>5%</strong>.
              </Bullet>

              <Bullet>
                Similarity is a{" "}
                <strong>screening indicator, not a finding</strong>.
              </Bullet>

              <Bullet>
                A manuscript below the threshold may still be rejected
                where substantive plagiarism is identified.
              </Bullet>

              <Bullet>
                <strong>Self-plagiarism is plagiarism.</strong>
              </Bullet>

              <Bullet>
                Authors must not disguise copied material through synonym
                substitution, automated paraphrasing, translation,
                character manipulation or citation fragmentation.
              </Bullet>

              <Bullet>
                Authors are encouraged to run their own check using{" "}
                <strong>
                  Turnitin, iThenticate or an equivalent licensed tool
                </strong>{" "}
                before submission.
              </Bullet>
            </ul>
          </InfoBox>


          {/* =======================================================
              GENERATIVE AI
          ======================================================= */}

          <SectionHeading
            icon={BrainCircuit}
            title="Generative AI & Human Authorship"
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <PolicyBox
              icon={UserCheck}
              title="Human Authorship"
              items={[
                <>
                  Substantive scholarly prose must be written by the{" "}
                  <strong>listed human authors</strong>.
                </>,

                <>
                  Generative AI must not generate, rewrite, paraphrase,
                  expand, condense or summarise submitted scholarly text.
                </>,

                <>
                  Disclosure does not make{" "}
                  <strong>
                    prohibited AI-generated prose acceptable
                  </strong>
                  .
                </>,

                <>
                  Human authors remain accountable for all submitted content.
                </>,
              ]}
            />

            <PolicyBox
              icon={CheckCircle2}
              title="Permitted Assistance"
              items={[
                "Spelling, punctuation and grammar checking.",
                "Bibliography management.",
                "Citation formatting.",
                "Typesetting.",
                "Statistical analysis.",
                "Similarity screening.",
                "Non-generative image processing.",
                "Human proofreading and professional language editing.",
                "Machine translation of author-written text with disclosure at camera-ready stage.",
              ]}
            />

            <PolicyBox
              icon={AlertTriangle}
              title="Prohibited Uses"
              items={[
                <>
                  AI must not fabricate{" "}
                  <strong>
                    data, results, participants, experiments or evidence
                  </strong>
                  .
                </>,

                <>
                  AI must not generate{" "}
                  <strong>references or citations</strong>.
                </>,

                <>
                  Confidential manuscripts must not be uploaded to{" "}
                  <strong>public generative services</strong>.
                </>,

                <>
                  AI must not be used to conceal plagiarism or research
                  misconduct.
                </>,
              ]}
            />

            <PolicyBox
              icon={BrainCircuit}
              title="AI Research & Screening"
              items={[
                "AI research is permitted when the model, version, methodology and evaluation are transparently reported.",
                "AI-generated code, images and synthetic datasets forming part of the methodology must be disclosed.",
                <>
                  <strong>AI detection scores alone</strong> will never
                  constitute evidence of a breach.
                </>,
                "Human authors remain accountable for every statement, number, figure and reference.",
              ]}
            />
          </div>


          {/* =======================================================
              SUBMISSION
          ======================================================= */}

          <SectionHeading
            icon={Upload}
            title="Submission"
          />

          <PolicyBox
            icon={Upload}
            title="Microsoft CMT Requirements"
            items={[
              <>
                All manuscripts must be submitted through{" "}
                <strong>Microsoft CMT</strong>.
              </>,

              <>
                Submissions by email or other routes are{" "}
                <strong>discarded</strong>.
              </>,

              <>
                The submitting author must hold a{" "}
                <strong>CMT account</strong>.
              </>,

              <>
                Supply title, abstract, keywords and complete author
                metadata.
              </>,

              <>
                The submitting author acts as{" "}
                <strong>corresponding author</strong>.
              </>,

              <>
                The author list and order are{" "}
                <strong>final at the submission deadline</strong>.
              </>,

              <>
                Revisions may be made before the deadline.
              </>,

              <>
                Deadlines close at{" "}
                <strong>
                  23:59 Anywhere on Earth (AoE)
                </strong>
                .
              </>,
            ]}
          />


          {/* =======================================================
              REVIEW
          ======================================================= */}

          <SectionHeading
            icon={SearchCheck}
            title="Review Criteria"
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <InfoBox
              icon={SearchCheck}
              title="Review Criteria"
            >
              <ul className="space-y-4">
                <Bullet>Relevance to the selected technical track</Bullet>
                <Bullet>Originality</Bullet>
                <Bullet>Technical correctness</Bullet>
                <Bullet>Significance</Bullet>
                <Bullet>Experimental or theoretical quality</Bullet>
                <Bullet>Fair comparison with prior work</Bullet>
                <Bullet>Reproducibility</Bullet>
                <Bullet>Support for claims</Bullet>
                <Bullet>Research integrity</Bullet>
                <Bullet>Clarity of presentation</Bullet>
              </ul>
            </InfoBox>

            <InfoBox
              icon={Scale}
              title="Review Outcomes"
            >
              <ul className="space-y-4">
                <Bullet>Acceptance</Bullet>
                <Bullet>
                  Acceptance subject to mandatory correction
                </Bullet>
                <Bullet>
                  Acceptance as work-in-progress or poster paper
                </Bullet>
                <Bullet>Rejection</Bullet>
              </ul>

              <p>
                There is{" "}
                <strong>no rebuttal stage</strong>. Reviewer identities
                are never disclosed and reviewing material remains
                confidential.
              </p>
            </InfoBox>
          </div>


          {/* =======================================================
              CAMERA READY
          ======================================================= */}

          <SectionHeading
            icon={ClipboardCheck}
            title="Camera-Ready Submission"
          />

          <PolicyBox
            icon={ClipboardCheck}
            title="Camera-Ready Requirements"
            items={[
              "Address mandatory reviewer comments.",
              "Restore author names and affiliations.",
              "Restore acknowledgements and funding information.",
              "Restore full ethical approval details.",
              <>
                Standard camera-ready length is{" "}
                <strong>six pages</strong>.
              </>,
              <>
                Up to{" "}
                <strong>two additional pages</strong> are permitted on
                payment of ₹1000 per additional page.
              </>,
              <>
                The{" "}
                <strong>absolute maximum is eight pages</strong>.
              </>,
              "Remove page numbers, headers and footers.",
              <>
                Validate PDF through{" "}
                <strong>IEEE PDF eXpress</strong>.
              </>,
              "Complete IEEE Electronic Copyright Form.",
              "Complete author registration and payment.",
              "Upload validated PDF and signed eCF to CMT.",
              "Complete final CrossCheck and prohibited-author screening.",
              "Proofread before final upload.",
            ]}
          />


          {/* =======================================================
              REGISTRATION
          ======================================================= */}

          <SectionHeading
            icon={Users}
            title="Registration, Presentation & Withdrawal"
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <PolicyBox
              icon={Users}
              title="Registration & Presentation"
              items={[
                <>
                  At least one author must complete{" "}
                  <strong>full author registration</strong>.
                </>,

                <>
                  Each full registration covers{" "}
                  <strong>one paper</strong>.
                </>,

                <>
                  Valid membership/student proof is required where applicable.
                </>,

                <>
                  <strong>Presentation is mandatory.</strong>
                </>,

                <>
                  At least one author must present the paper.
                </>,

                <>
                  Registered but unpresented papers are excluded from{" "}
                  <strong>IEEE Xplore proceedings</strong>.
                </>,

                <>
                  Remote presentation may be requested at least{" "}
                  <strong>fourteen days before the conference</strong>.
                </>,

                <>
                  <strong>Registration fees are non-refundable.</strong>
                </>,
              ]}
            />

            <PolicyBox
              icon={CheckCircle2}
              title="Withdrawal"
              items={[
                "Withdrawal before acceptance may be made through CMT.",
                "Withdrawal after acceptance requires a written request.",
                "Agreement of all co-authors is required after acceptance.",
                <>
                  Withdrawal to submit substantially the same work elsewhere
                  may be treated as{" "}
                  <strong>abuse of peer review</strong>.
                </>,
              ]}
            />
          </div>


          {/* =======================================================
              IEEE XPLORE
          ======================================================= */}

          <InfoBox
            icon={FileText}
            title="IEEE Xplore Submission"
            className="mt-8"
          >
            <p>
              All accepted papers that are{" "}
              <strong>registered and presented</strong> will be submitted
              for inclusion in the IEEE Xplore Digital Library, subject to
              IEEE Xplore's scope and quality requirements.
            </p>

            <p>
              Acceptance by CYCRAI 2027{" "}
              <strong>
                does not by itself guarantee inclusion
              </strong>
              .
            </p>
          </InfoBox>


          {/* =======================================================
              AUTHORSHIP
          ======================================================= */}

          <SectionHeading
            icon={UserCheck}
            title="Authorship, Conflicts & Confidentiality"
          />

          <div className="grid gap-8 lg:grid-cols-3">
            <InfoBox
              icon={UserCheck}
              title="Authorship"
            >
              <p>
                Every listed author must have made a{" "}
                <strong>substantive intellectual contribution</strong>,
                participated in drafting or critically revising the
                manuscript, approved the submitted version and be prepared
                to take public responsibility for its content.
              </p>

              <p>
                Honorary, gift, guest and coercive authorship are prohibited.
                Purchase, sale or brokerage of authorship and paper-mill
                activity are also prohibited.
              </p>
            </InfoBox>

            <InfoBox
              icon={Scale}
              title="Conflicts of Interest"
            >
              <p>
                Authors, reviewers and committee members must disclose any
                circumstance that could reasonably compromise or appear to
                compromise impartiality.
              </p>

              <p>
                Conflicts include employment at the same institution,
                recent collaboration, supervision, close personal
                relationships, material financial interests and direct
                professional competition.
              </p>
            </InfoBox>

            <InfoBox
              icon={LockKeyhole}
              title="Reviewer Confidentiality"
            >
              <p>
                A manuscript under review is a{" "}
                <strong>confidential document</strong> and remains so in
                perpetuity.
              </p>

              <p>
                Reviewers must not distribute manuscripts, discuss
                unpublished content publicly, use review information for
                personal advantage or transmit manuscripts to public
                generative services.
              </p>
            </InfoBox>
          </div>


          {/* =======================================================
              RESEARCH INTEGRITY
          ======================================================= */}

          <SectionHeading
            icon={AlertTriangle}
            title="Research Integrity & Responsible Cybersecurity"
          />

          <div className="grid gap-8 lg:grid-cols-3">
            <PolicyBox
              icon={FileText}
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

            <PolicyBox
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

            <PolicyBox
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


          {/* =======================================================
              ETHICS
          ======================================================= */}

          <SectionHeading
            icon={HeartHandshake}
            title="Ethics, AI Reporting & Reproducibility"
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <InfoBox
              icon={HeartHandshake}
              title="Human Participants & Privacy"
            >
              <p>
                Research involving human participants, behavioural
                experiments, interviews, surveys, biometric or medical data,
                personally identifiable information, private communications
                or protected data must comply with applicable{" "}
                <strong>
                  ethical, institutional and legal requirements
                </strong>
                .
              </p>

              <p>
                Where approval or informed consent is required, it must be
                obtained. During double-blind review, identifying approval
                details are withheld rather than the approval itself omitted.
              </p>
            </InfoBox>

            <InfoBox
              icon={BrainCircuit}
              title="AI Research Reporting"
            >
              <p>
                AI research must be reported with enough transparency for
                <strong>
                  {" "}reliability, validity and limitations
                </strong>{" "}
                to be assessed.
              </p>

              <p>
                Where relevant, describe dataset provenance, sampling,
                preprocessing, train-validation-test separation, model
                architecture, hyperparameters, random seeds, baselines,
                ablations, fairness, privacy, failure cases and limitations.
              </p>
            </InfoBox>

            <InfoBox
              icon={LockKeyhole}
              title="Cryptographic & Security Claims"
            >
              <p>
                Papers proposing cryptographic primitives, authentication
                mechanisms, security protocols, key-management systems or
                privacy-preserving mechanisms must explicitly state their{" "}
                <strong>
                  security assumptions and threat model
                </strong>
                .
              </p>

              <p>
                Claims must be supported by appropriate evidence such as
                formal proof, security reduction, cryptanalysis, complexity
                analysis or empirical evaluation.
              </p>
            </InfoBox>

            <InfoBox
              icon={Code2}
              title="Reproducibility"
            >
              <p>
                Describe datasets, preprocessing, algorithms, implementation,
                model configuration, evaluation procedure, software
                environment and experimental settings with enough precision
                for expert assessment.
              </p>

              <p>
                Where ethically, legally and practically possible, authors
                are encouraged to release source code, configuration files,
                benchmark scripts, trained models, anonymised data and
                supplementary documentation.
              </p>
            </InfoBox>
          </div>


          {/* =======================================================
              MISCONDUCT
          ======================================================= */}

          <SectionHeading
            icon={AlertTriangle}
            title="Research Misconduct & Sanctions"
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <PolicyBox
              icon={AlertTriangle}
              title="Serious Integrity Concerns"
              items={[
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
              ]}
            />

            <InfoBox
              icon={Scale}
              title="Investigation & Possible Sanctions"
            >
              <p>
                A credible allegation is not treated as established
                misconduct. The Committee may request explanations, earlier
                drafts, source files, analysis scripts, records or raw
                results.
              </p>

              <p>
                Where a breach is substantiated, possible consequences
                include administrative rejection, withdrawal of acceptance,
                exclusion from the programme or proceedings, withdrawal from
                IEEE Xplore, institutional notification, referral to IEEE and
                exclusion from future editions of CYCRAI.
              </p>

              <p>
                <strong>
                  Registration fees are not refunded
                </strong>{" "}
                in these circumstances.
              </p>
            </InfoBox>
          </div>


          {/* =======================================================
              CONFERENCE CONDUCT
          ======================================================= */}

          <SectionHeading
            icon={Users}
            title="Conference Conduct & Interpretation"
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <InfoBox
              icon={Users}
              title="Conference Conduct"
            >
              <p>
                CYCRAI 2027 is committed to an environment in which every
                participant can take part without{" "}
                <strong>
                  harassment, discrimination or intimidation
                </strong>
                .
              </p>

              <p>
                Authors, reviewers, speakers, delegates, volunteers, sponsors
                and committee members are expected to observe the{" "}
                <strong>
                  IEEE Code of Ethics and IEEE Code of Conduct
                </strong>
                .
              </p>

              <p>
                Concerns may be raised confidentially with a member of the
                Organising Committee or by writing to{" "}
                <strong className="text-[#075DB8]">
                  cycrai@iem.edu.in
                </strong>
                .
              </p>
            </InfoBox>

            <InfoBox
              icon={CheckCircle2}
              title="Interpretation & Revision"
            >
              <p>
                These guidelines protect authors, reviewers, participants
                and the{" "}
                <strong>integrity of the scientific record</strong>.
              </p>

              <p>
                Where a situation is not expressly addressed, the General
                Chairs, Technical Programme Chairs and Publications Chairs
                will determine the appropriate procedure by reference to IEEE
                requirements and recognised principles of publication ethics.
              </p>

              <p>
                The version published on the{" "}
                <strong>official conference website</strong> at the relevant
                time governs.
              </p>
            </InfoBox>
          </div>


          {/* =======================================================
              IMPORTANT DATES
          ======================================================= */}

          <SectionHeading
            icon={CalendarDays}
            title="Important Dates"
          />

          <SimpleBox>
            <DateRow
              title="Full paper submission opens"
              date="15 December 2026"
            />

            <DateRow
              title="Full paper submission deadline"
              date="15 March 2027"
            />

            <DateRow
              title="Notification of acceptance"
              date="15 June 2027"
            />

            <DateRow
              title="Author registration deadline"
              date="10 August 2027"
            />

            <DateRow
              title="Camera-ready submission"
              date="28 August 2027"
            />

            <DateRow
              title="Conference"
              date="29–30 September 2027"
              last
            />
          </SimpleBox>


          {/* =======================================================
              CHECKLIST
          ======================================================= */}

          <SectionHeading
            icon={ClipboardCheck}
            title="Checklist Before Submission"
          />

          <SimpleBox>
            <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
              <ChecklistItem>
                Work is original and not under review or accepted elsewhere.
              </ChecklistItem>

              <ChecklistItem>
                Manuscript falls within the selected track.
              </ChecklistItem>

              <ChecklistItem>
                Current IEEE two-column A4 template is used.
              </ChecklistItem>

              <ChecklistItem>
                Manuscript is four to six pages including references.
              </ChecklistItem>

              <ChecklistItem>
                Abstract is within 250 words and three to six keywords are
                supplied.
              </ChecklistItem>

              <ChecklistItem>
                No author-identifying information appears in the PDF.
              </ChecklistItem>

              <ChecklistItem>
                Self-citations are written in third person.
              </ChecklistItem>

              <ChecklistItem>
                Repository and supplementary links are anonymised.
              </ChecklistItem>

              <ChecklistItem>
                Ethical approval is stated with identifying details withheld.
              </ChecklistItem>

              <ChecklistItem>
                PDF metadata and filename disclose no identity.
              </ChecklistItem>

              <ChecklistItem>
                Similarity is below 15% and no single source exceeds 5%.
              </ChecklistItem>

              <ChecklistItem>
                Scholarly prose was written by the listed human authors.
              </ChecklistItem>

              <ChecklistItem>
                References and DOI information have been verified.
              </ChecklistItem>

              <ChecklistItem>
                Figures and tables are legible, captioned and cited.
              </ChecklistItem>

              <ChecklistItem>
                Results are accurately reported and third-party material is
                used lawfully.
              </ChecklistItem>

              <ChecklistItem>
                Conflicts of interest have been disclosed.
              </ChecklistItem>

              <ChecklistItem>
                Every listed author has approved the manuscript and author
                order.
              </ChecklistItem>

              <ChecklistItem>
                Correct file has been uploaded to the correct track.
              </ChecklistItem>
            </div>
          </SimpleBox>


          {/* =======================================================
              AUTHOR DECLARATION
          ======================================================= */}

          <SectionHeading
            icon={UserCheck}
            title="Author Declaration"
          />

          <InfoBox
            icon={UserCheck}
            title="Author Confirmation"
          >
            <p>
              By submitting a manuscript to CYCRAI 2027, the corresponding
              author confirms on behalf of all listed authors that the work is{" "}
              <strong>
                original and is neither published nor under review elsewhere
              </strong>
              ; every named author has contributed substantively, has
              approved the submitted version, and no other person qualifies
              for authorship; the manuscript meets the{" "}
              <strong>
                format, length and anonymity requirements
              </strong>
              ; similarity thresholds are met; the scholarly prose complies
              with the{" "}
              <strong>human-authorship requirement</strong>; references and
              reported results are accurate; applicable ethical and
              research-integrity requirements have been observed; conflicts
              of interest have been disclosed; and the authors accept the
              registration, presentation and no-show provisions.
            </p>
          </InfoBox>


          {/* =======================================================
              IEEE RESOURCES
          ======================================================= */}

          <SectionHeading
            icon={FileText}
            title="IEEE Author Resources"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <ResourceBox
              title="IEEE Author Center"
              href="https://ieeeauthorcenter.ieee.org/"
            />

            <ResourceBox
              title="Become an IEEE Conference Author"
              href="https://conferences.ieeeauthorcenter.ieee.org/become-an-ieee-conference-author/"
            />

            <ResourceBox
              title="Author Ethics"
              href="https://conferences.ieeeauthorcenter.ieee.org/author-ethics/"
            />

            <ResourceBox
              title="Write Your Paper"
              href="https://conferences.ieeeauthorcenter.ieee.org/write-your-paper/"
            />

            <ResourceBox
              title="Understand Peer Review"
              href="https://conferences.ieeeauthorcenter.ieee.org/understand-peer-review/"
            />

            <ResourceBox
              title="Get Published"
              href="https://conferences.ieeeauthorcenter.ieee.org/get-published/"
            />

            <ResourceBox
              title="IEEE Manuscript Templates"
              href="https://www.ieee.org/conferences/publishing/templates"
            />

            <ResourceBox
              title="IEEE PDF eXpress"
              href="https://www.ieee.org/conferences/publishing/pdfexpress.html"
            />
          </div>


          {/* =======================================================
              ENQUIRIES
          ======================================================= */}

          <SectionHeading
            icon={Mail}
            title="Enquiries"
          />

          <InfoBox
            icon={Mail}
            title="CYCRAI 2027"
          >
            <p>
              For enquiries, contact:
            </p>

            <a
              href="mailto:cycrai@iem.edu.in"
              className="
                inline-flex
                items-center
                gap-2
                text-lg
                font-black
                text-[#075DB8]
                transition-colors
                hover:text-[#054A91]
                sm:text-xl
              "
            >
              <Mail size={19} />
              cycrai@iem.edu.in
            </a>

            <p>
              Quote the{" "}
              <strong>CMT paper identifier</strong> where one exists.
              Enquiries about the scientific judgement of reviewers will not
              be answered. Confidential publication-ethics concerns should be
              addressed directly to the Conference Chairs.
            </p>
          </InfoBox>

          <p
            className="
              mx-auto
              mt-8
              max-w-5xl
              text-center
              text-sm
              leading-7
              text-[#64748B]
            "
          >
            The Microsoft CMT service is used for managing the peer-review
            process for this conference. This service is provided free of
            charge by Microsoft, which bears all expenses, including costs
            for Azure cloud services as well as software development and
            support.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}


/* =========================================================
   SECTION HEADING
   ONLY HEADING + ICON
========================================================= */

function SectionHeading({
  icon: Icon,
  title,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="
        mb-10
        mt-20
        text-center
        sm:mb-12
        sm:mt-24
      "
    >
      <div className="flex items-center justify-center">
        <Icon
          size={21}
          strokeWidth={2.2}
          className="text-[#075DB8]"
        />
      </div>

      <h2
        className="
          mt-3
          text-3xl
          font-black
          leading-tight
          tracking-tight
          text-[#172554]
          sm:text-4xl
          md:text-5xl
        "
      >
        {title}
      </h2>
    </motion.div>
  );
}


/* =========================================================
   INFO BOX
========================================================= */

function InfoBox({
  icon: Icon,
  title,
  children,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className={`
        overflow-hidden
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
      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-[#E8F1FF]
            text-[#075DB8]
          "
        >
          <Icon size={24} />
        </div>

        <h3
          className="
            text-xl
            font-black
            leading-tight
            text-[#172554]
            sm:text-2xl
          "
        >
          {title}
        </h3>
      </div>

      <div
        className="
          mt-6
          space-y-5
          text-base
          font-semibold
          leading-8
          text-[#334155]
          sm:text-lg
        "
      >
        {children}
      </div>
    </motion.div>
  );
}


/* =========================================================
   POLICY BOX
========================================================= */

function PolicyBox({
  icon: Icon,
  title,
  items,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
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
      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-[#E8F1FF]
            text-[#075DB8]
          "
        >
          <Icon size={24} />
        </div>

        <h3
          className="
            text-xl
            font-black
            leading-tight
            text-[#172554]
            sm:text-2xl
          "
        >
          {title}
        </h3>
      </div>

      <ul
        className="
          mt-7
          space-y-4
          text-base
          font-semibold
          leading-7
          text-[#334155]
          sm:text-lg
        "
      >
        {items.map((item, index) => (
          <Bullet key={index}>
            {item}
          </Bullet>
        ))}
      </ul>
    </motion.div>
  );
}


/* =========================================================
   BULLET
========================================================= */

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3">
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


/* =========================================================
   SIMPLE BOX
========================================================= */

function SimpleBox({
  children,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`
        mt-8
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
      <div
        className="
          text-base
          font-semibold
          leading-8
          text-[#334155]
          sm:text-lg
        "
      >
        {children}
      </div>
    </motion.div>
  );
}


/* =========================================================
   TRACK BOX
========================================================= */

function TrackBox({
  number,
  title,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="
        rounded-[16px]
        border
        border-[#DCE3EB]
        border-t-4
        border-t-[#075DB8]
        bg-white
        p-7
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_15px_35px_rgba(7,93,184,0.08)]
        sm:p-8
      "
    >
      <div className="flex items-center justify-between gap-5">
        <span
          className="
            text-4xl
            font-black
            text-[#DBEAFE]
            sm:text-5xl
          "
        >
          {number}
        </span>

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-[#E8F1FF]
            text-[#075DB8]
          "
        >
          <BrainCircuit size={22} />
        </div>
      </div>

      <h3
        className="
          mt-6
          text-xl
          font-black
          leading-tight
          text-[#172554]
          sm:text-2xl
        "
      >
        {title}
      </h3>
    </motion.div>
  );
}


/* =========================================================
   DATE ROW
========================================================= */

function DateRow({
  title,
  date,
  last = false,
}) {
  return (
    <div
      className={`
        flex
        flex-col
        gap-2
        py-5
        sm:flex-row
        sm:items-center
        sm:justify-between
        sm:gap-6
        ${!last ? "border-b border-[#E2E8F0]" : ""}
      `}
    >
      <span
        className="
          text-base
          font-semibold
          leading-7
          text-[#334155]
          sm:text-lg
        "
      >
        {title}
      </span>

      <span
        className="
          shrink-0
          text-base
          font-black
          text-[#075DB8]
          sm:text-lg
        "
      >
        {date}
      </span>
    </div>
  );
}


/* =========================================================
   CHECKLIST ITEM
========================================================= */

function ChecklistItem({ children }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2
        size={20}
        strokeWidth={2}
        className="mt-1 shrink-0 text-[#075DB8]"
      />

      <span
        className="
          text-base
          font-semibold
          leading-7
          text-[#334155]
          sm:text-lg
        "
      >
        {children}
      </span>
    </div>
  );
}


/* =========================================================
   RESOURCE BOX
========================================================= */

function ResourceBox({
  title,
  href,
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="
        rounded-[16px]
        border
        border-[#DCE3EB]
        border-t-4
        border-t-[#075DB8]
        bg-white
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#BFD3EA]
        hover:shadow-[0_15px_35px_rgba(7,93,184,0.08)]
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-[#E8F1FF]
          text-[#075DB8]
        "
      >
        <FileText size={21} />
      </div>

      <h3
        className="
          mt-5
          text-lg
          font-black
          leading-7
          text-[#172554]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          text-sm
          font-bold
          text-[#075DB8]
        "
      >
        Open IEEE Resource →
      </p>
    </motion.a>
  );
}