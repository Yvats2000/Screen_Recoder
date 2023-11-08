import "./styles.css";

export default function App() {
  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia();
    const recoder = new MediaRecorder(stream);
    recoder.start();
    const [video] = stream.getVideoTracks();
    video.addEventListener("ended", () => {
      recoder.stop();
    });
    recoder.addEventListener("dataavailable", (evt) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(evt.data);
      a.download = "capture.webm";
      a.click();
    });
  };

  return (
    <div className="App">
      <h1>Screen Recorder App using ReactJS</h1>
      <h2>Click on button to Start Recording of your Screen!</h2>
      <button
        onClick={() => {
          startRecording();
        }}
      >
        Start recoding
      </button>
    </div>
  );
}
