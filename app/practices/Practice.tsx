import React from "react";
import Image from "next/image";

import img1 from "@/app/_assets/whatWeDo/1.png";
import img2 from "@/app/_assets/whatWeDo/2.png";
import img3 from "@/app/_assets/whatWeDo/3.png";
import img4 from "@/app/_assets/whatWeDo/4.png";
import img5 from "@/app/_assets/whatWeDo/5.png";

import photo1 from "@/app/_assets/whatWeDo/1.jpg";
import photo2 from "@/app/_assets/whatWeDo/2.jpg";
import photo3 from "@/app/_assets/whatWeDo/3.jpg";
import photo4 from "@/app/_assets/whatWeDo/4.jpg";
import photo5 from "@/app/_assets/whatWeDo/5.jpg";

export default function Practice() {
  const practices = [
    {
      id: 1,
      photo: img1,
      figure: photo1,
      header: "Land Acquistion",
      text: "Acquiring land in India as a Non-Resident Indian (NRI) can be a complex and challenging process. At “Company Name”, our team of experienced NRI lawyers specializes in providing comprehensive legal assistance and guidance for land acquisition projects across India.",
      text2:
        "With a deep understanding of Indian land acquisition laws, regulations, and procedures, our NRI lawyers are well-equipped to navigate the intricacies of the land acquisition process on behalf of our clients. Whether you're purchasing agricultural land, residential plots, commercial properties, or industrial sites, we have the knowledge and expertise to help you achieve your objectives efficiently and effectively.",
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
            "At “Company Name”, we understand the importance of mitigating risks and maximizing opportunities in land acquisition projects. Whether you're an individual investor, a corporate entity, or a developer, we leverage our legal expertise and industry knowledge to help you make informed decisions and achieve your goals while minimizing potential liabilities.",
        },
        ,
        {
          header: "Trusted Advisors, Reliable Partners",
          passage:
            "With a reputation for excellence and a commitment to client satisfaction, our NRI lawyers are trusted advisors and reliable partners for clients around the world. We are dedicated to providing personalized attention, responsive communication, and high-quality legal services that meet the unique needs of each client.",
        },
      ],
    },
    {
      id: 2,
      photo: img5,
      figure: photo3,
      header: "TITLE CLEARANCE",
      text: "Acquiring property in India as a Non-Resident Indian (NRI) can be a rewarding investment opportunity. However, ensuring clear and marketable title is essential to protect your interests and avoid potential legal complications. At “Company Name”, our team of experienced NRI lawyers specializes in providing comprehensive title clearance services to help you navigate the complexities of property ownership in India with confidence.",
      text2: "",
      subHeader: "",
      subTopics: [
        {
          header: "Title Examination",
          passage:
            "Our NRI lawyers conduct thorough title examinations to verify the ownership history and legal status of the property you intend to purchase. We review relevant documents, including deeds, encumbrances, liens, and easements, to identify any potential title defects or irregularities that may affect your ownership rights",
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
      photo: img2,
      figure: photo2,
      header:
        "FAMILY LAW AND DISPUTE RESOLUTION SERVICES FOR NON-RESIDENT INDIANS (NRIS)",
      text: "Navigating family law matters can be especially challenging for Non-Resident Indians (NRIs) due to the complexities of cross-border relationships and legal jurisdictions. Our firm specializes in providing compassionate and effective legal assistance tailored to the unique needs of NRIs facing family law issues and disputes. ",
      text2:
        "Whether you're dealing with matters of marriage, divorce, child custody, or inheritance, our team of experienced family law attorneys is dedicated to protecting your rights and interests with sensitivity and expertise.",
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
      photo: img2,
      figure: photo4,
      header:
        "SUCCESSION PLANNING AND ESTATE ADMINISTRATION FOR NON-RESIDENT INDIANS (NRIS)",
      text: "Awesome Services Grow Your Business Value There are many variations..",
      text2: "",
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
      text: "As a Non-Resident Indian, navigating the complexities of mergers and acquisitions (M&A) can be daunting. Our firm specializes in providing comprehensive legal assistance tailored to the unique needs of NRIs engaging in M&A transactions. Whether you're looking to expand your business, acquire new assets, or merge with another entity, our team of experienced lawyers is here to guide you through every step of the process.",
      text2: "",
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
      photo: img2,
      figure: photo2,
      header: "ARBITRATION SERVICES FOR NON-RESIDENT INDIANS (NRIS)",
      text: "Arbitration is a preferred method of dispute resolution for Non-Resident Indians (NRIs) seeking efficient and impartial resolution to their legal conflicts. Our firm specializes in providing comprehensive arbitration services tailored to the unique needs of NRIs involved in cross-border disputes. Whether you're facing commercial disagreements, investment disputes, or family conflicts, our team of experienced lawyers is dedicated to delivering effective solutions through arbitration",
      text2: "",
      subHeader: "OUR ARBITRATION SERVICES",
      subTopics: [
        {
          header: "Arbitration Representation",
          passage:
            "We represent NRIs in arbitration proceedings, advocating for their interests before arbitral tribunals with expertise and diligence",
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
      photo: img5,
      figure: photo5,
      header:
        "CROSS-BORDER TRANSACTION SERVICES FOR NON-RESIDENT INDIANS (NRIS)",
      text: "Cross-border transactions present unique opportunities and challenges for Non-Resident Indians (NRIs) seeking to engage in international business activities.  Whether you're investing in foreign markets, acquiring overseas assets, or establishing global business ventures, our team of experienced lawyers is dedicated to facilitating smooth and successful transactions across borders",
      text2: "",
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
      photo: img3,
      figure: photo3,
      header:
        "INTELLECTUAL PROPERTY RIGHTS (IPR) SERVICES FOR NON-RESIDENT INDIANS (NRIS)",
      text: "Protecting intellectual property rights (IPR) is essential for Non-Resident Indians (NRIs) seeking to safeguard their innovative ideas, creative works, and business assets on a global scale. Our firm specializes in providing comprehensive legal assistance tailored to the unique needs of NRIs in protecting, managing, and enforcing their intellectual property rights",
      text2:
        "Whether you're an inventor, artist, entrepreneur, or corporate entity, our team of experienced lawyers is dedicated to ensuring that your intellectual property is safeguarded and maximized for commercial success",
      subHeader: "OUR IPR SERVICES",
      subTopics: [
        {
          header: "Trademark Registration",
          passage:
            "We assist NRIs in registering trademarks for their brands, logos, and slogans in multiple jurisdictions, ensuring exclusive rights to use and protect their distinctive marks in the global marketplace",
        },
        {
          header: "Patent Protection",
          passage:
            "Our firm provides expert guidance and support to NRIs in securing patents for their inventions, innovations, and technological advancements, leveraging our knowledge of patent laws and procedures worldwide",
        },
        {
          header: "Copyright Registration",
          passage:
            "We help NRIs register copyrights for their original works of authorship, including literary, artistic, musical, and audiovisual creations, to establish ownership and prevent unauthorized use or reproduction",
        },
        {
          header: "Trade Secret Protection",
          passage:
            "Our team advises NRIs on strategies to protect trade secrets and confidential information, including drafting nondisclosure agreements (NDAs) and implementing security measures to safeguard proprietary business assets",
        },
        {
          header: "IP Licensing and Commercialization",
          passage:
            "We assist NRIs in negotiating and drafting license agreements, distribution agreements, and other commercial contracts to monetize their intellectual property assets and maximize revenue streams",
        },
      ],
    },
  ];
  return (
    <div className="relative mx-auto w-full md:w-4/5 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {practices.map((data) => (
          <a href={`/practices/${data.id}`}>
            <div
              className="flex-shrink-0 w-full p-3 flex flex-col items-center gap-4 group transition-transform duration-500 ease-in-out transform"
              key={data.id}
            >
              <div className="flex justify-between w-full">
                <Image src={data.photo} alt="photo" className="w-1/4 h-20" />
                <div className="h-20 w-8 rounded-bl-full ml-auto opacity-25 group-hover:opacity-55 bg-gradient-to-l from-secondary"></div>
              </div>
              <div className="flex flex-col gap-3 p-3">
                <h3 className="text-xl md:text-2xl line-clamp-1">
                  {data.header}
                </h3>
                <p className="text-secondary line-clamp-2">{data.text}</p>
              </div>
              <Image src={data.figure} alt="card" className="w-full" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
