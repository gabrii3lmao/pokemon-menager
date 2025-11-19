-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Team_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PokemonInstance" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nickname" TEXT,
    "species" TEXT NOT NULL,
    "nature" TEXT NOT NULL,
    "ability" TEXT NOT NULL,
    "heldItem" TEXT,
    "evs_hp" INTEGER NOT NULL,
    "evs_atk" INTEGER NOT NULL,
    "evs_def" INTEGER NOT NULL,
    "evs_spa" INTEGER NOT NULL,
    "evs_spd" INTEGER NOT NULL,
    "evs_spe" INTEGER NOT NULL,
    "ivs_hp" INTEGER NOT NULL,
    "ivs_atk" INTEGER NOT NULL,
    "ivs_def" INTEGER NOT NULL,
    "ivs_spa" INTEGER NOT NULL,
    "ivs_spd" INTEGER NOT NULL,
    "ivs_spe" INTEGER NOT NULL,
    "teamId" TEXT NOT NULL,
    CONSTRAINT "PokemonInstance_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
