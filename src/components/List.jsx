import { useDispatch, useSelector } from "react-redux";
import { setActiveSong } from "../redux/features/playerSlice";
import { Song } from "./Song";

export const List = ({ toggleActiveTab, songs, search }) => {
  const { activeSong, isPlaying, bgColor } = useSelector(
    (state) => state.player
  );

  const dispatch = useDispatch();

  const filteredSongs = songs?.filter((song) => {
    return search === ""
      ? song
      : song.name.toLowerCase().includes(search) ||
          song.artist.toLowerCase().includes(search);
  });

  const topTracks = filteredSongs.filter((song) => song.top_track);

  const handleSongClick = (song, index, list) => {
    dispatch(setActiveSong({ song, index, songs: list }));
    dispatch(playPause(true));
  };

  return (
    <div>
      {toggleActiveTab == 0 &&
        filteredSongs.map((song, index) => (
          <div className="max-h-[280px]" key={index}>
            <Song
              key={song.id}
              index={index}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              bgColor={bgColor}
              onSongClick={() => handleSongClick(song, index, filteredSongs)}
            />
          </div>
        ))}
      {toggleActiveTab == 1 &&
        topTracks.map((song, index) => (
          <div className="max-h-[280px]" key={index}>
            <Song
              key={song.id}
              index={index}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              bgColor={bgColor}
              onSongClick={() => handleSongClick(song, index, topTracks)}
            />
          </div>
        ))}
    </div>
  );
};
