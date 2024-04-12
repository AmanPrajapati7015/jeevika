from models.inception_resnet_v1 import  InceptionResnetV1
from models.mtcnn import MTCNN

# If required, create a face detection pipeline using MTCNN:
mtcnn = MTCNN(image_size=120, margin=0)

# Create an inception resnet (in eval mode):
resnet = InceptionResnetV1(pretrained='vggface2').eval()

from PIL import Image

img = Image.open('man.png')
img=img.convert("RGB")
# print(img.shape)

# Get cropped and prewhitened image tensor
img_cropped = mtcnn(img, save_path='preprocessed.jpg')

# Calculate embedding (unsqueeze to add batch dimension)
img_embedding = resnet(img_cropped.unsqueeze(0))

# Or, if using for VGGFace2 classification
resnet.classify = True
img_probs = resnet(img_cropped.unsqueeze(0))
# print(f'embedddings :{img_embedding}')
print(f'embedding shape:{img_embedding.shape}')
print(f'img probabilities {img_probs.shape}')