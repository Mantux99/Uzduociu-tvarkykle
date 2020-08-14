export const getUsers = ({ users }) => users;

export const getUserName = ({ users }, id) => {
  if([null, undefined, '', false].includes(id)) return 'Unassigned';
  return users.find(user => user.id === id).name
}
