import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  CalendarDays,
  ClipboardCheck,
  Scale,
  BrainCircuit,
  Upload,
  SearchCheck,
  Presentation,
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

const BLUE = "#075DB8";

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

  const manuscriptRules = [
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
      link:
        "https://conferences.ieeeauthorcenter.ieee.org/become-an-ieee-conference-author/",
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
      link:
        "https://conferences.ieeeauthorcenter.ieee.org/understand-peer-review/",
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
      {/* HERO */}

      <section className="relative overflow-hidden bg-[#07152F]">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#075DB8]/20 blur-[140px]" />

        <div className="pointer-events-none absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-[#60A5FA]/15 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-5xl text-center"
          >
            <h1 className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Guidelines
              <span className="block bg-gradient-to-r from-[#93C5FD] via-[#60A5FA] to-[#BFDBFE] bg-clip-text pb-3 text-transparent">
                &amp; Policies
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-8 tracking-wide text-blue-100/90 sm:text-lg md:text-xl">
              Submission, review, publication and research-integrity
              requirements for CYCRAI 2027
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}

      <main className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FBFF] to-[#F1F6FD] px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute left-0 top-20 h-[450px] w-[450px] rounded-full bg-[#BFDBFE]/20 blur-[130px]" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#DBEAFE]/30 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* IMPORTANT NOTICE */}

          <SimpleBox blueTop={false} className="mx-auto max-w-6xl bg-[#F8FBFF]">
            <div className="flex items-start gap-5">
              <IconBox danger>
                <AlertTriangle size={23} />
              </IconBox>

              <div>
                <Eyebrow>Important Notice</Eyebrow>

                <h2 className="mt-1 text-2xl font-bold text-[#172554] sm:text-3xl">
                  Read Before Submission
                </h2>

                <p className="mt-4 text-lg font-semibold leading-8 text-[#334155]">
                  Read this page in full before preparing a manuscript.
                  Submission constitutes confirmation by every listed author
                  that these guidelines have been read and accepted.
                  Mandatory requirements are enforced by administrative
                  rejection without external review.
                </p>
              </div>
            </div>
          </SimpleBox>

          {/* SECTION 01 */}

          <SectionHeading
            icon={Scale}
            label="Section 01"
            title="Scope & Precedence"
            description="These requirements govern manuscript preparation, submission, review, revision, presentation and publication."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <InfoCard icon={BookOpen} title="What These Guidelines Cover">
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

            <InfoCard icon={Scale} title="IEEE & CYCRAI Requirements">
              <p>
                IEEE publication policy sets the minimum standard for
                publication. CYCRAI 2027 imposes additional requirements for
                submission.
              </p>

              <p>
                Where a binding IEEE requirement cannot be reconciled with a
                CYCRAI requirement, the IEEE requirement governs eligibility
                for publication in IEEE Xplore.
              </p>
            </InfoCard>
          </div>

          {/* SECTION 02 */}

          <SectionHeading
            icon={BrainCircuit}
            label="Section 02"
            title="Technical Tracks"
            description="Submit to the single track that best represents the principal contribution."
          />

          <div className="grid gap-8 md:grid-cols-2">
            {technicalTracks.map((track, index) => {
              const Icon = track.icon;

              return (
                <Card key={track.number} delay={index * 0.07}>
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-black text-[#DBEAFE]">
                      {track.number}
                    </span>

                    <IconBox>
                      <Icon size={27} />
                    </IconBox>
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-[#172554] md:text-3xl">
                    {track.title}
                  </h3>

                  <p className="mt-5 text-lg font-semibold leading-8 text-[#334155]">
                    Topic lists on the Call for Papers page are indicative
                    rather than exhaustive. Interdisciplinary work spanning
                    security, cryptography and machine learning is expressly
                    welcome.
                  </p>
                </Card>
              );
            })}
          </div>

          {/* SECTIONS 03-04 */}

          <SectionHeading
            icon={FileText}
            label="Sections 03–04"
            title="Originality & Manuscript Preparation"
            description="Every manuscript must satisfy originality, formatting and file requirements before submission."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <PolicyCard
              icon={ShieldCheck}
              title="Originality & Exclusive Submission"
              items={originalityRules}
            />

            <PolicyCard
              icon={FileText}
              title="Manuscript Preparation"
              items={manuscriptRules}
            />
          </div>

          {/* SECTIONS 05-06 */}

          <SectionHeading
            icon={Eye}
            label="Sections 05–06"
            title="Review Integrity"
            description="CYCRAI 2027 uses strict double-blind review and mandatory similarity screening."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <PolicyCard
              icon={Eye}
              title="Double-Blind Review"
              items={doubleBlindRules}
            />

            <InfoCard icon={SearchCheck} title="Similarity & Plagiarism">
              <p>
                Every submission is screened before review, and every accepted
                camera-ready manuscript is screened again using IEEE CrossCheck.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <MetricCard value="< 15%" label="Overall Similarity" />
                <MetricCard value="≤ 5%" label="Single Source" />
              </div>

              <div className="mt-8 space-y-5">
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

          {/* SECTION 07 */}

          <SectionHeading
            icon={Bot}
            label="Section 07"
            title="Generative AI & Human Authorship"
            description="CYCRAI 2027 applies a conference-specific human-authorship requirement."
          />

          <div className="grid gap-8 lg:grid-cols-2">
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

          {/* SECTION 08 */}

          <SectionHeading
            icon={Upload}
            label="Section 08"
            title="Submission"
            description="All manuscripts are submitted through Microsoft CMT."
          />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {submissionSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Card key={step.number} delay={index * 0.06}>
                  <div className="flex items-center justify-between">
                    <IconBox>
                      <Icon size={23} />
                    </IconBox>

                    <span className="text-4xl font-black text-[#DBEAFE]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-[#172554]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-lg font-semibold leading-8 text-[#334155]">
                    {step.desc}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <InfoCard icon={Upload} title="Microsoft CMT Requirements">
              <ul className="space-y-4">
                <li>• Submissions by email or other routes are discarded.</li>
                <li>• The submitting author must hold a CMT account.</li>
                <li>
                  • Supply title, abstract, keywords and complete author
                  metadata.
                </li>
                <li>• The submitting author acts as corresponding author.</li>
                <li>
                  • Author list and order are final at the submission deadline.
                </li>
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

              <p>
                There is no rebuttal stage. Reviewer identities are never
                disclosed and reviewing material remains confidential.
              </p>
            </InfoCard>
          </div>

          {/* SECTION 09 */}

          <SectionHeading
            icon={SearchCheck}
            label="Section 09"
            title="Review Criteria"
            description="Reviewers evaluate manuscripts against scientific, technical and presentation standards."
          />

          <SimpleBox>
            <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">
              {reviewCriteria.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-[#075DB8]"
                  />

                  <span className="text-lg font-semibold leading-7 text-[#334155]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </SimpleBox>

          {/* SECTION 10 */}

          <SectionHeading
            icon={ClipboardCheck}
            label="Section 10"
            title="Camera-Ready Submission"
            description="Acceptance alone does not secure publication. Every camera-ready requirement must be completed."
          />

          <SimpleBox>
            <div className="grid gap-x-12 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
              {cameraReadySteps.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8F1FF] text-sm font-bold text-[#075DB8]">
                    {index + 1}
                  </div>

                  <p className="text-lg font-semibold leading-7 text-[#334155]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </SimpleBox>

          <div className="mt-10 rounded-[16px] border border-[#BFDBFE] bg-[#F8FBFF] p-8 sm:p-10">
            <div className="grid gap-8 text-center md:grid-cols-3">
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

            <p className="mx-auto mt-8 max-w-4xl text-center text-lg font-semibold leading-8 text-[#334155]">
              The camera-ready manuscript may run to six pages, with up to
              two additional pages permitted on payment of ₹1000 per
              additional page. The absolute maximum is eight pages.
            </p>
          </div>

          {/* SECTION 11 */}

          <SectionHeading
            icon={Presentation}
            label="Section 11"
            title="Registration, Presentation & Withdrawal"
            description="Accepted papers must satisfy registration and presentation requirements."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <InfoCard icon={Users} title="Registration & Presentation">
              <ul className="space-y-5">
                <li>• At least one author must complete full author registration.</li>
                <li>• Each full registration covers one paper.</li>
                <li>• Valid membership/student proof is required where applicable.</li>
                <li>• Presentation is mandatory.</li>
                <li>• At least one author must present the paper.</li>
                <li>
                  • Registered but unpresented papers are excluded from IEEE
                  Xplore proceedings.
                </li>
                <li>
                  • Remote presentation may be requested at least fourteen days
                  before the conference.
                </li>
                <li>• Registration fees are non-refundable.</li>
              </ul>
            </InfoCard>

            <InfoCard icon={RefreshCw} title="Withdrawal">
              <ul className="space-y-5">
                <li>• Withdrawal before acceptance may be made through CMT.</li>
                <li>• Withdrawal after acceptance requires a written request.</li>
                <li>• Agreement of all co-authors is required after acceptance.</li>
                <li>
                  • Withdrawal to submit substantially the same work elsewhere
                  may be treated as abuse of peer review.
                </li>
              </ul>
            </InfoCard>
          </div>

          <div className="mt-10 rounded-[16px] bg-[#07152F] p-9 text-center sm:p-12">
            <h3 className="text-3xl font-black text-white md:text-4xl">
              IEEE Xplore Submission
            </h3>

            <p className="mx-auto mt-5 max-w-4xl text-lg font-semibold leading-8 text-blue-100/80">
              All accepted papers that are registered and presented will be
              submitted for inclusion in the IEEE Xplore Digital Library,
              subject to IEEE Xplore's scope and quality requirements.
              Acceptance by CYCRAI 2027 does not by itself guarantee inclusion.
            </p>
          </div>

          {/* SECTIONS 13-15 */}

          <SectionHeading
            icon={UserCheck}
            label="Sections 13–15"
            title="Authorship, Conflicts & Confidentiality"
          />

          <div className="grid gap-8 lg:grid-cols-3">
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
                Conflicts include employment at the same institution, recent
                collaboration, supervision, close personal relationships,
                material financial interests and direct professional
                competition.
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

          {/* SECTIONS 16-18 */}

          <SectionHeading
            icon={AlertTriangle}
            label="Sections 16–18"
            title="Research Integrity & Responsible Cybersecurity"
            description="Technical quality must be accompanied by responsible and ethical research practice."
          />

          <div className="grid gap-8 lg:grid-cols-3">
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

          {/* SECTIONS 19-22 */}

          <SectionHeading
            icon={HeartHandshake}
            label="Sections 19–22"
            title="Ethics, AI Reporting & Reproducibility"
          />

          <div className="grid gap-8 lg:grid-cols-2">
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

          {/* SECTIONS 23-24 */}

          <SectionHeading
            icon={AlertTriangle}
            label="Sections 23–24"
            title="Research Misconduct & Sanctions"
            description="Credible allegations are investigated before a determination is made."
          />

          <div className="grid gap-8 lg:grid-cols-2">
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

              <p>Registration fees are not refunded in these circumstances.</p>
            </InfoCard>
          </div>

          {/* SECTIONS 25-26 */}

          <SectionHeading
            icon={Users}
            label="Sections 25–26"
            title="Conference Conduct & Interpretation"
          />

          <div className="grid gap-8 lg:grid-cols-2">
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
                <span className="font-bold text-[#075DB8]">
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

          {/* SECTION 27 */}

          <SectionHeading
            icon={CalendarDays}
            label="Section 27"
            title="Important Dates"
            description="All deadlines close at 23:59 Anywhere on Earth (AoE)."
          />

          <SimpleBox>
            {importantDates.map(([milestone, date], index) => (
              <motion.div
                key={milestone}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col gap-3 border-b border-[#E2E8F0] px-4 py-6 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:px-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F1FF] text-sm font-bold text-[#075DB8]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="text-lg font-semibold text-[#334155]">
                    {milestone}
                  </span>
                </div>

                <span className="text-lg font-bold text-[#075DB8] sm:text-right">
                  {date}
                </span>
              </motion.div>
            ))}
          </SimpleBox>

          {/* SECTION 28 */}

          <SectionHeading
            icon={ClipboardCheck}
            label="Section 28"
            title="Checklist Before Submission"
            description="Use this checklist before uploading your manuscript."
          />

          <SimpleBox>
            <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">
              {checklist.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.025 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-[#075DB8]"
                  />

                  <span className="text-lg font-semibold leading-7 text-[#334155]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </SimpleBox>

          {/* SECTION 29 */}

          <SectionHeading
            icon={UserCheck}
            label="Section 29"
            title="Author Declaration"
          />

          <Card className="mx-auto max-w-6xl">
            <div className="flex items-center gap-4">
              <IconBox>
                <UserCheck size={26} />
              </IconBox>

              <div>
                <Eyebrow>Corresponding Author</Eyebrow>

                <h3 className="mt-1 text-2xl font-bold text-[#172554] md:text-3xl">
                  Author Confirmation
                </h3>
              </div>
            </div>

            <p className="mt-8 text-lg font-semibold leading-8 text-[#334155]">
              By submitting a manuscript to CYCRAI 2027, the corresponding
              author confirms on behalf of all listed authors that the work is
              original and is neither published nor under review elsewhere;
              every named author has contributed substantively, has approved
              the submitted version, and no other person qualifies for
              authorship; the manuscript meets the format, length and anonymity
              requirements; similarity thresholds are met; the scholarly prose
              complies with the human-authorship requirement; references and
              reported results are accurate; applicable ethical and
              research-integrity requirements have been observed; conflicts of
              interest have been disclosed; and the authors accept the
              registration, presentation and no-show provisions.
            </p>
          </Card>

          {/* SECTION 30 */}

          <SectionHeading
            icon={ExternalLink}
            label="Section 30"
            title="IEEE Author Resources"
            description="Useful resources for preparing, reviewing and publishing your manuscript."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {ieeeResources.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[16px] border border-[#DCE3EB] border-t-4 border-t-[#075DB8] bg-white p-7"
              >
                <div className="flex items-center justify-between">
                  <IconBox light>
                    <BookOpen size={22} />
                  </IconBox>

                  <ExternalLink size={18} className="text-[#94A3B8]" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#172554]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-bold text-[#075DB8]">
                  Open IEEE Resource →
                </p>
              </motion.a>
            ))}
          </div>

          {/* CONTACT */}

          <section className="mt-28">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-5xl rounded-[16px] bg-[#07152F] p-9 text-center sm:p-12 md:p-16"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-200">
                <Mail size={26} />
              </div>

              <Eyebrow light>Contact</Eyebrow>

              <h2 className="mt-2 text-4xl font-black text-white md:text-5xl">
                Enquiries
              </h2>

              <a
                href="mailto:cycrai@iem.edu.in"
                className="mt-6 inline-flex items-center gap-3 text-xl font-bold text-[#93C5FD]"
              >
                <Mail size={20} />
                cycrai@iem.edu.in
              </a>

              <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-blue-100/75">
                Quote the CMT paper identifier where one exists. Enquiries
                about the scientific judgement of reviewers will not be
                answered. Confidential publication-ethics concerns should be
                addressed directly to the Conference Chairs.
              </p>
            </motion.div>

            <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-[#64748B]">
              The Microsoft CMT service is used for managing the peer-review
              process for this conference. This service is provided free of
              charge by Microsoft, which bears all expenses, including costs
              for Azure cloud services as well as software development and
              support.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}


/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function SectionHeading({
  icon: Icon,
  label,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65 }}
      className="mb-14 mt-28 text-center"
    >
      <div className="flex items-center justify-center gap-3">
        <Icon size={20} className="text-[#075DB8]" />

        <span className="text-xs font-bold uppercase tracking-[2px] text-[#075DB8]">
          {label}
        </span>
      </div>

      <h2 className="mt-4 text-4xl font-black leading-tight text-[#172554] sm:text-5xl md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold leading-8 text-[#334155]">
          {description}
        </p>
      )}
    </motion.div>
  );
}


function Card({
  children,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay }}
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


function SimpleBox({
  children,
  className = "",
  blueTop = true,
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
        ${blueTop ? "border-t-4 border-t-[#075DB8]" : ""}
        bg-white
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}


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

      <h3 className="mt-7 text-2xl font-bold text-[#172554] md:text-3xl">
        {title}
      </h3>

      <div className="mt-6 space-y-5 text-lg font-semibold leading-8 text-[#334155]">
        {children}
      </div>
    </Card>
  );
}


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

      <h3 className="mt-7 text-2xl font-bold text-[#172554] md:text-3xl">
        {title}
      </h3>

      <ul className="mt-7 space-y-4 text-lg font-semibold leading-7 text-[#334155]">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#075DB8]" />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}


function MetricCard({
  value,
  label,
}) {
  return (
    <div className="rounded-2xl border border-[#BFDBFE] bg-white p-6">
      <div className="text-3xl font-black text-[#075DB8] md:text-4xl">
        {value}
      </div>

      <p className="mt-2 text-sm font-semibold leading-6 text-[#334155]">
        {label}
      </p>
    </div>
  );
}


function IconBox({
  children,
  light = false,
  danger = false,
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
        ${light ? "bg-[#E8F1FF] text-[#075DB8]" : ""}
        ${danger ? "bg-[#075DB8] text-white" : ""}
        ${
          !light && !danger
            ? "bg-[#075DB8] text-white"
            : ""
        }
      `}
    >
      {children}
    </div>
  );
}


function Eyebrow({
  children,
  light = false,
}) {
  return (
    <p
      className={`
        mt-6
        text-xs
        font-bold
        uppercase
        tracking-[2px]
        ${light ? "text-blue-200/70" : "text-[#075DB8]"}
      `}
    >
      {children}
    </p>
  );
}