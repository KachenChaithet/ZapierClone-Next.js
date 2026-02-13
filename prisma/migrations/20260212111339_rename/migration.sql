/*
  Warnings:

  - You are about to drop the column `date` on the `Node` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Node" DROP COLUMN "date",
ADD COLUMN     "data" JSONB NOT NULL DEFAULT '{}';
