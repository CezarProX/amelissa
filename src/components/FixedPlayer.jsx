function FixedPlayer() {
  return (
    <div className="jp-player-fixed jp-player-init" data-jp-player-name=".jp-player-fixed">
      <div className="jp-jplayer"></div>
      <div className="jp-audio jp-audio-3 jp-state-visible" role="application" aria-label="media player">
        <div className="jp-interface">
          <div className="jp-time-rail">
            <div className="jp-progress">
              <div className="jp-seek-bar">
                <div className="jp-play-bar"></div>
              </div>
            </div>
          </div>
          <div className="jp-button jp-controls">
            <button className="jp-btn jp-previous" role="button" tabIndex="0"></button>
            <button className="jp-btn jp-play" role="button" tabIndex="0"></button>
            <button className="jp-btn jp-next" role="button" tabIndex="0"></button>
          </div>
        </div>
        <div className="jp-playlist">
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="jp-no-solution">
          <span>Update Required To play the media you will need to either update your browser to a recent version or update your</span>
          <a href="https://get.adobe.com/flashplayer/" target="_blank" rel="noreferrer"> Flash plugin</a>.
        </div>
      </div>
    </div>
  );
}

export default FixedPlayer;

