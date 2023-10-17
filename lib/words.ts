import prisma from "./prisma";

// to see all the words
export async function getWords() {
    try {
        const words = await prisma.dictionary_table.findMany()
        return words 
    } catch (error) {
        return { error }
    }
}

// main single meaning page /dictionary/word
export async function getWord(word: any) {
    try {
        const singleWord = await prisma.dictionary_table.findFirst({
            where: {
                word: word,
            },
        })
        return singleWord
    } catch (error) {
        return { error }
    }
}



// retrn an array
export async function getArray(word: any) {
    console.log(word)
    try {
        const singleWord = await prisma.dictionary_table.findMany({
            where: {
               word: {in: word}
            },
        })
        return singleWord
    } catch (error) {
        return { error }
    }
}





// filtering words with 1st letter
export async function getBy1stLetter(firstLetter1: any) {
    try {
        const matchedWords = await prisma.dictionary_table.findMany({
            where: {
                word: {
                    startsWith: firstLetter1,
                },
            },
        })
        return matchedWords
    } catch (error) {
        return { error }
    }
}


// full search with matching word -------------
export async function getTheSearchResult(searchQ: any) {
    try {
        const matchedWords = await prisma.dictionary_table.findMany({
            where: {
                word: {
                    contains: searchQ,
                },
            },
        })
        return matchedWords
    } catch (error) {
        return { error }
    }
}