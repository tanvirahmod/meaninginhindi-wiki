/*
  Warnings:

  - The primary key for the `words` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `words` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_words" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "word" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "view" INTEGER NOT NULL,
    "nextWord" TEXT NOT NULL,
    "PrevWord" TEXT NOT NULL
);
INSERT INTO "new_words" ("PrevWord", "id", "meaning", "nextWord", "view", "word") SELECT "PrevWord", "id", "meaning", "nextWord", "view", "word" FROM "words";
DROP TABLE "words";
ALTER TABLE "new_words" RENAME TO "words";
CREATE UNIQUE INDEX "words_word_key" ON "words"("word");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
