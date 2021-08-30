import cairo, sys, argparse, copy, math, random
from random import randrange
import time

float_gen = lambda a, b: random.uniform(a, b)

colors = []


def get_circles_img(w=452,h=584,initial=120,deviation=50,basedeforms=1,finaldeforms=3,minshapes=10,maxshapes=15,shapealpha=0.52):
    # for i in range(15):
    #     colors.append((float_gen(0.0, 1.0), float_gen(0.0, 1.0), float_gen(0.0, 1.0)))
    for i in range(15):
        colors.append((float_gen(0.4, .07), float_gen(0.4, 0.7), float_gen(0.4, 0.7)))
    width, height = w, h
    initial = initial
    deviation = deviation

    basedeforms = basedeforms
    finaldeforms = finaldeforms

    minshapes = minshapes
    maxshapes = maxshapes

    shapealpha = shapealpha

    ims = cairo.ImageSurface(cairo.FORMAT_ARGB32, width, height)
    cr = cairo.Context(ims)

    cr.set_source_rgb(.9, .9, .9)
    cr.rectangle(0, 0, width, height)
    cr.fill()

    cr.set_line_width(1)

    for p in range(-int(height*.2), int(height*1.2), 60):
        cr.set_source_rgba(random.choice(colors)[0], random.choice(colors)[1], random.choice(colors)[2], shapealpha)

        cr.arc(random.randint(-100, width+100), p, random.randint(100, 300), 0, 2*math.pi)

        cr.fill()
    return ims
    
def get_lines_img(w=452,h=584,shapealpha=1,row_width=30):
    for i in range(15):
        colors.append((float_gen(0.0, 1), float_gen(0, 1), float_gen(0.0, 1.0)))
    width, height = w, h

    shapealpha = shapealpha

    ims = cairo.ImageSurface(cairo.FORMAT_ARGB32, width, height)
    cr = cairo.Context(ims)
    

    for p in range(-200, height, row_width):
        cr.set_source_rgba(random.choice(colors)[0], random.choice(colors)[1], random.choice(colors)[2], shapealpha)
        pointer = 0
        cr.move_to(0,-200)
        while(pointer < width):
            x1 = pointer+random.randint(1,3)
            y1 = p+random.randint(-3,3)
            cr.set_line_width(random.randint(1,3))
            cr.rel_line_to(x1,y1)
            pointer = x1
            cr.stroke()
            cr.move_to(x1,p)
    return ims