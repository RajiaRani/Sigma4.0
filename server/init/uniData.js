const { model } = require("mongoose");

const uniData = [
    {
        countryName: "USA",
        universities: [
            {
                universityName: "University of New Hampshire",
                location: "Durham, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹14.47 L - 22.92 L",
                uniType: "Public",
                imageUrl:"https://images.shiksha.com/mediadata/images/1511853795php3M5jzM_270x200.jpg",
                description: "University of New Hampshire description here",
                PG: [ 
                    {
                        courseName: "MS in Computer Science",
                        degree: "Masters",
                        degreeLevel: "PG",
                        price: 1447000,
                        duration: "1 year",
                        exams: [
                            { examName: "IELTS" },
                            { examName: "TOEFL" },
                            { examName: "PTE" },
                            { examName: "GRE" },
                            { examName: "Duolingo" }
                        ],
                        scholarships: [],
                        intakes: [
                            { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" },
                            { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
                        ],
                        credential: "Bachelor's degree"
                    }
                ],
               
            },
            {
                universityName: "University of Central Florida",
                location: "Orlando, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹14.98 L",
                uniType: "Public",
                imageUrl:"https://images.shiksha.com/mediadata/images/1534139541phpyHQKLa_270x200.jpg",
                description: "University of Central Florida description here",
                PG: [
                    {
                        courseName: "MS in Computer Science",
                        degree: "Masters",
                        degreeLevel: "PG",
                        price: 1498000,
                        duration: "1 year",
                        exams: [
                            { examName: "IELTS" },
                            { examName: "TOEFL" },
                            { examName: "GRE" }
                        ],
                        scholarships: [],
                        intakes: [
                            { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" },
                            { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
                        ],
                    }
                ],
            
            },
            {
                universityName: "Miami University-Oxford",
                location: "Oxford, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹22.42 L - 24.06 L",
                uniType: "Public",
                imageUrl:"https://images.shiksha.com/mediadata/images/1593692160php5nRL9W_270x200.jpg ",
                description: "Miami University-Oxford description here",
                PG: [
                    {
                        courseName: "MS in Computer Science",
                        degree: "Masters",
                        degreeLevel: "PG",
                        price: 2242000,
                        duration: "1 year",
                        exams: [
                            { examName: "IELTS" },
                            { examName: "TOEFL" },
                            { examName: "PTE" },
                            { examName: "GRE" },
                            { examName: "Duolingo" }
                        ],
                        scholarships: [],
                        intakes: [
                            { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" },
                            { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
                        ],
                    }
                ],
          
            },
            {
                universityName: "San Jose State University",
                location: "San Jose, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹14.11 L - 14.98 L",
                uniType: "Public",
                imageUrl:"https://images.shiksha.com/mediadata/images/1533813832phpeWuPgT_270x200.jpg",
                description: "San Jose State University description here",
                PG: [
                    {
                        courseName: "MS in Computer Science",
                        degree: "Masters",
                        degreeLevel: "PG",
                        price: 1411000,
                        duration: "1 year",
                        exams: [
                            { examName: "IELTS" },
                            { examName: "TOEFL" },
                            { examName: "PTE" },
                            { examName: "GRE" }
                        ],
                        scholarships: [],
                        intakes: [
                            { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" },
                            { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
                        ],
                      
                    }
                ],
               
            },
            {
                universityName: "State University of New York at New Paltz",
                location: "New Paltz, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹16.11 L",
                uniType: "Public",
                imageUrl:"https://images.shiksha.com/mediadata/images/1547106543phpN4UlfX_270x200.jpg ",
                description: "State University of New York at New Paltz description here",
                PG: [
                    {
                        courseName: "MS in Computer Science",
                        degree: "Masters",
                        degreeLevel: "PG",
                        price: 1611000,
                        duration: "1 year",
                        exams: [
                            { examName: "IELTS" },
                            { examName: "TOEFL" },
                            { examName: "PTE" },
                            { examName: "Duolingo" }
                        ],
                        scholarships: [],
                        intakes: [
                            { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" },
                            { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
                        ],
                       
                    }
                ],
              
            },
            {
                universityName: "Temple University - USA",
                location: "Philadelphia, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹25.31 L",
                uniType: "Public",
                imageUrl:" https://images.shiksha.com/mediadata/images/1411983907php5kWUWg_270x200.jpg",
                description: "Temple University description here",
                PG: [
                    {
                        courseName: "MS in Computer Science",
                        degree: "Masters",
                        degreeLevel: "PG",
                        price: 2531000,
                        duration: "1 year",
                        exams: [
                            { examName: "IELTS" },
                            { examName: "TOEFL" },
                            { examName: "PTE" },
                            { examName: "Duolingo" }
                        ],
                        scholarships: [],
                        intakes: [
                            { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" },
                            { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
                        ],
                      
                    }
                ],
                
            },
            {
                universityName: "Mississippi State University",
                location: "Starkville, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹22.11 L - 22.23 L",
                uniType: "Public",
                imageUrl:"https://images.shiksha.com/mediadata/images/1537789181phpCB7mna_270x200.png ",
                description: "Mississippi State University description here",
                PG: [
                    {
                        courseName: "MS in Computer Science",
                        degree: "Masters",
                        degreeLevel: "PG",
                        price: 2211000,
                        duration: "1 year",
                        exams: [
                            { examName: "IELTS" },
                            { examName: "TOEFL" },
                            { examName: "GRE" }
                        ],
                        scholarships: [],
                        intakes: [
                            { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" },
                            { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
                        ],
                        
                    }
                ],
             
            },
            {
                universityName: "University of Oklahoma",
                location: "Norman, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹17.15 L",
                uniType: "Public",
                imageUrl:"https://images.shiksha.com/mediadata/images/1536667304phpl8hjpn_270x200.jpg ",
                description: "University of Oklahoma description here",
                PG: [
                    {
                        courseName: "MS in Computer Science",
                        degree: "Masters",
                        degreeLevel: "PG",
                        price: 1715000,
                        duration: "1 year",
                        exams: [
                            { examName: "IELTS" },
                            { examName: "TOEFL" },
                            { examName: "PTE" },
                            { examName: "Duolingo" }
                        ],
                        scholarships: [],
                        intakes: [
                            { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" },
                            { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
                        ],
                        
                    }
                ],
           
            },
            {
                universityName: "Ohio University",
                location: "Athens, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹13.54L",
                uniType: "Public",
                imageUrl:"https://images.shiksha.com/mediadata/images/1534497252phpLTf4xB_270x200.jpg",
                description: "Massachusetts Institute of Technology description here",
                PG: [
                    {
                        courseName: "MS in Computer Science",
                        degree: "Masters",
                        degreeLevel: "PG",
                        price: 4471000,
                        duration: "1 year",
                        exams: [
                            { examName: "IELTS" },
                            { examName: "TOEFL" },
                            { examName: "GRE" }
                        ],
                        scholarships: [],
                        intakes: [
                            { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" },
                            { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
                        ],
                    }
                ],
               
            },
            {
                universityName: "Lawrence Technological University",
                location: "Southfield, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹18.57L - ₹20.07L",
                uniType: "Private",
                imageUrl:"https://images.shiksha.com/mediadata/images/1537961817phpvz3MRj_270x200.jpg",
                description: "Texas A & M University description here",
                PG: [
                    {
                        courseName: "MS in Computer Science",
                        degree: "Masters",
                        degreeLevel: "PG",
                        price: 1534000,
                        duration: "1 year",
                        exams: [
                            { examName: "IELTS" ,
                            examName: "TOEFL",
                            examName: "Duolingo"}
                        ],
                        scholarships: [],
                        intakes: [
                            { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" }
                        ],
                
                    }
                ],
               
            },
            {
                universityName: "Western Michigan University",
                location: "Kalamazoo, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹17.29 L - 21.59 L",
                uniType: "Public",
                imageUrl:" https://images.shiksha.com/mediadata/images/1536648230phpDkvgql_270x200.jpg",
                description: "University of California - Berkeley Campus description here",
                PG: [
                    {
                        courseName: "MS in Computer Science",
                        degree: "Masters",
                        degreeLevel: "PG",
                        price: 2577000,
                        duration: "1 year",
                        exams: [
                            { examName: "IELTS" ,
                            examName: "TOEFL",
                            examName: "GRE"}
                        ],
                        scholarships: [],
                        intakes: [
                            { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
                        ],
      
                    }
                ],
               
            },
            {
                universityName: "Harrisburg University of Science and Technology",
                location: "Harrisburg, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹14.38 L",
                uniType: "Private",
                imageUrl:"https://images.shiksha.com/mediadata/images/1547015041phpRiAeqP_270x200.jpg",
                description: "Auburn University description here",
                PG: [
                    {
                        courseName: "MS in Computer Science",
                        degree: "Masters",
                        degreeLevel: "PG",
                        price: 2675000,
                        duration: "1 year",
                        exams: [
                            { examName: "IELTS" },
                            { examName: "TOEFL" },
                            {examName : "GRE"}
                        ],
                        scholarships: [],
                        intakes: [
                            { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" }
                        ],
        
                    }
                ],
             
            },
            {
                universityName: "Washington State University",
                location: "Pullman, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹24.48L",
                uniType: "Public",
                imageUrl:"https://images.shiksha.com/mediadata/images/1724676434phpSCiWz4_270x200.jpg ",
                description: "University of Wyoming description here",
                PG: [
                    {
                        courseName: "MS in Computer Science",
                        degree: "Masters",
                        degreeLevel: "PG",
                        price: 1269000,
                        duration: "1 year",
                        exams: [
                            { examName: "IELTS" },
                            { examName: "TOEFL" },
                            { examName: "GRE" },
                            {examName:"PTE"}
                        ],
                        scholarships: [],
                        intakes: [
                            { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" }
                        ],
                     
                    }
                ],
              
            },  
            {
                universityName: "University of Tulsa",
                location: "Tulsa, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹20.52 L",
                uniType: "Private",
                imageUrl: "https://images.shiksha.com/mediadata/images/1540469430php24hy98_270x200.jpg",
                description: "University of Tulsa description here",
                PG: [
                  {
                    courseName: "MS in Computer Science",
                    degree: "Masters",
                    degreeLevel: "PG",
                    price: 2052000,
                    duration: "1 year",
                    exams: [
                      { examName: "IELTS" },
                      { examName: "TOEFL" },
                      { examName: "PTE" },
                      { examName: "GRE" },
                      { examName: "Duolingo" }
                    ],
                    scholarships: [],
                    intakes: [
                      { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" }
                    ]
                  }
                ],
              },
              {
                universityName: "Tennessee Technological University",
                location: "Cookeville, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹16.6 L",
                uniType: "Public",
                imageUrl: "https://images.shiksha.com/mediadata/images/1465885102phpPvpaYi_270x200.jpg",
                description: "Tennessee Technological University description here",
                PG: [
                  {
                    courseName: "MS in Mechanical Engineering",
                    degree: "Masters",
                    degreeLevel: "PG",
                    price: 1660000,
                    duration: "2 years",
                    exams: [
                      { examName: "IELTS" },
                      { examName: "TOEFL" },
                      { examName: "PTE" },
                      { examName: "GRE" },
                      { examName: "Duolingo" }
                    ],
                    scholarships: [],
                    intakes: [
                      { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                    ]
                  }
                ],
              },
           {
                universityName: "University of Tulsa",
                location: "Tulsa, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹20.52 L",
                uniType: "Private",
                imageUrl: "https://images.shiksha.com/mediadata/images/1540469430php24hy98_270x200.jpg",
                description: "University of Tulsa description here",
                PG: [{
                    courseName: "MS in Mechanical Engineering",
                    degree: "Masters",
                    degreeLevel: "PG",
                    price: 1660000,
                    duration: "2 years",
                    exams: [
                      { examName: "IELTS" },
                      { examName: "TOEFL" },
                      { examName: "PTE" },
                      { examName: "GRE" },
                      { examName: "Duolingo" }
                    ],
                    scholarships: [],
                    intakes: [
                      { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                    ]
                  }],
              },
              {
                universityName: "Tennessee Technological University",
                location: "Cookeville, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹16.6 L",
                uniType: "Public",
                imageUrl: "https://images.shiksha.com/mediadata/images/1465885102phpPvpaYi_270x200.jpg",
                description: "Tennessee Technological University description here",
                PG: [{
                    courseName: "MS in Mechanical Engineering",
                    degree: "Masters",
                    degreeLevel: "PG",
                    price: 1660000,
                    duration: "2 years",
                    exams: [
                      { examName: "IELTS" },
                      { examName: "TOEFL" },
                      { examName: "PTE" },
                      { examName: "GRE" },
                      { examName: "Duolingo" }
                    ],
                    scholarships: [],
                    intakes: [
                      { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                    ]
                  }],
              },
              {
                universityName: "University of California - Riverside Campus",
                location: "Riverside, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹24.65 L - ₹25.11 L",
                uniType: "Public",
                imageUrl: "https://images.shiksha.com/mediadata/images/1560938046phpnYJEd9_270x200.jpg",
                description: "University of California - Riverside Campus description here",
                PG: [{
                    courseName: "MS in Mechanical Engineering",
                    degree: "Masters",
                    degreeLevel: "PG",
                    price: 1660000,
                    duration: "2 years",
                    exams: [
                      { examName: "IELTS" },
                      { examName: "TOEFL" },
                      { examName: "PTE" },
                      { examName: "GRE" },
                      { examName: "Duolingo" }
                    ],
                    scholarships: [],
                    intakes: [
                      { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                    ]
                  }],
              },
              {
                universityName: "University of North Dakota",
                location: "Grand Forks, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹14.58 L",
                uniType: "Public",
                imageUrl: "https://images.shiksha.com/mediadata/images/1718708185php2cPc55_270x200.jpg",
                description: "University of North Dakota description here",
                PG: [{
                    courseName: "MS in Mechanical Engineering",
                    degree: "Masters",
                    degreeLevel: "PG",
                    price: 1660000,
                    duration: "2 years",
                    exams: [
                      { examName: "IELTS" },
                      { examName: "TOEFL" },
                      { examName: "PTE" },
                      { examName: "GRE" },
                      { examName: "Duolingo" }
                    ],
                    scholarships: [],
                    intakes: [
                      { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                    ]
                  }],
              },
              {
                universityName: "Drexel University",
                location: "Philadelphia, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹30.31 L - ₹32.37 L",
                uniType: "Private",
                imageUrl: "https://images.shiksha.com/mediadata/images/1533899516phpJZqzni_270x200.jpg",
                description: "Drexel University description here",
                PG: [{
                    courseName: "MS in Mechanical Engineering",
                    degree: "Masters",
                    degreeLevel: "PG",
                    price: 1660000,
                    duration: "2 years",
                    exams: [
                      { examName: "IELTS" },
                      { examName: "TOEFL" },
                      { examName: "PTE" },
                      { examName: "GRE" },
                      { examName: "Duolingo" }
                    ],
                    scholarships: [],
                    intakes: [
                      { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                    ]
                  }],
              },
              {
                universityName: "University of Colorado Denver",
                location: "Denver, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹19.12 L",
                uniType: "Public",
                imageUrl: "https://images.shiksha.com/mediadata/images/1535106307phpUqQS3g_270x200.jpg",
                description: "University of Colorado Denver description here",
                PG: [{
                    courseName: "MS in Mechanical Engineering",
                    degree: "Masters",
                    degreeLevel: "PG",
                    price: 1660000,
                    duration: "2 years",
                    exams: [
                      { examName: "IELTS" },
                      { examName: "TOEFL" },
                      { examName: "PTE" },
                      { examName: "GRE" },
                      { examName: "Duolingo" }
                    ],
                    scholarships: [],
                    intakes: [
                      { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                    ]
                  }],
              },
              {
                universityName: "Northeastern University",
                location: "Boston, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹19.54 L - ₹24.94 L",
                uniType: "Private",
                imageUrl: "https://images.shiksha.com/mediadata/images/1532692041php44m6zE_270x200.jpg",
                description: "Northeastern University description here",
                PG: [{
                    courseName: "MS in Mechanical Engineering",
                    degree: "Masters",
                    degreeLevel: "PG",
                    price: 1660000,
                    duration: "2 years",
                    exams: [
                      { examName: "IELTS" },
                      { examName: "TOEFL" },
                      { examName: "PTE" },
                      { examName: "GRE" },
                      { examName: "Duolingo" }
                    ],
                    scholarships: [],
                    intakes: [
                      { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                    ]
                  }],
              },
              {
                universityName: "The University of Utah",
                location: "Salt Lake, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹26.93 L - ₹34.47 L",
                uniType: "Public",
                imageUrl: "https://images.shiksha.com/mediadata/images/1411123131phpYoVgbH_270x200.jpg",
                description: "The University of Utah description here",
                PG: [{
                    courseName: "MS in Mechanical Engineering",
                    degree: "Masters",
                    degreeLevel: "PG",
                    price: 1660000,
                    duration: "2 years",
                    exams: [
                      { examName: "IELTS" },
                      { examName: "TOEFL" },
                      { examName: "PTE" },
                      { examName: "GRE" },
                      { examName: "Duolingo" }
                    ],
                    scholarships: [],
                    intakes: [
                      { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                    ]
                  }],
              },
              {
                universityName: "Southeast Missouri State University",
                location: "Cape Girardeau, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹10.54 L",
                uniType: "Public",
                imageUrl: "https://images.shiksha.com/mediadata/images/1539599863phpN0SSgZ_270x200.jpg",
                description: "Southeast Missouri State University description here",
                PG: [{
                    courseName: "MS in Mechanical Engineering",
                    degree: "Masters",
                    degreeLevel: "PG",
                    price: 1660000,
                    duration: "2 years",
                    exams: [
                      { examName: "IELTS" },
                      { examName: "TOEFL" },
                      { examName: "PTE" },
                      { examName: "GRE" },
                      { examName: "Duolingo" }
                    ],
                    scholarships: [],
                    intakes: [
                      { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                    ]
                  }],
              },
              {
                universityName: "California State University - Chico Campus",
                location: "Chico, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹13.41 L - ₹13.62 L",
                uniType: "Public",
                imageUrl: "https://images.shiksha.com/mediadata/images/1684135058phpmW1v0M_270x200.jpg",
                description: "California State University - Chico Campus description here",
                PG: [{
                    courseName: "MS in Mechanical Engineering",
                    degree: "Masters",
                    degreeLevel: "PG",
                    price: 1660000,
                    duration: "2 years",
                    exams: [
                      { examName: "IELTS" },
                      { examName: "TOEFL" },
                      { examName: "PTE" },
                      { examName: "GRE" },
                      { examName: "Duolingo" }
                    ],
                    scholarships: [],
                    intakes: [
                      { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                    ]
                  }],
              },
              {
                universityName: "California State University San Marcos",
                location: "San Marcos, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹12.34 L",
                uniType: "Public",
                imageUrl: "https://images.shiksha.com/mediadata/images/1496299809phpq1z0wl_270x200.jpg",
                description: "California State University San Marcos description here",
                PG: [{
                    courseName: "MS in Mechanical Engineering",
                    degree: "Masters",
                    degreeLevel: "PG",
                    price: 1660000,
                    duration: "2 years",
                    exams: [
                      { examName: "IELTS" },
                      { examName: "TOEFL" },
                      { examName: "PTE" },
                      { examName: "GRE" },
                      { examName: "Duolingo" }
                    ],
                    scholarships: [],
                    intakes: [
                      { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                    ]
                  }],
              },
              {
                universityName: "The University of Texas at San Antonio",
                location: "San Antonio, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹22.5 L - ₹25.16 L",
                uniType: "Public",
                imageUrl: "https://images.shiksha.com/mediadata/images/1433846506phpc7Akkg_270x200.jpg",
                description: "The University of Texas at San Antonio description here",
                PG: [{
                    courseName: "MS in Mechanical Engineering",
                    degree: "Masters",
                    degreeLevel: "PG",
                    price: 1660000,
                    duration: "2 years",
                    exams: [
                      { examName: "IELTS" },
                      { examName: "TOEFL" },
                      { examName: "PTE" },
                      { examName: "GRE" },
                      { examName: "Duolingo" }
                    ],
                    scholarships: [],
                    intakes: [
                      { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                    ]
                  }],
              },
              {
                universityName: "Northern Arizona University",
                location: "Flagstaff, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹22.56 L",
                uniType: "Public",
                imageUrl: "https://images.shiksha.com/mediadata/images/1493104266phpe0wXqh_270x200.jpg",
                description: "Northern Arizona University description here",
                PG: [{
                    courseName: "MS in Mechanical Engineering",
                    degree: "Masters",
                    degreeLevel: "PG",
                    price: 1660000,
                    duration: "2 years",
                    exams: [
                      { examName: "IELTS" },
                      { examName: "TOEFL" },
                      { examName: "PTE" },
                      { examName: "GRE" },
                      { examName: "Duolingo" }
                    ],
                    scholarships: [],
                    intakes: [
                      { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                    ]
                  }],
              },
              {
                universityName: "California State University Sacramento",
                location: "Sacramento, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹13.19 L - ₹14 L",
                uniType: "Public",
                imageUrl: "https://images.shiksha.com/mediadata/images/1495093826phpkj3pKx_270x200.jpg",
                description: "California State University Sacramento description here",
                PG: [{
                    courseName: "MS in Mechanical Engineering",
                    degree: "Masters",
                    degreeLevel: "PG",
                    price: 1660000,
                    duration: "2 years",
                    exams: [
                      { examName: "IELTS" },
                      { examName: "TOEFL" },
                      { examName: "PTE" },
                      { examName: "GRE" },
                      { examName: "Duolingo" }
                    ],
                    scholarships: [],
                    intakes: [
                      { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                    ]
                  }],
              },
              {
                universityName: "Florida Atlantic University",
                location: "Boca Raton, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹14.59 L - ₹14.72 L",
                uniType: "Public",
                imageUrl: "https://images.shiksha.com/mediadata/images/1416912437phpLSfw7L_270x200.jpg",
                description: "Florida Atlantic University description here",
                PG: [{
                    courseName: "MS in Mechanical Engineering",
                    degree: "Masters",
                    degreeLevel: "PG",
                    price: 1660000,
                    duration: "2 years",
                    exams: [
                      { examName: "IELTS" },
                      { examName: "TOEFL" },
                      { examName: "PTE" },
                      { examName: "GRE" },
                      { examName: "Duolingo" }
                    ],
                    scholarships: [],
                    intakes: [
                      { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                    ]
                  }],
              },
              {
                universityName: "University of South Dakota",
                location: "Vermillion, USA",
                ranking: null,
                acceptanceRate: null,
                fees: "₹10.91 L",
                uniType: "Public",
                imageUrl: "https://images.shiksha.com/mediadata/images/1634125647phpP6AT0j_270x200.jpg",
                description: "University of South Dakota description here",
                PG: [{
                    courseName: "MS in Mechanical Engineering",
                    degree: "Masters",
                    degreeLevel: "PG",
                    price: 1660000,
                    duration: "2 years",
                    exams: [
                      { examName: "IELTS" },
                      { examName: "TOEFL" },
                      { examName: "PTE" },
                      { examName: "GRE" },
                      { examName: "Duolingo" }
                    ],
                    scholarships: [],
                    intakes: [
                      { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                    ]
                  }],
              }
        ]
    },
    {
      countryName:"Canada",
     universities:[
        {
          universityName: "The University of British Columbia",
          location: "Vancouver, Canada",
          ranking: null,
          acceptanceRate: null,
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1533551492phpLKGGFI_270x200.jpg",
          description: "University of South Dakota description here",
          PG: [
            {
              courseName: "MS in Mechanical Engineering",
              degree: "Masters",
              degreeLevel: "PG",
              price: 1660000,
              duration: "2 years",
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "PTE" },
                { examName: "GRE" },
                { examName: "Duolingo" }
              ],
              scholarships: [],
              intakes: [
                { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
              ]
            }
          ]
        },
        {
          universityName: "University of Alberta",
          location: "Edmonton, Canada",
          ranking: null,
          acceptanceRate: null,
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4_270x200.jpg",
          description: "University of Alberta description here",
          PG: [
            {
              courseName: "MS in Computer Science",
              degree: "Masters",
              degreeLevel: "PG",
              price: 1500000,
              duration: "2 years",
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "PTE" },
                { examName: "GRE" }
              ],
              scholarships: [],
              intakes: [
                { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
              ]
            }
          ]
        },
        {
          universityName: "Northeastern University, Canada",
          location: "Toronto, Canada",
          ranking: null,
          acceptanceRate: null,
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1722231922php5eJzx7_270x200.jpg",
          description: "Northeastern University description here",
          PG: [
            {
              courseName: "MS in Data Science",
              degree: "Masters",
              degreeLevel: "PG",
              price: 2000000,
              duration: "2 years",
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "PTE" }
              ],
              scholarships: [],
              intakes: [
                { intakeName: "Spring", intakeDate: "2024-01-01", deadline: "2023-11-01" }
              ]
            }
          ]
        },
        {
          universityName: "Trent University",
          location: "Peterborough, Canada",
          ranking: null,
          acceptanceRate: null,
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1537356102php0pdMGX_270x200.jpg",
          description: "Trent University description here",
          PG: [
            {
              courseName: "MA in International Development",
              degree: "Masters",
              degreeLevel: "PG",
              price: 1500000,
              duration: "2 years",
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" }
              ],
              scholarships: [],
              intakes: [
                { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
              ]
            }
          ]
        },
        {
          universityName: "McGill University",
          location: "Montreal, Canada",
          ranking: null,
          acceptanceRate: null,
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1513922151phpyhMkzk_270x200.png",
          description: "McGill University description here",
          PG: [
            {
              courseName: "MBA",
              degree: "Masters",
              degreeLevel: "PG",
              price: 2500000,
              duration: "2 years",
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "GMAT" }
              ],
              scholarships: [],
              intakes: [
                { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
              ]
            }
          ]
        },
        {
          universityName: "University of Calgary",
          location: "Calgary, Canada",
          ranking: null,
          acceptanceRate: null,
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1588769013phpQ3woUn_270x200.jpg",
          description: "University of Calgary description here",
          PG: [
            {
              courseName: "MSc in Petroleum Engineering",
              degree: "Masters",
              degreeLevel: "PG",
              price: 1800000,
              duration: "2 years",
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "GRE" }
              ],
              scholarships: [],
              intakes: [
                { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
              ]
            }
          ]
        },
        {
          universityName: "McMaster University",
          location: "Hamilton, Canada",
          ranking: null,
          acceptanceRate: null,
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1533813768phpVozIV9_270x200.jpg",
          description: "McMaster University description here",
          PG: [
            {
              courseName: "MSc in Health Sciences",
              degree: "Masters",
              degreeLevel: "PG",
              price: 1600000,
              duration: "2 years",
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "PTE" }
              ],
              scholarships: [],
              intakes: [
                { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
              ]
            }
          ]
        },
        {
          universityName: "Thompson Rivers University",
          location: "Kamloops, Canada",
          ranking: null,
          acceptanceRate: null,
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1533105684phpWW5jsZ_270x200.jpg",
          description: "Thompson Rivers University description here",
          PG: [
            {
              courseName: "MBA",
              degree: "Masters",
              degreeLevel: "PG",
              price: 1700000,
              duration: "2 years",
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "PTE" }
              ],
              scholarships: [],
              intakes: [
                { intakeName: "Spring", intakeDate: "2024-01-01", deadline: "2023-11-01" }
              ]
            }
          ]
        },
        {
          universityName: "University of Niagara Falls",
          location: "Niagara Falls, Canada",
          ranking: null,
          acceptanceRate: null,
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1720173555phprq7In5_270x200.jpg",
          description: "University of Niagara Falls description here",
          PG: [
            {
              courseName: "MS in Business Analytics",
              degree: "Masters",
              degreeLevel: "PG",
              price: 1900000,
              duration: "2 years",
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" }
              ],
              scholarships: [],
              intakes: [
                { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
              ]
            }
          ]
        },
        {
          universityName: "Western University",
          location: "London, Canada",
          ranking: null,
          acceptanceRate: null,
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1534414486phpdHsnx1_270x200.jpg",
          description: "Western University description here",
          PG: [
            {
              courseName: "MSc in Finance",
              degree: "Masters",
              degreeLevel: "PG",
              price: 2100000,
              duration: "2 years",
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "GMAT" }
              ],
              scholarships: [],
              intakes: [
                { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
              ]
            }
          ]
        },
        {
            universityName: "The University of British Columbia",
            location: "Vancouver, Canada",
            ranking: null,
            acceptanceRate: null,
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1533551492phpLKGGFI_270x200.jpg",
            description: "University of British Columbia description here",
            PG: [
              {
                courseName: "MS in Mechanical Engineering",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1660000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "TOEFL" },
                  { examName: "PTE" },
                  { examName: "GRE" },
                  { examName: "Duolingo" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                ]
              }
            ]
          },
          {
            universityName: "Carleton University",
            location: "Ottawa, Canada",
            ranking: null,
            acceptanceRate: null,
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1533124606phpkOXXXA_270x200.jpg",
            description: "Carleton University description here",
            PG: [
              {
                courseName: "Master of Business Administration (MBA)",
                degree: "Masters",
                degreeLevel: "PG",
                price: 690000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "TOEFL" },
                  { examName: "PTE" },
                  { examName: "GMAT" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
                ]
              }
            ]
          },
          {
            universityName: "University of Sherbrooke",
            location: "Sherbrooke, Canada",
            ranking: null,
            acceptanceRate: null,
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1541654396phpQsQqjc_270x200.jpg",
            description: "University of Sherbrooke description here",
            PG: [
              {
                courseName: "Master of Engineering",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1506000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
                ]
              }
            ]
          },
          {
            universityName: "University of Guelph",
            location: "Guelph, Canada",
            ranking: null,
            acceptanceRate: null,
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1612268932phpX8ONqb_270x200.jpg",
            description: "University of Guelph description here",
            PG: [
              {
                courseName: "Master of Applied Nutrition",
                degree: "Masters",
                degreeLevel: "PG",
                price: 960000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "TOEFL" },
                  { examName: "PTE" },
                  { examName: "GMAT" },
                  { examName: "GRE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                ]
              }
            ]
          },
          {
            universityName: "University of New Brunswick",
            location: "Saint John, Canada",
            ranking: null,
            acceptanceRate: null,
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1537349560phplO4JPQ_270x200.jpg",
            description: "University of New Brunswick description here",
            PG: [
              {
                courseName: "Master of Science in Computer Science",
                degree: "Masters",
                degreeLevel: "PG",
                price: 863000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "TOEFL" },
                  { examName: "PTE" },
                  { examName: "GMAT" },
                  { examName: "GRE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
                ]
              }
            ]
          },
          {
            universityName: "Thompson Rivers University",
            location: "Kamloops, Canada",
            ranking: null,
            acceptanceRate: null,
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1533105684phpWW5jsZ_270x200.jpg",
            description: "Thompson Rivers University description here",
            PG: [
              {
                courseName: "Master of Business Administration",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1675000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "TOEFL" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
                ]
              }
            ]
          },
          {
            universityName: "Lakehead University",
            location: "Thunder Bay, Canada",
            ranking: null,
            acceptanceRate: null,
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1691407540phpECD11i_270x200.jpg",
            description: "Lakehead University description here",
            PG: [
              {
                courseName: "Master of Science in Engineering",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1428000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "TOEFL" },
                  { examName: "PTE" },
                  { examName: "GMAT" },
                  { examName: "GRE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
                ]
              }
            ]
          },
          {
            universityName: "Toronto Metropolitan University",
            location: "Toronto, Canada",
            ranking: null,
            acceptanceRate: null,
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1533119980phpwv0DeJ_270x200.jpg",
            description: "Toronto Metropolitan University description here",
            PG: [
              {
                courseName: "Master of Arts in International Relations",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1477000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "TOEFL" },
                  { examName: "PTE" },
                  { examName: "GMAT" },
                  { examName: "GRE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
                ]
              }
            ]
          },
          {
            universityName: "University of Northern British Columbia",
            location: "Prince George, Canada",
            ranking: null,
            acceptanceRate: null,
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1510648314phpuNt6lc_270x200.jpg",
            description: "University of Northern British Columbia description here",
            PG: [
              {
                courseName: "Master of Science in Forestry",
                degree: "Masters",
                degreeLevel: "PG",
                price: 316000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "TOEFL" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
                ]
              }
            ]
          },
          {
            universityName: "Ontario Tech University",
            location: "Oshawa, Canada",
            ranking: null,
            acceptanceRate: null,
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1539254062phpEPZ5rw.jpeg",
            description: "Ontario Tech University description here",
            PG: [
              {
                courseName: "Master of Science in Management",
                degree: "Masters",
                degreeLevel: "PG",
                price: 700000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "TOEFL" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
                ]
              }
            ]
          },
            {
              universityName: "Brock University",
              location: "St. Catharines, Canada",
              ranking: null,
              acceptanceRate: null,
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1534245813phpeNlhCV_270x200.png",
              description: "1st year Tuition Fees ₹8.35 L - 31.69 L",
              PG: [],
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "PTE" },
                { examName: "GMAT" },
                { examName: "GRE" }
              ]
            },
            {
              universityName: "Trinity Western University",
              location: "Langley, Canada",
              ranking: null,
              acceptanceRate: null,
              uniType: "Private",
              imageUrl: "https://images.shiksha.com/mediadata/images/1539605213phpjXYJCM_270x200.jpg",
              description: "1st year Tuition Fees ₹12.13 L - 14.99 L",
              PG: [],
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "PTE" },
                { examName: "Duolingo" }
              ]
            },
            {
              universityName: "Vancouver Island University",
              location: "Nanaimo, Canada",
              ranking: null,
              acceptanceRate: null,
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1534157184phpt8csvM_270x200.jpg",
              description: "1st year Tuition Fees ₹8.58 L - 19.15 L",
              PG: [],
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "PTE" }
              ]
            },
            {
              universityName: "Laurentian University",
              location: "Greater Sudbury, Canada",
              ranking: null,
              acceptanceRate: null,
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1537264772php506TJF_270x200.jpg",
              description: "1st year Tuition Fees ₹20.13 L",
              PG: [],
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "PTE" },
                { examName: "GMAT" },
                { examName: "Duolingo" }
              ]
            },
            {
              universityName: "Wilfrid Laurier University",
              location: "Waterloo, Canada",
              ranking: null,
              acceptanceRate: null,
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1535113690phpx3C5ZQ_270x200.jpg",
              description: "1st year Tuition Fees ₹13.54 L - 32.53 L",
              PG: [],
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "PTE" },
                { examName: "GMAT" },
                { examName: "GRE" }
              ]
            },
            {
              universityName: "New York Institute of Technology - Vancouver Campus",
              location: "Vancouver, Canada",
              ranking: null,
              acceptanceRate: null,
              uniType: "Private",
              imageUrl: "https://images.shiksha.ws/public/images/instDefault.png",
              description: "1st year Tuition Fees ₹11.83 L - 14.09 L",
              PG: [],
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "PTE" }
              ]
            },
            {
              universityName: "Cape Breton University",
              location: "Sydney, Canada",
              ranking: null,
              acceptanceRate: null,
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1534133462phpstsHGA_270x200.jpg",
              description: "1st year Tuition Fees ₹17.63 L",
              PG: [],
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "PTE" },
                { examName: "GMAT" },
                { examName: "GRE" }
              ]
            },
            {
              universityName: "University of Lethbridge",
              location: "Lethbridge, Canada",
              ranking: null,
              acceptanceRate: null,
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1525413618phpbbrx5D_270x200.jpg",
              description: "1st year Tuition Fees ₹8.4 L - 14.99 L",
              PG: [],
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "PTE" },
                { examName: "GMAT" },
                { examName: "GRE" }
              ]
            },
            {
              universityName: "HEC Montreal",
              location: "Montreal, Canada",
              ranking: null,
              acceptanceRate: null,
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1421845161php8ZmDKL_270x200.jpg",
              description: "1st year Tuition Fees ₹10.73 L - 38.86 L",
              PG: [],
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "GMAT" },
                { examName: "GRE" }
              ]
            },
            {
              universityName: "University of Prince Edward Island",
              location: "Charlottetown, Canada",
              ranking: null,
              acceptanceRate: null,
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1504245848php4uKv8g_270x200.jpg",
              description: "1st year Tuition Fees ₹13.86 L",
              PG: [],
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "PTE" }
              ]
            },
            {
              universityName: "Saint Mary's University",
              location: "Halifax, Canada",
              ranking: null,
              acceptanceRate: null,
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1539242650phpAv76Gj_270x200.jpg",
              description: "1st year Tuition Fees ₹22.15 L - 28.87 L",
              PG: [],
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "PTE" },
                { examName: "GMAT" },
                { examName: "GRE" }
              ]
            },
            {
              universityName: "Trent University",
              location: "Peterborough, Canada",
              ranking: null,
              acceptanceRate: null,
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1537356102php0pdMGX_270x200.jpg",
              description: "1st year Tuition Fees ₹20.59 L",
              PG: [],
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "PTE" }
              ]
            },
            {
              universityName: "Royal Roads University",
              location: "Colwood, Canada",
              ranking: null,
              acceptanceRate: null,
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1534842387phphdfhwd_270x200.jpg",
              description: "1st year Tuition Fees ₹9.89 L - 23.34 L",
              PG: [],
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "PTE" },
                { examName: "Duolingo" }
              ]
            },
            {
              universityName: "Luther College",
              location: "Regina, Canada",
              ranking: null,
              acceptanceRate: null,
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1399007171phpNaGHWz_270x200.jpg",
              description: "1st year Tuition Fees ₹8.93 L",
              PG: [],
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "GMAT" }
              ]
            },
            {
              universityName: "Niagara University in Ontario",
              location: "Niagara Falls, Canada",
              ranking: null,
              acceptanceRate: null,
              uniType: "Private",
              imageUrl: "https://images.shiksha.com/mediadata/images/1712651668phpxuEDEp_205x160.jpg",
              description: "1st year Tuition Fees ₹12.21 L",
              PG: [],
              exams: [
                { examName: "IELTS" },
                { examName: "TOEFL" },
                { examName: "PTE" }
              ]
            }, 
      ]
    },
    {
      countryName:"UK",
      universities:[
        
          {
            universityName: "University of Bath",
            location: "Bath, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1497272086phpAUVQB1_270x200.jpg",
            description: "University of Bath description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1599000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "TOEFL" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "Cardiff University",
            location: "Cardiff, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1534412382phpYPav1d_270x200.jpg",
            description: "Cardiff University description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1756000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "University of Exeter",
            location: "Exeter, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1534164648phpB3vNSE_270x200.jpg",
            description: "University of Exeter description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1621000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "PTE" },
                  { examName: "Duolingo" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "University For The Creative Arts",
            location: "Canterbury, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1495605792phpNksALN_270x200.jpg",
            description: "University For The Creative Arts description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1649000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "University of Northampton",
            location: "Northampton, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1544164615phpEXodJC_270x200.jpg",
            description: "University of Northampton description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1677000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "Newcastle University",
            location: "Newcastle upon Tyne, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1534939277phpGjaL0k_270x200.jpg",
            description: "Newcastle University description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 2013000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "University of Leicester",
            location: "Leicester, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1510895565php11NheX_270x200.jpg",
            description: "University of Leicester description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 2264000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "TOEFL" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "University of Aberdeen",
            location: "Aberdeen, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1535027764phpVZhAd9_270x200.jpg",
            description: "University of Aberdeen description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 2057000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "TOEFL" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "University of Salford",
            location: "Manchester, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1537439793phpsk7VHL_270x200.jpg",
            description: "University of Salford description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1459000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "University of Chester",
            location: "Chester, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1398425274phpzPQ1SO_270x200.jpg",
            description: "University of Chester description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1504000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "University of York",
            location: "York, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1502275045phpRDE4IE_270x200.jpg",
            description: "University of York description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1985000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "PTE" },
                  { examName: "Duolingo" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "University of Surrey",
            location: "Guildford, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1534847799phpuLle9A_270x200.jpg",
            description: "University of Surrey description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1789000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "TOEFL" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "University of East Anglia",
            location: "Norwich, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1538993958phpSkMphT_270x200.png",
            description: "University of East Anglia description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1107000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "PTE" },
                  { examName: "Duolingo" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "The University of Liverpool",
            location: "Liverpool, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1398677512phpKUT2VW_270x200.jpg",
            description: "The University of Liverpool description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 2046000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "PTE" },
                  { examName: "Duolingo" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "University of West London",
            location: "London, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1538134668phpWlScO4_270x200.jpg",
            description: "University of West London description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1649000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "PTE" },
                  { examName: "Duolingo" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "Lancaster University",
            location: "Lancaster, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1399365520phpMsar9g_270x200.jpg",
            description: "Lancaster University description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 2230000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "The University of Sheffield",
            location: "Sheffield, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1541413835phptim5jy_270x200.jpg",
            description: "The University of Sheffield description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 3075000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "Durham University",
            location: "Durham, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1500456340phpN4RhCN_270x200.jpg",
            description: "Durham University description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 2264000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "University of Strathclyde",
            location: "Glasgow, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1505216876phpMN5NNk_270x200.jpg",
            description: "University of Strathclyde description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1669000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "TOEFL" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "Leeds Beckett University",
            location: "Leeds, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1538131314phpvtUQLu_270x200.jpg",
            description: "Leeds Beckett University description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1677000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
          {
            universityName: "University of East London",
            location: "London, UK",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1537954598phpJk1FBD_270x200.jpg",
            description: "University of East London description here",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: 1510000,
                duration: "2 years",
                exams: [
                  { examName: "IELTS" },
                  { examName: "PTE" }
                ],
                scholarships: [],
                intakes: [
                  { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                ]
              }
            ]
          },
            {
              universityName: "University of St Andrews",
              location: "St Andrews, UK",
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1537957164phpaveJAV_270x200.jpg",
              description: "University of St Andrews description here",
              PG: [
                {
                  courseName: "MS in [Course Name]",
                  degree: "Masters",
                  degreeLevel: "PG",
                  price: 2278000,
                  duration: "2 years",
                  exams: [
                    { examName: "IELTS" },
                    { examName: "PTE" }
                  ],
                  scholarships: [],
                  intakes: [
                    { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                  ]
                }
              ]
            },
            {
              universityName: "University of Strathclyde",
              location: "Glasgow, UK",
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1505216876phpMN5NNk_270x200.jpg",
              description: "University of Strathclyde description here",
              PG: [
                {
                  courseName: "MS in [Course Name]",
                  degree: "Masters",
                  degreeLevel: "PG",
                  price: 1669000,
                  duration: "2 years",
                  exams: [
                    { examName: "IELTS" },
                    { examName: "TOEFL" },
                    { examName: "PTE" }
                  ],
                  scholarships: [],
                  intakes: [
                    { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                  ]
                }
              ]
            },
            {
              universityName: "University of Dundee",
              location: "Dundee, UK",
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1536661489phpveDIlW_270x200.jpg",
              description: "University of Dundee description here",
              PG: [
                {
                  courseName: "MS in [Course Name]",
                  degree: "Masters",
                  degreeLevel: "PG",
                  price: 2225000,
                  duration: "2 years",
                  exams: [
                    { examName: "IELTS" },
                    { examName: "TOEFL" },
                    { examName: "PTE" }
                  ],
                  scholarships: [],
                  intakes: [
                    { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                  ]
                }
              ]
            },
            {
              universityName: "University of Exeter",
              location: "Exeter, UK",
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1534164648phpB3vNSE_270x200.jpg",
              description: "University of Exeter description here",
              PG: [
                {
                  courseName: "MS in [Course Name]",
                  degree: "Masters",
                  degreeLevel: "PG",
                  price: 2605000,
                  duration: "2 years",
                  exams: [
                    { examName: "IELTS" },
                    { examName: "PTE" },
                    { examName: "Duolingo" }
                  ],
                  scholarships: [],
                  intakes: [
                    { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                  ]
                }
              ]
            },
            {
              universityName: "Teesside University",
              location: "Middlesbrough, UK",
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1505278845phpBPeYvg_270x200.jpg",
              description: "Teesside University description here",
              PG: [
                {
                  courseName: "MS in [Course Name]",
                  degree: "Masters",
                  degreeLevel: "PG",
                  price: 839000,
                  duration: "2 years",
                  exams: [
                    { examName: "IELTS" },
                    { examName: "PTE" }
                  ],
                  scholarships: [],
                  intakes: [
                    { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                  ]
                }
              ]
            },
            {
              universityName: "Northumbria University",
              location: "Newcastle upon Tyne, UK",
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1535022251php6npTks_270x200.jpg",
              description: "Northumbria University description here",
              PG: [
                {
                  courseName: "MS in [Course Name]",
                  degree: "Masters",
                  degreeLevel: "PG",
                  price: 1230000,
                  duration: "2 years",
                  exams: [
                    { examName: "IELTS" },
                    { examName: "PTE" },
                    { examName: "Duolingo" }
                  ],
                  scholarships: [],
                  intakes: [
                    { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                  ]
                }
              ]
            },
            {
              universityName: "Swansea University",
              location: "Swansea, UK",
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1537171595php6YGVk7_270x200.jpg",
              description: "Swansea University description here",
              PG: [
                {
                  courseName: "MS in [Course Name]",
                  degree: "Masters",
                  degreeLevel: "PG",
                  price: 503000,
                  duration: "2 years",
                  exams: [
                    { examName: "IELTS" },
                    { examName: "PTE" }
                  ],
                  scholarships: [],
                  intakes: [
                    { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                  ]
                }
              ]
            },
            {
              universityName: "Ulster University",
              location: "Belfast, UK",
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1539175183phpCWtVPn_270x200.jpg",
              description: "Ulster University description here",
              PG: [
                {
                  courseName: "MS in [Course Name]",
                  degree: "Masters",
                  degreeLevel: "PG",
                  price: 1718000,
                  duration: "2 years",
                  exams: [
                    { examName: "IELTS" },
                    { examName: "PTE" }
                  ],
                  scholarships: [],
                  intakes: [
                    { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                  ]
                }
              ]
            },
            {
              universityName: "Nottingham Trent University",
              location: "Nottingham, UK",
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1533899411phpMRcyBS_270x200.jpg",
              description: "Nottingham Trent University description here",
              PG: [
                {
                  courseName: "MS in [Course Name]",
                  degree: "Masters",
                  degreeLevel: "PG",
                  price: 1733000,
                  duration: "2 years",
                  exams: [
                    { examName: "IELTS" },
                    { examName: "PTE" }
                  ],
                  scholarships: [],
                  intakes: [
                    { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                  ]
                }
              ]
            },
            {
              universityName: "Aston University",
              location: "Birmingham, UK",
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1628775997phpvI1eiu_270x200.jpg",
              description: "Aston University description here",
              PG: [
                {
                  courseName: "MS in [Course Name]",
                  degree: "Masters",
                  degreeLevel: "PG",
                  price: 1828000,
                  duration: "2 years",
                  exams: [
                    { examName: "IELTS" },
                    { examName: "PTE" },
                    { examName: "Duolingo" }
                  ],
                  scholarships: [],
                  intakes: [
                    { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                  ]
                }
              ]
            },
            {
              universityName: "University of Essex",
              location: "Colchester, UK",
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1537166112php0PZWLJ_270x200.jpg",
              description: "University of Essex description here",
              PG: [
                {
                  courseName: "MS in [Course Name]",
                  degree: "Masters",
                  degreeLevel: "PG",
                  price: 1672000,
                  duration: "2 years",
                  exams: [
                    { examName: "IELTS" },
                    { examName: "PTE" }
                  ],
                  scholarships: [],
                  intakes: [
                    { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                  ]
                }
              ]
            },
            {
              universityName: "Heriot Watt University",
              location: "Edinburgh, UK",
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1534939353phpG1whOx_270x200.jpg",
              description: "Heriot Watt University description here",
              PG: [
                {
                  courseName: "MS in [Course Name]",
                  degree: "Masters",
                  degreeLevel: "PG",
                  price: 1810000,
                  duration: "2 years",
                  exams: [
                    { examName: "IELTS" },
                    { examName: "PTE" }
                  ],
                  scholarships: [],
                  intakes: [
                    { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                  ]
                }
              ]
            },
            {
              universityName: "Cardiff Metropolitan University",
              location: "Cardiff, UK",
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1540213123phpfqvrf6_270x200.jpg",
              description: "Cardiff Metropolitan University description here",
              PG: [
                {
                  courseName: "MS in [Course Name]",
                  degree: "Masters",
                  degreeLevel: "PG",
                  price: 1733000,
                  duration: "2 years",
                  exams: [
                    { examName: "IELTS" },
                    { examName: "PTE" }
                  ],
                  scholarships: [],
                  intakes: [
                    { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                  ]
                }
              ]
            },
            {
              universityName: "University of Reading",
              location: "Reading, UK",
              uniType: "Public",
              imageUrl: "https://images.shiksha.com/mediadata/images/1537948985php5WxNlJ_270x200.jpg",
              description: "University of Reading description here",
              PG: [
                {
                  courseName: "MS in [Course Name]",
                  degree: "Masters",
                  degreeLevel: "PG",
                  price: 1800000,
                  duration: "2 years",
                  exams: [
                    { examName: "IELTS" },
                    { examName: "PTE" },
                    { examName: "Duolingo" }
                  ],
                  scholarships: [],
                  intakes: [
                    { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
                  ]
                }
              ]
            },
            
  {
    universityName: "CITY, University of London",
    location: "London, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1699356458php8vk1X1_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹15.1 L - 31.87 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Ulster University",
    location: "Belfast, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1539175183phpCWtVPn_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹17.17 L - 19.83 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Middlesex University London",
    location: "Middlesex, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1505799540phprXYrTp_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹12.86 L - 19.68 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Bath",
    location: "Bath, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1497272086phpAUVQB1_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹15.99 L - 35.34 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Nottingham Trent University",
    location: "Nottingham, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1533899411phpMRcyBS_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹16.55 L - 23.87 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Dundee",
    location: "Dundee, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1536661489phpveDIlW_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹3.92 L - 29.74 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Loughborough University",
    location: "Leicester, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1534242372phpRKpgze_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹22.31 L - 34.11 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Northampton",
    location: "Northampton, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1544164615phpEXodJC_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹16.77 L - 19 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Leeds Beckett University",
    location: "Leeds, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1538131314phpvtUQLu_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹16.77 L - 19.57 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Kent",
    location: "Canterbury, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1534847210phphYJtKK_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹18.43 L - 26.72 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Portsmouth",
    location: "Portsmouth, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1683613825php9DB7Mw_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹12.75 L - 22.59 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Reading",
    location: "Reading, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1537948985php5WxNlJ_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹16.77 L - 32.37 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Nottingham Trent University",
    location: "Nottingham, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1533899411phpMRcyBS_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹17.33 L - 21.8 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Aston University",
    location: "Birmingham, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1628775997phpvI1eiu_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹18.28 L - 26.28 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Royal Holloway University of London",
    location: "Egham, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1494826775phpxl4CKX_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹21.8 L - 31.87 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Brunel University London",
    location: "Middlesex, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1535104347phpAH9RQx_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹18.45 L - 27.95 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Birkbeck, University of London",
    location: "London, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1411023084php0V64wC_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹16.16 L - 25.38 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Abertay University",
    location: "Dundee, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1409554554phpFEwein_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹16.77 L - 17.61 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Salford",
    location: "Manchester, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1537439793phpsk7VHL_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹14.59 L - 19.62 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Sussex",
    location: "Brighton, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1398767789phpvdGgj6_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹14.42 L - 27.95 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Stirling",
    location: "Stirling, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1538050857php8buOb2_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹8.47 L - 27.95 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Hull",
    location: "Kingston upon Hull, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1551696368phpqeYcvM_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹12.3 L - 30.42 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Goldsmiths, University of London",
    location: "London, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1411370172php2vRxpI_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹22.88 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Heriot Watt University",
    location: "Edinburgh, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1534939353phpG1whOx_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹27.39 L - 30.16 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Manchester Metropolitan University",
    location: "Manchester, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1588755257phph2OhbP_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹17.89 L - 22.92 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Plymouth",
    location: "Plymouth, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1538110096phpOcpuQZ_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹22.14 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Lincoln",
    location: "Lincoln, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1535086082php9m8IeG_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹17 L - 19.79 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Kingston University London",
    location: "Kingston upon Thames, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1540377040phpuydwps_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹16.21 L - 20.69 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Bangor University",
    location: "Bangor, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1497935087phpc8mA7H_270x200.png",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹12.52 L - 26.84 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Bournemouth University",
    location: "Bournemouth, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1492410863phpqPWuc7_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹17.05 L - 21.02 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Huddersfield",
    location: "Huddersfield, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1476779192php1UZAwP_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹17.89 L - 20.91 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Liverpool John Moores University",
    location: "Liverpool, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1539234822phpaZrlCZ_270x200.png",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹19.46 L - 20.41 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Keele University",
    location: "Keele, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1539158685phpxVkb53_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹21.8 L - 31.31 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Aberystwyth University",
    location: "Swansea, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1540355823php4kUFd1_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹21.57 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Glasgow Caledonian University",
    location: "Glasgow, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1506409718phpp2zWli_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹13.42 L - 21.02 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Edinburgh Napier University",
    location: "Edinburgh, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1536658853phpxe5HqI_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹11.16 L - 22.81 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of the West of England",
    location: "Bristol, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1623052710phpHHrj0i_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹14.82 L - 36.79 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "De Montfort University",
    location: "Leicester, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1534234018php9OsPuF_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹16.33 L - 21 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Brighton",
    location: "Brighton, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1539156338php83mNQ0_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹15.99 L - 18.9 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "The University of Bradford",
    location: "Bradford, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1501753337phphEgIKL_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹21.8 L - 27.04 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Birmingham City University",
    location: "Birmingham, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1537953425phpglydC8_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹18.86 L - 19.8 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Oxford Brookes University",
    location: "Oxford, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1535007058phpNjhVkg_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹19.18 L - 22.36 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Salford",
    location: "Manchester, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1537439793phpsk7VHL_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹14.59 L - 21.36 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Leeds Beckett University",
    location: "Leeds, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1538131314phpvtUQLu_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹16.77 L - 19.57 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Chester",
    location: "Chester, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1398425274phpzPQ1SO_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹15.04 L - 20.77 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Derby",
    location: "Derby, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1538733343phpbIUpy7_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹16.66 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Anglia Ruskin University",
    location: "Cambridge, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1534504694phpwFtpuH_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹15.99 L - 20.8 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Cranfield University",
    location: "Cranfield, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1534420953phpQ7uo0p_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹21.8 L - 34.83 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Sheffield Hallam University",
    location: "Sheffield, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1401085051phpqdDPuQ_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹14.82 L - 19.82 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Roehampton",
    location: "London, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1411367551phpwLGFiF_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹16.63 L - 23.2 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of West London",
    location: "London, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1538134668phpWlScO4_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹16.49 L - 19.57 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Bedfordshire",
    location: "Luton, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1400843776phpJQ9SKT_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹10.23 L - 17.44 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Westminster",
    location: "London, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1399274501phpH9C9L4_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹16.77 L - 19.01 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Robert Gordon University",
    location: "Aberdeen, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1539242141phpZe7lzU_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹12.43 L - 23.59 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "London Metropolitan University",
    location: "London, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1538736981phpvAuF0G_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹18.45 L - 21.8 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "London South Bank University",
    location: "London, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1539083242php6g4kCb_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹17.33 L - 25.2 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of the West of Scotland",
    location: "Paisley, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1505278808phpUauKEI_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹17.05 L - 20.13 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Central Lancashire",
    location: "Preston, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1493896153phpvvrfdy_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹17.33 L - 40.06 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of South Wales",
    location: "Newport, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1443508045phpFlKX0b_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹4.47 L - 17.89 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Cardiff Metropolitan University",
    location: "Cardiff, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1540213123phpfqvrf6_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹17.33 L - 19.68 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  }
  ]
    },
    {
      countryName:"Australia",
      universities:[
        {
          universityName: "The University of Melbourne",
          location: "Melbourne, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1539253667php1AcBOm_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹23.02 L - 34.51 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "The University of Sydney",
          location: "Sydney, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1515481785phpZsgL9D_270x200.png",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹22.16 L - 35.11 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "The University of Queensland",
          location: "Brisbane, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1575364977phprol8xE_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹15.83 L - 38.62 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Wollongong - Australia",
          location: "Wollongong, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1540468765php8iStPY_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹17.24 L - 24.56 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Macquarie University",
          location: "Sydney, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1533723518phpzYjJlZ_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹20.95 L - 33.67 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Monash University",
          location: "Melbourne, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1533128219phpdgezPU_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹19.97 L - 30.62 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of New South Wales",
          location: "Kensington, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1534232683phphBWBji_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹18.09 L - 31.08 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "The University of Adelaide",
          location: "Adelaide, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1507613211phpOfXXhe_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹22.44 L - 29.93 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "James Cook University - Brisbane",
          location: "Brisbane, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1500642455phptu1YeX_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹20.12 L - 20.83 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Federation University Australia",
          location: "Ballarat, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1537330381phpthrLPp_270x200.png",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹13.58 L - 16.25 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "RMIT University",
          location: "Melbourne, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1533809674phpSjXxio_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹17.68 L - 26.52 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Australian National University",
          location: "Canberra, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1534145428phphY0syB_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹22.9 L - 32.44 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "The University of Western Australia",
          location: "Perth, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1541403097phplpDP5l_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹18.53 L - 45.32 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Federation University Australia - Brisbane Campus",
          location: "Brisbane, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1687778870phpRjfg9L_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹15.48 L - 16.25 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Deakin University",
          location: "Burwood, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1634799427phpeTFsva_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 26.01 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Technology, Sydney",
          location: "Ultimo, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1535453500phpvgIZp1_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹18.27 L - 33.09 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Curtin University - Australia",
          location: "Perth, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1496824636phpz3FH7X_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹17.53 L - 24.92 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Deakin University",
          location: "Burwood, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1634799427phpeTFsva_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 26.01 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "The University of Western Australia",
          location: "Perth, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1541403097phplpDP5l_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹18.53 L - 45.32 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Wollongong - Australia",
          location: "Wollongong, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1540468765php8iStPY_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹17.24 L - 24.56 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Queensland University of Technology",
          location: "Brisbane, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1688454409phprCSiM9_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹16.98 L - 24.23 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Macquarie University",
          location: "Sydney, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1533723518phpzYjJlZ_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹20.95 L - 33.67 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Griffith University",
          location: "Gold Coast, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1533814339php5owQkg_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹20.43 L - 27.62 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Swinburne University of Technology",
          location: "Melbourne, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1539258560phpv7wJ3h_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹16.23 L - 27.07 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "La Trobe University",
          location: "Melbourne, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1533118849phpFvdfAD_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹16.49 L - 43.64 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Tasmania",
          location: "Hobart, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1535441166php9jbL2s_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹17.67 L - 27.24 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Victoria University - Sydney Campus",
          location: "Sydney, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1509097633phpUcQ3AM_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹15.97 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "The University of Newcastle",
          location: "Callaghan, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1614952383phpd54PVf_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹20.71 L - 26.38 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Western Sydney University",
          location: "Sydney, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1533896110phpf1Qvb0_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹16.16 L - 21.11 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of South Australia",
          location: "Adelaide, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1533883701phpACy6DQ_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹20.03 L - 23.19 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Flinders University",
          location: "Adelaide, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1534510779phpDpTl8u_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹19.16 L - 30.44 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Canberra",
          location: "Canberra, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1535352060phplKyc8R_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹16.11 L - 29.06 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "James Cook University - Australia",
          location: "Townsville City, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1499948698phpvKoAxZ_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹20.12 L - 21.64 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Edith Cowan University",
          location: "Joondalup, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1535522675phpDkLD4o_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹18.56 L - 43.39 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Southern Queensland",
          location: "Toowoomba, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1537336589php2je4Zp_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹17.43 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Australian Catholic University",
          location: "Ballarat, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1494915301phpV8rtOX_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹14.29 L - 20.33 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Charles Darwin University",
          location: "Casuarina, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1585746311phpj8hXy0_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹16.99 L - 20.41 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Victoria University",
          location: "Melbourne, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1534249395phpwA41Gc_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹19.91 L - 22.33 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of the Sunshine Coast",
          location: "Maroochydore, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1652340956php8whCq9_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹16.11 L - 17.03 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Bond University",
          location: "Robina, Australia",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1535102014phpMv0as4_270x200.png",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹22.88 L - 42.64 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of New England",
          location: "Armidale, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1536039932phppQX7HO_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹19.47 L - 20.85 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Central Queensland University",
          location: "Rockhampton, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1535095138phpN2utER_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹19.61 L - 25.9 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Southern Cross University",
          location: "Lismore, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1535112456php7vI3qN_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹20.9 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Federation University Australia",
          location: "Ballarat, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1537330381phpthrLPp_270x200.png",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹13.58 L - 17.9 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Charles Sturt University",
          location: "Albury, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1534225444phpTc9G4M_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹19.52 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Melbourne Institute of Technology",
          location: "Melbourne, Australia",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1514974330phpOseZ9r_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹18.87 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Torrens University",
          location: "Adelaide, Australia",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1585549140php6U7GU0_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹17.47 L - 20.72 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Stanley College",
          location: "Perth, Australia",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1702291208phpd0hVo1_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹5.64 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Federation University Australia - Brisbane Campus",
          location: "Brisbane, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1537181194phpBTmvlm_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹15.48 L - 16.25 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "James Cook University - Brisbane",
          location: "Brisbane, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1500642455phptu1YeX_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹20.12 L - 20.83 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Carnegie Mellon University - Australia",
          location: "Adelaide, Australia",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1499164049phpnoxRiz_270x200.png",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹27.26 L - 45.37 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GMAT" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Kaplan Business School",
          location: "Adelaide, Australia",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1505110850phpPBpaeD_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹21.41 L - 28.03 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Griffith College Australia",
          location: "Mount Gravatt, Australia",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1681376644phpKqmGVq_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹8.63 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "La Trobe University - Sydney Campus",
          location: "Sydney, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1615986795phpCyGQuI_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹21.75 L - 22.21 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Charles Sturt University - Sydney Campus",
          location: "Sydney, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1417417676phpdYxISJ_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹19.52 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "SP Jain School Of Global Management - Sydney Campus",
          location: "Sydney, Australia",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1620019766phpg8GTk8_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹18.2 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Western Sydney University, Sydney City Campus",
          location: "Sydney, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1616070134php2HE2m2_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹20.11 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "IIBIT Sydney",
          location: "Sydney, Australia",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1546572204php8giThp_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹16.25 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Southern Cross University - Sydney Campus",
          location: "Sydney, Australia",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1509012035phpI4twgZ_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹20.4 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        }
      ]
      
    },
    {
      countryName:"Germany",
      universities:[
        {
          universityName: "Technical University of Munich",
          location: "Munich, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1533559592phpsYF8Oy_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 11.19 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Ludwig Maximilians University Munich",
          location: "Munich, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1535019884php6xm6hf_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 11.19 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "GRE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "RWTH Aachen University",
          location: "Aachen, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1534133001phpYHn5t8_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 13.99 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "GRE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "EU Business School - Munich",
          location: "Munich, Germany",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1514958483php4awclE_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹14.55 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "GMAT" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Berlin School of Business & Innovation",
          location: "Berlin, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1593517035phpg7q0HA_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹11.75 L - 12.36 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Heidelberg University - Germany",
          location: "Heidelberg, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1541158293phpdnuacJ_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 2.8 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Bonn",
          location: "Bonn, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1535522883phpWhKR4a_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Technical University of Berlin",
          location: "Berlin, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1533883013phpYG0iKO_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 13.93 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "IU International University of Applied Sciences",
          location: "Berlin, Germany",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1716976658phpMaVTl9_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹6.84 L - 8.9 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "Duolingo" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "International School of Management",
          location: "Dortmund, Germany",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1546603925phpQRJra7_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹12.09 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Albert Ludwigs University of Freiburg",
          location: "Freiburg im Breisgau, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1416310765phpywRLDP_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 2.8 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Tuebingen",
          location: "Tubingen, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1547442376phpV9ObKA_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 2.8 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Humboldt University of Berlin",
          location: "Berlin, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1534925114phpHWONUz_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 8.81 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Free University of Berlin",
          location: "Berlin, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1534248249phpYrR9Pf_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Fresenius University of Applied Sciences",
          location: "Idstein, Germany",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1716790472phpx6aZTH_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹9.18 L - 10.63 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "SRH Hochschule Heidelberg",
          location: "Heidelberg, Germany",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1543918205phpeqWDFh_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹8.84 L - 12.03 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Karlsruhe Institute of Technology",
          location: "Karlsruhe, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1535442840php6iuI85_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 2.8 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Hamburg",
          location: "Hamburg, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1535387941phpTJFusd_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Europe for Applied Sciences",
          location: "Hamburg, Germany",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1622816256php9crSDH_270x200.png",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹10.2 L - 11.19 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Lancaster University, Leipzig",
          location: "Leipzig, Germany",
          uniType: "State",
          imageUrl: "https://images.shiksha.com/mediadata/images/1679573459phpKHtEsg_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹20.98 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Dresden University of Technology",
          location: "Dresden, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1537940879phppY20uD_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 2.8 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Gottingen",
          location: "Göttingen, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1534937542phpE9yuZ6_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Friedrich Alexander University Erlangen-Nuremberg",
          location: "Erlangen, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1413797974phpq5it2O_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GMAT" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "SRH Hochschule Berlin",
          location: "Berlin, Germany",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1504076987phphwwIo2_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹12.68 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "EBS University of Business and Law",
          location: "Rheingau-Taunus-Kreis, Germany",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1488889469phpEiFDi9_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹14.83 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GMAT" }, { examName: "GRE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Stuttgart",
          location: "Stuttgart, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1534849633phpXb9fg0_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 2.8 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Technische Universität Darmstadt",
          location: "Darmstadt, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1412763453phppbGRH2_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Goethe University Frankfurt",
          location: "Frankfurt, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1539600569php3POyKK_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Cologne",
          location: "Cologne, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1537941015phpgrJIql_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Wurzburg",
          location: "Wurzburg, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1411455928phpokoHf4_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Ulm",
          location: "Ulm, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1541498163php0NYrEE_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 2.8 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Heinrich Heine University Dusseldorf",
          location: "Dusseldorf, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1650860506phppbngjw_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Johannes Gutenberg University",
          location: "Mainz, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1547027727phpl5LqYe_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Potsdam",
          location: "Potsdam, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1651025961php9mfGCJ_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Kiel",
          location: "Kiel, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1539089568php631cc9_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 7.69 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GRE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Munster",
          location: "Munster, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1540981576phpEimEOn_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Giessen",
          location: "Giessen, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1649424669phpq1iriQ_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Ruhr-University Bochum",
          location: "Bochum, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1641895863phpptgXq3_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 16.79 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Leibniz Universitat Hannover",
          location: "Hannover, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1636452666phpOU9kZ4_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Universität Konstanz",
          location: "Konstanz, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1416381707phpjP2ZmZ_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 4.66 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GRE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Bremen",
          location: "Bremen, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1539083453phpzQNTm4_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Hohenheim",
          location: "Stuttgart, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1650457611phpWwXIcP_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹2.8 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Technical University Dortmund",
          location: "Dortmund, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1632398736phpBaqOzS_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 1.8 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GRE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Saarland University",
          location: "Saarbrucken, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1632902492phpIDoU2x_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Duisburg-Essen",
          location: "Duisburg, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1668449781phpvI8tQm_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Braunschweig University of Technology",
          location: "Brunswick, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1542002338phpgIyuII_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 93.25 K",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "CELPIP" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Hamburg University of Technology",
          location: "Hamburg, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1539600527phprnzH30_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "Philipps University of Marburg",
          location: "Marburg, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1545983161phpLdIf3R_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
        {
          universityName: "University of Bayreuth",
          location: "Bayreuth, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1539327315php3KT1sD_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "No Fees",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GRE" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
        },
          {
            universityName: "Leipzig University",
            location: "Leipzig, Germany",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1539597286phpWC9nCe_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "₹0 - 8.63 L",
                duration: "2 years",
                exams: [{ examName: "IELTS" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
          },
          {
            universityName: "University of Siegen",
            location: "Siegen, Germany",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1648803610phpLLGf2E_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "No Fees",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
          },
          {
            universityName: "Chemnitz University of Technology",
            location: "Chemnitz, Germany",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1495781510phpYTxwPu_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "No Fees",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
          },
          {
            universityName: "University of Mannheim",
            location: "Mannheim, Germany",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1539604357phpbIHfeD_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "₹2.8 L",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GMAT" }, { examName: "GRE" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
          },
          {
            universityName: "University of Regensburg",
            location: "Regensburg, Germany",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1540538089phpR6hvo0_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "No Fees",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GRE" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
          },
          {
            universityName: "University of Rostock",
            location: "Rostock, Germany",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1539079106phpOZGK3C_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "No Fees",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
          },
          {
            universityName: "Brandenburg University of Technology",
            location: "Cottbus, Germany",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1643618230phpnhqsWt_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "₹0 - 63.69 K",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
          },
          {
            universityName: "University of Paderborn",
            location: "Paderborn, Germany",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1541074251phpf2JyCl_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "No Fees",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GRE" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
          },
          {
            universityName: "Cologne University of Applied Sciences",
            location: "Cologne, Germany",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1546605885phpAsI2WS_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "₹0 - 4.66 L",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
          },
          {
            universityName: "Leuphana University",
            location: "Luneburg, Germany",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1650453419phpZ0DjVY_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "No Fees",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
          },
          {
            universityName: "Berlin School of Business & Innovation",
            location: "Berlin, Germany",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1593517035phpg7q0HA_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "₹11.75 L - 12.36 L",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
        },
        {
          universityName: "University of Oldenburg",
          location: "Oldenburg, Germany",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1650969070phpoShI9c_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹0 - 1.86 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
      },
      {
          universityName: "University of Europe for Applied Sciences",
          location: "Hamburg, Germany",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1622816256php9crSDH_270x200.png",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹10.2 L - 11.19 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
      },
      {
        universityName: "Cologne University of Applied Sciences",
        location: "Cologne, Germany",
        uniType: "Public",
        imageUrl: "https://images.shiksha.com/mediadata/images/1546605885phpAsI2WS_270x200.jpg",
        PG: [
          {
            courseName: "MS in [Course Name]",
            degree: "Masters",
            degreeLevel: "PG",
            price: "₹0 - 4.66 L",
            duration: "2 years",
            exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
            intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
          }
        ]
    },
    {
        universityName: "Leuphana University",
        location: "Luneburg, Germany",
        uniType: "Public",
        imageUrl: "https://images.shiksha.com/mediadata/images/1650453419phpZ0DjVY_270x200.jpg",
        PG: [
          {
            courseName: "MS in [Course Name]",
            degree: "Masters",
            degreeLevel: "PG",
            price: "No Fees",
            duration: "2 years",
            exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
            intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
          }
        ]
    },
    {
        universityName: "Gisma University of Applied Sciences",
        location: "Berlin, Germany",
        uniType: "Private",
        imageUrl: "https://images.shiksha.com/mediadata/images/1611148892phpk6TW4a_270x200.jpg",
        PG: [
          {
            courseName: "MS in [Course Name]",
            degree: "Masters",
            degreeLevel: "PG",
            price: "₹10.79 L - 14.92 L",
            duration: "2 years",
            exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
            intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
          }
        ]
    },
    {
        universityName: "Martin Luther University of Halle-Wittenberg",
        location: "Halle, Germany",
        uniType: "Public",
        imageUrl: "https://images.shiksha.com/mediadata/images/1651037043phppxXuf2_270x200.jpg",
        PG: [
          {
            courseName: "MS in [Course Name]",
            degree: "Masters",
            degreeLevel: "PG",
            price: "No Fees",
            duration: "2 years",
            exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
            intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
          }
        ]
    },
    {
        universityName: "Otto Von Guericke University Magdeburg",
        location: "Magdeburg, Germany",
        uniType: "Public",
        imageUrl: "https://images.shiksha.com/mediadata/images/1632730806phpZS8Nyy_270x200.jpg",
        PG: [
          {
            courseName: "MS in [Course Name]",
            degree: "Masters",
            degreeLevel: "PG",
            price: "No Fees",
            duration: "2 years",
            exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "GRE" }],
            intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
          }
        ]
    },
    {
        universityName: "SRH Hochschule Heidelberg",
        location: "Heidelberg, Germany",
        uniType: "Private",
        imageUrl: "https://images.shiksha.com/mediadata/images/1543918205phpeqWDFh_270x200.jpg",
        PG: [
          {
            courseName: "MS in [Course Name]",
            degree: "Masters",
            degreeLevel: "PG",
            price: "₹8.84 L - 12.03 L",
            duration: "2 years",
            exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
            intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
          }
        ]
    },
    {
        universityName: "SRH Hochschule Berlin",
        location: "Berlin, Germany",
        uniType: "Private",
        imageUrl: "https://images.shiksha.com/mediadata/images/1504076987phphwwIo2_270x200.jpg",
        PG: [
          {
            courseName: "MS in [Course Name]",
            degree: "Masters",
            degreeLevel: "PG",
            price: "₹0 - 12.68 L",
            duration: "2 years",
            exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
            intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
          }
        ]
    },
    {
        universityName: "Technical University of Kaiserslautern",
        location: "Kaiserslautern, Germany",
        uniType: "Public",
        imageUrl: "https://images.shiksha.com/mediadata/images/1641362935phpZgebO3_270x200.jpg",
        PG: [
          {
            courseName: "MS in [Course Name]",
            degree: "Masters",
            degreeLevel: "PG",
            price: "₹0 - 7.46 L",
            duration: "2 years",
            exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
            intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
          }
        ]
    },
    {
        universityName: "University of Trier",
        location: "Trier, Germany",
        uniType: "Public",
        imageUrl: "https://images.shiksha.com/mediadata/images/1632311631php02PnMk_270x200.jpg",
        PG: [
          {
            courseName: "MS in [Course Name]",
            degree: "Masters",
            degreeLevel: "PG",
            price: "No Fees",
            duration: "2 years",
            exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
            intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
          }
        ]
    },
    {
        universityName: "Deggendorf Institute of Technology",
        location: "Deggendorf, Germany",
        uniType: "Private",
        imageUrl: "https://images.shiksha.com/mediadata/images/1632397993phpYHNUGk_270x200.jpg",
        PG: [
          {
            courseName: "MS in [Course Name]",
            degree: "Masters",
            degreeLevel: "PG",
            price: "No Fees",
            duration: "2 years",
            exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
            intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
          }
        ]
    },
    {
      universityName: "University of Passau",
      location: "Passau, Germany",
      uniType: "Public",
      imageUrl: "https://images.shiksha.com/mediadata/images/1638272591phphjHZn4_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "No Fees",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
      universityName: "University of Hildesheim",
      location: "Hildesheim, Germany",
      uniType: "Public",
      imageUrl: "https://images.shiksha.com/mediadata/images/1632981774phphzLubh_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "No Fees",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
      universityName: "Technische Hochschule Ingolstadt",
      location: "Ingolstadt, Germany",
      uniType: "Public",
      imageUrl: "https://images.shiksha.com/mediadata/images/1433750219phpHsxDvk_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "No Fees",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
      universityName: "Constructor University",
      location: "Bremen, Germany",
      uniType: "Private",
      imageUrl: "https://images.shiksha.com/mediadata/images/1539606254phpdC2Y2I_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "₹18.65 L",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "Duolingo" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
      universityName: "University of Lubeck",
      location: "Lubeck, Germany",
      uniType: "Public",
      imageUrl: "https://images.shiksha.com/mediadata/images/1636458803phpGdfN3Q_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "No Fees",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
      universityName: "University of Kassel",
      location: "Leipzig, Germany",
      uniType: "Public",
      imageUrl: "https://images.shiksha.com/mediadata/images/1639390143php2PRki5_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "No Fees",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
      universityName: "FH Aachen University of Applied Sciences",
      location: "Aachen, Germany",
      uniType: "Public",
      imageUrl: "https://images.shiksha.com/mediadata/images/1515156110phpPO0VzZ_270x200.png",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "No Fees",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GRE" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
      universityName: "University of Augsburg",
      location: "Augsburg, Germany",
      uniType: "Public",
      imageUrl: "https://images.shiksha.com/mediadata/images/1541145103phpPqrznz_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "No Fees",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
      universityName: "Technical University of Ilmenau",
      location: "Iserlohn, Germany",
      uniType: "Public",
      imageUrl: "https://images.shiksha.com/mediadata/images/1632485643phpyVE0jQ_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "No Fees",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
    universityName: "Fresenius University of Applied Sciences",
    location: "Idstein, Germany",
    uniType: "Private",
    imageUrl: "https://images.shiksha.com/mediadata/images/1716790472phpx6aZTH_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹9.18 L - 10.63 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
},
{
    universityName: "University of Koblenz-Landau",
    location: "Koblenz, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1658390384phptlX06u_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "No Fees",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
},
{
    universityName: "TU Bergakademie Freiberg",
    location: "Freiberg, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1645160714phpqbY76F_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "No Fees",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
},
{
    universityName: "Fulda University of Applied Sciences",
    location: "Leipzig, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1632996337php6iPJJT_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "No Fees",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
},
{
    universityName: "Frankfurt University of Applied Sciences",
    location: "Frankfurt, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1645431932phpRohxGq_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "No Fees",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
},
{
    universityName: "Bauhaus University Weimar",
    location: "Weimar, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1658813890phpC7ebGq_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "No Fees",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
},
{
    universityName: "Hof University of Applied Sciences",
    location: "Hof, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1632310012phpxqQux6_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "No Fees",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
},
{
    universityName: "Kiel University of Applied Sciences",
    location: "Kiel, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1646975667php2HO5Rp_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹0 - 4.62 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GRE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
},
{
    universityName: "University of Applied Sciences Bingen",
    location: "Bingen, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1653373730phpyKg9YB_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "No Fees",
        duration: "2 years",
        exams: [{ examName: "IELTS" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
}
  ]
},
{
  countryName:"ireland",
  universities:[
    {
      universityName: "Trinity College Dublin",
      location: "Dublin, Ireland",
      uniType: "Public",
      imageUrl: "https://images.shiksha.com/mediadata/images/1506081013phpIBVFp2_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "₹15.42 L - 25.76 L",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }],
          ranking: "A++"
        }
      ]
  },
  {
      universityName: "University College Dublin",
      location: "Dublin, Ireland",
      uniType: "Public",
      imageUrl: "https://images.shiksha.com/mediadata/images/1632913162phpX2Q2aT_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "₹10.25 L - 27.14 L",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }],
          ranking: "A"
        }
      ]
  },
  {
      universityName: "University of Galway",
      location: "Galway, Ireland",
      uniType: "Public",
      imageUrl: "https://images.shiksha.com/mediadata/images/1664883749phpmwMWmw_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "₹7.55 L - 26.86 L",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }],
          ranking: "A"
        }
      ]
  },
  {
      universityName: "Letterkenny Institute of Technology",
      location: "Letterkenny, Ireland",
      uniType: "Public",
      imageUrl: "https://images.shiksha.com/mediadata/images/1502694420phpDbiLv8_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "₹9.32 L - 13.43 L",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
      universityName: "University College Cork",
      location: "Cork, Ireland",
      uniType: "Public",
      imageUrl: "https://images.shiksha.com/mediadata/images/1644382168phpdYUqY3_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "₹14.61 L - 23.78 L",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }],
          ranking: "A"
        }
      ]
  },
  {
      universityName: "University of Limerick",
      location: "Limerick, Ireland",
      uniType: "Public",
      imageUrl: "https://images.shiksha.com/mediadata/images/1535457467php0UInsN_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "₹10.44 L - 23.25 L",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
      universityName: "Dublin City University",
      location: "Dublin, Ireland",
      uniType: "Public",
      imageUrl: "https://images.shiksha.com/mediadata/images/1536667121phpWIKpkF_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "₹14.92 L - 23.31 L",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
      universityName: "Griffith College",
      location: "Dublin, Ireland",
      uniType: "Private",
      imageUrl: "https://images.shiksha.com/mediadata/images/1539770504phpTWy2v3_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "₹10.26 L - 15.39 L",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
      universityName: "National College of Ireland",
      location: "Dublin, Ireland",
      uniType: "Private",
      imageUrl: "https://images.shiksha.com/mediadata/images/1410162026phpBNsmI0_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "₹13.99 L - 15.85 L",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
    universityName: "University College Cork",
    location: "Cork, Ireland",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1644382168phpdYUqY3_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹14.61 L - 23.78 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }],
        ranking: "A"
      }
    ]
},
  {
      universityName: "Griffith College",
      location: "Dublin, Ireland",
      uniType: "Private",
      imageUrl: "https://images.shiksha.com/mediadata/images/1539770504phpTWy2v3_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "₹10.26 L - 15.39 L",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
      universityName: "Technological University Dublin",
      location: "Dublin, Ireland",
      uniType: "Public",
      imageUrl: "https://images.shiksha.com/mediadata/images/1683551885phppaOhzF_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "₹10.8 L - 20.28 L",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
      universityName: "Maynooth University",
      location: "Maynooth, Ireland",
      uniType: "Public",
      imageUrl: "https://images.shiksha.com/mediadata/images/1503644224phpzH6Rlh.jpeg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "₹13.05 L - 16.79 L",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
      universityName: "Institute of Technology, Sligo",
      location: "Sligo, Ireland",
      uniType: "Private",
      imageUrl: "https://images.shiksha.com/mediadata/images/1586411100phpial5s5_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "₹11.19 L",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
      universityName: "Dublin Business School",
      location: "Dublin, Ireland",
      uniType: "Private",
      imageUrl: "https://images.shiksha.com/mediadata/images/1505732463phpmZ1Jty_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "₹12.59 L - 13.52 L",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
      universityName: "Letterkenny Institute of Technology",
      location: "Letterkenny, Ireland",
      uniType: "Public",
      imageUrl: "https://images.shiksha.com/mediadata/images/1502694420phpDbiLv8_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "₹9.32 L - 13.43 L",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
  {
      universityName: "South East Technological University- Carlow",
      location: "Carlow, Ireland",
      uniType: "Private",
      imageUrl: "https://images.shiksha.com/mediadata/images/1669720998php1n7ZFn_270x200.jpg",
      PG: [
        {
          courseName: "MS in [Course Name]",
          degree: "Masters",
          degreeLevel: "PG",
          price: "₹10.49 L - 13.99 L",
          duration: "2 years",
          exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
          intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
        }
      ]
  },
    {
        universityName: "Technological University of Shannon - Athlone",
        location: "Athlone, Ireland",
        uniType: "Public",
        imageUrl: "https://images.shiksha.com/mediadata/images/1684828941phpcUd5pA_270x200.jpg",
        PG: [
          {
            courseName: "MS in [Course Name]",
            degree: "Masters",
            degreeLevel: "PG",
            price: "₹13.52 L - 17.25 L",
            duration: "2 years",
            exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
            intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
          }
        ]
    },
    {
        universityName: "South East Technological University- Waterford",
        location: "Waterford, Ireland",
        uniType: "Public",
        imageUrl: "https://images.shiksha.com/mediadata/images/1399284278phpp38YbU_270x200.jpg",
        PG: [
          {
            courseName: "MS in [Course Name]",
            degree: "Masters",
            degreeLevel: "PG",
            price: "₹9.79 L - 13.99 L",
            duration: "2 years",
            exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
            intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
          }
        ]
    },
    {
        universityName: "University of Galway",
        location: "Galway, Ireland",
        uniType: "Public",
        imageUrl: "https://images.shiksha.com/mediadata/images/1664883749phpmwMWmw_270x200.jpg",
        PG: [
          {
            courseName: "MS in [Course Name]",
            degree: "Masters",
            degreeLevel: "PG",
            price: "₹7.55 L - 26.86 L",
            duration: "2 years",
            exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
            intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
          }
        ]
    },
    {
        universityName: "National College of Ireland",
        location: "Dublin, Ireland",
        uniType: "Private",
        imageUrl: "https://images.shiksha.com/mediadata/images/1410162026phpBNsmI0_270x200.jpg",
        PG: [
          {
            courseName: "MS in [Course Name]",
            degree: "Masters",
            degreeLevel: "PG",
            price: "₹13.99 L",
            duration: "2 years",
            exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
            intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
          }
        ]
    },
    {
        universityName: "Dundalk Institute of Technology",
        location: "Dublin, Ireland",
        uniType: "Public",
        imageUrl: "https://images.shiksha.com/mediadata/images/1577779242phpdY7no9_270x200.jpg",
        PG: [
          {
            courseName: "MS in [Course Name]",
            degree: "Masters",
            degreeLevel: "PG",
            price: "₹11.19 L - 15.46 L",
            duration: "2 years",
            exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
            intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
          }
        ]
    },
    {
        universityName: "Cork Institute of Technology",
        location: "Cork, Ireland",
        uniType: "Private",
        imageUrl: "https://images.shiksha.com/mediadata/images/1504869605phpgzb2rs_270x200.jpg",
        PG: [
          {
            courseName: "MS in [Course Name]",
            degree: "Masters",
            degreeLevel: "PG",
            price: "₹11.19 L - 13.99 L",
            duration: "2 years",
            exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
            intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
          }
        ]
    },
    {
        universityName: "Galway-Mayo Institute of Technology",
        location: "Galway, Ireland",
        uniType: "Private",
        imageUrl: "https://images.shiksha.com/mediadata/images/1503484442phpXb30QP_270x200.jpg",
        PG: [
          {
            courseName: "MS in [Course Name]",
            degree: "Masters",
            degreeLevel: "PG",
            price: "₹6.06 L - 11.19 L",
            duration: "2 years",
            exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
            intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
          }
        ]
    },
      {
          universityName: "South East Technological University- Carlow",
          location: "Carlow, Ireland",
          uniType: "Private",
          imageUrl: "https://images.shiksha.com/mediadata/images/1669720998php1n7ZFn_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹10.49 L - 13.99 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
      },
      {
          universityName: "Technological University of Shannon - Athlone",
          location: "Athlone, Ireland",
          uniType: "Public",
          imageUrl: "https://images.shiksha.com/mediadata/images/1684828941phpcUd5pA_270x200.jpg",
          PG: [
            {
              courseName: "MS in [Course Name]",
              degree: "Masters",
              degreeLevel: "PG",
              price: "₹13.52 L - 17.25 L",
              duration: "2 years",
              exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
              intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
            }
          ]
      },
        {
            universityName: "University College Dublin",
            location: "Dublin, Ireland",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1632913162phpX2Q2aT_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "₹13.71 L - 27.14 L",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
        },
        {
            universityName: "Technological University Dublin",
            location: "Dublin, Ireland",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1683551885phppaOhzF_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "₹11.6 L - 20.28 L",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
        },
        {
            universityName: "Technological University of Shannon - Limerick",
            location: "Limerick, Ireland",
            uniType: "Private",
            imageUrl: "https://images.shiksha.com/mediadata/images/1546585907phpbfT5jJ_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "₹13.52 L - 15.39 L",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
        },
        {
            universityName: "National College of Art and Design",
            location: "Dublin, Ireland",
            uniType: "Private",
            imageUrl: "https://images.shiksha.com/mediadata/images/1586512179phpiMtln1_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "₹15.39 L",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
        },
        {
            universityName: "Institute of Technology, Sligo",
            location: "Sligo, Ireland",
            uniType: "Private",
            imageUrl: "https://images.shiksha.com/mediadata/images/1586411100phpial5s5_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "₹11.19 L",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
        },
        {
            universityName: "Dublin Business School",
            location: "Dublin, Ireland",
            uniType: "Private",
            imageUrl: "https://images.shiksha.com/mediadata/images/1505732463phpmZ1Jty_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "₹12.59 L - 13.52 L",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
        },
        {
            universityName: "South East Technological University- Waterford",
            location: "Waterford, Ireland",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1399284278phpp38YbU_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "₹9.79 L - 13.99 L",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
        },
        {
            universityName: "Maynooth University",
            location: "Maynooth, Ireland",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1503644224phpzH6Rlh.jpeg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "₹13.05 L - 16.79 L",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
        },
        {
            universityName: "Atlantic Technological University - St. Angelas",
            location: "Sligo, Ireland",
            uniType: "Public",
            imageUrl: "https://images.shiksha.com/mediadata/images/1712212038phpCpgQmC_270x200.jpg",
            PG: [
              {
                courseName: "MS in [Course Name]",
                degree: "Masters",
                degreeLevel: "PG",
                price: "₹11.19 L",
                duration: "2 years",
                exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
                intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
              }
            ]
        }
  ]
}


];
module.exports = {data:uniData};