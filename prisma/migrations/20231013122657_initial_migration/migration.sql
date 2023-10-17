/*
  Warnings:

  - You are about to drop the column `germanTranslation` on the `german_table` table. All the data in the column will be lost.
  - You are about to drop the column `lastMod` on the `german_table` table. All the data in the column will be lost.
  - Added the required column `antonyms` to the `german_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `examples` to the `german_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `extraMeanings` to the `german_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formAdjective` to the `german_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formAdverb` to the `german_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formNoun` to the `german_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formVerb` to the `german_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hypernyms` to the `german_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hyponyms` to the `german_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mainMeaningExtraWords` to the `german_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `meaningPronounce` to the `german_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneticUK` to the `german_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneticUS` to the `german_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `synonyms` to the `german_table` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_german_table" (
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
INSERT INTO "new_german_table" ("id", "meaning", "nextWord", "partsOfSpeech", "prevWord", "view", "word") SELECT "id", "meaning", "nextWord", "partsOfSpeech", "prevWord", "view", "word" FROM "german_table";
DROP TABLE "german_table";
ALTER TABLE "new_german_table" RENAME TO "german_table";
CREATE UNIQUE INDEX "german_table_word_key" ON "german_table"("word");
CREATE INDEX "german_table_word_idx" ON "german_table"("word");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
