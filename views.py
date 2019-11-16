from modules import shorten_urls
from flask import Flask, render_template, request, redirect, url_for
import sys
import os
sys.path.append(os.getcwd())

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/post', methods=['GET', 'POST'])
def post():
    if request.method == 'POST':
        url = request.form['url']
        short_urls = shorten_urls(url)
        return render_template('result.html', short_urls=short_urls)
    else:
        return redirect(url_for('index'))  # if error, redirect to index


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
