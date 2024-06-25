import { API_LOCAL } from "../utils/constant";

export const getData = async () => {
  try {
    const result = await fetch(`${API_LOCAL}/api/post`, {
      method: "GET",
      cache: "no-cache",
    });

    return await result.json();
  } catch (error) {
    console.log("error", error);
  }
};

export const createData = async (name: string, data: string) => {
  try {
    await fetch(`${API_LOCAL}/api/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, image: data }),
      next: { tags: ["post"] },
    });
  } catch (error) {
    console.log("error");
  }
};
