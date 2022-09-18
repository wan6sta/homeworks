import {TaskType} from './TaskList';
import styles from './task.module.css'

type TaskPropsType = {
  task: TaskType
  deleteTasks: (id: number) => void
}

export const Task = ({task, deleteTasks}: TaskPropsType) => {

  const deleteTaskHandler = () => {
    deleteTasks(task.id)
  }

  const setPriorityClass = () => {
    switch (task.priority) {
      case 'low':
        return `${styles.taskPriorityLow} ${styles.taskPriority}`
      case 'middle':
        return `${styles.taskPriorityMiddle} ${styles.taskPriority}`
      case 'high':
        return `${styles.taskPriorityHigh} ${styles.taskPriority}`
    }
  }

  return <div className={styles.taskWrap}>
    <span className={styles.taskTitle}>{task.title}</span>
    <div className={styles.taskRight}>
      <span className={setPriorityClass()}
      >{task.priority}</span>
      <button className={styles.delete} onClick={deleteTaskHandler}>-</button>
    </div>
  </div>
}

