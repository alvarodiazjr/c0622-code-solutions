/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

            function isUnderFive(number) {
              if(number < 5) {
                return true;
              } else{
                return false;
              }
            }

            function isEven(number) {
              if(number % 2 === 0) {
                return true;
              } else{
                return false;
              }
            }

            function startsWithJ(string) {
              if(string.charAt(0) === 'J') {
                return true;
              } else{
                return false;
              }
            }

            function isOldEnoughToDrink(person) {
              if(person.age >= 21) {
                return true;
              } else{
                return false;
              }
            }

            function isOldEnoughToDrive(person) {
              if(person.age >= 16) {
                return true;
              } else{
                return false;
              }
            }

            function isOldEnoughToDrinkAndDrive(person) {
              return false;
            }

            function categorizeAcidity(pH) {
              if(pH === 7){
                return 'neutral';
              } if((pH >= 0) && (pH < 7)) {
                return 'acid';
              } if((pH <= 14) && (pH > 7)) {
                return 'base';
              } else{
                return 'invalid pH level';
              }
            }

            function introduceWarnerBro(name) {
              if((name === 'yakko') || (name === 'wakko')) {
                return "We're the warner brothers!";
              } if(name === 'dot') {
                return "I'm cute~";
              } else{
                return 'Goodnight everybody!'
              }
            }
