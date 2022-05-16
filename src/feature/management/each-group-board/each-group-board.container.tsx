import { useParams } from 'react-router-dom';
import FeatureContext from '@app/context/feature.context';

const EachGroupBoard = () => {
  const { id } = useParams();

  return <h2>{id} Board</h2>;
};

export default EachGroupBoard;
