/*
  Warnings:

  - The primary key for the `member` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `memberId` on the `member` table. All the data in the column will be lost.
  - The `age` column on the `member` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[memberCode]` on the table `member` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `memberCode` to the `member` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "member_memberId_key";

-- AlterTable
ALTER TABLE "member" DROP CONSTRAINT "member_pkey",
DROP COLUMN "memberId",
ADD COLUMN     "memberCode" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
DROP COLUMN "age",
ADD COLUMN     "age" INTEGER,
ADD CONSTRAINT "member_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "member_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "member_memberCode_key" ON "member"("memberCode");
