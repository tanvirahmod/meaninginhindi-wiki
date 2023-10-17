-- CreateTable
CREATE TABLE "dictionary_table" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "word" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "view" INTEGER NOT NULL,
    "meaningPronounce" TEXT NOT NULL,
    "mainMeaningExtraWords" TEXT NOT NULL,
    "extraMeanings" TEXT NOT NULL,
    "partsOfSpeech" TEXT NOT NULL,
    "formNoun" TEXT NOT NULL,
    "formAdjective" TEXT NOT NULL,
    "formVerb" TEXT NOT NULL,
    "formAdverb" TEXT NOT NULL,
    "examples" TEXT NOT NULL,
    "phoneticUS" TEXT NOT NULL,
    "phoneticUK" TEXT NOT NULL,
    "synonyms" TEXT NOT NULL,
    "antonyms" TEXT NOT NULL,
    "hypernyms" TEXT NOT NULL,
    "hyponyms" TEXT NOT NULL,
    "nextWord" TEXT NOT NULL,
    "prevWord" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "dictionary_table_word_key" ON "dictionary_table"("word");

-- CreateIndex
CREATE INDEX "dictionary_table_word_idx" ON "dictionary_table"("word");
