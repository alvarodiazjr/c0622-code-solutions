var student = {
  firstName: 'Alvaro',
  lastName: 'Diaz',
  age: 23
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Warehouse Worker';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student)

var vehicle = {
  make: 'Toyota',
  model: '4Runner',
  year: 2022
};

vehicle['color'] = 'Army Green';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Maui',
  type: 'Pitbull Mix'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
