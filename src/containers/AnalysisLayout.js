import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useResults } from '../context/WatchResultsContext';
import { timesToLongString } from '../util/dateTimeUtils';
import { TitleAndTime } from '../components/TitleAndTime';

export const AnalysisLayout = () => {
  const { watched } = useResults();

  return (
    <div>
      <h2>
        You've watched{' '}
        <span style={{ color: '#f44336' }}>
          {timesToLongString(watched.totalTime)}
        </span>{' '}
        of Netflix!
      </h2>
      <h2>You're top shows are:</h2>
      <div>
        {watched.topShows.map((showArr) => (
          <TitleAndTime title={showArr[0]} time={showArr[1]} />
        ))}
      </div>
      <Button component={Link} to="/" color="primary" variant="contained">
        Load Another
      </Button>
    </div>
  );
};
