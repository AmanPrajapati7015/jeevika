import socketio
import model_threshold_based 
sioc=socketio.Client()
@sioc.event
def connect():
    print('connection with GCS')
@sioc.event
def disconnect():
    print('Disconnected from server')
sioc.connect('http://localhost:8001')
@sioc.event
def verify(json):
    verification_status=model_threshold_based.major(json['new_img_url'],json['gt_img_url'])
    sioc.emit('final_status', verification_status)
sioc.wait()