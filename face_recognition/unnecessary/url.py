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

# Example usage:
image_url = "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?q=10&h=200"
save_image_from_url(image_url, "image.jpg")
