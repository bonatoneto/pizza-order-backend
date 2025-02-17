/*
  Warnings:

  - You are about to drop the column `updated_ar` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `updated_ar` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `updated_ar` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `updated_ar` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `updated_ar` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "categories" DROP COLUMN "updated_ar",
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "items" DROP COLUMN "updated_ar",
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "updated_ar",
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "updated_ar",
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "updated_ar",
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;
