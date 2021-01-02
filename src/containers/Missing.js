import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export const Missing = () => (
  <div>
    <p>Whoops! Looks like we couldn't find that page.</p>
    <Button component={Link} to="/" color="primary" variant="contained">
      Go Home
    </Button>
  </div>
);
