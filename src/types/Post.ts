export default interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  visited?: boolean;
  comments?: number;
}