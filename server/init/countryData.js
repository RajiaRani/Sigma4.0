const countryData = [
    {
        countryName: "USA",
        intro:"Generally, foreign nationals who wish to travel to the United States must first obtain a visa, either a nonimmigrant visa for a temporary stay, or an immigrant visa for permanent residence. You must have a student visa to travel to the United States to study. Your course of study and the type of school you plan to attend determine whether you need an F visa or an M visa.",
        countryImage:"https://static5.depositphotos.com/1030296/395/i/450/depositphotos_3958211-stock-photo-new-york-cityscape-tourism-concept.jpg ",
        description: [
           
            {
                heading: "Visa Process",
                content:
                    "To study in the United States, students generally need an F-1 or M-1 visa. The process involves obtaining an acceptance letter from a SEVP-certified school, applying through the U.S. embassy, and attending a visa interview.",
                // images: ["https://static5.depositphotos.com/1030296/395/i/450/depositphotos_3958211-stock-photo-new-york-cityscape-tourism-concept.jpg"]
            },
            {
                heading: "Famous Universities",
                content:
                    "The United States is home to many prestigious institutions, including Harvard University, Stanford University, and the Massachusetts Institute of Technology (MIT).",

                // images: ["https://www.planetware.com/wpimages/2019/12/united-states-in-pictures-beautiful-places-to-photograph-new-york-brooklyn-bridge.jpg",]
            },
    
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
                // images: ["https://cdn.artphotolimited.com/images/59836c7f9105915be95a6348/1000x1000/brooklyn-bridge-by-night.jpg"]
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
        ],
        universityTypes:[
            {
                university: " public universities",
                universityType:["State Funded"," Low Tuition Fees", " Wide Range of Degree’s available "],
            },
            {
                university: " private universities",
                universityType:["Alumni Funded OR Organization Funded","Comparatively Higher Tuition Fees", " Smaller Range of Degree’s available", "Usually Specialised and focused in a particular stream"],
            },
            {
                university: "Community Colleges",
                universityType:["Low Tuition Fees", "Low Admission Criteria","Provides Associate Degrees" ],
            },
            {
                university: "IVY Leagues ",
                universityType:["Group of 8 universities", "Located in Northeast Region","Elite Colleges very selective in admission, academic excellence, known for Business programs" ],
            },

        ],
        studystudyRequirements:[
            {
                study:"Undergraduate Requirements" ,
                requirements:{
                  MandatoryRequirements:["Academic Percentage (10th & 12th) – 55% and above English Proficiency – (Any one of the below)", " IELTS (minimum 6.0+)", " TOEFL (minimum 70+)", " PTE (minimum 53+)", " DET (minimum 100+)"],
                  PopularUniversities:[ " Virginia Tech Language and Culture Institute", "University of Connecticut ", "University of Delaware ", "Worcester Polytechnic Institute", "University of South Florida", "Rochester Institute of Technology ", " Arizona State University", "Miami University--Oxford ","University of Maryland, Baltimore County ", "Virginia Commonwealth University ", "Savanah College of Art and Design ", " Southern Illinois University"],
                  OptionalRequirements:[" Scholastic Aptitude Test (SAT)", " Minimum score of 1150+", "American College Testing (ACT) ", "Minimum score of 25+ "],  
                },
            } ,
            {
                study:"Graduate Requirements " ,
                requirements:{
                  MandatoryRequirements:["Academic Percentage (Bachelors)– 56% and above", " English Proficiency – (Any one of the below) ", "IELTS (minimum 6.5+)", "TOEFL (minimum 78+)", "PTE (minimum 58+) ", "DET (minimum 115+)"],
                  PopularUniversities:[" Virginia Tech Language and Culture Institute", "University of Massachusetts--Amherst ", " Worcester Polytechnic Institute" , "Arizona State University ",  "Miami University--Oxford ", "University of Maryland, Baltimore County " , "Virginia Commonwealth University ",  "Savanah College of Art and Design ", "Southern Illinois University"],
                  OptionalRequirements:["Graduate Record Examination (GRE)", "Minimum score of  290 to 300+ ", "Graduate Management Admission Test(GMAT) ", " Minimum score of  550+ "],  
                },
            } 
        ]
    },
    {
        countryName: "Canada",
        intro:"Generally, you must apply for a study permit before you come to Canada. Some people can apply for a study permit from within Canada. In some cases, you can apply when you arrive in Canada at the port of entry. Make sure you understand which option is available to you. ",
        countryImage:"https://www.jodogoairportassist.com/main/assets/images/blog/main-image/top-10-tourist-places-to-visit-in-canada.webp ",
        description: [
            
            {
                heading: "Visa Process",
                content: "International students need a study permit to study in Canada. Students must first be accepted by a Canadian educational institution, apply for a study permit online or through the local Canadian embassy, and provide proof of sufficient funds.",
                // images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01_9o1BR2sibvnpTY9dsYvHtgFQsNy_FknQ&s",]
            },
            {
                heading: "Famous Universities",
                content: "Canada is home to some of the world’s best universities, including the University of Toronto, McGill University, and the University of British Columbia.",

                // images: ["https://www.traveloffpath.com/wp-content/uploads/2023/05/Vancouver-skyline-at-night.jpeg.webp",]
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
                // images: ["https://d2jdgazzki9vjm.cloudfront.net/tourist-places/images/tourist-places-in-canada4.png"]
            }
        ],
        universityTypes:[
            {
                university: " public universities",
                universityType:["State Funded"," Low Tuition Fees", " Wide Range of Degree’s available "],
            },
            {
                university: " private universities",
                universityType:["Alumni Funded OR Organization Funded","Comparatively Higher Tuition Fees", " Smaller Range of Degree’s available", "Usually Specialised and focused in a particular stream"],
            },

        ]
    },
    {
        countryName: "Australia",
        intro:"If you want to apply for a student visa you need to attach a current Confirmation of Enrolment (CoE) with the date your course starts to your ImmiAccount. If the course start date has passed, you must submit an updated CoE​ with the new course start date. The sooner you do this, the sooner you will get a visa decision. ",
        countryImage:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/3b/95/61/photo2jpg.jpg?w=500&h=-1&s=1 ",
        description: [
           
            {
                heading: "Visa Process",
                content:
                    "International students need a Subclass 500 Student Visa to study in Australia. This visa allows students to participate in a full-time study program at an Australian educational institution.",
                // images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfZI3POh4z6HLmtXJr1eBUSPzlYNibGjQQQ&s",]
            },
            {
                heading: "Famous Universities",
                content:
                    "Australia is home to several top-tier universities, including the University of Melbourne, Australian National University, and the University of Sydney.",
                // images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7BDfctSpd8t_51bdElVL5nR4e3nHryTwSFw&s"]
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
                // images: ["https://as2.ftcdn.net/v2/jpg/00/95/84/43/1000_F_95844332_9XLvoywtmY7IXunhNsLsQJ3jDsD8oMNo.jpg",]
            }
        ],
        universityTypes:[
            {
                university: " public universities",
                universityType:["State Funded"," Low Tuition Fees", " Wide Range of Degree’s available "],
            },
            {
                university: " private universities",
                universityType:["Alumni Funded OR Organization Funded","Comparatively Higher Tuition Fees", " Smaller Range of Degree’s available", "Usually Specialised and focused in a particular stream"],
            },

        ]
    },
    {
        countryName: "UK",
        intro:"You can apply for a Student visa if you’re 16 or over and want to study on a further or higher education course in the UK.If you’re 16 or 17 and you want to study at an independent school in the UK, you may be eligible for a Child Student visa instead. ",
        countryImage:" https://www.holidify.com/images/bgImages/LONDON.jpg",
        description: [
           
            {
                heading: "Visa Process",
                content: "International students need a Tier 4 (General) Student Visa to study in the UK. The application process includes receiving a Confirmation of Acceptance for Studies (CAS) from a UK institution, applying for the visa, and providing proof of financial resources.",
                // images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPX0xT0eh07rua7ROVpqpK6940lIRStb9LffE3v6L_Dv-EgytwbTQGwRdp0I2pNZ-oM9A&usqp=CAU"]
            },
            {
                heading: "Famous Universities",
                content: "The UK is home to many prestigious institutions, including the University of Oxford, University of Cambridge, and Imperial College London.",
                // images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL14s-eKyhQv08C7aY8pL31vVo5wZ8WFPBQGou3rqxAFQmYsGcgS1_Cos2tdUvGHwrjnY&usqp=CAU"]
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
                // images: ["https://i.insider.com/5a3946ee7101ad3b936bf43d?width=700"]
            }
        ],
        universityTypes:[
            {
                university: " public universities",
                universityType:["State Funded"," Low Tuition Fees", " Wide Range of Degree’s available "],
            },
            {
                university: " private universities",
                universityType:["Alumni Funded OR Organization Funded","Comparatively Higher Tuition Fees", " Smaller Range of Degree’s available", "Usually Specialised and focused in a particular stream"],
            },

        ]
    },

    {
        countryName: "Germany",
        intro:"Germany is a place to be when it comes to the quality of higher education, research infrastructure, teaching methodology, low-cost studies, and career perspective. That is why many internationals continue to believe that Germany is the best place for pursuing their higher education further. ",
        countryImage:"https://8668267.fs1.hubspotusercontent-na1.net/hubfs/8668267/cologne-cathedral-hohenzollern-bridge_0.jpg ",
        description: [
          
            {
                heading: "Visa Process",
                content: "Non-EU students require a student visa to study in Germany. Applicants must secure admission to a German institution, prove financial stability, and apply for the visa through their local German embassy.",
                // images: ["https://as1.ftcdn.net/v2/jpg/00/84/15/38/1000_F_84153835_k3tFP45bb2TVC9t4N84fpAo41cbNKzyv.jpg"]
            },
            {
                heading: "Famous Universities",
                content: "Germany is home to world-class universities such as the Technical University of Munich, Heidelberg University, and Ludwig Maximilian University of Munich.",
                // images: ["https://media.istockphoto.com/id/1346509753/photo/old-town-of-dresden-in-winter-germany.jpg?s=612x612&w=0&k=20&c=wHDKrfva1I7h7KAzvFaSTb38sHz2DM0Fl23qGGCNTCQ="]
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
                // images: ["https://i.guim.co.uk/img/media/3949057dcceed110d160e063cfadba78702967bd/0_0_5567_4234/master/5567.jpg?width=700&quality=85&auto=format&fit=max&s=b0337b3dca4595724cd853c57d84d9de"]
            }
        ],
        universityTypes:[
            {
                university: " public universities",
                universityType:["State Funded"," Low Tuition Fees", " Wide Range of Degree’s available "],
            },
            {
                university: " private universities",
                universityType:["Alumni Funded OR Organization Funded","Comparatively Higher Tuition Fees", " Smaller Range of Degree’s available", "Usually Specialised and focused in a particular stream"],
            },

        ]
    },
    {
        countryName: "New Zealand",
        intro:"We have created information sheets for international students to use when preparing their student visa application. Applicants should use the appropriate information sheet to make sure they provide the right documents and evidence to support their student visa application.",
        countryImage:"https://www.zicasso.com/static/1613b7fe4e02309dcd902b3f19405262/304cc/1613b7fe4e02309dcd902b3f19405262.jpg ",
        description: [
          
            {
                heading: "Visa Process",
                content: "International students require a Student Visa to study in New Zealand. The process involves getting an offer from a New Zealand institution, proving sufficient financial resources, and applying for a visa.",
                // images: ["https://www.newzealand.com/assets/Job-2189_TNZ_Autumn_R52_5812_Final_HR__aWxvdmVrZWxseQo_FocalPointCropWzQzMCw2MzAsNDQsNDUsNzUsImpwZyIsNjUsMi41XQ.jpg"]
            },
            {
                heading: "Famous Universities",
                content: "New Zealand is home to some top universities, including the University of Auckland, University of Otago, and Victoria University of Wellington.",
                // images: ["https://media.cnn.com/api/v1/images/stellar/prod/191212014621-15-new-zealand-beautiful-places-queensland.jpg?q=w_3000,h_2002,x_0,y_0,c_fill"]
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
                // images: ["https://www.zicasso.com/static/1613b7fe4e02309dcd902b3f19405262/304cc/1613b7fe4e02309dcd902b3f19405262.jpg"]
            }
        ],
        universityTypes:[
            {
                university: " public universities",
                universityType:["State Funded"," Low Tuition Fees", " Wide Range of Degree’s available "],
            },
            {
                university: " private universities",
                universityType:["Alumni Funded OR Organization Funded","Comparatively Higher Tuition Fees", " Smaller Range of Degree’s available", "Usually Specialised and focused in a particular stream"],
            },

        ]
    },

    {
        countryName: "Switzerland",
        intro:"In order to be able to study in Switzerland you require a proof of acceptance from the education institution where you will be studying. Depending on your nationality, with this letter you can either apply for a residence permit in a Swiss canton or submit a visa application to the Swiss representation covering your country of residence. ",
        countryImage:"https://www.planetware.com/wpimages/2019/08/switzerland-top-tourist-attractions-oberhofen-castle.jpg ",
        description: [
           
            {
                heading: "Visa Process",
                content: "Non-EU students need a student visa to study in Switzerland. The application process includes securing an admission letter from a Swiss institution, proving financial means, and applying at the Swiss consulate.",
                // images: ["https://as2.ftcdn.net/v2/jpg/02/72/59/51/1000_F_272595133_0MC2OcLUKwArSXYUjNIXxvMxdcrecJDS.jpg"]
            },
            {
                heading: "Famous Universities",
                content: "Top universities in Switzerland include ETH Zurich, University of Geneva, and University of Zurich.",
                // images: ["https://www.gokite.travel/wp-content/uploads/2024/08/Top-10-Attractions-to-Explore-with-Your-Switzerland-Tourist-Visa.webp"]
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
                // images: ["https://www.gokite.travel/wp-content/uploads/2024/08/3.-Jungfraujoch.webp"]
            }
        ],
        universityTypes:[
            {
                university: " public universities",
                universityType:["State Funded"," Low Tuition Fees", " Wide Range of Degree’s available "],
            },
            {
                university: " private universities",
                universityType:["Alumni Funded OR Organization Funded","Comparatively Higher Tuition Fees", " Smaller Range of Degree’s available", "Usually Specialised and focused in a particular stream"],
            },

        ]
    },
    {
        countryName: "France",
        intro:"You must have already chosen your training course or studies. For more comprehensive information about the courses and diploma preparations on offer. You must be accepted by a higher education establishment. Enrolment conditions differ depending on your nationality, please check the Etudes en France website to see if your country or territory is included in the online enrolment scheme. ",
        countryImage:" https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
        description: [
           
            {
                heading: "Visa Process",
                content: "International students need a long-term student visa to study in France. The process involves securing admission to a French institution, proving financial resources, and applying for the visa at the French consulate.",
                // images: ["https://media.istockphoto.com/id/1436430810/photo/paris-eiffel-tower.jpg?b=1&s=612x612&w=0&k=20&c=r8iR9BbuT77Z8SJqXnTG7ekBEYV97TfIC0my5kBUnzI="]
            },
            {
                heading: "Famous Universities",
                content: "France is home to prestigious institutions such as Sorbonne University, Sciences Po, and École Normale Supérieure.",
                // images: ["https://www.golanguedoc.com/images/stories/sites/425/chambord.jpg"]
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
                // images: ["https://i.pinimg.com/736x/36/4b/6f/364b6fee03749e851bd17ef04052dd95.jpg"]
            }
        ],
        universityTypes:[
            {
                university: " public universities",
                universityType:["State Funded"," Low Tuition Fees", " Wide Range of Degree’s available "],
            },
            {
                university: " private universities",
                universityType:["Alumni Funded OR Organization Funded","Comparatively Higher Tuition Fees", " Smaller Range of Degree’s available", "Usually Specialised and focused in a particular stream"],
            },

        ]
    }
];

module.exports = { data: countryData };




