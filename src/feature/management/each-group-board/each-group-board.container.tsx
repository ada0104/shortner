import { useParams } from 'react-router-dom';

const EachGroupBoard = () => {
  const { id } = useParams();

  return <h2>{id} Board</h2>;
};

export default EachGroupBoard;
