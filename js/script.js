const data = {
    "Name": "Jesson Famentera",
    "JobRoles": [
       "Developer",
       "Analyst"
    ],
    "BusinessTypes": [
       "Branding",
       "Online Support",
       "Ecommerce",
       "Content Publisher",
       "Lead Generation",
       "Online Community"
    ],
    "IsOptedInToEmails": true,
    "CourseProgress": [
       {
          "CourseName": "Google Analytics for Beginners",
          "StartDate": 20240516,
          "CourseCompleted": true,
          "CertificateDate": 20240524,
          "AssessmentsProgress": [
             {
                "Title": "Assessment 1",
                "Passed": true
             },
             {
                "Title": "Assessment 2",
                "Passed": true
             },
             {
                "Title": "Assessment 3",
                "Passed": true
             },
             {
                "Title": "Assessment 4",
                "Passed": true
             }
          ]
       },
       {
          "CourseName": "Advanced Google Analytics",
          "StartDate": 20240524,
          "CourseCompleted": true,
          "CertificateDate": 20240524,
          "AssessmentsProgress": [
             {
                "Title": "Assessment 1",
                "Passed": true
             },
             {
                "Title": "Assessment 2",
                "Passed": true
             },
             {
                "Title": "Assessment 3",
                "Passed": true
             },
             {
                "Title": "Assessment 4",
                "Passed": true
             }
          ]
       }
    ]
  };
  
  const jobRolesList = document.getElementById('job-roles');
  const businessTypesList = document.getElementById('business-types');
  const coursesDiv = document.getElementById('courses');
  
  // Function to create list items
  function createListItem(text) {
    const listItem = document.createElement('li');
    listItem.textContent = text;
    return listItem;
  }
  
  // Display Job Roles
  data.JobRoles.forEach(role => jobRolesList.appendChild(createListItem(role)));
  
  // Display Business Types
  data.BusinessTypes.forEach(type => businessTypesList.appendChild(createListItem(type)));
  
  // Display Courses
  data.CourseProgress.forEach(course => {
    const courseName = document.createElement('h3');
    courseName.textContent = course.CourseName;
    coursesDiv.appendChild(courseName);
  
    // Display Assessments (optional, modify as needed)
    const assessmentsList = document.createElement('ul');
    course.AssessmentsProgress.forEach(assessment => {
      assessmentsList.appendChild(createListItem(`${assessment.Title} - Passed: ${assessment.Passed}`));
    });
    coursesDiv.appendChild(assessmentsList);
  });