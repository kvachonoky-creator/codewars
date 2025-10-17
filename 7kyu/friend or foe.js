
// function friend(friends) {
//     const newFriends = []
//     for (let i = 0; i < friends.length; i++) {
//         if (friends[i].length === 4) {
//             newFriends.push(friends[i])
//         }
//     }
//     return newFriends
// }

function friend(friends){
  return friends.filter(f => f.length === 4)
}