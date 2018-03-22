const Queue = require('better-queue')
const q = new Queue((input, cb) => {
  try {
    cb(null, 'result')
  } catch (e) {
    throw new Error(e.message)
  }
})
const enqueueTasks = () => {
  // get tasks and enqueue them
  q.push({})
}

setInterval(enqueueTasks, 1000)
