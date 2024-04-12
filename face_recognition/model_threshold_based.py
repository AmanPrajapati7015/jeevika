from models.inception_resnet_v1 import  InceptionResnetV1
from models.mtcnn import MTCNN
import cv2
import numpy as np
from PIL import Image
import os 
import sys
import requests

def save_image_from_url(url, filename):
    try:
        # Send a GET request to the image URL
        response = requests.get(url)
        # Check if the request was successful
        if response.status_code == 200:
            # Open a file in binary write mode and write the image content to it
            with open(filename, 'wb') as file:
                file.write(response.content)
            print(f"Image saved as {filename}")
        else:
            print(f"Failed to download image from {url}: {response.status_code}")
    except Exception as e:
        print(f"An error occurred: {e}")

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
    if ((recent_embedding-gt_embedding).norm().item())<=threshold:
        return "verified"
    else:
        return "not-verified"

def major(new_image_link,gt_image_link):
    # new_image_link=sys.argv[1]
    # gt_image_link=sys.argv[2]
    save_image_from_url(new_image_link,'new_image.jpg')
    save_image_from_url(gt_image_link,'gt_image.jpg')
    new_embedding=inference('new_image.jpg')
    gt_embedding=inference('gt_image.jpg')
    return compare(new_embedding,gt_embedding)
    
    
            