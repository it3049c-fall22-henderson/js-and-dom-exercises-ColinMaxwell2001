class StringFunctions {
    /**
     * @param {string} input
     * @returns {string}
     * @example
     * capitalize('hello world') // 'Hello world'
     * capitalize('HELLO WORLD') // 'Hello world'
     */
    capitalize(input) { 
      //var input2 ="";
      //input2 = input.charAt(0).toUpperCase() + input.slice(1);
      return input.toUpperCase(); 
    }

    /**
     * Returns a reversed string. Example: "abc" => "cba"
     * @param {string} input - the string input to be processed 
     * @returns  {string} - the reversed string
     * @example
     * reverse('abc') // 'cba'
     */
    reverse(input) { 
      var splitString = input.split("");

      var reverseTheString = splitString.reverse();

      var combineString = reverseTheString.join("");

      return combineString;
    }

    /**
     * Returns an array of the words in a string
     * @param {string} input - the string input to be processed
     * @returns {string[]} - an array of words in the string
     * @example
     * words('hello world') // ['hello', 'world']
     */
    split(input) { 

      var input2 = input.replace(/[^A-Za-z0-9]+/g, " ");
      var newArray = input2.trim().split(" ");

      return newArray;
    }
}
