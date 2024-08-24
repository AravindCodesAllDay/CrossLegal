import { StaticImageData } from "next/image";

import img1 from "@/public/assets/whatWeDo/1.svg";
import img2 from "@/public/assets/whatWeDo/2.svg";
import img3 from "@/public/assets/whatWeDo/3.svg";
import img4 from "@/public/assets/whatWeDo/4.svg";
import img5 from "@/public/assets/whatWeDo/5.svg";
import img6 from "@/public/assets/whatWeDo/6.svg";
import img7 from "@/public/assets/whatWeDo/7.svg";
import img8 from "@/public/assets/whatWeDo/8.svg";
import img9 from "@/public/assets/whatWeDo/9.svg";

import photo1 from "@/public/assets/whatWeDo/1.jpg";
import photo2 from "@/public/assets/whatWeDo/2.jpg";
import photo3 from "@/public/assets/whatWeDo/3.jpg";
import photo4 from "@/public/assets/whatWeDo/4.jpg";
import photo5 from "@/public/assets/whatWeDo/5.jpg";
import photo6 from "@/public/assets/whatWeDo/6.jpg";
import photo7 from "@/public/assets/whatWeDo/7.jpg";
import photo8 from "@/public/assets/whatWeDo/8.jpg";
import photo9 from "@/public/assets/whatWeDo/9.jpg";

interface practice {
  id: number;
  photo: StaticImageData;
  figure: StaticImageData;
  header: string;
  text: string[];
  subHeader: string;
  subTopics: { header: string; passage: string }[];
}

export function practices() {
  const practices: practice[] = [
    {
      id: 1,
      photo: img1,
      figure: photo1,
      header: "Land Acquistion",
      text: [
        "Acquiring land in India can be a complex and challenging process particularly for NRI's. At Crozz Legal, our team of experienced lawyers specializes in providing comprehensive legal assistance and guidance for land acquisition projects across India.",
        "With a deep understanding of Indian land acquisition laws, regulations, and procedures, our Experienced  lawyers are well-equipped to navigate the intricacies of the land acquisition process on behalf of our clients. Whether you're purchasing agricultural land, residential plots, commercial properties, or industrial sites, we have the knowledge and expertise to help you achieve your objectives efficiently and effectively.",
      ],
      subHeader: "",
      subTopics: [
        {
          header: "Comprehensive Legal Support",
          passage:
            "From conducting due diligence and negotiating contracts to obtaining necessary permits and clearances, our team provides comprehensive legal support at every stage of the land acquisition process. We work closely with our clients to identify their specific needs and objectives, tailoring our services to ensure a smooth and successful transaction.",
        },
        {
          header: "Mitigating Risks, Maximizing Opportunities",
          passage:
            "At Crozz Legal, we understand the importance of mitigating risks and maximizing opportunities in land acquisition projects. Whether you're an individual investor, a corporate entity, or a developer, we leverage our legal expertise and industry knowledge to help you make informed decisions and achieve your goals while minimizing potential liabilities.",
        },
        {
          header: "Trusted Advisors, Reliable Partners",
          passage:
            "With a reputation for excellence and a commitment to client satisfaction, our experienced lawyers are trusted advisors and reliable partners for clients around the world. We are dedicated to providing personalized attention, responsive communication, and high-quality legal services that meet the unique needs of each client.",
        },
      ],
    },
    {
      id: 2,
      photo: img2,
      figure: photo2,
      header: "TITLE CLEARANCE",
      text: [
        "Acquiring property in India as a Non-Resident Indian (NRI) can be a rewarding investment opportunity. However, ensuring clear and marketable title is essential to protect your interests and avoid potential legal complications. At Crozz Legal, our team of experienced lawyers specializes in providing comprehensive title clearance services to help you navigate the complexities of property ownership in India with confidence.",
      ],

      subHeader: "",
      subTopics: [
        {
          header: "Title Examination",
          passage:
            "Our Experienced  lawyers conduct thorough title examinations to verify the ownership history and legal status of the property you intend to purchase. We review relevant documents, including deeds, encumbrances, liens, and easements, to identify any potential title defects or irregularities that may affect your ownership rights",
        },
        {
          header: "Resolving Title Issues",
          passage:
            "If title defects or encumbrances are identified during the examination process, our team works diligently to resolve these issues through legal remedies such as title curative actions, quiet title actions, or negotiations with adverse claimants. We leverage our legal expertise and industry knowledge to address title issues efficiently and effectively, ensuring that you can proceed with your property transaction with confidence.",
        },
        {
          header: "Securing Marketable Title",
          passage:
            "Our ultimate goal is to secure clear and marketable title to the property on your behalf. We guide you through the necessary steps to obtain title insurance and other safeguards to protect your investment and provide you with peace of mind. Whether you're purchasing residential real estate, commercial property, agricultural land, or industrial sites, we are committed to helping you achieve your property ownership objectives with confidence and security.",
        },
      ],
    },
    {
      id: 3,
      photo: img3,
      figure: photo3,
      header:
        "FAMILY LAW AND DISPUTE RESOLUTION SERVICES FOR NON-RESIDENT INDIANS (NRIS)",
      text: [
        "Navigating family law matters can be especially challenging for Non-Resident Indians (NRIs) due to the complexities of cross-border relationships and legal jurisdictions. Our firm specializes in providing compassionate and effective legal assistance tailored to the unique needs of NRIs facing family law issues and disputes. ",
        "Whether you're dealing with matters of marriage, divorce, child custody, or inheritance, our team of experienced family law attorneys is dedicated to protecting your rights and interests with sensitivity and expertise.",
      ],

      subHeader: "OUR FAMILY LAW AND DISPUTE RESOLUTION SERVICES",
      subTopics: [
        {
          header: "Divorce and Separation",
          passage:
            "We provide comprehensive legal representation to NRIs seeking divorce or separation, guiding them through the complexities of divorce laws and procedures in their home country and abroad",
        },
        {
          header: "Child Custody and Visitation",
          passage:
            "Our firm advocates for the best interests of NRIs and their children in child custody and visitation disputes, striving to achieve fair and equitable custody arrangements that prioritize the well-being of the child",
        },
        {
          header: "Prenuptial and Postnuptial Agreements",
          passage:
            "We assist NRIs in drafting and negotiating prenuptial and postnuptial agreements to protect their assets, property rights, and financial interests in the event of divorce or separation",
        },
        {
          header: "Domestic Violence Protection",
          passage:
            "Our team provides legal assistance to NRIs experiencing domestic violence or abuse, helping them obtain restraining orders, protective orders, and other forms of legal protection to ensure their safety and well-being",
        },
        {
          header: "Inheritance and Estate Planning",
          passage:
            "We advise NRIs on inheritance laws and estate planning strategies, helping them protect their assets and ensure the smooth transfer of wealth to their beneficiaries across borders and generations",
        },
      ],
    },
    {
      id: 4,
      photo: img4,
      figure: photo4,
      header:
        "SUCCESSION PLANNING AND ESTATE ADMINISTRATION FOR NON-RESIDENT INDIANS (NRIS)",
      text: [
        "Awesome Services Grow Your Business Value There are many variations..",
      ],
      subHeader: "OUR SUCCESSION PLANNING AND ESTATE ADMINISTRATION SERVICES",
      subTopics: [
        {
          header: "Wills and Testamentary Documents",
          passage:
            "We assist NRIs in drafting wills and testamentary documents that accurately reflect their wishes regarding the distribution of their assets and the appointment of executors and trustees",
        },
        {
          header: "Trust Formation and Administration",
          passage:
            "Our firm helps NRIs establish trusts to protect their assets, minimize estate taxes, and provide for the financial needs of their beneficiaries, offering ongoing administration and management services as required",
        },
        {
          header: "Probate and Estate Administration",
          passage:
            "We guide NRIs through the probate process and estate administration proceedings, ensuring compliance with legal requirements and facilitating the efficient distribution of assets to heirs and beneficiaries",
        },
        {
          header: "Asset Protection Strategies",
          passage:
            "Our team advises NRIs on asset protection strategies, including the use of legal structures such as family limited partnerships, asset protection trusts, and offshore entities to shield assets from creditors and legal liabilities",
        },
        {
          header: "Estate Tax Planning",
          passage:
            "We provide strategic guidance on estate tax planning for NRIs, helping them minimize tax liabilities and maximize the value of their estates through tax-efficient strategies and structures",
        },
      ],
    },
    {
      id: 5,
      photo: img5,
      figure: photo5,
      header: "MERGERS AND ACQUISITION",
      text: [
        "Navigating the complexities of mergers and acquisitions (M&A) can be daunting. Our firm specializes in providing comprehensive legal assistance tailored to the engaging in M&A transactions. Whether you're looking to expand your business, acquire new assets, or merge with another entity, our team of experienced lawyers is here to guide you through every step of the process.",
      ],

      subHeader: "subHeader:",
      subTopics: [
        {
          header: "Due Diligence",
          passage:
            "We conduct thorough due diligence to assess the risks and opportunities associated with potential M&A transactions, ensuring that our NRI clients make informed decisions",
        },
        {
          header: "Transaction Structuring",
          passage:
            "Our experts assist in structuring M&A transactions to optimize tax efficiency, mitigate risks, and achieve your strategic objectives",
        },
        {
          header: "Negotiation and Documentation",
          passage:
            "We provide skilled negotiation and drafting of legal documents, including purchase agreements, shareholder agreements, and other necessary contracts to safeguard your interests",
        },
        {
          header: "Regulatory Compliance",
          passage:
            "Our team ensures compliance with applicable laws and regulations governing M&A transactions, both domestically and internationally",
        },
        {
          header: "Post-Merger Integration",
          passage:
            "We offer support during the post-merger integration phase to facilitate a smooth transition and maximize synergies between the merging entities",
        },
      ],
    },
    {
      id: 6,
      photo: img6,
      figure: photo6,
      header: "ARBITRATION SERVICES",
      text: [
        "Arbitration is a preferred method of dispute resolution for efficient and impartial resolution to their legal conflicts. Our firm specializes in providing comprehensive arbitration services tailored to the unique needs involved in cross-border disputes. Whether you're facing commercial disagreements, investment disputes, or family conflicts, our team of experienced lawyers is dedicated to delivering effective solutions through arbitration",
      ],

      subHeader: "OUR ARBITRATION SERVICES",
      subTopics: [
        {
          header: "Arbitration Representation",
          passage:
            "We represent clients in arbitration proceedings, advocating for their interests before arbitral tribunals with expertise and diligence",
        },
        {
          header: "Arbitration Agreement Drafting",
          passage:
            "Our lawyers assist in drafting arbitration agreements that ensure clarity, enforceability, and compliance with international arbitration standards, minimizing the risk of future disputes",
        },
        {
          header: "Arbitration Procedure Guidance",
          passage:
            "We provide guidance on arbitration procedures, including the selection of arbitral institutions, appointment of arbitrators, and formulation of arbitration strategies tailored to our clients' objectives",
        },
        {
          header: "Mediation and Alternative Dispute Resolution (ADR)",
          passage:
            "In cases where arbitration may not be the optimal solution, we explore alternative dispute resolution methods such as mediation, negotiation, and conciliation to achieve amicable resolutions while preserving our clients' interests",
        },
      ],
    },
    {
      id: 7,
      photo: img7,
      figure: photo7,
      header: "CROSS-BORDER TRANSACTION SERVICES",
      text: [
        "Cross-border transactions present unique opportunities and challenges for Non-Resident Indians (NRIs) seeking to engage in international business activities.  Whether you're investing in foreign markets, acquiring overseas assets, or establishing global business ventures, our team of experienced lawyers is dedicated to facilitating smooth and successful transactions across borders",
      ],

      subHeader: "",
      subTopics: [
        {
          header: "Investment Structuring",
          passage:
            "We assist NRIs in structuring cross-border investments to optimize tax efficiency, mitigate risks, and ensure compliance with regulatory requirements in multiple jurisdictions",
        },
        {
          header: "Mergers and Acquisitions (M&A)",
          passage:
            "Our firm provides expert guidance and support to NRIs engaged in cross-border M&A transactions, including due diligence, negotiation, documentation, and post-merger integration",
        },
        {
          header: "Commercial Contracts",
          passage:
            "We draft and review a wide range of commercial contracts for NRIs conducting business across borders, including distribution agreements, licensing agreements, joint venture agreements, and international sales contracts",
        },
        {
          header: "International Trade Compliance",
          passage:
            "Our team advises NRIs on international trade regulations, sanctions, and export controls, ensuring compliance with laws governing cross-border trade activities",
        },
        {
          header: "Foreign Exchange Regulations",
          passage:
            "We provide guidance on foreign exchange regulations and currency controls impacting NRIs engaged in cross-border transactions, facilitating seamless currency conversions and remittances",
        },
      ],
    },
    {
      id: 8,
      photo: img8,
      figure: photo8,
      header:
        "INTELLECTUAL PROPERTY RIGHTS (IPR) SERVICES FOR NON-RESIDENT INDIANS (NRIS)",
      text: [
        "Protecting intellectual property rights (IPR) is essential for innovaters and business men seeking to safeguard their innovative ideas, creative works, and business assets on a global scale. Our firm specializes in providing comprehensive legal assistance tailored to the unique needs protecting, managing, and enforcing their intellectual property rights",
        "Whether you're an inventor, artist, entrepreneur, or corporate entity, our team of experienced lawyers is dedicated to ensuring that your intellectual property is safeguarded and maximized for commercial success",
      ],

      subHeader: "OUR IPR SERVICES",
      subTopics: [
        {
          header: "Trademark Registration",
          passage:
            "We assist individuals/corporates in registering trademarks for their brands, logos, and slogans in multiple jurisdictions, ensuring exclusive rights to use and protect their distinctive marks in the global marketplace",
        },
        {
          header: "Patent Protection",
          passage:
            "Our firm provides expert guidance and support to individuals/corporates in securing patents for their inventions, innovations, and technological advancements, leveraging our knowledge of patent laws and procedures worldwide",
        },
        {
          header: "Copyright Registration",
          passage:
            "We help Authors to register copyrights for their original works of authorship, including literary, artistic, musical, and audiovisual creations, to establish ownership and prevent unauthorized use or reproduction",
        },
        {
          header: "Trade Secret Protection",
          passage:
            "Our team advises individuals/corporates on strategies to protect trade secrets and confidential information, including drafting nondisclosure agreements (NDAs) and implementing security measures to safeguard proprietary business assets",
        },
        {
          header: "IP Licensing and Commercialization",
          passage:
            "We assist in negotiating and drafting license agreements, distribution agreements, and other commercial contracts to monetize their intellectual property assets and maximize revenue streams",
        },
      ],
    },
    {
      id: 9,
      photo: img9,
      figure: photo9,
      header: "Mines and Minerals",
      text: [
        "•	The firm have considerable expertise in mining laws both in India and abroad",
        "•	The Partner Puhazh Gandhi has led numerous transactions and litigations on behalf of mining projects.",
        "•	Companies involved in mining minor minerals like rough stone, M sand and jelly and also major minerals like garnet ,zircan, illuminate titanium dioxide",
        "•	The firm has represented various companies in their corporate transactions in countries like India, Sri Lanka, Australia, Canada, Dubai, Fujairah and Oman.",
      ],
      subHeader: "",
      subTopics: [],
    },
  ];
  return practices;
}
