import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface User {
  email: string;
  password: string;
}

export interface CompleteUser extends User {
  nome: string;
  cognome: string;
}

interface UserContextType {
  users: User[];
  addUser: (user: User) => void;
  registerUser: (user: CompleteUser) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const addUser = (user: User) => {
    setUsers((prevUsers) => {
      const updatedUser = [...prevUsers, user];
      localStorage.setItem("users", JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const registerUser = (user: CompleteUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, user];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  return (
    <UserContext.Provider value={{ users, addUser, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
