import React from 'react';

interface ImgPlayProps {
  playing: boolean;
  audioPlayer: HTMLAudioElement | null;
}

const ImgPlay = ({ playing, audioPlayer }: ImgPlayProps) => {
  return (
    <div className={`play-btn ${audioPlayer ? 'active' : ''}`}>
      {playing ? (
        <div className="play-btn__pause"></div>
      ) : (
        <svg
          width="10"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.287422 0.0693819C0.376104 0.0231631 0.475355 0 0.574754 0C0.673886 0 0.773106 0.0231631 0.862176 0.0693819L7.71255 4.55186C7.89006 4.64422 8 4.81521 8 5.00008C8 5.18493 7.89036 5.35589 7.71255 5.44814L0.862176 9.93081C0.684394 10.0231 0.465233 10.0231 0.287571 9.93081C0.109759 9.83824 0 9.6672 0 9.48246V0.51755C0 0.332781 0.10958 0.16182 0.287422 0.0693819Z"
            fill={!audioPlayer ? '#adbfdf' : '#005FF8'}
          />
        </svg>
      )}
    </div>
  );
};

export default ImgPlay;