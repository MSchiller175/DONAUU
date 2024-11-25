from flask import Flask, render_template, send_from_directory
from flask.cli import ScriptInfo
import json

app = Flask(__name__)

def handler(event, context):
    # Simuliere einen WSGI-Umgebung für Flask
    path = event['path']
    http_method = event['httpMethod']
    
    # Erstelle einen ScriptInfo-Kontext
    script_info = ScriptInfo()
    
    with app.test_client() as client:
        response = client.open(path, method=http_method)
        
        return {
            'statusCode': response.status_code,
            'headers': dict(response.headers),
            'body': response.get_data(as_text=True)
        }

@app.route('/')
def index():
    return render_template('index.html')

# Hier weitere Routen aus Ihrer ursprünglichen app.py hinzufügen

if __name__ == '__main__':
    app.run(debug=True)
