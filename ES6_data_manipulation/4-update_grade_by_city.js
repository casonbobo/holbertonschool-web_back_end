export default function updateStudentGradeByCity(list, city, newGrades) {
  return list.filter((students) => students.location === city)
    .map((student) => {
      const gradeObject = newGrades.find((item) => item.studentId = student.id);
      const grade = gradeObject ? gradeObject.grade : 'N/A';
      return {...student, grade};
    });
}
