import { db } from "@/lib/db";

interface GetChapterProps {
  userId: string;
  courseId: string;
  chapterId: string;
};