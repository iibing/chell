/*
sequence
*/

db.sequences.insert({_id: 'CHELL', seq: 4})


/*
tasks
*/
db.tasks.insert({
    key: 'CHELL-1',
    project: 'CHELL',
    summary: 'Create REST interface to query tasks by given project',
    description: 'Create a rest interface(GET /api/tasks/:projectID) to get a task array from database by given project Id, return an empty array when no task is found.',
    priority: 2,
    score: 7,
    type: 'feature',
    assignee: 'Xiaobing',
    createdBy: 'Xiaobing',
    createdDate: new Date(),
    status: 'WIP'
})

db.tasks.insert({
    key: 'CHELL-2',
    project: 'CHELL',
    summary: 'Render tasks in the task panel by calling the rest inteface created in CHELL-1',
    description: '1. Fetch the tasks list by using fetch API 2. build a status tree using redux. 3. Connect componement props and actions with redux',
    priority: 2,
    score: 5,
    type: 'feature',
    assignee: '',
    createdBy: 'Xiaobing',
    createdDate: new Date(),
    status: 'Open'
})

db.tasks.insert({
    key: 'CHELL-3',
    project: 'CHELL',
    summary: 'Create REST inteface to create new tasks',
    description: '(POST /api/tasks/)',
    priority: 2,
    score: 7,
    type: 'feature',
    assignee: '',
    createdBy: 'Xiaobing',
    createdDate: new Date(),
    status: 'Open'
})