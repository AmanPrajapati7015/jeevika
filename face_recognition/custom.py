from models.inception_resnet_v1 import  InceptionResnetV1
from models.mtcnn import MTCNN
import cv2
import numpy as np
from PIL import Image
import os 
# If required, create a face detection pipeline using MTCNN:
mtcnn = MTCNN(image_size=120, margin=0)

# Create an inception resnet (in eval mode):
resnet = InceptionResnetV1(pretrained='vggface2').eval()

def inference_test(file):
    img = Image.open(file)
    img=img.convert("RGB")
    # print(img.shape)
    # Get cropped and prewhitened image tensor
    img_cropped = mtcnn(img, save_path='preprocessed.jpg')
    bounding_box=mtcnn.detect(img)
    # print(new_image)
    bounding_box=bounding_box[0][0]
    # print(new_image)
    # print(img_cropped.type)
    # print()
    # print(f'image cropped shape {img_cropped.shape}')
    # Calculate embedding (unsqueeze to add batch dimension)
    img_embedding = resnet(img_cropped.unsqueeze(0))
    # Or, if using for VGGFace2 classification
    # resnet.classify = True
    # img_probs = resnet(img_cropped.unsqueeze(0))
    return img_embedding,bounding_box
    

def inference(file):
    img = Image.open(file)
    img=img.convert("RGB")
    # print(img.shape)
    # Get cropped and prewhitened image tensor
    img_cropped = mtcnn(img, save_path='preprocessed.jpg')
    # print(img_cropped.type)
    # print()
    # print(f'image cropped shape {img_cropped.shape}')
    # cv2.imshow('face',np.transpose(np.array(img_cropped.detach().cpu().numpy()*255,np.uint8),axes=(1,2,0)))
    # key=cv2.waitKey(0)
    # if key==ord('q'):
    #     cv2.destroyAllWindows()
    # Calculate embedding (unsqueeze to add batch dimension)
    img_embedding = resnet(img_cropped.unsqueeze(0))

    # Or, if using for VGGFace2 classification
    # resnet.classify = True
    # img_probs = resnet(img_cropped.unsqueeze(0))
    
    return img_embedding
    
    # print(f'embedddings :{img_embedding}')
    # print(f'embedding shape:{img_embedding}')
    # print(f'img probabilities {img_probs.shape}')
if __name__=='__main__':
    
    database_dir="database"
    images_list=sorted(os.listdir(database_dir))
    embedding_list=[]
    name=[]
    img_path="WhatsApp Image 2024-04-12 at 19.03.57.jpeg"
    for file in images_list:
        embedding_list.append(inference(os.path.join(database_dir,file)))
        # print(os.path.basename(file).split()[0])
        name.append(os.path.basename(file).split(".")[0])
    new_image,bounding_box=inference_test(img_path)
    difference=[]
    for embedding in embedding_list:
        difference.append((new_image-embedding).norm().item())
    print(difference)
    index=difference.index(min(difference))
    print(f'differance {difference[index]}')
    print(f'name {name[index]}')
    image=cv2.imread(img_path)
    cv2.rectangle(image,np.array((bounding_box[0],bounding_box[1]),np.int32),np.array((bounding_box[2],bounding_box[3]),np.int32),(0,255,0),2)
    # print(new_image)
    cv2.putText(image,f'name:{name[index]}',np.array((bounding_box[0],bounding_box[1]-15),np.int32),cv2.FONT_HERSHEY_DUPLEX,1,(0,255,0),2)
    cv2.imshow('image',image)
    # cv2.imshow('face',np.transpose(np.array(new_image.detach().cpu().numpy()*255,np.uint8),axes=(1,2,0)))
    key=cv2.waitKey(0)
    if key==ord('q'):
        cv2.destroyAllWindows()
        