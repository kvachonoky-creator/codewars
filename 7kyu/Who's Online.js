

const object = [{
  username: 'David',
  status: 'online',
  lastActivity: 11
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}]

const whosOnline = (friends) => {
  let online = friends.filter(a => a.lastActivity <= 10 && a.status === `online`).map(a => a.username)
  let offline = friends.filter(a => a.status === `offline`).map(a => a.username)
  let away = friends.filter(a => a.lastActivity > 10 && a.status === `online`).map(a => a.username)
  const newObj = {}
  online.length > 0 ? newObj.online = online : "";
  offline.length > 0 ? newObj.offline = offline : "";
  away.length > 0 ? newObj.away = away : "";
return newObj
}

console.log(whosOnline(object));