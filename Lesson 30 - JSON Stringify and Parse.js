//
// L30S01 - Stringify and Parse
//
var bookList = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
  },
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
  },
];
gs.info(bookList); // That's not very helpful!

var bookListStr = JSON.stringify(bookList);
gs.info(bookListStr); // I can read it - sort of

var bookListStrFormat = JSON.stringify(bookList, null, 4); // second param is a formatter, null is fine | third param is "4" space indentation
gs.info(bookListStrFormat); // Ah - that's better!

/*
Output:

*** Script: [object Object],[object Object],[object Object]

*** Script: [{"title":"Harry Potter and the Chamber of Secrets","author":"J.K. Rowling"},{"title":"Moby Dick","author":"Herman Melville"},{"title":"A Tale of Two Cities","author":"Charles Dickens"}]

*** Script: [
    {
        "title": "Harry Potter and the Chamber of Secrets",
        "author": "J.K. Rowling"
    },
    {
        "title": "Moby Dick",
        "author": "Herman Melville"
    },
    {
        "title": "A Tale of Two Cities",
        "author": "Charles Dickens"
    }
]


*/

//
// L30S02 - Parse example
//
var libraryStr =
  '[{"title":"Harry Potter and the Chamber of Secrets","author":"J.K. Rowling"},{"title":"Moby Dick","author":"Herman Melville"},{"title":"A Tale of Two Cities","author":"Charles Dickens"}]';

gs.info("length=" + libraryStr.length);

var libraryObj = JSON.parse(libraryStr);
gs.info("length=" + libraryObj.length);

gs.info(JSON.stringify(libraryObj, null, 4));

/*
Output:

*** Script: length=186
*** Script: length=3
*** Script: [
    {
        "title": "Harry Potter and the Chamber of Secrets",
        "author": "J.K. Rowling"
    },
    {
        "title": "Moby Dick",
        "author": "Herman Melville"
    },
    {
        "title": "A Tale of Two Cities",
        "author": "Charles Dickens"
    }
]

*/
