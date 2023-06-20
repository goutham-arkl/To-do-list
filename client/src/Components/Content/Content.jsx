import Task from '../Task/Task'
import './Content.css'

const Content = () => {
  return (
    <div className='content-container'>
        <div className='searchbar-container'>
          <input className='search' type='text' placeholder='Search'/>
        </div>
        <div className='tasks-list-container'>
        <Task/>
        <Task/>

        <Task/>
        <Task/>

        <Task/>


        </div>
    </div>
  )
}

export default Content