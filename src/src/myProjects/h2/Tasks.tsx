import {FilterType, TaskType} from './TaskList';
import {Task} from './Task';
import styles from './task.module.css'
import {MouseEvent} from 'react';

type TasksPropsType = {
  data: TaskType[]
  deleteTasks: (id: number) => void
  setFilter: (filter: FilterType) => void
  filter: FilterType
}


export const Tasks = ({data, setFilter, deleteTasks, filter}: TasksPropsType) => {
  const mappedTasks = data.map(task => (
    <Task
      deleteTasks={deleteTasks}
      task={task}
    />
  ))

  const setFilterLow = () => setFilter('low')
  const setFilterMiddle = () => setFilter('middle')
  const setFilterHigh = () => setFilter('high')
  const setFilterAll = () => setFilter('all')

  const setActiveClassFilter = (filterFunc: FilterType) => {
    return filter === filterFunc ? `${styles.filter} ${styles.filterActive}` : styles.filter
  }

  return <div className={styles.tasks}>
    <div>
      {mappedTasks}
    </div>
    <div className={styles.filterWrap}>
      <button
        className={setActiveClassFilter('all')}
        onClick={setFilterAll}>All
      </button>

      <button
        className={setActiveClassFilter('low')}
        onClick={setFilterLow}>Low
      </button>

      <button
        className={setActiveClassFilter('middle')}
        onClick={setFilterMiddle}>Middle
      </button>

      <button
        className={setActiveClassFilter('high')}
        onClick={setFilterHigh}>High
      </button>
    </div>
  </div>
}