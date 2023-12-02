import { revalidatePath } from "next/cache";

export const revalidateContentPage = async () => {
  "use server";

  revalidatePath("/content", "page");
};
