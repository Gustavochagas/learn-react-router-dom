import { useParams } from "react-router-dom";

export const Post = () => {
  const params = useParams();

  return (
    <div>
      <h1>Post {params.id}</h1>
    </div>
  );
};
