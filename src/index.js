module.exports = function getZerosCount(number, base) {

         let baseFactors = [];
          let simpleNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
          
          let baseNumber = base;
          while (baseNumber > 1) {
            for (let i =0; i < simpleNumbers.length; i++) {
              if (baseNumber % simpleNumbers[i] === 0) {
                baseFactors.push(simpleNumbers[i]);
                baseNumber = baseNumber / simpleNumbers[i];
                break;
              }
            }
          };
          
          let uniqueBaseFactors = {};
          baseFactors.forEach(function(factor, index, factors) {
            if (uniqueBaseFactors[factor] !== undefined) {
              uniqueBaseFactors[factor] += 1;
            } else {
              uniqueBaseFactors[factor] = 1;
            }
          });
          
          let zerosCounts = [];
          for (let key in uniqueBaseFactors) {
            let zerosCount = 0;
            let n = 1;
            while (true) {
              let a = Math.trunc(number / Math.pow(key, n));
              if (a >= 1) {
                zerosCount += a;
                n ++;
              } else {
                break;
              }
            }
            zerosCount = Math.trunc(zerosCount / uniqueBaseFactors[key]);
            zerosCounts.push(zerosCount);
          }
          let result = zerosCounts[0];
          zerosCounts.forEach(function(count) {
            if (count < result) {
              result = count;
            }
          });

          return result;
}