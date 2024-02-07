// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False


function scramble(str1, str2) {
    const charCount = {};

    // Count occurrences of each character in str1
    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Check if str2 characters can be formed using str1 characters
    for (let char of str2) {
        if (!charCount[char]) {
            return false; // If character not found in str1
        }
        charCount[char]--;
    }

    return true; // If all characters of str2 are found in str1
}