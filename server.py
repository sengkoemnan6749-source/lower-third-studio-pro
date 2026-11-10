"""
LowerThird Studio - Local Development & OBS Live Overlay Server
Launches a zero-dependency HTTP server and opens your browser.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and disable cache during motion graphics editing
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def main():
    os.chdir(DIRECTORY)
    server_address = ("", PORT)

    # Allow port reuse
    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(server_address, Handler) as httpd:
            url = f"http://localhost:{PORT}"
            print("=" * 65)
            print("  🎬 LOWER THIRD STUDIO PRO")
            print("=" * 65)
            print(f"  ▶ Local Studio URL:   {url}")
            print(f"  ▶ OBS Clean Overlay:  {url}?obs=1")
            print("=" * 65)
            print("  Press CTRL+C in this terminal to stop the server.")
            print("=" * 65)

            # Open browser automatically
            try:
                webbrowser.open(url)
            except Exception:
                pass

            httpd.serve_forever()
    except OSError as e:
        if e.errno == 10048 or "Address already in use" in str(e):
            alt_port = 8081
            print(f"Port {PORT} in use, trying {alt_port}...")
            url = f"http://localhost:{alt_port}"
            with socketserver.TCPServer(("", alt_port), Handler) as httpd:
                webbrowser.open(url)
                httpd.serve_forever()
        else:
            raise

if __name__ == '__main__':
    main()

