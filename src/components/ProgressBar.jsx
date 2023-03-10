export function formatTime(time) {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  }

export const ProgressBar = ({
  inputElementRef,
  audioElementRef,
  timeProgress,
  duration,
}) => {

  function handleInputChange() {
    audioElementRef.current.currentTime = inputElementRef.current.value;
  }

  

  return (
    <div className=" gap-x-4 flex justify-between items-center">
      <span className=" text-sm">{formatTime(timeProgress)}</span>
      <input
        ref={inputElementRef}
        onChange={handleInputChange}
        defaultValue="0"
        type="range"
        className="range"
      />
      <span className=" text-sm">{formatTime(duration)}</span>
    </div>
  );
};
