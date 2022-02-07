export function numToWord(num){

    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                'seventeen', 'eighteen', 'nineteen'];

    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
                'ninety'];

    let numString = num.toString();
    let numStringLen = numString.length;

    switch(true){
      //throw error when number is negative
      case (num<0) : throw new Error('Negative numbers are not supported! Please enter a valid number!');
      //return zero if number is 0
      case (num === 0) : return 'zero';
      //case when number is lower than 20 
      case (num < 20) : return ones[num];
      //nested switch case for number bigger of equal to 20
      case(num >= 20):
        switch(numStringLen){
            case 2: return inTens();
            case 3: return inHundreds();
            case 4: return inThousands();
            case 5: return inTenThousands();
            case 6: return inHundredThousands();
            case 7: return inMillions();
            case 8: return inTenMillions();
            case 9: return inHundredMillions();
            default: throw new Error('Number is too big! Please enter a number between 0 and 999999999!')
        }
    }

    //Helper method for 100 > num >= 20
    function inTens(){
        let start = +(numString[0])
        let end = +(numString[1])

        if(numString[1] === '0'){
          return tens[start];
        }
        return tens[start] + '-' + ones[end];
      }

    //Helper method for 1000 > num >= 100
    function inHundreds(){
        let start = +(numString[0])
        let end = +(numString.slice(1))
        
        if (numString[1] === '0' && numString[2] === '0'){
        return ones[start] +' hundred';
        }
      else{
        return ones[start] + ' hundred and ' + numToWord(end);
        }
      }

      //Helper method for 10000 > num >= 1000
      function inThousands(){
        let start = +(numString[0])
        let end = +(numString.slice(1));

        if (end === 0){ return ones[start] + ' thousand';}
        if (end < 100){ return ones[start] + ' thousand and ' + numToWord(end);}
        return ones[start] + ' thousand ' + numToWord(end);
      }

      //Helper method for 100000 > num >= 10000
      function inTenThousands(){
        let start = +(numString.slice(0,2))
        let end = +(numString.slice(2));
  
        if (end === 0){
            if(start<20){
              return ones[start] + ' thousand';
            }
            
           return numToWord(start) + ' thousand';
        }
    
        else {
          if(start<20){
            return ones[start] + ' thousand ' + numToWord(end);
          }
          return numToWord(start) + ' thousand ' + numToWord(end);
        }
      }

      //Helper method for 1000000 > num >= 100000
      function inHundredThousands(){
        let start = +(numString.slice(0,3))
        let end = +(numString.slice(3))

        if(end === 0){
          return numToWord(start)+ ' thousand';
        } 

        else{
          return numToWord(start) + ' thousand ' + numToWord(end);
        }
    }

    //Helper method for 10000000 > num >= 1000000
    function inMillions(){
        let start = +(numString[0])
        let end = +(numString.slice(1))

        return ones[start] + ' million ' + numToWord(end)
      }

    //Helper method for 100000000 > num >= 10000000
    function inTenMillions(){
        let start = +(numString.slice(0,2))
        let end = +(numString.slice(2))

        return numToWord(start) + ' million ' + numToWord(end)
    }

    //Helper method for 1000000000 > num >= 100000000
    function inHundredMillions(){
        let start = +(numString.slice(0,3))
        let end = +(numString.slice(3))

        return numToWord(start) + ' million ' + numToWord(end)
      }

}