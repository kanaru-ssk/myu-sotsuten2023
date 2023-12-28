export const insertLecturer = (lecturers) => {
  lecturers.forEach((lecturer) => {
    document
      .getElementById("lecturer-profile-ul")
      .appendChild(createLecturerNode(lecturer));
  });
};
