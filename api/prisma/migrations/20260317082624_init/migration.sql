/*
  Warnings:

  - You are about to drop the column `createdAt` on the `consent` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `consent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "consent" DROP COLUMN "createdAt",
DROP COLUMN "userId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "session_id" TEXT,
ADD COLUMN     "user_id" TEXT;
