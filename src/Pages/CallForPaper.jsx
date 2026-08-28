
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import {
//   ArrowRight,
//   FileText,
//   ShieldCheck,
//   Globe,
//   Trophy,
//   Sparkles,
//   ExternalLink,
// } from "lucide-react";

// import Footer from "../components/Footer";

// export default function CallForPapers() {
//   const [showCmtPopup, setShowCmtPopup] = useState(false);

//   const stats = [
//     {
//       value: "10+",
//       label: "Technical Tracks",
//     },
//     {
//       value: "IEEE",
//       label: "Publication",
//     },
//     {
//       value: "Global",
//       label: "Authors",
//     },
//     {
//       value: "Hybrid",
//       label: "Conference",
//     },
//   ];

//   const heroCards = [
//     {
//       icon: FileText,
//       title: "Research Publication",
//       desc:
//         "Present original contributions across Artificial Intelligence, Cyber Security and Emerging Technologies.",
//     },
//     {
//       icon: Globe,
//       title: "International Community",
//       desc:
//         "Connect with researchers, IEEE professionals and innovators from academia and industry.",
//     },
//     {
//       icon: Trophy,
//       title: "Best Paper Awards",
//       desc:
//         "Outstanding research across technical tracks will be recognized during CYCRAI 2027.",
//     },
//     {
//       icon: ShieldCheck,
//       title: "Quality Review",
//       desc:
//         "Every submission undergoes a rigorous peer-review process to ensure technical excellence.",
//     },
//   ];

//   const topics = [
//     {
//       title: "Track 1: Foundation of Cyber Security",
//       subtopics: [
//         "Cybersecurity Awareness",
//         "Cybersecurity Governance, Risk and Compliance",
//         "Digital Forensics and Cybercrime Investigation",
//         "Cyberattack Reconstruction and Attribution",
//         "Hardware Security and Reliability",
//         "IoT-based Data Security",
//         "Security in IoT, Cloud and Edge Devices",
//         "Database Security and Privacy",
//         "Malware Analysis",
//         "Federated Learning Security and Privacy-Preserving Machine Learning",
//         "Digital Twin Security",
//         "Cyber Resilience and Cyber Recovery",
//         "5G/6G Network Security",
//         "Cyber Threat Intelligence",
//         "Intrusion Detection and Prevention",
//         "Vulnerability Assessment and Prevention",
//         "Zero Trust Architecture",
//         "Cyber-Physical Systems and Security",
//         "Blockchain and Distributed Ledger Security",
//         "Security Aspects of Software Development",
//         "AI-Driven Cyber Defence",
//       ],
//     },
//     {
//       title: "Track 2: Foundation of Cryptography",
//       subtopics: [
//         "Cryptography and Cryptanalysis",
//         "Information Theory and Cryptography",
//         "Applied Cryptography and Network Security",
//         "AI/ML for Cryptography",
//         "Lightweight Cryptography for IoT and Embedded Systems",
//         "Applied Cryptography and Its Implementation",
//         "Quantum Cryptography",
//         "Quantum Machine Learning",
//         "Quantum Computing",
//         "Post-Quantum Cryptography",
//       ],
//     },
//     {
//       title: "Track 3: Foundation of Responsible AI",
//       subtopics: [
//         "AI Ethics",
//         "AI Fairness",
//         "AI Bias Mitigation",
//         "Explainable AI",
//         "Interpretable AI",
//         "Transparency in AI Audit",
//         "Privacy-Preserving AI Models",
//         "Secure AI Systems",
//         "Responsible Generative AI",
//         "AI for Ransomware Analysis",
//         "AI Security in Healthcare, Education, Infrastructure and Finance",
//         "Security in Sustainable AI",
//         "Societal Impact of Responsible AI Development",
//         "Security and Privacy for AI Systems",
//         "AI/ML for Threat Detection and Prevention",
//       ],
//     },
//   ];

//   const submissionSteps = [
//     {
//       number: "01",
//       title: "Prepare Manuscript",
//       desc:
//         "Write your paper using the official IEEE Conference Template.",
//     },
//     {
//       number: "02",
//       title: "Check Originality",
//       desc:
//         "Ensure your submission is original and follows ethical publishing practices.",
//     },
//     {
//       number: "03",
//       title: "Create CMT Account",
//       desc:
//         "Login or register on the Microsoft CMT submission portal.",
//     },
//     {
//       number: "04",
//       title: "Upload Paper",
//       desc:
//         "Submit the PDF version together with complete author information.",
//     },
//     {
//       number: "05",
//       title: "Peer Review",
//       desc:
//         "Your manuscript will undergo a rigorous technical review process.",
//     },
//     {
//       number: "06",
//       title: "Camera Ready",
//       desc:
//         "Accepted papers must submit the final manuscript and complete registration.",
//     },
//   ];

//   const templateLinks = [
//     {
//       title: "US Letter (DOCX)",
//       url:
//         "https://ieee-org.widen.net/content/u1tqtjruak/original/conference-template-letter.docx",
//     },
//     {
//       title: "A4 (DOCX)",
//       url:
//         "https://ieee-org.widen.net/content/ge5anzdecd/original/conference-template-a4.docx",
//     },
//     {
//       title: "LaTeX Template (ZIP)",
//       url:
//         "https://ieee-org.widen.net/content/ssylclqfn/original/conference-latex-template.zip",
//     },
//     {
//       title: "LaTeX Bibliography Files (ZIP)",
//       url:
//         "https://ieee-org.widen.net/content/t4f4hdfmwu/original/IEEEtranBST2.zip",
//     },
//     {
//       title: "IEEE Official Template on Overleaf",
//       url:
//         "https://www.overleaf.com/gallery/tagged/ieee-official",
//     },
//   ];

//   return (
//     <>
//       {/* =========================================================
//           HERO SECTION
//       ========================================================= */}

//       <section className="relative overflow-hidden bg-[#020817] min-h-screen pt-6 pb-24">

//         {/* Background Grid */}
//         <div
//           className="absolute inset-0 opacity-[0.08]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
//             backgroundSize: "60px 60px",
//           }}
//         />

//         {/* Background Glows */}
//         <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full" />

//         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[170px] rounded-full" />

//         <div className="relative max-w-7xl mx-auto px-6">

//           {/* =====================================================
//               HERO CONTENT
//           ===================================================== */}

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >

//             {/* Badge */}
//             <span
//               className="
//                 inline-flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 border
//                 border-cyan-400/30
//                 bg-cyan-500/10
//                 px-5
//                 py-2
//                 text-cyan-300
//                 text-sm
//                 tracking-[3px]
//                 uppercase
//               "
//             >
//               <Sparkles size={16} />
//               Call For Papers
//             </span>

//             {/* Heading */}
//             <h1
//               className="
//                 mt-8
//                 text-5xl
//                 md:text-7xl
//                 font-black
//                 leading-[1.15]
//                 text-white
//               "
//             >
//               Call For

//               <span
//                 className="
//                   block
//                   pb-3
//                   bg-gradient-to-r
//                   from-cyan-300
//                   via-sky-400
//                   to-blue-500
//                   bg-clip-text
//                   text-transparent
//                 "
//               >
//                 Papers
//               </span>
//             </h1>

//           </motion.div>

  
          


          

//         </div>

//       </section>


      


//       {/* =========================================================
//           TOPICS OF INTEREST
//       ========================================================= */}

//       <section
//         id="topics"
//         className="
//           relative
//           py-28
//           bg-[#020817]
//           overflow-hidden
//         "
//       >

//         {/* Background */}
//         <div
//           className="absolute inset-0 opacity-[0.05]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
//             backgroundSize: "65px 65px",
//           }}
//         />

//         <div className="absolute -left-20 top-40 w-[350px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full" />

//         <div className="absolute right-0 bottom-20 w-[350px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full" />

//         <div className="relative max-w-7xl mx-auto px-6">

//           {/* Heading */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 30,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.7,
//             }}
//             className="text-center mb-20"
//           >

            

            

//             <p
//               className="
//                 mt-8
//                 max-w-3xl
//                 mx-auto
//                 text-slate-400
//                 text-lg
//                 leading-8
//               "
//             >
//               Authors are invited to submit original research papers related
//               to, but not limited to, the following conference themes.
//             </p>

//           </motion.div>


//           {/* Topics */}
//           <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

//             {topics.map((topic, index) => (

//               <motion.div
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   y: 40,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   duration: 0.55,
//                   delay: index * 0.05,
//                 }}
//                 className="
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-[28px]
//                   border
//                   border-cyan-400/15
//                   bg-white/5
//                   backdrop-blur-xl
//                   p-8
//                   hover:border-cyan-400/40
//                   hover:-translate-y-2
//                   transition-all
//                   duration-500
//                 "
//               >

//                 {/* Hover Glow */}
//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     opacity-0
//                     group-hover:opacity-100
//                     transition
//                     duration-500
//                     bg-gradient-to-br
//                     from-cyan-500/10
//                     to-transparent
//                     pointer-events-none
//                   "
//                 />

//                 <div className="relative z-10">

//                   {/* Track Number */}
//                   <div
//                     className="
//                       w-14
//                       h-14
//                       rounded-2xl
//                       bg-cyan-500/10
//                       border
//                       border-cyan-400/20
//                       flex
//                       items-center
//                       justify-center
//                       mb-6
//                     "
//                   >
//                     <span className="text-cyan-300 text-xl font-bold">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>
//                   </div>

//                   {/* Track Title */}
//                   <h3
//                     className="
//                       text-xl
//                       font-bold
//                       text-white
//                       leading-8
//                       group-hover:text-cyan-300
//                       transition-colors
//                       duration-300
//                     "
//                   >
//                     {topic.title}
//                   </h3>

//                   {/* Subtopics */}
//                   <div className="mt-6 space-y-3">

//                     {topic.subtopics.map((subtopic, subIndex) => (

//                       <div
//                         key={subIndex}
//                         className="
//                           flex
//                           items-start
//                           gap-3
//                           text-sm
//                           text-slate-400
//                           leading-6
//                         "
//                       >

//                         <span
//                           className="
//                             mt-2
//                             w-1.5
//                             h-1.5
//                             flex-shrink-0
//                             rounded-full
//                             bg-cyan-400
//                           "
//                         />

//                         <span>
//                           {subtopic}
//                         </span>

//                       </div>

//                     ))}

//                   </div>

//                 </div>

//               </motion.div>

//             ))}

//           </div>

//         </div>

//       </section>


//       {/* =========================================================
//           SUBMISSION ROADMAP
//       ========================================================= */}

//       <section
//         className="
//           relative
//           py-28
//           bg-gradient-to-b
//           from-[#020817]
//           via-[#071326]
//           to-[#020817]
//           overflow-hidden
//         "
//       >

//         {/* Background */}
//         <div
//           className="absolute inset-0 opacity-[0.04]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
//             backgroundSize: "70px 70px",
//           }}
//         />

//         <div className="relative max-w-7xl mx-auto px-6">

//           {/* Heading */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 30,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.7,
//             }}
//             className="text-center mb-20"
//           >

//             <span
//               className="
//                 inline-flex
//                 px-5
//                 py-2
//                 rounded-full
//                 bg-cyan-500/10
//                 border
//                 border-cyan-400/30
//                 text-cyan-300
//                 uppercase
//                 tracking-[3px]
//                 text-sm
//               "
//             >
//               Author Guide
//             </span>

//             <h2
//               className="
//                 mt-8
//                 text-5xl
//                 md:text-6xl
//                 font-black
//                 text-white
//               "
//             >

//               Paper Submission

//               <span
//                 className="
//                   block
//                   bg-gradient-to-r
//                   from-cyan-300
//                   via-sky-400
//                   to-blue-500
//                   bg-clip-text
//                   text-transparent
//                 "
//               >
//                 Workflow
//               </span>

//             </h2>

//             <p
//               className="
//                 mt-8
//                 max-w-3xl
//                 mx-auto
//                 text-lg
//                 text-slate-400
//                 leading-8
//               "
//             >
//               Follow these simple steps to submit your manuscript to
//               IEEE CYCRAI 2027.
//             </p>

//           </motion.div>


//           {/* Submission Steps */}
//           <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

//             {submissionSteps.map((step, index) => (

//               <motion.div
//                 key={step.number}
//                 initial={{
//                   opacity: 0,
//                   y: 40,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   duration: 0.55,
//                   delay: index * 0.08,
//                 }}
//                 className="
//                   group
//                   relative
//                   rounded-[30px]
//                   border
//                   border-cyan-400/20
//                   bg-white/5
//                   backdrop-blur-xl
//                   p-8
//                   hover:border-cyan-400/40
//                   hover:-translate-y-2
//                   transition-all
//                   duration-500
//                 "
//               >

//                 {/* Large Number */}
//                 <div
//                   className="
//                     absolute
//                     top-8
//                     right-8
//                     text-6xl
//                     font-black
//                     text-cyan-500/10
//                   "
//                 >
//                   {step.number}
//                 </div>

//                 <div className="relative z-10">

//                   <div
//                     className="
//                       w-14
//                       h-14
//                       rounded-2xl
//                       bg-cyan-500/10
//                       flex
//                       items-center
//                       justify-center
//                       border
//                       border-cyan-400/20
//                       mb-6
//                     "
//                   >
//                     <FileText
//                       size={26}
//                       className="text-cyan-300"
//                     />
//                   </div>

//                   <h3 className="text-2xl font-bold text-white">
//                     {step.title}
//                   </h3>

//                   <p className="mt-5 text-slate-400 leading-8">
//                     {step.desc}
//                   </p>

//                 </div>

//               </motion.div>

//             ))}

//           </div>


//           {/* =====================================================
//               SUBMISSION ACTIONS
//           ===================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 40,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.7,
//             }}
//             className="mt-24 grid lg:grid-cols-2 gap-10"
//           >

//             {/* =================================================
//                 IEEE TEMPLATE
//             ================================================= */}

//             <div
//               className="
//                 group
//                 relative
//                 overflow-hidden
//                 rounded-[35px]
//                 border
//                 border-cyan-400/20
//                 bg-white/5
//                 backdrop-blur-2xl
//                 p-10
//                 transition-all
//                 duration-500
//                 hover:border-cyan-400/40
//                 hover:-translate-y-2
//                 hover:shadow-[0_0_45px_rgba(34,211,238,.14)]
//               "
//             >

//               {/* Glow */}
//               <div
//                 className="
//                   absolute
//                   top-0
//                   right-0
//                   w-60
//                   h-60
//                   bg-cyan-500/10
//                   blur-[120px]
//                   rounded-full
//                   pointer-events-none
//                 "
//               />

//               <div className="relative z-10">

//                 {/* Icon */}
//                 <div
//                   className="
//                     w-16
//                     h-16
//                     rounded-2xl
//                     bg-cyan-500/10
//                     border
//                     border-cyan-400/20
//                     flex
//                     items-center
//                     justify-center
//                   "
//                 >
//                   <FileText
//                     size={30}
//                     className="text-cyan-300"
//                   />
//                 </div>


//                 {/* Title */}
//                 <h3
//                   className="
//                     mt-8
//                     text-3xl
//                     font-bold
//                     text-white
//                   "
//                 >
//                   IEEE Conference Template
//                 </h3>


//                 {/* Description */}
//                 <p
//                   className="
//                     mt-6
//                     text-slate-400
//                     leading-8
//                   "
//                 >
//                   Authors should prepare manuscripts using the official IEEE
//                   Conference Template. Papers must comply with IEEE formatting,
//                   plagiarism and publication guidelines before submission.
//                 </p>


//                 {/* Template Links */}
//                 <div className="mt-10 space-y-4">

//                   {templateLinks.map((link) => (

//                     <a
//                       key={link.title}
//                       href={link.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="
//                         group/link
//                         flex
//                         items-center
//                         justify-between
//                         gap-4
//                         rounded-2xl
//                         border
//                         border-cyan-400/20
//                         bg-cyan-500/5
//                         px-5
//                         py-4
//                         text-cyan-300
//                         font-semibold
//                         transition-all
//                         duration-300
//                         hover:bg-cyan-400
//                         hover:text-slate-900
//                         hover:border-cyan-400
//                         hover:shadow-[0_0_25px_rgba(34,211,238,.25)]
//                       "
//                     >

//                       <span>
//                         {link.title}
//                       </span>

//                       <ExternalLink
//                         size={18}
//                         className="
//                           flex-shrink-0
//                           transition-transform
//                           duration-300
//                           group-hover/link:translate-x-1
//                         "
//                       />

//                     </a>

//                   ))}

//                 </div>

//               </div>

//             </div>


//             {/* =================================================
//                 MICROSOFT CMT
//             ================================================= */}

//             <div
//               className="
//                 group
//                 relative
//                 overflow-hidden
//                 rounded-[35px]
//                 border
//                 border-cyan-400/20
//                 bg-gradient-to-br
//                 from-cyan-500/10
//                 via-[#071326]
//                 to-[#020817]
//                 p-10
//                 transition-all
//                 duration-500
//                 hover:border-cyan-400/40
//                 hover:-translate-y-2
//                 hover:shadow-[0_0_45px_rgba(34,211,238,.14)]
//               "
//             >

//               {/* Glow */}
//               <div
//                 className="
//                   absolute
//                   bottom-0
//                   left-0
//                   w-72
//                   h-72
//                   bg-blue-500/10
//                   blur-[120px]
//                   rounded-full
//                   pointer-events-none
//                 "
//               />

//               <div className="relative z-10">

//                 {/* Icon */}
//                 <div
//                   className="
//                     w-16
//                     h-16
//                     rounded-2xl
//                     bg-white/10
//                     border
//                     border-cyan-400/20
//                     flex
//                     items-center
//                     justify-center
//                   "
//                 >
//                   <ArrowRight
//                     size={30}
//                     className="text-cyan-300"
//                   />
//                 </div>


//                 {/* Title */}
//                 <h3
//                   className="
//                     mt-8
//                     text-3xl
//                     font-bold
//                     text-white
//                   "
//                 >
//                   Microsoft CMT Submission
//                 </h3>


//                 {/* Description */}
//                 <p
//                   className="
//                     mt-6
//                     text-slate-300
//                     leading-8
//                   "
//                 >
//                   Submit your manuscript through the Microsoft CMT platform.
//                   Complete all metadata carefully before final submission.
//                   Authors can later update the camera-ready version after
//                   acceptance.
//                 </p>


//                 {/* CMT Button */}
//                 <button
//                   onClick={() => setShowCmtPopup(true)}
//                   className="
//                     mt-10
//                     inline-flex
//                     items-center
//                     gap-3
//                     rounded-full
//                     border
//                     border-cyan-400
//                     px-8
//                     py-4
//                     font-bold
//                     text-cyan-300
//                     transition-all
//                     duration-300
//                     hover:bg-cyan-400
//                     hover:text-slate-900
//                     hover:shadow-[0_0_30px_rgba(34,211,238,.25)]
//                   "
//                 >
//                   Open CMT Portal

//                   <ArrowRight
//                     size={20}
//                     className="
//                       transition-transform
//                       duration-300
//                       group-hover:translate-x-1
//                     "
//                   />
//                 </button>

//               </div>

//             </div>

//           </motion.div>


//           {/* =================================================
//               IEEE PUBLICATION NOTICE
//           ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             whileInView={{
//               opacity: 1,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               delay: 0.3,
//             }}
//             className="
//               mt-20
//               rounded-[35px]
//               border
//               border-cyan-400/20
//               bg-cyan-500/5
//               backdrop-blur-xl
//               p-10
//             "
//           >

//             <div className="flex flex-col lg:flex-row gap-8 items-center">

//               <div className="text-6xl">
//                 📚
//               </div>

//               <div>

//                 <h3 className="text-3xl font-bold text-white">
//                   Publication Policy
//                 </h3>

//                 <p
//                   className="
//                     mt-5
//                     text-slate-400
//                     leading-8
//                   "
//                 >
//                   Accepted papers that are registered, presented and satisfy
//                   all IEEE conference publication policies will be submitted
//                   for inclusion in the IEEE Xplore Digital Library subject to
//                   IEEE quality checks.
//                 </p>

//               </div>

//             </div>

//           </motion.div>

//         </div>

//       </section>


//       {/* =========================================================
//           CMT SUBMISSION POPUP
//       ========================================================= */}

//       <AnimatePresence>

//         {showCmtPopup && (

//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             exit={{
//               opacity: 0,
//             }}
//             className="
//               fixed
//               inset-0
//               z-[999]
//               flex
//               items-center
//               justify-center
//               bg-black/70
//               backdrop-blur-md
//               p-6
//             "
//           >

//             <motion.div
//               initial={{
//                 scale: 0.9,
//                 opacity: 0,
//               }}
//               animate={{
//                 scale: 1,
//                 opacity: 1,
//               }}
//               exit={{
//                 scale: 0.9,
//                 opacity: 0,
//               }}
//               transition={{
//                 duration: 0.25,
//               }}
//               className="
//                 relative
//                 w-full
//                 max-w-xl
//                 rounded-[35px]
//                 border
//                 border-cyan-400/20
//                 bg-[#071326]
//                 p-10
//               "
//             >

//               {/* Close */}
//               <button
//                 onClick={() => setShowCmtPopup(false)}
//                 className="
//                   absolute
//                   top-6
//                   right-6
//                   text-slate-400
//                   hover:text-white
//                   text-2xl
//                   transition-colors
//                 "
//               >
//                 ×
//               </button>


//               {/* Icon */}
//               <div
//                 className="
//                   w-16
//                   h-16
//                   rounded-2xl
//                   bg-cyan-500/10
//                   border
//                   border-cyan-400/20
//                   flex
//                   items-center
//                   justify-center
//                   mb-8
//                 "
//               >
//                 <ArrowRight
//                   size={30}
//                   className="text-cyan-300"
//                 />
//               </div>


//               {/* Heading */}
//               <h2
//                 className="
//                   text-3xl
//                   font-bold
//                   text-white
//                 "
//               >
//                 Microsoft CMT Portal
//               </h2>


//               {/* Description */}
//               <p
//                 className="
//                   mt-6
//                   text-slate-400
//                   leading-8
//                 "
//               >
//                 Paper submission will be handled through the official
//                 Microsoft Conference Management Toolkit (CMT). Authors
//                 should prepare their manuscript using the IEEE format
//                 before submission.
//               </p>


//               {/* Buttons */}
//               <div className="mt-10 flex flex-wrap gap-5">

//                 <button
//                   onClick={() =>
//                     window.open(
//                       "",
//                       "_blank"
//                     )
//                   }
//                   className="
//                     inline-flex
//                     items-center
//                     gap-3
//                     rounded-full
//                     bg-cyan-400
//                     px-8
//                     py-4
//                     font-bold
//                     text-slate-900
//                     hover:scale-105
//                     transition-all
//                   "
//                 >
//                   Open CMT

//                   <ExternalLink size={18} />
//                 </button>


//                 <button
//                   onClick={() => setShowCmtPopup(false)}
//                   className="
//                     rounded-full
//                     border
//                     border-cyan-400/30
//                     px-8
//                     py-4
//                     text-white
//                     hover:bg-cyan-500/10
//                     transition-all
//                   "
//                 >
//                   Close
//                 </button>

//               </div>

//             </motion.div>

//           </motion.div>

//         )}

//       </AnimatePresence>


//       {/* =========================================================
//           FOOTER
//       ========================================================= */}

//       <Footer />
//     </>
//   );
// }


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  FileText,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import Footer from "../components/Footer";

export default function CallForPapers() {
  const [showCmtPopup, setShowCmtPopup] = useState(false);

  // =========================================================
  // RESEARCH TRACKS
  // =========================================================

  const topics = [
    {
      title: "Track 1: Foundation of Cyber Security",
      subtopics: [
        "Cybersecurity Awareness",
        "Cybersecurity Governance, Risk and Compliance",
        "Digital Forensics and Cybercrime Investigation",
        "Cyberattack Reconstruction and Attribution",
        "Hardware Security and Reliability",
        "IoT-based Data Security",
        "Security in IoT, Cloud and Edge Devices",
        "Database Security and Privacy",
        "Malware Analysis",
        "Federated Learning Security and Privacy-Preserving Machine Learning",
        "Digital Twin Security",
        "Cyber Resilience and Cyber Recovery",
        "5G/6G Network Security",
        "Cyber Threat Intelligence",
        "Intrusion Detection and Prevention",
        "Vulnerability Assessment and Prevention",
        "Zero Trust Architecture",
        "Cyber-Physical Systems and Security",
        "Blockchain and Distributed Ledger Security",
        "Security Aspects of Software Development",
        "AI-Driven Cyber Defence",
      ],
    },

    {
      title: "Track 2: Foundation of Cryptography",
      subtopics: [
        "Cryptography and Cryptanalysis",
        "Information Theory and Cryptography",
        "Applied Cryptography and Network Security",
        "AI/ML for Cryptography",
        "Lightweight Cryptography for IoT and Embedded Systems",
        "Applied Cryptography and Its Implementation",
        "Quantum Cryptography",
        "Quantum Machine Learning",
        "Quantum Computing",
        "Post-Quantum Cryptography",
      ],
    },

    {
      title: "Track 3: Foundation of Responsible AI",
      subtopics: [
        "AI Ethics",
        "AI Fairness",
        "AI Bias Mitigation",
        "Explainable AI",
        "Interpretable AI",
        "Transparency in AI Audit",
        "Privacy-Preserving AI Models",
        "Secure AI Systems",
        "Responsible Generative AI",
        "AI for Ransomware Analysis",
        "AI Security in Healthcare, Education, Infrastructure and Finance",
        "Security in Sustainable AI",
        "Societal Impact of Responsible AI Development",
        "Security and Privacy for AI Systems",
        "AI/ML for Threat Detection and Prevention",
      ],
    },
  ];

  // =========================================================
  // PAPER SUBMISSION WORKFLOW
  // =========================================================

  const submissionSteps = [
    {
      number: "01",
      title: "Prepare Manuscript",
      desc:
        "Write your paper using the official IEEE Conference Template.",
    },

    {
      number: "02",
      title: "Check Originality",
      desc:
        "Ensure your submission is original and follows ethical publishing practices.",
    },

    {
      number: "03",
      title: "Create CMT Account",
      desc:
        "Login or register on the Microsoft CMT submission portal.",
    },

    {
      number: "04",
      title: "Upload Paper",
      desc:
        "Submit the PDF version together with complete author information.",
    },

    {
      number: "05",
      title: "Peer Review",
      desc:
        "Your manuscript will undergo a rigorous technical review process.",
    },

    {
      number: "06",
      title: "Camera Ready",
      desc:
        "Accepted papers must submit the final manuscript and complete registration.",
    },
  ];

  // =========================================================
  // IEEE TEMPLATE LINKS
  // =========================================================

  const templateLinks = [
    {
      title: "US Letter (DOCX)",
      url:
        "https://ieee-org.widen.net/content/u1tqtjruak/original/conference-template-letter.docx",
    },

    {
      title: "A4 (DOCX)",
      url:
        "https://ieee-org.widen.net/content/ge5anzdecd/original/conference-template-a4.docx",
    },

    {
      title: "LaTeX Template (ZIP)",
      url:
        "https://ieee-org.widen.net/content/ssylclqfn/original/conference-latex-template.zip",
    },

    {
      title: "LaTeX Bibliography Files (ZIP)",
      url:
        "https://ieee-org.widen.net/content/t4f4hdfmwu/original/IEEEtranBST2.zip",
    },

    {
      title: "IEEE Official Template on Overleaf",
      url:
        "https://www.overleaf.com/gallery/tagged/ieee-official",
    },
  ];

  return (
    <>
      {/* =========================================================
          HERO + TOPICS OF INTEREST
      ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#020817]
          min-h-screen
          pt-6
          pb-28
        "
      >

        {/* =====================================================
            BACKGROUND GRID
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.08]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />


        {/* =====================================================
            BACKGROUND GLOWS
        ===================================================== */}

        <div
          className="
            absolute
            -top-40
            left-0
            w-[500px]
            h-[500px]
            bg-cyan-500/20
            blur-[160px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            top-1/3
            right-[-150px]
            w-[500px]
            h-[500px]
            bg-blue-600/20
            blur-[170px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            bottom-[-150px]
            left-1/3
            w-[450px]
            h-[450px]
            bg-cyan-500/10
            blur-[160px]
            rounded-full
          "
        />


        {/* =====================================================
            MAIN CONTAINER
        ===================================================== */}

        <div className="relative max-w-7xl mx-auto px-6">


          {/* ===================================================
              OLD HERO HEADING
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
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

              Call For Papers
            </span>


            {/* Heading */}

            <h1
              className="
                mt-8

                text-5xl
                md:text-7xl

                font-black

                leading-[1.15]

                text-white
              "
            >
              Call For

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
                Papers
              </span>
            </h1>

          </motion.div>


          {/* ===================================================
              TOPICS OF INTEREST
              INSIDE THE OLD HERO SECTION
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
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
            className="mt-1"
          >

            {/* Section Heading */}

            <div className="text-center mb-14">
              <p
                className="
                  mt-6

                  max-w-3xl
                  mx-auto

                  text-slate-400

                  text-base
                  md:text-lg

                  leading-8
                "
              >
                Authors are invited to submit original research papers
                related to, but not limited to, the following conference
                themes.
              </p>

            </div>


            {/* =================================================
                TRACK CARDS
            ================================================= */}

            <div
              className="
                grid
                md:grid-cols-2
                xl:grid-cols-3

                gap-8
              "
            >

              {topics.map(
                (topic, index) => (

                  <motion.div
                    key={index}

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
                      duration: 0.5,
                      delay: index * 0.05,
                    }}

                    className="
                      group

                      relative
                      overflow-hidden

                      rounded-[28px]

                      border
                      border-cyan-400/20

                      bg-white/5

                      backdrop-blur-xl

                      p-8

                      transition-all
                      duration-500

                      hover:border-cyan-400/50
                      hover:-translate-y-2

                      hover:shadow-[0_0_40px_rgba(34,211,238,.12)]
                    "
                  >

                    {/* Hover Glow */}

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

                        pointer-events-none
                      "
                    />


                    <div className="relative z-10">


                      {/* Track Number */}

                      <div
                        className="
                          w-14
                          h-14

                          rounded-2xl

                          bg-cyan-500/10

                          border
                          border-cyan-400/20

                          flex
                          items-center
                          justify-center

                          mb-6
                        "
                      >
                        <span
                          className="
                            text-cyan-300

                            text-xl

                            font-bold
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>


                      {/* Track Title */}

                      <h3
                        className="
                          text-xl

                          font-bold

                          text-white

                          leading-8

                          group-hover:text-cyan-300

                          transition-colors
                          duration-300
                        "
                      >
                        {topic.title}
                      </h3>


                      {/* Track Subtopics */}

                      <div className="mt-6 space-y-3">

                        {topic.subtopics.map(
                          (subtopic, subIndex) => (

                            <div
                              key={subIndex}

                              className="
                                flex
                                items-start

                                gap-3

                                text-sm

                                text-slate-400

                                leading-6
                              "
                            >

                              <span
                                className="
                                  mt-2

                                  w-1.5
                                  h-1.5

                                  flex-shrink-0

                                  rounded-full

                                  bg-cyan-400
                                "
                              />

                              <span>
                                {subtopic}
                              </span>

                            </div>

                          )
                        )}

                      </div>

                    </div>

                  </motion.div>

                )
              )}

            </div>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          PAPER SUBMISSION WORKFLOW
      ========================================================= */}

      <section
        className="
          relative

          py-28

          bg-gradient-to-b
          from-[#020817]
          via-[#071326]
          to-[#020817]

          overflow-hidden
        "
      >

        {/* Background Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />


        <div className="relative max-w-7xl mx-auto px-6">


          {/* ===================================================
              SECTION HEADING
          =================================================== */}

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

            className="
              text-center
              mb-20
            "
          >

            <span
              className="
                inline-flex

                px-5
                py-2

                rounded-full

                bg-cyan-500/10

                border
                border-cyan-400/30

                text-cyan-300

                uppercase

                tracking-[3px]

                text-sm
              "
            >
              Author Guide
            </span>


            <h2
              className="
                mt-8

                text-5xl
                md:text-6xl

                font-black

                text-white
              "
            >
              Paper Submission

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
                Workflow
              </span>
            </h2>


            <p
              className="
                mt-8

                max-w-3xl
                mx-auto

                text-lg

                text-slate-400

                leading-8
              "
            >
              Follow these simple steps to submit your manuscript to
              IEEE CYCRAI 2027.
            </p>

          </motion.div>


          {/* ===================================================
              SUBMISSION STEPS
          =================================================== */}

          <div
            className="
              grid

              md:grid-cols-2
              xl:grid-cols-3

              gap-8
            "
          >

            {submissionSteps.map(
              (step, index) => (

                <motion.div
                  key={step.number}

                  initial={{
                    opacity: 0,
                    y: 40,
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
                    delay: index * 0.08,
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

                  {/* Large Number */}

                  <div
                    className="
                      absolute

                      top-8
                      right-8

                      text-6xl

                      font-black

                      text-cyan-500/10
                    "
                  >
                    {step.number}
                  </div>


                  <div className="relative z-10">

                    <div
                      className="
                        w-14
                        h-14

                        rounded-2xl

                        bg-cyan-500/10

                        flex
                        items-center
                        justify-center

                        border
                        border-cyan-400/20

                        mb-6
                      "
                    >
                      <FileText
                        size={26}
                        className="text-cyan-300"
                      />
                    </div>


                    <h3
                      className="
                        text-2xl

                        font-bold

                        text-white
                      "
                    >
                      {step.title}
                    </h3>


                    <p
                      className="
                        mt-5

                        text-slate-400

                        leading-8
                      "
                    >
                      {step.desc}
                    </p>

                  </div>

                </motion.div>

              )
            )}

          </div>


          {/* ===================================================
              IEEE TEMPLATE + CMT
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
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

            className="
              mt-24

              grid
              lg:grid-cols-2

              gap-10
            "
          >


            {/* =================================================
                IEEE CONFERENCE TEMPLATE
            ================================================= */}

            <div
              className="
                group

                relative
                overflow-hidden

                rounded-[35px]

                border
                border-cyan-400/20

                bg-white/5

                backdrop-blur-2xl

                p-10

                transition-all
                duration-500

                hover:border-cyan-400/40

                hover:-translate-y-2

                hover:shadow-[0_0_45px_rgba(34,211,238,.14)]
              "
            >

              {/* Glow */}

              <div
                className="
                  absolute
                  top-0
                  right-0

                  w-60
                  h-60

                  bg-cyan-500/10

                  blur-[120px]

                  rounded-full

                  pointer-events-none
                "
              />


              <div className="relative z-10">


                {/* Icon */}

                <div
                  className="
                    w-16
                    h-16

                    rounded-2xl

                    bg-cyan-500/10

                    border
                    border-cyan-400/20

                    flex
                    items-center
                    justify-center
                  "
                >
                  <FileText
                    size={30}
                    className="text-cyan-300"
                  />
                </div>


                {/* Title */}

                <h3
                  className="
                    mt-8

                    text-3xl

                    font-bold

                    text-white
                  "
                >
                  IEEE Conference Template
                </h3>


                {/* Description */}

                <p
                  className="
                    mt-6

                    text-slate-400

                    leading-8
                  "
                >
                  Authors should prepare manuscripts using the official
                  IEEE Conference Template. Papers must comply with IEEE
                  formatting, plagiarism and publication guidelines before
                  submission.
                </p>


                {/* =================================================
                    TEMPLATE LINKS
                ================================================= */}

                <div className="mt-10 space-y-4">

                  {templateLinks.map(
                    (link) => (

                      <a
                        key={link.title}

                        href={link.url}

                        target="_blank"

                        rel="noopener noreferrer"

                        className="
                          group/link

                          flex
                          items-center
                          justify-between

                          gap-4

                          rounded-2xl

                          border
                          border-cyan-400/20

                          bg-cyan-500/5

                          px-5
                          py-4

                          text-cyan-300

                          font-semibold

                          transition-all
                          duration-300

                          hover:bg-cyan-400

                          hover:text-slate-900

                          hover:border-cyan-400

                          hover:shadow-[0_0_25px_rgba(34,211,238,.25)]
                        "
                      >

                        <span>
                          {link.title}
                        </span>

                        <ExternalLink
                          size={18}

                          className="
                            flex-shrink-0

                            transition-transform
                            duration-300

                            group-hover/link:translate-x-1
                          "
                        />

                      </a>

                    )
                  )}

                </div>

              </div>

            </div>


            {/* =================================================
                MICROSOFT CMT
            ================================================= */}

            <div
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

                p-10

                transition-all
                duration-500

                hover:border-cyan-400/40

                hover:-translate-y-2

                hover:shadow-[0_0_45px_rgba(34,211,238,.14)]
              "
            >

              {/* Glow */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0

                  w-72
                  h-72

                  bg-blue-500/10

                  blur-[120px]

                  rounded-full

                  pointer-events-none
                "
              />


              <div className="relative z-10">


                {/* Icon */}

                <div
                  className="
                    w-16
                    h-16

                    rounded-2xl

                    bg-white/10

                    border
                    border-cyan-400/20

                    flex
                    items-center
                    justify-center
                  "
                >
                  <ArrowRight
                    size={30}
                    className="text-cyan-300"
                  />
                </div>


                {/* Title */}

                <h3
                  className="
                    mt-8

                    text-3xl

                    font-bold

                    text-white
                  "
                >
                  Microsoft CMT Submission
                </h3>


                {/* Description */}

                <p
                  className="
                    mt-6

                    text-slate-300

                    leading-8
                  "
                >
                  Submit your manuscript through the Microsoft CMT
                  platform. Complete all metadata carefully before final
                  submission. Authors can later update the camera-ready
                  version after acceptance.
                </p>


                {/* CMT Button */}

                <button
                  onClick={() =>
                    setShowCmtPopup(true)
                  }

                  className="
                    mt-10

                    inline-flex
                    items-center
                    gap-3

                    rounded-full

                    border
                    border-cyan-400

                    px-8
                    py-4

                    font-bold

                    text-cyan-300

                    transition-all
                    duration-300

                    hover:bg-cyan-400

                    hover:text-slate-900

                    hover:shadow-[0_0_30px_rgba(34,211,238,.25)]
                  "
                >
                  Open CMT Portal

                  <ArrowRight
                    size={20}
                  />

                </button>

              </div>

            </div>

          </motion.div>


          {/* ===================================================
              PUBLICATION POLICY
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}

            whileInView={{
              opacity: 1,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              delay: 0.3,
            }}

            className="
              mt-20

              rounded-[35px]

              border
              border-cyan-400/20

              bg-cyan-500/5

              backdrop-blur-xl

              p-10
            "
          >

            <div
              className="
                flex
                flex-col
                lg:flex-row

                gap-8

                items-center
              "
            >

              <div className="text-6xl">
                📚
              </div>


              <div>

                <h3
                  className="
                    text-3xl

                    font-bold

                    text-white
                  "
                >
                  Publication Policy
                </h3>


                <p
                  className="
                    mt-5

                    text-slate-400

                    leading-8
                  "
                >
                  Accepted papers that are registered, presented and satisfy
                  all IEEE conference publication policies will be submitted
                  for inclusion in the IEEE Xplore Digital Library subject to
                  IEEE quality checks.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          CMT POPUP
      ========================================================= */}

      <AnimatePresence>

        {showCmtPopup && (

          <motion.div
            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            className="
              fixed
              inset-0

              z-[999]

              flex
              items-center
              justify-center

              bg-black/70

              backdrop-blur-md

              p-6
            "
          >

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}

              animate={{
                scale: 1,
                opacity: 1,
              }}

              exit={{
                scale: 0.9,
                opacity: 0,
              }}

              transition={{
                duration: 0.25,
              }}

              className="
                relative

                w-full
                max-w-xl

                rounded-[35px]

                border
                border-cyan-400/20

                bg-[#071326]

                p-10
              "
            >

              {/* Close */}

              <button
                onClick={() =>
                  setShowCmtPopup(false)
                }

                className="
                  absolute

                  top-6
                  right-6

                  text-slate-400

                  hover:text-white

                  text-2xl

                  transition-colors
                "
              >
                ×
              </button>


              {/* Icon */}

              <div
                className="
                  w-16
                  h-16

                  rounded-2xl

                  bg-cyan-500/10

                  border
                  border-cyan-400/20

                  flex
                  items-center
                  justify-center

                  mb-8
                "
              >
                <ArrowRight
                  size={30}
                  className="text-cyan-300"
                />
              </div>


              {/* Heading */}

              <h2
                className="
                  text-3xl

                  font-bold

                  text-white
                "
              >
                Microsoft CMT Portal
              </h2>


              {/* Description */}

              <p
                className="
                  mt-6

                  text-slate-400

                  leading-8
                "
              >
                Paper submission will be handled through the official
                Microsoft Conference Management Toolkit (CMT). Authors
                should prepare their manuscript using the IEEE format
                before submission.
              </p>


              {/* Buttons */}

              <div
                className="
                  mt-10

                  flex
                  flex-wrap

                  gap-5
                "
              >

                {/* CMT Link */}

                <button
                  onClick={() =>
                    window.open(
                      "",
                      "_blank"
                    )
                  }

                  className="
                    inline-flex
                    items-center
                    gap-3

                    rounded-full

                    bg-cyan-400

                    px-8
                    py-4

                    font-bold

                    text-slate-900

                    hover:scale-105

                    transition-all
                  "
                >
                  Open CMT

                  <ExternalLink
                    size={18}
                  />

                </button>


                {/* Close */}

                <button
                  onClick={() =>
                    setShowCmtPopup(false)
                  }

                  className="
                    rounded-full

                    border
                    border-cyan-400/30

                    px-8
                    py-4

                    text-white

                    hover:bg-cyan-500/10

                    transition-all
                  "
                >
                  Close
                </button>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />
    </>
  );
}