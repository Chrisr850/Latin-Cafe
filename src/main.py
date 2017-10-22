from flask import Flask, render_template
app = Flask(__name__)

@app.route('/<string:page_name>')
def hello_world(page_name):
    return render_template("{}.html".format(page_name))
