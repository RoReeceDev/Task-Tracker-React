import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
   
  return (
    <>
    {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />))}
      
    </>
  )
}

//State is immutable it is one way data

export default Tasks
