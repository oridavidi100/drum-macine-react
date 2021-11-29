import React, { useRef } from 'react';

function Click(props) {
  const audio = useRef(props.one.keyTrigger);
  return (
    <div>
      <button id={props.one.id} className='drum-pad' onKeyPress={() => audio.current.play()}>
        <audio ref={audio} src={props.one.url} id={props.one.keyTrigger} className='clip'></audio>
        {props.one.keyTrigger}
      </button>
    </div>
  );
}

export default Click;
