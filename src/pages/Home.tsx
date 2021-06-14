import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if(!newTaskTitle) return;

    const newTesk: Task = {
      id: new Date().getTime(),
      done: false,
      title: newTaskTitle
    }

    setTasks(oldState => [...oldState, newTesk])
  }

  function handleMarkTaskAsDone(id: number) {
    const newTesks = tasks.map(task => task.id === id ? {
      ...task,
      done: !task.done
    } : task)

    setTasks(newTesks);
  }

  function handleRemoveTask(id: number) {
    const taskFilter = tasks.filter(task => task.id !== id)

    setTasks(taskFilter);
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}