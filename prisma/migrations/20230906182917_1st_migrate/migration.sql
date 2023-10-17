-- CreateTable
CREATE TABLE "words" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "meaning" TEXT NOT NULL,
    "nextWord" TEXT NOT NULL,
    "PrevWord" TEXT NOT NULL
);
