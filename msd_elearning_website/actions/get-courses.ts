import { getProgress } from "@/actions/get-progress";
import { db } from "@/lib/db";

type GetCourses = {
  userId: string;
  title?: string;
  categoryId?: string;
};
