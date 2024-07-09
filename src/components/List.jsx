import { useSelector } from "react-redux";
import { Song } from "./Song";

export const List = ({ toggleActiveTab, songs, search }) => {
  const { activeSong, isPlaying, bgColor } = useSelector(
    (state) => state.player
  );
  return (
    <div>
      {toggleActiveTab == 0 &&
        songs
          ?.filter((song) => {
            return search === ""
              ? song
              : song.name.toLowerCase().includes(search) ||
                  song.artist.toLowerCase().includes(search);
          })
          .map((song, index) => (
            <div className="max-h-[280px]" key={index}>
              <Song
                key={song.id}
                index={index}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                songs={songs}
                bgColor={bgColor}
              />
            </div>
          ))}
      {toggleActiveTab == 1 &&
        songs
          ?.filter((song) => song.top_track)
          .filter((song) => {
            return search === ""
              ? song
              : song.name.toLowerCase().includes(search) ||
                  song.artist.toLowerCase().includes(search);
          })
          .map((song, index) => (
            <div className="max-h-[280px]" key={index}>
              <Song
                key={song.id}
                index={index}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                songs={songs}
                bgColor={bgColor}
              />
            </div>
          ))}
    </div>
  );
};
