import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Erreur récupération:', error));
  }, []);

  const addTask = () => {
    if (!newTask) return;
    axios.post('http://localhost:5000/api/tasks', { title: newTask })
      .then(response => {
        setTasks([...tasks, response.data]);
        setNewTask('');
      })
      .catch(error => console.error('Erreur ajout:', error));
  };

  const toggleComplete = (id, completed) => {
    axios.put(`http://localhost:5000/api/tasks/${id}`, { completed: !completed })
      .then(response => {
        setTasks(tasks.map(task => task._id === id ? response.data : task));
      })
      .catch(error => console.error('Erreur update:', error));
  };

  const deleteTask = id => {
    axios.delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter(task => task._id !== id));
      })
      .catch(error => console.error('Erreur suppression:', error));
  };

  return (
    <div>
      <h1>Liste des Tâches</h1>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button onClick={addTask}>Ajouter</button>
      {tasks.length === 0 ? (
        <p>Aucune tâche</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task._id}>
              {task.title} - {task.completed ? 'Complétée' : 'En cours'}
              <button onClick={() => toggleComplete(task._id, task.completed)}>
                {task.completed ? 'Marquer non complétée' : 'Marquer complétée'}
              </button>
              <button onClick={() => deleteTask(task._id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;