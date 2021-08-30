import cairo, sys, argparse, copy, math, random
from random import randrange
import time

float_gen = lambda a, b: random.uniform(a, b)

colors = []
# for i in range(15):
#     colors.append((float_gen(0.0, 1.0), float_gen(0.0, 1.0), float_gen(0.0, 1.0)))

def octagon(x_orig, y_orig, side):
    x = x_orig
    y = y_orig
    d = side / math.sqrt(2)

    oct = []

    oct.append((x, y))

    x += side
    oct.append((x, y))

    x += d
    y += d
    oct.append((x, y))

    y += side
    oct.append((x, y))

    x -= d
    y += d
    oct.append((x, y))

    x -= side
    oct.append((x, y))

    x -= d
    y -= d
    oct.append((x, y))

    y -= side
    oct.append((x, y))

    x += d
    y -= d
    oct.append((x, y))

    return oct

def deform(shape, iterations, variance):
    for i in range(iterations):
        for j in range(len(shape)-1, 0, -1):
            midpoint = ((shape[j-1][0] + shape[j][0])/2 + float_gen(-variance, variance), (shape[j-1][1] + shape[j][1])/2 + float_gen(-variance, variance))
            shape.insert(j, midpoint)
    return shape


def get_watercolor_img(w=452,h=584,initial=120,deviation=50,basedeforms=1,finaldeforms=3,minshapes=10,maxshapes=15,shapealpha=0.02):
    for i in range(15):
        colors.append((float_gen(0.0, 1.0), float_gen(0.0, 1.0), float_gen(0.0, 1.0)))
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
        shape = octagon(random.randint(-100, width+100), p, random.randint(100, 300))
        baseshape = deform(shape, basedeforms, initial)

        for j in range(random.randint(minshapes, maxshapes)):
            tempshape = copy.deepcopy(baseshape)
            layer = deform(tempshape, finaldeforms, deviation)

            for i in range(len(layer)):
                cr.line_to(layer[i][0], layer[i][1])
            cr.fill()
    return ims
    