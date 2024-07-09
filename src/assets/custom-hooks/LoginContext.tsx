export interface User {
  email: string;
  password: string;
}

let initialUserAccess: User[] = [];
const storedUsers = localStorage.getItem("userAccess");
if (storedUsers) {
  initialUserAccess = JSON.parse(storedUsers);
}

export const userAccess: User[] = initialUserAccess;

export function addUser(newUser: User) {
  userAccess.push(newUser);
  localStorage.setItem("userAccess", JSON.stringify(userAccess));
}
