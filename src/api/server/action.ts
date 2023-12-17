import { revalidatePath } from "next/cache";

export const revalidateMainPage = async () => {
  "use server";

  revalidatePath("/", "page");
};

export const revalidateContentPage = async () => {
  "use server";

  revalidatePath("/content", "page");
};
