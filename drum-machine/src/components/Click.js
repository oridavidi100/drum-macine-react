import React, { useRef } from 'react';

function Click(props) {
  const audio = useRef(props.one.keyTrigger);

  return (
    <div>
      <button
        id={props.one.id}
        className='drum-pad'
        onClick={() => {
          props.setplayOne(audio.current);
          props.playMusic();
          props.setText(props.one.id);
        }}
      >
        <audio ref={audio} src={props.one.url} id={props.one.id} className='clip'></audio>
        {props.one.keyTrigger}
      </button>
    </div>
  );
}

export default Click;
