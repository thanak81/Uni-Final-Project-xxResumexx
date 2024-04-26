-- DropForeignKey
ALTER TABLE "resume" DROP CONSTRAINT "resume_id_fkey";

-- AddForeignKey
ALTER TABLE "resume" ADD CONSTRAINT "resume_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
