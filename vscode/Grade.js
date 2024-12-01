// Program for Printing Grades
function getGrade(marks) {
    if(marks >= 90) return 's';
    if(marks >= 80) return 'A';
    if(marks >= 70) return 'B';
    if(marks >= 60) return 'C';
    if(marks >= 50) return 'D';
    return 'F';
  }
  
  console.log(getGrade(82)); 
  // Output: A
  