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
    }
];
module.exports = {data:uniData};