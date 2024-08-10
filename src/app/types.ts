export type Todo = {
  id: string;
  text: string;
  status: {
    id: string;
    name: string;
  };
  created_at: string;
};
