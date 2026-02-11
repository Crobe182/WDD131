// -----------------------------------
// Practice Data
// -----------------------------------
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
          
const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

const grades = ['A', 'B', 'C', 'D', 'F', 'D', 'C', 'B', 'A'];

function convert(grade) {

    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

// -----------------------------------
// Array Methods Using Practice Data
// -----------------------------------

// forEach
// append  each item of words to an unordered list
const forEachList = document.getElementById('forEachList');

words.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    forEachList.appendChild(li);
});

// map
// Create full names (first last) from students array
const fullNames = students.map(s => `${s.first} ${s.last}`);

document.getElementById('mapResult').textContent = fullNames.join(', ');

// map pt2 
// Convert letter grades to points using convert function
const gradePoints = grades.map(convert);

document.getElementById('gradeMapResult').textContent = gradePoints.join(', ');

// filter
// create new array of words that are > 5 characters
const longWords = words.filter(word => word.length > 5);

document.getElementById('filterResult').textContent = longWords.join(', ');

// reduce
// total letters in all words
const totalLetters = words.reduce((sum, word) => sum + word.length, 0);

document.getElementById('reduceResult').textContent = `Total letters in  words array: ${totalLetters}`;