export function Fallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={() => window.location.reload()}>Reload</button>
      <br />
      <br />
      <button onClick={() => resetErrorBoundary()}>Go to Home</button>
    </div>
  );
}
