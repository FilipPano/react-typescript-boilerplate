export interface User {
  name: string;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}
