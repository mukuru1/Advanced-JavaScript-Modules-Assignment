const students = [
  { id: 1, name: "Jolivet", age: 24 },
  { id: 2, name: "Aline", age: 21 },
  { id: 3, name: "Kevin", age: 28 },
  { id: 4, name: "Sarah", age: 19 },
];

export function searchById(id) {
  let foundStudent = students.filter((student) => student.id === id);
  let notFoundMessage = "Student not found";
  if ((students.id = id)) {
    return foundStudent;
  } else {
    return notFoundMessage;
  }
}

export function searchByName(name) {
  let notFoundMessage = "No student with that name";
  let foundStudent = students.filter(
    (student) => student.name.toLowerCase() === name.toLowerCase()
  );
  if ((students.name = name)) {
    return foundStudent;
  } else {
    return notFoundMessage;
  }
}

export function filterByAge(minAge) {
  const foundStudentByMinAge = students.filter(
    (student) => student.age >= minAge
  );
}

console.log(searchByName("Jolivet"));
