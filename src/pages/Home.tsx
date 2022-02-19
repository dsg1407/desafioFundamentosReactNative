import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //DONE - add new task
    const taskData = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks(oldTasks => [...oldTasks, taskData])

  }

  function handleToggleTaskDone(id: number) {
    //DONE - toggle task done if exists
    const tasksData = tasks.map(task => {
      if (task.id === id) {
        const newTask = {
          id: task.id,
          title: task.title,
          done: task.done === true ? false : true
        }

        return newTask

      } else {
        return task
      }
    })

    setTasks(tasksData)
  }

  function handleRemoveTask(id: number) {
    //DONE - remove task from state
    const newTasks = tasks.filter(task => task.id !== id)

    setTasks(newTasks)
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})