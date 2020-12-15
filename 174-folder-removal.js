// Given a list of folders in a filesystem and the name of a folder
// to remove, return the new list of folders after removal.

// eg:
//Input: removeFolder(["/a","/a/b","/c/d","/c/d/e","/c/f", "/c/f/g"], ‘c’)
//Output: ["/a","/a/b"]


//Filter Solution
const removeFolder = (arr, folder) =>arr.filter((curr) => accum = !curr.includes(folder))


const result = removeFolder(["/a","/a/b","/c/d","/c/d/e","/c/f", "/c/f/g"], "c")

//Reduce Solution
const removeFolderReduce= (arr, folder) => arr.reduce((accum,curr) => !curr.includes(folder)? [...accum, curr]: accum,[])


const reduceResult = removeFolderReduce(["/a","/a/b","/c/d","/c/d/e","/c/f", "/c/f/g"], "c")




