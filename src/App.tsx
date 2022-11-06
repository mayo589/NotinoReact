import { Box } from "@mui/material";
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import AppHeader from "./AppHeader";

import TodoList from "./TodoList";
import TodoDetail from "./TodoDetail";

export const AppContext = React.createContext<{ loading: boolean, todos: { id: string; userId: string, title: string }[] }>({ loading: true, todos: [] });

function App() {
  const todoApiUrl = "https://jsonplaceholder.typicode.com/todos";

  const [todos, setTodos] = React.useState<{ id: string; userId: string, title: string }[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchTodos() {
      const res = await fetch(todoApiUrl);
      res
        .json()
        .then(res => {
          setTodos(res);
          setLoading(false);
        })
    }
    fetchTodos();
  }, []);

  return (
    <AppContext.Provider value={{ loading: loading, todos: todos }}>
      <Box sx={{ width: '100%' }}>
        <AppHeader></AppHeader>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/todo/:id" element={<TodoDetail />} />
          </Routes>
        </BrowserRouter>

      </Box >
    </AppContext.Provider>
  );
}

export default App;