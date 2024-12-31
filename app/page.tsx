import { lightningCssTransform } from "next/dist/build/swc/generated-native";

interface Todo {
  id: number;
  title: string;
}

export default async function Home() {
  const res = await fetch("http://localhost:3001/todos");
  const todos: Todo[] = await res.json();

  console.log(todos);

  return (
    <div>
      <h1>Todoリスト</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
