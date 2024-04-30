/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    // so are all of the characters in the ransom note in the magazine? 
    // hash map problem 


    // starting off ideas on how to solve this
    // create a object of all the characters by mapping through with counts 
    // create two objects and see if the ransom note value is less than or equal to the value in the magazine object value ?
    // is the randsome note values supported by the magazine

    // magazineCount
    const ransomArr = ransomNote.split('');
    const ransomCount = {};
    // ransom object 
    for (let i = 0; i < ransomArr.length; i++) {
        let ele = ransomArr[i]
        if (ransomCount[ele]) {
            ransomCount[ele] += 1
        } else {
            ransomCount[ele] = 1
        }
    }

    // magazine object
    const magazineArr = magazine.split('');
    const magazineCount = {};
    for (let i = 0; i < magazineArr.length; i++) {
        let ele = magazineArr[i]
        if (magazineCount[ele]) {
            magazineCount[ele] += 1
        } else {
            magazineCount[ele] = 1
        }
    }

    for (const key in ransomCount) {
        if (ransomCount[key] > magazineCount[key] || !magazineCount[key] ) {
            return false
        }
        
    }
    return true;
};
// first solution, not mega performant