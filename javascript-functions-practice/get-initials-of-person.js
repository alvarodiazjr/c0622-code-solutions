/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstInitial = person.firstName;
  var lastInitial = person.lastName;
  var initials = firstInitial[0] + lastInitial[0];
  return initials;
}
