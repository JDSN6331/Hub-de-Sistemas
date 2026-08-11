import http.server
import socketserver
import os
import sys
import subprocess

PORT = 5174
HOST = "0.0.0.0"

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DIST_DIR = os.path.join(BASE_DIR, "dist")

def ensure_dist():
    if not os.path.exists(DIST_DIR) or not os.path.exists(os.path.join(DIST_DIR, "index.html")):
        print("[INFO] Pasta 'dist' nao encontrada. Compilando o projeto com 'npm run build'...")
        try:
            subprocess.run("npm run build", shell=True, check=True, cwd=BASE_DIR)
        except Exception as e:
            print(f"[ERRO] Falha ao compilar o projeto: {e}")

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIST_DIR, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

if __name__ == '__main__':
    ensure_dist()
    
    if os.path.exists(DIST_DIR):
        os.chdir(DIST_DIR)
    
    print(f"==================================================")
    print(f"  Hub de Sistemas Agro - Servidor Web Ativo")
    print(f"==================================================")
    print(f"  Porta: {PORT}")
    print(f"  Acesso Local: http://localhost:{PORT}")
    print(f"  Acesso na Rede: http://<IP_DO_SEU_NOTEBOOK>:{PORT}")
    print(f"==================================================\n")
    
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer((HOST, PORT), CustomHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[INFO] Servidor finalizado.")
            sys.exit(0)
