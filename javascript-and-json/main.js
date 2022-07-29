var books = [
  {
    isbn: '1001',
    title: 'The Lightning Thief',
    author: 'Rick Riordan'
  },
  {
    isbn: '1002',
    title: 'The Sea of Monsters',
    author: 'Rick Riordan'
  },
  {
    isbn: '1003',
    title: 'The Titans Curse',
    author: 'Rick Riordan'
  }
];

console.log('books array:', books);
console.log("typeof books:", typeof books);

console.log('JSON.stringify:', JSON.stringify(books))
console.log('typeof JSON:', typeof JSON.stringify(books));

var student = '{"id": 7339185, "name": "Alvaro Diaz"}';

console.log('JSON format string:', student)
console.log('type of string:', typeof student);

console.log('JSON.parse:', JSON.parse(student));
console.log('typeof JSON.parse:', typeof JSON.parse(student));
