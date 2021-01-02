import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import axios from '../axios-upload';
import { useResults } from '../context/WatchResultsContext';
import { secondsToTime } from '../util/dateTimeUtils';
import './UploadButton.css';

const uploadConfig = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
};

export const UploadButton = () => {
  const history = useHistory();
  const { watchedDispatch } = useResults();

  const handleFileUpload = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const csvFile = event.target.files[0];
    formData.append('file', csvFile);
    axios
      .post('/api/upload/', formData, uploadConfig)
      .then((response) => {
        const totalTime = secondsToTime(response.data.total_time);
        const topShows = response.data.most_watched;
        watchedDispatch({
          type: 'LOAD_RESULTS',
          data: { totalTime, topShows }
        });
      })
      .catch((response) => {
        watchedDispatch({ type: 'LOAD_FAILED' });
      });
    history.push('/results');
  };

  return (
    <div>
      <input
        type="file"
        accept=".csv"
        className="Upload-input"
        id="contained-button-file"
        onChange={handleFileUpload}
      />
      <label htmlFor="contained-button-file">
        <Button
          className="Upload-button"
          variant="contained"
          color="primary"
          size="large"
          component="span"
        >
          Upload
        </Button>
      </label>
    </div>
  );
};
