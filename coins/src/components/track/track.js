// import { useState } from "react";

const Track = (props) => {
  const song = props.item;
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [musicPlay, setMusicPlay] = useState(null)

//   const playMusic = (music) => {
//     var audio = new Audio(music);
//     if (isPlaying) {
//       musicPlay.pause();
//     } else {
//       setMusicPlay(audio)
//       audio.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

  return (
    <div className="col-6 col-lg-3">
      <div className="card mb-3">
        <img
          className="card-img-top"
          src={song.album.cover_big}
          alt={song.title}
        />
        <div className="card-body">
          <h5 className="card-title">{song.title}</h5>
          <p>{song.artist.name}</p>
          <a
            target="blank"
            href={`https://www.youtube.com/results?search_query=${song.title}`}
          >
            {" "}
            full song on yt
          </a>
          {/* <button
            onClick={() => playMusic(song.preview)}
            className="btn btn-dark"
          >
            {isPlaying ? "Pause" : "Play"}
          </button> */}
          <audio className="test" controls>
                  <source src={song.preview} type="audio/ogg" />
               </audio>
        </div>
      </div>
    </div>
  );
};

export default Track;
