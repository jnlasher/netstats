import { secondsToTime, timesToLongString } from '../util/dateTimeUtils';

export const TitleAndTime = ({ title, time }) => {
  const displayTime = timesToLongString(secondsToTime(time));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      <div style={{ width: '50%' }}>
        <p style={{ fontSize: 'larger', color: '#f44336' }}>{title}</p>
      </div>
      <div style={{ width: '50%' }}>
        <p style={{ fontSize: 'larger' }}>{displayTime}</p>
      </div>
    </div>
  );
};
