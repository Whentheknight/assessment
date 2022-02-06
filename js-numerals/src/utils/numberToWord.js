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
      case (num<0) : throw new Error('Negative numbers are not supported.');
      //return zero if number is 0
      case (num == 0) : return 'zero';
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
        }
        break;
    }

    //Helper method for 100 > num >= 20
    function inTens(){
        let start = +(numString[0])
        let end = +(numString[1])

        if(numString[1] == '0'){
          return tens[start];
        }
        return tens[start] + '-' + ones[end];
      }
}