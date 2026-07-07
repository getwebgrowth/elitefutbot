import os
from PIL import Image

def process_logo_exact():
    # Load the original uploaded image directly to ensure we have the raw source
    image_path = "/Users/ishara/.gemini/antigravity-ide/brain/b6cb282b-7ba0-4a80-a1da-1b044a6d81ee/media__1781728707066.png"
    img = Image.open(image_path)
    img = img.convert("RGBA")
    
    pixels = img.load()
    width, height = img.size
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            # Since the background is pure black, we use a color threshold to convert it to transparent
            if r < 12 and g < 12 and b < 12:
                pixels[x, y] = (0, 0, 0, 0)
                
    # Save the exact logo with transparency
    img.save("/Users/ishara/Desktop/codes/fut snipe/homepage/public/logo-elite.png", "PNG")
    img.save("/Users/ishara/Desktop/codes/fut snipe/homepage/src/app/icon.png", "PNG")
    
    # Generate favicon
    fav = img.resize((32, 32), Image.Resampling.LANCZOS)
    fav.save("/Users/ishara/Desktop/codes/fut snipe/homepage/src/app/favicon.ico", "ICO")
    print("Logo processed keeping the exact shape and crosshairs!")

if __name__ == "__main__":
    process_logo_exact()
