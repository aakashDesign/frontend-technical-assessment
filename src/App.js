import { Sidebar } from './sidebar';
import { PipelineUI } from './ui';
import { FloatingMenu } from './components/floatingMenu';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-shell__main">
        <div className="app-shell__canvas">
          <PipelineUI />
          <FloatingMenu />
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
