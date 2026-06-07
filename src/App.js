import { Sidebar } from './sidebar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-shell__main">
        <div className="app-shell__canvas">
          <PipelineUI />
        </div>
        <div className="app-shell__footer">
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}

export default App;
