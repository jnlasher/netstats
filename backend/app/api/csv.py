from flask import request, jsonify
from werkzeug.utils import secure_filename
from app.models import StreamingData
from app.api import bp, errors

@bp.route('/upload/', methods=['POST'])
def parse_csv():
    # Check if file is present and short out if not
    if 'file' not in request.files:
        response = errors.error_response(400, "Files part not given")
        return response
    # Load the file object but make sure the browser didn't just give us a null string
    files = request.files['file']
    if files.filename == '':
        response = errors.error_response(400, "File string was blank")
        return response
    # Finally, check that we have the allowed file type
    if not allowed_file(files.filename):
        response = errors.error_response(400, "Invalid file type")
        return response
    # Now create the data class and parse the file
    data = StreamingData()
    data.parse_data(files)
    """
    # TODO #
    # These things should be in separate requests but what I really want to do is mess around with
    # the front end so for now I'm going to just parse any of the fun stuff from the CSV and chuck
    # it back over the wire so that we can display it. Later this will have to go into a service 
    # (or database) that can handle client session persistence
    """
    payload = {
        'total_time': data.get_total_time(),
        'most_watched': data.get_most_watched()
    }
    response = jsonify(payload)
    response.status_code = 200
    return response


def allowed_file(filename):
    extensions = { 'csv' } # TODO this probably belongs in the config file
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in extensions