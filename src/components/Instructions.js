import Link from '@material-ui/core/Link';
import './Instructions.css';

export const Instructions = () => {
  const infoAddress = 'https://www.netflix.com/account/getmyinfo';
  const handleLink = (event) => {
    event.preventDefault();
    window.open(infoAddress);
  };

  return (
    <div className="Instructions">
      <ul>
        <li>
          Go to{' '}
          <Link href="#" onClick={handleLink}>
            {infoAddress}
          </Link>
        </li>
        <li>Click "Submit Request"</li>
        <li>Keep an eye on your email for the report</li>
        <li>Download and unzip the email attachment</li>
        <li>
          Click the "Upload" button above and choose the
          netflix-activity/Content_Information/ViewingActivity.csv
        </li>
      </ul>
    </div>
  );
};
