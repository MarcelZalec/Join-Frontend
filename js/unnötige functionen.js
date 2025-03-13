/**
 * Processes the editing of a task and updates the user interface with the edited task.
 * 
 * @param {string} id - The ID of the task to be edited.
 * @param {Object} task - An object representing the task with updated details.
 */

async function processTaskEditing(id, task) {
    console.log("ProcessTaskEdit (same wie Zeile 361?):", id, task)
    let newTaskReady = await updateTasksThroughEditing(id, task);
    let newJsonElement = JSON.stringify(newTaskReady);
    let newJsontextElement = encodeURIComponent(newJsonElement);
    renderBigTask(newJsontextElement);
  }