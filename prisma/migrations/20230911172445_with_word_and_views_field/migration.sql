/*
  Warnings:

  - Added the required column `view` to the `words` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_words" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "word" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "view" INTEGER NOT NULL,
    "nextWord" TEXT NOT NULL,
    "PrevWord" TEXT NOT NULL
);
INSERT INTO "new_words" ("PrevWord", "id", "meaning", "nextWord", "word") SELECT "PrevWord", "id", "meaning", "nextWord", "word" FROM "words";
DROP TABLE "words";
ALTER TABLE "new_words" RENAME TO "words";
CREATE UNIQUE INDEX "words_word_key" ON "words"("word");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
