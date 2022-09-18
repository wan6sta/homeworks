import {useState} from 'react';
import {Tasks} from './Tasks';
import styles from './task.module.css'

type TaskPriorityType = 'low' | 'middle' | 'high'
export type FilterType = 'all' | TaskPriorityType
export type TaskType = { id: number, title: string, priority: TaskPriorityType }

const TaskListArray: TaskType[] = [
  {id: 1, title: 'Купить молоко', priority: 'low'},
  {id: 2, title: 'Сходить в спортзал', priority: 'middle'},
  {id: 3, title: 'Записаться к окулисту', priority: 'high'},
  {id: 4, title: 'Отдохнуть', priority: 'middle'},
  {id: 5, title: 'Купить цветы', priority: 'high'},
  {id: 6, title: 'Приготовить курицу', priority: 'low'},
  {id: 7, title: 'Заказать пиццу', priority: 'middle'},
]

/*const filterTasks = (tasks: TaskType[], filter: FilterType): TaskType[] => {
  switch (filter) {
    case 'low':
      return tasks.filter(task => task.priority === 'low')
    case 'middle':
      return tasks.filter(task => task.priority === 'middle')
    case 'high':
      return tasks.filter(task => task.priority === 'high')
    default:
      return tasks
  }
}*/

const filterTasks = (tasks: TaskType[], filter: FilterType): TaskType[] => {
  if (filter === 'all')
    return tasks

  return tasks.filter(task => task.priority === filter)
}

const deleteTasks = (tasks: TaskType[], id: number): TaskType[] => {
  return tasks.filter(task => task.id !== id)
}

export const TaskList = () => {
  const [tasks, setTasks] = useState<TaskType[]>(TaskListArray)
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredTasks = filterTasks(tasks, filter)
  const deleteTasksCallback = (id: number) => setTasks(deleteTasks(tasks, id))

  return <div className={styles.wrap}>
    <Tasks
      data={filteredTasks}
      deleteTasks={deleteTasksCallback}
      setFilter={setFilter}
      filter={filter}
    />
  </div>
}

