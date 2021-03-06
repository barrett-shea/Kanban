const InitialData = {
  tasks: {
    'task1': { id: 'task1', content: 'Drag and Drop a Task!'},
    'task2': { id: 'task2', content: 'Add New Tasks Below'},
    'task3': { id: 'task3', content: 'Keeps Track of Progress'},
    'task4': { id: 'task4', content: 'New features to be released soon!'},
  },

  columns: {
    'column1': {
      id: 'column1',
      title: 'To Do',
      taskIds: ['task1', 'task2', 'task3'],
    },
    'column2': {
      id: 'column2',
      title: 'In Progress',
      taskIds: [],
    },
    'column3': {
      id: 'column3',
      title: 'Testing',
      taskIds: ['task4'],
    },
    'column4': {
      id: 'column4',
      title: 'Done',
      taskIds: [],
    },
  },

  // Needed to reorder columns
  columnOrder: ['column1', 'column2', 'column3', 'column4'], 

};

export default InitialData;



