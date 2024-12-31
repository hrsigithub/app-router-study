import React from "react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// type Todo = {
//   id: string | number;
//   title: string;
// };

const page = () => {
  const crateTodo = async (formData: FormData) => {
    "use server";

    console.log(formData);

    const title = formData.get("title");

    const res = await fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    revalidatePath("/");
    redirect("/");
  };

  return (
    <div>
      <h1>新規作成</h1>
      <form action={crateTodo}>
        <input type="text" name="title" />
        <button type="submit">作成</button>
      </form>
    </div>
  );
};

export default page;
