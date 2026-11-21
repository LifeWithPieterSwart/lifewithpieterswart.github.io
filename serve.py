#!/usr/bin/env python3
"""Run Pita's World locally: python3 serve.py"""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os

ROOT = Path(__file__).resolve().parent
os.chdir(ROOT)
server = ThreadingHTTPServer(("127.0.0.1", 8000), SimpleHTTPRequestHandler)
print("Pita's World is running at http://127.0.0.1:8000")
print("Press Ctrl+C to stop the server.")
try:
    server.serve_forever()
except KeyboardInterrupt:
    print("\\nServer stopped.")
finally:
    server.server_close()
