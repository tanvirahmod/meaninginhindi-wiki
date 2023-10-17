/*
  Warnings:

  - You are about to drop the `words` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "words";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "german_table" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "word" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "view" INTEGER NOT NULL,
    "nextWord" TEXT NOT NULL,
    "prevWord" TEXT NOT NULL,
    "germanTranslation" TEXT NOT NULL,
    "partsOfSpeech" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "german_table_word_key" ON "german_table"("word");
