import os
import pandas as pd

ROOT_PATH = os.path.dirname(os.path.abspath(__file__))

class StreamingData:
    def parse_data(self, files):
        files.save(os.path.join(ROOT_PATH,files.filename))
        self.df = pd.read_csv(os.path.join(ROOT_PATH,files.filename))
        # Do some cooking on the dataflow so we have something that is more
        # useable for any subsequent requests -- starting by changing times
        as_datetime = pd.to_datetime(self.df['Start Time'], utc=True)
        # Convert to local time
        self.df['Start Time'] = as_datetime.dt.tz_convert('US/Eastern')
        # The other thing we need to do is convert duration into a timedelta
        self.df['Duration'] = pd.to_timedelta(self.df['Duration'])
        # Sometimes shows are interesting, but we have to extract the show name (not season or episode)
        # in order to do useful things with it
        self.df['Shows'] = self.df['Title'].str.extract(r'(^.+)(?=: Season|Collection)')

    def get_total_time(self):
        return self.df['Duration'].sum().total_seconds()

    def get_most_watched(self, number=5):
        all_shows = self.df.groupby(["Shows"]).Duration.sum().sort_values(ascending=False)
        # Convert timedelta to seconds so we can serialize it, and output a dictionary
        d = all_shows[:number].dt.total_seconds().to_dict()
        # Convert dict to sorted array so the client doesn't have to worry about sorting
        return sorted(d.items(), key=lambda val: val[1], reverse=True)
