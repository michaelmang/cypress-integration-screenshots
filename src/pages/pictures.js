import '../styles/global.css';

export default function Pictures({ data, isLoading, onGenerateNewPictures }) {
  return (
    <main>
      <h1>
        Fresh Pictures{' '}
        <span aria-label="camera" role="img">
          📷
        </span>
      </h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <button onClick={onGenerateNewPictures}>Generate!</button>}
      {!isLoading &&
        data.map((x, idx) => <img key={`x_${idx}`} alt={`x_${idx}`} src={x} />)}
    </main>
  );
}
