from models.inception_resnet_v1 import  InceptionResnetV1
from models.mtcnn import MTCNN
import cv2
import numpy as np
from PIL import Image
import os 
import sys
# If required, create a face detection pipeline using MTCNN:
mtcnn = MTCNN(image_size=120, margin=0)

threshold=1.00# to be decided after some testing

# Create an inception resnet (in eval mode):
resnet = InceptionResnetV1(pretrained='vggface2').eval()
def inference(file):
    img = Image.open(file)
    img=img.convert("RGB")
    img_cropped = mtcnn(img, save_path='preprocessed.jpg')
    img_embedding = resnet(img_cropped.unsqueeze(0))
    return img_embedding
    
def compare(recent_embedding,gt_embedding):
    global threshold
    if (recent_embedding-gt_embedding.norm().item())<=threshold:
        return "verified"
    else:
        return "not-verified"

def major():
    new_image_path=sys.argv[1]
    gt_image_path=sys.argv[2]
    new_embedding=inference(new_image_path)
    gt_embedding=inference(gt_image_path)
    return compare(new_embedding,gt_embedding)
    
    
            