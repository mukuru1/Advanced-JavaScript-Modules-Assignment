export const searchById = (students, id) => {
    return students.find(student => student.id === id);
};

export const searchByName = (students, name) => {
    return students.filter(student => student.name.toLowerCase().includes(name.toLowerCase()));
};

export const filterByAge = (students, age) => {
    return students.filter(student => student.age === age);
};