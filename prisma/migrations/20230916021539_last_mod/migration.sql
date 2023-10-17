/*
  Warnings:

  - Added the required column `lastMod` to the `german_table` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_german_table" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "word" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "view" INTEGER NOT NULL,
    "nextWord" TEXT NOT NULL,
    "prevWord" TEXT NOT NULL,
    "germanTranslation" TEXT NOT NULL,
    "partsOfSpeech" TEXT NOT NULL,
    "lastMod" TEXT NOT NULL
);
INSERT INTO "new_german_table" ("germanTranslation", "id", "meaning", "nextWord", "partsOfSpeech", "prevWord", "view", "word") SELECT "germanTranslation", "id", "meaning", "nextWord", "partsOfSpeech", "prevWord", "view", "word" FROM "german_table";
DROP TABLE "german_table";
ALTER TABLE "new_german_table" RENAME TO "german_table";
CREATE UNIQUE INDEX "german_table_word_key" ON "german_table"("word");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
