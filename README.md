# VectorShift — Frontend Technical Assessment

A visual pipeline builder built with React Flow. Drag nodes from the sidebar onto the canvas, wire them together, and submit the pipeline to a FastAPI backend that reports node/edge counts and whether the graph is a DAG.

## Project structure

```
frontend_technical_assessment/
├── frontend/   ← React app (this directory)
└── backend/    ← FastAPI server (sibling directory)
```

## Prerequisites

- Node.js 18+ and npm
- Python 3.9+

## Running locally

You need **two terminals** — one for the backend, one for the frontend.

### 1. Backend (FastAPI on port 8000)

```bash
cd ../backend

# First time only — create venv and install dependencies
python3 -m venv venv
source venv/bin/activate
pip install fastapi uvicorn

# Start the server
./venv/bin/uvicorn main:app --reload --port 8000
```

Verify it's running by visiting [http://localhost:8000](http://localhost:8000) — you should see `{"Ping":"Pong"}`.

### 2. Frontend (React on port 3000)

```bash
cd frontend
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

By default the frontend posts to `http://localhost:8000`. To override, create a `.env` file in `frontend/`:

```
REACT_APP_BACKEND_URL=http://your-backend-url
```

## Submitting a pipeline

1. Drag nodes from the left sidebar onto the canvas.
2. Connect node handles to form a workflow.
3. Click **Submit** in the floating menu (bottom of the canvas).

You'll get a toast showing the node count, connection count, and a warning if the graph contains a cycle.

## Available scripts

- `npm start` — run dev server with hot reload
- `npm run build` — produce a production build in `build/`
- `npm test` — run the test runner

## Deploying to Vercel

Vercel hosts the React build, but you'll need to host the FastAPI backend separately (Render, Railway, Fly.io, etc.).

1. Deploy `backend/` to your host of choice; note its public URL.
2. In Vercel project settings → Environment Variables, set:
   - `REACT_APP_BACKEND_URL = https://your-backend-url`
3. Update the backend's CORS `allow_origins` to include your Vercel domain (currently `['*']` in [backend/main.py](../backend/main.py), which is fine for testing but should be tightened for production).
4. Redeploy.
