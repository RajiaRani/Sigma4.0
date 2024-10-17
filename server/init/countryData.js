const countryData = [
    {
        countryName: "USA",
        description: [
            {
                heading: "Introduction",
                content:
                    "The United States is one of the most popular destinations for international students. It offers a wide variety of academic opportunities, renowned universities, and cultural diversity.The United States is one of the most popular destinations for international students. It offers a wide variety of academic opportunities, renowned universities, and cultural diversity The United States is one of the most popular destinations for international students. It offers a wide variety of academic opportunities, renowned universities, and cultural diversity. The United States is one of the most popular destinations for international students. It offers a wide variety of academic opportunities, renowned universities, and cultural diversity The United States is one of the most popular destinations for international students. It offers a wide variety of academic opportunities, renowned universities, and cultural diversity The United States is one of the most popular destinations for international students. It offers a wide variety of academic opportunities, renowned universities, and cultural diversity The United States is one of the most popular destinations for international students. It offers a wide variety of academic opportunities, renowned universities, and cultural diversity.",
                images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJbkuhWoLb61vdga87-4K5pLDTqzQEE8tcvgWDosp7z2ajUExGbvYCVhN9A&s"]
            },
            {
                heading: "Visa Process",
                content:
                    "To study in the United States, students generally need an F-1 or M-1 visa. The process involves obtaining an acceptance letter from a SEVP-certified school, applying through the U.S. embassy, and attending a visa interview.",
                images: ["https://static5.depositphotos.com/1030296/395/i/450/depositphotos_3958211-stock-photo-new-york-cityscape-tourism-concept.jpg"]
            },
            {
                heading: "Famous Universities",
                content:
                    "The United States is home to many prestigious institutions, including Harvard University, Stanford University, and the Massachusetts Institute of Technology (MIT).",

                images: ["https://www.planetware.com/wpimages/2019/12/united-states-in-pictures-beautiful-places-to-photograph-new-york-brooklyn-bridge.jpg",]
            }
        ],
        visaTypes: [
            {
                visaType: "F-1",
                description: "Academic student visa for individuals studying full-time in the U.S.",
                requiredDocuments: [
                    "Valid passport",
                    "Form I-20",
                    "Visa application (DS-160)",
                    "SEVIS payment receipt",
                    "Proof of financial support"
                ],
                eligibility:
                    "The F-1 visa is issued to full-time students enrolled in an academic program at a SEVP-certified school.",
                processSteps: [
                    "Receive Form I-20 from the school",
                    "Pay the SEVIS fee",
                    "Complete DS-160 visa application",
                    "Schedule and attend a visa interview at a U.S. embassy"
                ],
                relatedPrograms: ["University", "High School"],
                cost: {
                    sevisFee: 350,
                    applicationFee: 160
                },
                images: ["https://cdn.artphotolimited.com/images/59836c7f9105915be95a6348/1000x1000/brooklyn-bridge-by-night.jpg"]
            },
            {
                visaType: "M-1",
                description: "Student visa for vocational or non-academic programs.",
                requiredDocuments: [
                    "Valid passport",
                    "Form I-20",
                    "Visa application (DS-160)",
                    "SEVIS payment receipt",
                    "Proof of financial support"
                ],
                eligibility:
                    "The M-1 visa is for students attending vocational or non-academic programs in the U.S.",
                processSteps: [
                    "Receive Form I-20 from the vocational institution",
                    "Pay the SEVIS fee",
                    "Complete DS-160 visa application",
                    "Schedule and attend a visa interview"
                ],
                relatedPrograms: ["Vocational Schools"],
                cost: {
                    sevisFee: 350,
                    applicationFee: 160
                },
            }
        ]
    },
    {
        countryName: "Canada",
        description: [
            {
                heading: "Introduction",
                content: "Canada is known for its high-quality education and affordable tuition. The country offers a safe and diverse environment for international students.Canada is known for its high-quality education and affordable tuition. The country offers a safe and diverse environment for international studentsCanada is known for its high-quality education and affordable tuition. The country offers a safe and diverse environment for international studentsCanada is known for its high-quality education and affordable tuition. The country offers a safe and diverse environment for international studentsCanada is known for its high-quality education and affordable tuition. The country offers a safe and diverse environment for international studentsCanada is known for its high-quality education and affordable tuition. The country offers a safe and diverse environment for international studentsCanada is known for its high-quality education and affordable tuition. The country offers a safe and diverse environment for international studentsCanada is known for its high-quality education and affordable tuition. The country offers a safe and diverse environment for international studentsCanada is known for its high-quality education and affordable tuition. The country offers a safe and diverse environment for international studentsCanada is known for its high-quality education and affordable tuition. The country offers a safe and diverse environment for international studentsCanada is known for its high-quality education and affordable tuition. The country offers a safe and diverse environment for international students. Canada is known for its high-quality education and affordable tuition. The country offers a safe and diverse environment for international studentsCanada is known for its high-quality education and affordable tuition. The country offers a safe and diverse environment for international studentsCanada is known for its high-quality education and affordable tuition. The country offers a safe and diverse environment for international studentsCanada is known for its high-quality education and affordable tuition. The country offers a safe and diverse environment for international studentsCanada is known for its high-quality education and affordable tuition. The country offers a safe and diverse environment for international students.",
                images: ["https://media.istockphoto.com/id/1368242984/photo/canada-flag-waving-in-ottawa.jpg?s=612x612&w=0&k=20&c=6xztoco_fpx0MD6kntgO5KaN5PLhOqtW4pI1MbG9kXw=",]
            },
            {
                heading: "Visa Process",
                content: "International students need a study permit to study in Canada. Students must first be accepted by a Canadian educational institution, apply for a study permit online or through the local Canadian embassy, and provide proof of sufficient funds.",
                images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01_9o1BR2sibvnpTY9dsYvHtgFQsNy_FknQ&s",]
            },
            {
                heading: "Famous Universities",
                content: "Canada is home to some of the world’s best universities, including the University of Toronto, McGill University, and the University of British Columbia.",

                images: ["https://www.traveloffpath.com/wp-content/uploads/2023/05/Vancouver-skyline-at-night.jpeg.webp",]
            }
        ],
        visaTypes: [
            {
                visaType: "Study Permit",
                description: "Permit for international students studying at designated learning institutions in Canada.",
                requiredDocuments: [
                    "Letter of acceptance from a designated learning institution",
                    "Proof of financial support",
                    "Valid passport",
                    "Visa application (IMM 1294)"
                ],
                eligibility:
                    "Must be accepted by a designated learning institution and have sufficient financial resources to cover tuition and living expenses.",
                processSteps: [
                    "Obtain letter of acceptance",
                    "Submit study permit application",
                    "Provide biometrics (if required)",
                    "Receive study permit upon arrival in Canada"
                ],
                relatedPrograms: ["University", "College"],
                cost: {
                    sevisFee: 0, // SEVIS is not applicable in Canada
                    applicationFee: 150
                },
                images: ["https://d2jdgazzki9vjm.cloudfront.net/tourist-places/images/tourist-places-in-canada4.png"]
            }
        ]
    },
    {
        countryName: "Australia",
        description: [
            {
                heading: "Introduction",
                content:"Australia is a vibrant and welcoming country, offering world-class education, diverse communities, and fantastic job opportunities for international students.Australia is a vibrant and welcoming country, offering world-class education, diverse communities, and fantastic job opportunities for international studentsAustralia is a vibrant and welcoming country, offering world-class education, diverse communities, and fantastic job opportunities for international studentsAustralia is a vibrant and welcoming country, offering world-class education, diverse communities, and fantastic job opportunities for international studentsAustralia is a vibrant and welcoming country, offering world-class education, diverse communities, and fantastic job opportunities for international studentsAustralia is a vibrant and welcoming country, offering world-class education, diverse communities, and fantastic job opportunities for international studentsAustralia is a vibrant and welcoming country, offering world-class education, diverse communities, and fantastic job opportunities for international studentsAustralia is a vibrant and welcoming country, offering world-class education, diverse communities, and fantastic job opportunities for international studentsAustralia is a vibrant and welcoming country, offering world-class education, diverse communities, and fantastic job opportunities for international studentsAustralia is a vibrant and welcoming country, offering world-class education, diverse communities, and fantastic job opportunities for international studentsAustralia is a vibrant and welcoming country, offering world-class education, diverse communities, and fantastic job opportunities for international studentsAustralia is a vibrant and welcoming country, offering world-class education, diverse communities, and fantastic job opportunities for international studentsAustralia is a vibrant and welcoming country, offering world-class education, diverse communities, and fantastic job opportunities for international studentsAustralia is a vibrant and welcoming country, offering world-class education, diverse communities, and fantastic job opportunities for international studentsAustralia is a vibrant and welcoming country, offering world-class education, diverse communities, and fantastic job opportunities for international students.",
                images: ["https://media.istockphoto.com/id/1338315150/photo/sydney-opera-house-sydney-australia.jpg?s=612x612&w=0&k=20&c=WsEJKn6bHuo04pKJnFcsYjAgWkdwKetdsxxdFGgBwkQ=",]
            },
            {
                heading: "Visa Process",
                content:
                    "International students need a Subclass 500 Student Visa to study in Australia. This visa allows students to participate in a full-time study program at an Australian educational institution.",
                images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfZI3POh4z6HLmtXJr1eBUSPzlYNibGjQQQ&s",]
            },
            {
                heading: "Famous Universities",
                content:
                    "Australia is home to several top-tier universities, including the University of Melbourne, Australian National University, and the University of Sydney.",
                images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7BDfctSpd8t_51bdElVL5nR4e3nHryTwSFw&s"]
            }
        ],
        visaTypes: [
            {
                visaType: "Student Visa (Subclass 500)",
                description: "Visa for international students studying in Australia.",
                requiredDocuments: [
                    "Confirmation of Enrollment (CoE) from an Australian educational institution",
                    "Valid passport",
                    "Visa application (subclass 500)",
                    "Proof of financial capacity",
                    "Overseas Student Health Cover (OSHC)"
                ],
                eligibility:
                    "Must be enrolled in a full-time course at a registered Australian institution and meet financial and health requirements.",
                processSteps: [
                    "Receive CoE from an Australian institution",
                    "Complete online visa application",
                    "Provide biometrics (if required)",
                    "Receive visa approval"
                ],
                relatedPrograms: ["University", "Vocational Education"],
                cost: {
                    sevisFee: 0, // Not applicable in Australia
                    applicationFee: 630
                },
                images: ["https://as2.ftcdn.net/v2/jpg/00/95/84/43/1000_F_95844332_9XLvoywtmY7IXunhNsLsQJ3jDsD8oMNo.jpg",]
            }
        ]
    },
    {
        countryName: "UK",
        description: [
            {
                heading: "Introduction",
                content: "The United Kingdom is renowned for its top-tier education system, offering a wide range of courses and programs. It is home to some of the world’s most prestigious universities. The United Kingdom is renowned for its top-tier education system, offering a wide range of courses and programs. It is home to some of the world’s most prestigious universitiesThe United Kingdom is renowned for its top-tier education system, offering a wide range of courses and programs. It is home to some of the world’s most prestigious universitiesThe United Kingdom is renowned for its top-tier education system, offering a wide range of courses and programs. It is home to some of the world’s most prestigious universitiesThe United Kingdom is renowned for its top-tier education system, offering a wide range of courses and programs. It is home to some of the world’s most prestigious universitiesThe United Kingdom is renowned for its top-tier education system, offering a wide range of courses and programs. It is home to some of the world’s most prestigious universitiesThe United Kingdom is renowned for its top-tier education system, offering a wide range of courses and programs. It is home to some of the world’s most prestigious universitiesThe United Kingdom is renowned for its top-tier education system, offering a wide range of courses and programs. It is home to some of the world’s most prestigious universitiesThe United Kingdom is renowned for its top-tier education system, offering a wide range of courses and programs. It is home to some of the world’s most prestigious universitiesThe United Kingdom is renowned for its top-tier education system, offering a wide range of courses and programs. It is home to some of the world’s most prestigious universitiesThe United Kingdom is renowned for its top-tier education system, offering a wide range of courses and programs. It is home to some of the world’s most prestigious universities. The United Kingdom is renowned for its top-tier education system, offering a wide range of courses and programs. It is home to some of the world’s most prestigious universitiesThe United Kingdom is renowned for its top-tier education system, offering a wide range of courses and programs. It is home to some of the world’s most prestigious universitiesThe United Kingdom is renowned for its top-tier education system, offering a wide range of courses and programs. It is home to some of the world’s most prestigious universities ",
                images: ["https://media.istockphoto.com/id/1430153563/photo/big-ben-with-bridge-over-thames-and-flag-of-england-against-blue-sky-in-london-england-uk.jpg?s=612x612&w=0&k=20&c=ytP9xfJV7h8Mc4oBADkLj6whBTZOrWA9Krc-7VRR6Dw="],

            },
            {
                heading: "Visa Process",
                content: "International students need a Tier 4 (General) Student Visa to study in the UK. The application process includes receiving a Confirmation of Acceptance for Studies (CAS) from a UK institution, applying for the visa, and providing proof of financial resources.",
                images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPX0xT0eh07rua7ROVpqpK6940lIRStb9LffE3v6L_Dv-EgytwbTQGwRdp0I2pNZ-oM9A&usqp=CAU"]
            },
            {
                heading: "Famous Universities",
                content: "The UK is home to many prestigious institutions, including the University of Oxford, University of Cambridge, and Imperial College London.",
                images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL14s-eKyhQv08C7aY8pL31vVo5wZ8WFPBQGou3rqxAFQmYsGcgS1_Cos2tdUvGHwrjnY&usqp=CAU"]
            }
        ],
        visaTypes: [
            {
                visaType: "Tier 4 (General) Student Visa",
                description: "Visa for international students attending higher education institutions in the UK.",
                requiredDocuments: [
                    "Confirmation of Acceptance for Studies (CAS)",
                    "Proof of financial resources",
                    "Valid passport",
                    "Visa application form"
                ],
                eligibility: "Must be accepted into a UK educational institution and meet financial requirements.",
                processSteps: [
                    "Receive Confirmation of Acceptance for Studies (CAS)",
                    "Complete visa application",
                    "Attend visa appointment",
                    "Provide biometrics and documentation"
                ],
                relatedPrograms: ["University", "College"],
                cost: {
                    sevisFee: 0, // Not applicable in the UK
                    applicationFee: 348
                },
                images: ["https://i.insider.com/5a3946ee7101ad3b936bf43d?width=700"]
            }
        ]
    },

    {
        countryName: "Germany",
        description: [
            {
                heading: "Introduction",
                content: "Germany is well-known for its quality education system, particularly in fields such as engineering and technology. Many universities offer low or no tuition fees for both local and international students.",
                images: ["https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"]
            },
            {
                heading: "Visa Process",
                content: "Non-EU students require a student visa to study in Germany. Applicants must secure admission to a German institution, prove financial stability, and apply for the visa through their local German embassy.",
                images: ["https://as1.ftcdn.net/v2/jpg/00/84/15/38/1000_F_84153835_k3tFP45bb2TVC9t4N84fpAo41cbNKzyv.jpg"]
            },
            {
                heading: "Famous Universities",
                content: "Germany is home to world-class universities such as the Technical University of Munich, Heidelberg University, and Ludwig Maximilian University of Munich.",
                images: ["https://media.istockphoto.com/id/1346509753/photo/old-town-of-dresden-in-winter-germany.jpg?s=612x612&w=0&k=20&c=wHDKrfva1I7h7KAzvFaSTb38sHz2DM0Fl23qGGCNTCQ="]
            }
        ],
        visaTypes: [
            {
                visaType: "Student Visa",
                description: "Student visa for international students attending higher education institutions in Germany.",
                requiredDocuments: [
                    "University acceptance letter",
                    "Proof of financial resources (blocked account)",
                    "Valid passport",
                    "Visa application form"
                ],
                eligibility: "Must have university admission and proof of financial resources.",
                processSteps: [
                    "Secure admission at a German institution",
                    "Open a blocked account for financial proof",
                    "Submit visa application at the embassy",
                    "Attend visa interview"
                ],
                relatedPrograms: ["University"],
                cost: {
                    sevisFee: 0, // Not applicable in Germany
                    applicationFee: 75
                },
                images: ["https://i.guim.co.uk/img/media/3949057dcceed110d160e063cfadba78702967bd/0_0_5567_4234/master/5567.jpg?width=700&quality=85&auto=format&fit=max&s=b0337b3dca4595724cd853c57d84d9de"]
            }
        ]
    },
    {
        countryName: "New Zealand",
        description: [
            {
                heading: "Introduction",
                content: "New Zealand offers a world-class education system, beautiful landscapes, and a welcoming environment for international students. It has a diverse range of programs and opportunities for students.New Zealand offers a world-class education system, beautiful landscapes, and a welcoming environment for international students. It has a diverse range of programs and opportunities for students.New Zealand offers a world-class education system, beautiful landscapes, and a welcoming environment for international students. It has a diverse range of programs and opportunities for students.New Zealand offers a world-class education system, beautiful landscapes, and a welcoming environment for international students. It has a diverse range of programs and opportunities for students.New Zealand offers a world-class education system, beautiful landscapes, and a welcoming environment for international students. It has a diverse range of programs and opportunities for students.New Zealand offers a world-class education system, beautiful landscapes, and a welcoming environment for international students. It has a diverse range of programs and opportunities for students.New Zealand offers a world-class education system, beautiful landscapes, and a welcoming environment for international students. It has a diverse range of programs and opportunities for students.New Zealand offers a world-class education system, beautiful landscapes, and a welcoming environment for international students. It has a diverse range of programs and opportunities for students.New Zealand offers a world-class education system, beautiful landscapes, and a welcoming environment for international students. It has a diverse range of programs and opportunities for students.New Zealand offers a world-class education system, beautiful landscapes, and a welcoming environment for international students. It has a diverse range of programs and opportunities for students.New Zealand offers a world-class education system, beautiful landscapes, and a welcoming environment for international students. It has a diverse range of programs and opportunities for students.New Zealand offers a world-class education system, beautiful landscapes, and a welcoming environment for international students. It has a diverse range of programs and opportunities for students.",
                images: ["https://st2.depositphotos.com/1028882/8763/i/450/depositphotos_87635572-stock-photo-new-zealand-flag-proudly-fluttering.jpg"]
            },
            {
                heading: "Visa Process",
                content: "International students require a Student Visa to study in New Zealand. The process involves getting an offer from a New Zealand institution, proving sufficient financial resources, and applying for a visa.",
                images: ["https://www.newzealand.com/assets/Job-2189_TNZ_Autumn_R52_5812_Final_HR__aWxvdmVrZWxseQo_FocalPointCropWzQzMCw2MzAsNDQsNDUsNzUsImpwZyIsNjUsMi41XQ.jpg"]
            },
            {
                heading: "Famous Universities",
                content: "New Zealand is home to some top universities, including the University of Auckland, University of Otago, and Victoria University of Wellington.",
                images: ["https://media.cnn.com/api/v1/images/stellar/prod/191212014621-15-new-zealand-beautiful-places-queensland.jpg?q=w_3000,h_2002,x_0,y_0,c_fill"]
            }
        ],
        visaTypes: [
            {
                visaType: "Student Visa",
                description: "Visa for international students studying full-time at a New Zealand institution.",
                requiredDocuments: [
                    "Offer of place from a New Zealand institution",
                    "Proof of financial support",
                    "Valid passport",
                    "Visa application form"
                ],
                eligibility: "Must have an offer from a recognized New Zealand institution and sufficient financial resources.",
                processSteps: [
                    "Receive an offer of place",
                    "Submit a visa application",
                    "Provide biometrics and supporting documentation",
                    "Receive visa approval"
                ],
                relatedPrograms: ["University", "College"],
                cost: {
                    sevisFee: 0, // Not applicable in New Zealand
                    applicationFee: 330
                },
                images: ["https://www.zicasso.com/static/1613b7fe4e02309dcd902b3f19405262/304cc/1613b7fe4e02309dcd902b3f19405262.jpg"]
            }
        ]
    },

    {
        countryName: "Switzerland",
        description: [
            {
                heading: "Introduction",
                content: "Switzerland offers a world-renowned education system, particularly in hospitality and business studies. Its universities are known for high academic standards and research opportunities.Switzerland offers a world-renowned education system, particularly in hospitality and business studies. Its universities are known for high academic standards and research opportunities.Switzerland offers a world-renowned education system, particularly in hospitality and business studies. Its universities are known for high academic standards and research opportunities.Switzerland offers a world-renowned education system, particularly in hospitality and business studies. Its universities are known for high academic standards and research opportunities.Switzerland offers a world-renowned education system, particularly in hospitality and business studies. Its universities are known for high academic standards and research opportunities.Switzerland offers a world-renowned education system, particularly in hospitality and business studies. Its universities are known for high academic standards and research opportunities.Switzerland offers a world-renowned education system, particularly in hospitality and business studies. Its universities are known for high academic standards and research opportunities.Switzerland offers a world-renowned education system, particularly in hospitality and business studies. Its universities are known for high academic standards and research opportunities.Switzerland offers a world-renowned education system, particularly in hospitality and business studies.Switzerland offers a world-renowned education system, particularly in hospitality and business studies. Its universities are known for high academic standards and research opportunities.Switzerland offers a world-renowned education system, particularly in hospitality and business studies. Its universities are known for high academic standards and research opportunities.Switzerland offers a world-renowned education system, particularly in hospitality and business studies. Its universities are known for high academic standards and research opportunities. Its universities are known for high academic standards and research opportunities.",
                images: ["https://studyinginswitzerland.com/wp-content/uploads/2021/02/the-swiss-flag-meaning-scaled.jpg",]
            },
            {
                heading: "Visa Process",
                content: "Non-EU students need a student visa to study in Switzerland. The application process includes securing an admission letter from a Swiss institution, proving financial means, and applying at the Swiss consulate.",
                images: ["https://as2.ftcdn.net/v2/jpg/02/72/59/51/1000_F_272595133_0MC2OcLUKwArSXYUjNIXxvMxdcrecJDS.jpg"]
            },
            {
                heading: "Famous Universities",
                content: "Top universities in Switzerland include ETH Zurich, University of Geneva, and University of Zurich.",
                images: ["https://www.gokite.travel/wp-content/uploads/2024/08/Top-10-Attractions-to-Explore-with-Your-Switzerland-Tourist-Visa.webp"]
            }
        ],
        visaTypes: [
            {
                visaType: "Student Visa",
                description: "Visa for international students attending Swiss universities.",
                requiredDocuments: [
                    "Letter of acceptance from a Swiss institution",
                    "Proof of financial resources",
                    "Valid passport",
                    "Visa application form"
                ],
                eligibility: "Must have an admission offer and proof of financial means.",
                processSteps: [
                    "Secure admission at a Swiss institution",
                    "Submit visa application at the Swiss consulate",
                    "Provide financial proof and attend visa interview"
                ],
                relatedPrograms: ["University"],
                cost: {
                    sevisFee: 0, // Not applicable in Switzerland
                    applicationFee: 88
                },
                images: ["https://www.gokite.travel/wp-content/uploads/2024/08/3.-Jungfraujoch.webp"]
            }
        ]
    },
    {
        countryName: "France",
        description: [
            {
                heading: "Introduction",
                content: "France is known for its high-quality education system and cultural richness. French universities offer a wide range of programs, particularly in the arts, humanities, and sciences.",
                images: ["https://as1.ftcdn.net/v2/jpg/01/47/49/76/1000_F_147497684_2GfgE05sJ8hxeYsZZTm6tBu2EHCc98G2.jpg"]
            },
            {
                heading: "Visa Process",
                content: "International students need a long-term student visa to study in France. The process involves securing admission to a French institution, proving financial resources, and applying for the visa at the French consulate.",
                images: ["https://media.istockphoto.com/id/1436430810/photo/paris-eiffel-tower.jpg?b=1&s=612x612&w=0&k=20&c=r8iR9BbuT77Z8SJqXnTG7ekBEYV97TfIC0my5kBUnzI="]
            },
            {
                heading: "Famous Universities",
                content: "France is home to prestigious institutions such as Sorbonne University, Sciences Po, and École Normale Supérieure.",
                images: ["https://www.golanguedoc.com/images/stories/sites/425/chambord.jpg"]
            }
        ],
        visaTypes: [
            {
                visaType: "Long-Term Student Visa (VLS-TS)",
                description: "Visa for students staying in France for more than 6 months to pursue higher education.",
                requiredDocuments: [
                    "University acceptance letter",
                    "Proof of financial resources",
                    "Valid passport",
                    "Visa application form"
                ],
                eligibility: "Must be accepted into a French institution and meet financial requirements.",
                processSteps: [
                    "Obtain an admission letter",
                    "Submit visa application at the consulate",
                    "Provide biometrics and attend visa interview"
                ],
                relatedPrograms: ["University"],
                cost: {
                    sevisFee: 0, // Not applicable in France
                    applicationFee: 99
                },
                images: ["https://i.pinimg.com/736x/36/4b/6f/364b6fee03749e851bd17ef04052dd95.jpg"]
            }
        ]
    }
];

module.exports = { data: countryData };




