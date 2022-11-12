/*
  Warnings:

  - You are about to drop the column `imageId` on the `Image` table. All the data in the column will be lost.
  - Added the required column `propertyId` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_imageId_fkey";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "imageId",
ADD COLUMN     "propertyId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
