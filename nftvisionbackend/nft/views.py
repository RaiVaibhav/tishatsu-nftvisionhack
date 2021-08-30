from pdb import set_trace
from django.http.response import JsonResponse
from django.shortcuts import render,redirect, HttpResponse
from PIL import Image, ImageDraw, ImageFont
import os
import random
import json
import base64

import requests
from random import randrange
import time
from .watercolor import get_watercolor_img
from .circles import get_circles_img, get_lines_img

TTYPES = ["plain","plain eth","halved","halved eth","watercolor","hexagons","circles","lines","striped light","striped bright","boxed light","boxed bright"]
API_KEY = ''

def delete_files(filename):
    files = os.listdir("./media/")
    for file in files:
        if not file in {'eth.png', 'samplet.png'} and not file==filename:
            os.remove('./media/'+file)


def get_random_color(col_type="all"):
    if col_type == "all":
        start = 0
        end = 255
    elif col_type == "bright":
        start = 0
        end = 150
    elif col_type == "light":
        start = 160
        end = 255 
    elif col_type == "eth":
        start = 20
        end = 220           
    R = randrange(start,end)
    G = randrange(start,end)
    B = randrange(start,end)
    return (R,G,B)

def get_random_name(ext=".jpg"):
    return str(time.time()*1000).split(".")[0]+ext

def tshirt(request):
    return render(request, "Designpage.html")

def get_random_tshirt_background(request):
    h=584
    w=452
    t_type = random.choice(TTYPES)
    #t_type = "lines"
    #print(t_type)

    if t_type=="halved":
        color1 = get_random_color()
        font_type = "./fonts/unicode.ttf"
        fontsize = 33
        font = ImageFont.truetype(font_type, fontsize)
        img = Image.new('RGB', (w, h), color = color1)
        shape = [(w/2,0), (w, h)]
        img1 = ImageDraw.Draw(img)  
        img1.rectangle(shape, fill = get_random_color())
        text = random.choice(['生活','愛'])
        if text == "愛":
            img1.text((w-150,h-150),text,font=font, fill=color1)
        else:
            img1.text((w-200,h-150),text,font=font, fill=color1)    
        name = get_random_name(".jpg")
        img.save("./media/"+name)

    elif t_type=="plain":
        color1 = get_random_color()
        font_type = "./fonts/unicode.ttf"
        fontsize = 33
        font = ImageFont.truetype(font_type, fontsize)
        img = Image.new('RGB', (w, h), color = color1)
        shape = [(w/2,0), (w, h)]
        img1 = ImageDraw.Draw(img)  
        #img1.rectangle(shape, fill = get_random_color())
        text = random.choice(['生活','愛',""])
        if text == "愛":
            img1.text((w-150,h-150),text,font=font, fill=get_random_color())
        elif text == "生活":
            img1.text((w-200,h-150),text,font=font, fill=get_random_color())    
        name = get_random_name(".jpg")
        img.save("./media/"+name)    

    elif t_type=="halved eth" or t_type=="plain eth":
        color1 = get_random_color(col_type="eth")
        img = Image.new('RGB', (w, h), color = color1)
        bg_w, bg_h = img.size
        shape = [(w/2,0), (w, h)]
        
        img2 = Image.open('./media/eth.png', 'r')
        rgba = img2.convert("RGBA")
        datas = rgba.getdata()
        
        newData = []

        for item in datas:
            if item[0] == 0 and item[1] == 0 and item[2] == 0:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)

        rgba.putdata(newData)

        img_w, img_h = rgba.size
        offset = (int((bg_w - img_w) / 1.5), int((bg_h - img_h) / 1.3))
        font_type = "./fonts/unicode.ttf"
        fontsize = 20
        font = ImageFont.truetype(font_type, fontsize)
        img1 = ImageDraw.Draw(img)
        if t_type == "halved eth":  
            img1.rectangle(shape, fill = get_random_color(col_type="eth"))
            img1.text((offset[0]-16,offset[1]+60),'etherium',font=font, fill=color1)
        else:
            img1.text((offset[0]-16,offset[1]+60),'etherium',font=font, fill='grey')    
        img.paste(rgba,offset,rgba)    
        name = get_random_name(".jpg")
        img.save("./media/"+name)

    elif t_type=="watercolor":
        name = get_random_name(".png")
        img = get_watercolor_img()
        img.write_to_png("./media/"+name)   

    elif t_type=="hexagons":
        name = get_random_name(".png")
        alpha = random.randrange(2,4)/100
        img = get_watercolor_img(initial=1,deviation=1,shapealpha=alpha)
        img.write_to_png("./media/"+name)

    elif t_type=="circles":
        name = get_random_name(".png")
        alpha = random.randrange(20,80)/100
        img = get_circles_img(initial=1,deviation=1,shapealpha=alpha)
        img.write_to_png("./media/"+name)   

    elif t_type=="lines":
        name = get_random_name(".png")
        row_width = random.randrange(25,60)
        img = get_lines_img(shapealpha=0.6,row_width=row_width)
        img.write_to_png("./media/"+name)       

    elif t_type=="striped light":
        name = get_random_name(".jpg")
        img = Image.new('RGB', (w, h), color = get_random_color(col_type="light"))
        no_of_strips = randrange(3,12)
        shapes = []
        for i in range(1,no_of_strips): 
            shape = [(w*i/no_of_strips,0), (w*(i+1)/no_of_strips, h)]
            shapes.append(shape)
        for shape in shapes:
            img1 = ImageDraw.Draw(img)  
            img1.rectangle(shape, fill = get_random_color(col_type="light")) 
        img.save("./media/"+name)

    elif t_type=="striped bright":
        name = get_random_name(".jpg")
        img = Image.new('RGB', (w, h), color = get_random_color(col_type="bright"))
        no_of_strips = randrange(3,12)
        shapes = []
        for i in range(1,no_of_strips): 
            shape = [(w*i/no_of_strips,0), (w*(i+1)/no_of_strips, h)]
            shapes.append(shape)
        for shape in shapes:
            img1 = ImageDraw.Draw(img)  
            img1.rectangle(shape, fill = get_random_color(col_type="bright")) 
        img.save("./media/"+name)  

    elif t_type=="boxed light":
        name = get_random_name(".jpg")
        img = Image.new('RGB', (w, h), color = get_random_color(col_type="light"))
        no_of_strips = randrange(4,10)
        shapes = []
        for i in range(0,no_of_strips):
            for j in range(0,no_of_strips):
                shape = [(w*i/no_of_strips,h*j/no_of_strips), (w*(i+1)/no_of_strips, h*(j+1)/no_of_strips)]
                shapes.append(shape)
        for shape in shapes:
            img1 = ImageDraw.Draw(img)  
            img1.rectangle(shape, fill = get_random_color(col_type="light")) 
        img.save("./media/"+name)

    elif t_type=="boxed bright":
        name = get_random_name(".jpg")
        img = Image.new('RGB', (w, h), color = get_random_color(col_type="bright"))
        no_of_strips = randrange(4,10)
        shapes = []
        for i in range(0,no_of_strips):
            for j in range(0,no_of_strips):
                shape = [(w*i/no_of_strips,h*j/no_of_strips), (w*(i+1)/no_of_strips, h*(j+1)/no_of_strips)]
                shapes.append(shape)
        for shape in shapes:
            img1 = ImageDraw.Draw(img)  
            img1.rectangle(shape, fill = get_random_color(col_type="bright")) 
        img.save("./media/"+name)         
    delete_files(name)
    return JsonResponse({"bg_url":"/media/"+name })  

def convert_and_save(b64_string):
    with open("imageToSave.png", "wb") as fh:
        fh.write(base64.b64decode(b64_string.split(',')[1]))

def get_ipfs_link(request):
    token = f"Bearer {API_KEY}"
    headers = {"Authorization": token}
    img = request.POST.get('image')
    decodedImg = base64.b64decode(img.split(',')[1])
    metatadata={'somemedata': '123'}
    res = requests.post("https://api.nft.storage/upload", data=decodedImg, json=(json.dumps(metatadata)), headers=headers)
    if res.status_code == requests.codes.ok:
        return JsonResponse(res.json())
    else:
        return HttpResponse(res.status_code)

def randomtshirt(request):

    return render(request, "generate.html");  

def firstpage(request):
    return redirect("generate")    