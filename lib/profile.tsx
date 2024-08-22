import { StaticImageData } from "next/image";

import image1 from "@/app/_assets/team/1.png";
import image2 from "@/app/_assets/team/2.png";
import image3 from "@/app/_assets/team/3.png";
import image4 from "@/app/_assets/team/4.png";
import image5 from "@/app/_assets/team/5.png";

interface template {
  id: number;
  photo: StaticImageData;
  name: string;
  position: string;
  mobile: number;
  mail: string;
  content: string[];
  qualification: string[];
  education: string[];
  experience: string[];
  background: string[];
}

export function profile() {
  const profile: template[] = [
    {
      id: 1,
      photo: image1,
      name: "PUHAZH GANDHI P",
      position: "MANAGING PARTNER",
      mobile: 9840363897,
      mail: "puhazh@crozzlegal.com",
      content: [
        "Puhazh is a lawyer and is the General Managing Partner the firmPuhazh’s practice area includes Infrastructure, Banking and Corporate, International Trade (WTO), Information Technology(IT/ITES), Alternate Dispute resolution, mines & minerals and International Investments. He has led numerous transactions in Singapore, Brunei, Srilanka, Philippines, Indonesia, Africa, USA, Canada, UK etc.",
        "Puhazh is a consultant to a number of reputed law firms in the Asian region including LAW ASIA, a leading international law firm headquartered in Singapore.",
        "A record holder in his LL.B (First rank holder) program bagging nine gold medals from the University of Kerala. Did his M.Phil in International Law from India’s top ranking University, Jawaharlal Nehru University, New Delhi. A Deans (Merit) Scholar at New York University School of Law for his LLM, where he was also awarded the prestigious International Law and Human Rights fellowship. Puhazh was invited by the Hague Academy of International Law at the International Court of Justice for the prestigious Public International Law Lecture Series in 2003.",
        "Puhazh is also a well known arguing counsel. Even during his college days, he represented India in the XIth Manfred Lacs International moot court competition held at Sydney, Australia in 2000 Puhazh has worked as a lawyer at the Appellate body Secretariat of the World Trade Organization (WTO) at Geneva. He was a member of the Team, which assisted the WTO Appellate body in deciding the famous dispute of U.S v. Canada – the Soft wood Lumber VI, and U.S v. E.C – the Zeroing case. He also worked as the Assistant Coordinator (Academics) for the Re- gional Trade Policy Course conducted by the World Trade Organization at the National Uni- versity of Singapore in which Senior/Mid level civil servants from thirty different countries were imparted training in Trade Law.",
        "He was a Visiting Expert Advisor for Judge His Excellency Mr Rene Blattamann at the International Criminal Court (ICC) at The Hague, to advise him in the trial of Mr Thomas Lubanga Dyilo, a Congolese war lord from the Democratic Republic of Congo. It is a rare honor for any lawyer and only senior judges, prosecutors, senior attorneys from leading law firms, professors of international law were invited by ICC for such a position. ",
        "Puhazh is ranked as a leading lawyer in India for ‘Contracts and Information Technology’ by GLOBAL LAW EXPERTS, a reputed rating agency based out of London.",
        "Puhazh represents a number of government organizations as well. He was earlier the National Legal Consultant for the National Assessment and Accreditation Council (NAAC), Ministry of Human Resource Development, Legal Counsel for Software Technology Parks of India (STPI), Senior Legal Counsel for the Airports Authority of India.",
        "He is also the Executive Coordinator of the leading think tank Dravidian Professionals Forum (DPF) chaired by Dr PTR Thiagarajan, Hon’ble Minister for Information Technology, Government of Tamilnadu.",
        "Recently Tamilnadu Chief Minister Thiru MK Stalin created an exclusive organization to take care of the needs of the overseas tamils called ‘Non- Resident Tamils Welfare Board (NRTWB)’ and appointed Puhazh as the resident member from Tamilnadu. The Board will assist in the welfare of Tamils living in various parts of the world and will connect them with their motherland- Tamilnadu.",
      ],
      qualification: [
        "Admitted to the Indian bar in 2000.",
        "Qualified Solicitor (U.K)",
        "Proficient in English, Tamil, Malayalam and Hindi.",
      ],
      education: [
        "LL.M., New York University School of Law (Deans Scholar, International Law and Human Rights Fellow)",
        "PGCITL, European University Institute and ILO, Turin, Italy",
        "LL.B., University of Kerala (Gold medalist),India",
        "B.Sc Chemistry (Ist class honours), M.S University, India",
      ],
      experience: [
        "Sept 2000 – June 2003 – Junior Advocate - SVS Partners, New Delhi",
        "Aug 2003 – Nov 2006 – Associate – PARAS KUHAD & ASSOCIATES (Law Firm), New Delhi",
        "(Mr Paras Kuhad is a Senior Advocate and currently the Additional Solicitor General of India) ",
        "Nov 2006 – June 2010 – Senior Associate – KOCHHAR & CO (Law Firm), Chennai.",
        "July 2010 – Present – Partner – SPAB & CO, Advocates & Legal Consultants (Law Firm- An associate of LAW ASIA, International Lawyers, Singapore),Chennai",
      ],
      background: [
        "A record holder in LL.B (First rank holder) program secured nine gold medals from the University of Kerala.",
        "Represented India in the XIth Manfred Lachs International moot court court competition at Sydney, Australia in 2002.",
        "Attended the prestigious Hague Academy Lecture Series (Public International Law) in 2003 organised by International Court of Justice, The Netherlands on a scholarship from The Netherlands government.",
        "Worked as a Legal trainee lawyer the Appellate body Secretariat of the World Trade Organization at Geneva. Member of the Team, which assisted the WTO Appellate body in deciding the famous dispute of U.S v. Canada, the Soft wood Lumber VI, and U.S v. E.C, the Zeroing case.",
        "Worked as an Assistant Coordinator (Academics) for the Regional Trade Policy Course conducted by the World Trade Organisation at the National University of Singapore in which Senior/Mid level civil servants from thirty different countries were imparted training in Trade Law.",
        "Visiting Expert for Judge Mr Rene Blattamann in March 2010, at the International Criminal Court (ICC).",
        "Rated as a Leading individual for Contract Law by Global Law Expert, a rating agency based out of UK.",
      ],
    },
    {
      id: 2,
      photo: image2,
      name: "SHOBHAN M PADMANABHAN",
      position: "PARTNER",
      mobile: 9003232007,
      mail: "connect@crozzlegal.com",
      content: [],
      qualification: [
        "Admitted to the Indian bar in 2001. ",
        "Proficient in English, Tamil, Malayalam and Hindi.",
      ],
      education: [
        "Master in [International Business] Law & Business [Management] (MLB) jointly by Bucerius Law School/WHUOtto Beisheim School of Management, Germany, 2007",
        "Bachelor of Laws (LL.B), Kerala University, Thiruvananthapuram, India, 2001",
        "Bachelor of Science with Chemistry as Main Subject, M.S.University, Tamil Nadu, India, 1998",
        "Diploma in Business Management, NACOLAM, Chennai, 1998.",
      ],
      experience: [],
      background: [
        "Shobhan M Padmanabhan holds distinction of being in the Bar for more than 12 years and presently as Partner with expertise in handling Legal functions with divergent requirements.",
        "Shobhan has solid domain knowledge of provisions of various Corporate, Commercial and Civil Laws, Contract management & risk analysis. He has been actively involved in planning legal strategies including merger and acquisition of IT/ITES companies, conducting due diligence, drafting a wide range of legal documents/ commercial documents, and addressing all aspects of litigation related matters and ensuring compliance with stipulated rules of the area.",
        "He has advised clients in the areas of Due Diligence Reviews, Business Restructuring including Merger & Acquisition etc. He has also represented several clients before various forums and regulatory bodies under Companies Act, Foreign Trade Policy, Special Economic Zone, Software Technology Parks Scheme, Transfer of Property Act, Consumer Protection Act, Competition Act etc.,",
        "Shobhan was listed by Global Law Experts as the leading IT lawyer from India. He is also member of Supreme Court of India Bar Association and Madras High Court Advocates Association.",
      ],
    },
    {
      id: 3,
      photo: image3,
      name: "MALAR SIVAKUMAR",
      position: "PARTNER(IPR)",
      mobile: 9003232007,
      mail: "connect@crozzlegal.com",
      content: [],
      education: [
        "LL.M., School of Legal Studies, Cochin University of Science and Technology, Cochin (Intellectual property Rights and Environmental law), 2004",
        "LL.B., University of Kerala (Gold medalist), India, 2002",
      ],
      qualification: [],
      experience: [],
      background: [
        "Malar is a Partner in the firm. Malar’s main area of work includes protection of Intellectual Property Rights both in India and worldwide.  Malar has earlier worked in leading intellectual property law firms in Chennai and Delhi. She has also worked as an Examiner of Trade Marks at Trademarks Registry, Chennai, Government of India. Malar is a gold medallist (First rank holder) in her LL.B programme bagging several gold medals from the University of Kerala. Did her LLM ( Master Of Laws) specializing in Intellectual Property Rights Law and Environmental Laws from Cochin University Of Science and Technology ( CUSAT), Cochin, Kerala, India.",
      ],
    },
    {
      id: 4,
      photo: image4,
      name: "TANYA JECINTHA M",
      position: "Associate",
      mobile: 9003232007,
      mail: "connect@crozzlegal.com",
      content: [
        "Specializing in a range of legal areas including civil, criminal, Arbitration, labour matters and land acquisition matters.  Represented clients in civil and criminal cases before the High Court. Drafted and filed petitions, affidavits, and other legal documents.  Conducted legal research and analysis to support case strategies.   Assisted senior advocates in preparation for hearings and trials.  Developed a solid understanding of procedural and substantive law through hands-on experience. Expertise in Legal Research and Case Analysis. Proficient in Drafting and Filing Legal Documents.",
      ],
      qualification: [],
      education: [],
      experience: [],
      background: [],
    },
    {
      id: 5,
      photo: image5,
      name: "BHAVANI DEVI AK",
      position: "Associate",
      mobile: 9003232007,
      mail: "connect@crozzlegal.com",
      content: [
        "A highly skilled and passionate advocate experience in civil law, criminal law, family law, consumer, DRT. Known for strong advocacy skills, a deep commitment to justice, and a track record of successful case outcomes. Adept at providing legal representation, offering strategic counsel, and advocating for clients’ rights in complex legal matters. Draft and file a wide range of legal documents, such as petitions, affidavits, and case briefs. Conduct detailed legal research and case analysis to support case strategies. Provide expert advice and consultation to clients, ensuring their interests are effectively represented. Participate in courtroom proceedings, including hearings, trials, and negotiations, demonstrating strong advocacy skills.",
      ],
      qualification: [],
      education: [],
      experience: [],
      background: [],
    },
  ];

  return profile;
}
