var birdImageSrc = '';

function createColor(r, g, b){
  return {
    r: r,
    g: g,
    b: b
  };
}

const w = 1000, h = 1000;

// Number of birds
const grid_x = 1;//5
const grid_y = 1;//5

// The birds will draw inside this rectangle
const grid_x_pixels = .8 * w;
const grid_y_pixels = .8 * h;

// Distance between the birds
const sep_x = 0;//grid_x_pixels / (grid_x - 1);
const sep_y = 0;//grid_y_pixels / (grid_y - 1);

// Background Color
const bc = createColor(255, 255, 255);

// Global bird variables

const colors = [createColor(189, 208, 196),
                createColor(154,183,211),
                createColor(245,210,211),
                createColor(247,225,211),
                createColor(223,204,241)
               ];
const feet_length = 40;
const body_height = 100;
const line_thickness = 7;

const body_fill_chance = .3;
const head_fill_chance = .3;
const tail_chance = .3;
const arc_chance = .4;

const min_shape_lines = 1;
const max_shape_lines = 5;

let head_x = 0;
let head_y = 0;
let head_size = 90;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function get_random_element(list){
  //return l[int(random(len(l)))]
  const index = getRandomInt(list.length - 1);
  return list[index];
}
function pop_random(list, p){
  const index = getRandomInt(list.length - 1);
  const pulled = _.pullAt(list, [index]);
  return pulled[0];
}

// Adds shading to some of the randomly drawn triangles
function draw_lines(point_list, p){
  const p1 = pop_random(point_list);
  const p2 = pop_random(point_list);
  const p3 = pop_random(point_list);
  
  let lines = p.random(min_shape_lines, max_shape_lines);
  p.print('lines: ' + lines);
  
  // 0: x, 1: y
  
  let first_x_adj = 1;
  if (p3.x - p1.x === 0)
    first_x_adj = 1;
  else
    first_x_adj = (p3.x - p1.x)/p.abs(p3.x - p1.x);
  
  let first_y_adj = 1;
  if (p3.y - p1.y === 0)
    first_y_adj = 1;
  else
    first_y_adj = (p3.y - p1.y)/p.abs(p3.y - p1.y);
        
  let first_x_sep = p.sqrt(p.pow(p1.x - p3.x, 2))/lines * first_x_adj;
  let first_y_sep = p.sqrt(p.pow(p1.y - p3.y, 2))/lines * first_y_adj;
  
  let second_x_adj = 1;
  if (p3.x - p2.x === 0)
    second_x_adj = 1;
  else
    second_x_adj = (p3.x - p2.x)/p.abs(p3.x - p2.x);

  let second_y_adj = 1;
  if (p3.y - p2.y === 0)
    second_y_adj = 1;
  else
    second_y_adj = (p3.y - p2.y)/p.abs(p3.y - p2.y);

  let second_x_sep = p.sqrt(p.pow(p2.x - p3.x, 2))/lines * second_x_adj
  let second_y_sep = p.sqrt(p.pow(p2.y - p3.y, 2))/lines * second_y_adj
  
  for(let i = 0; i < lines; i++){
    p.line(p1.x + first_x_sep * i, p1.y + first_y_sep * i,
         p2.x + second_x_sep * i, p2.y + second_y_sep * i);
  }
}

function draw_bird_legs(x, y, p){
  p.stroke(0);
  p.strokeCap(p.ROUND);
  p.line(x - feet_length, y, x + feet_length, y);
  p.line(x - feet_length/3.0, y, x - feet_length/3.0 - feet_length/2.0, y - feet_length);
  p.line(x + feet_length/3.0, y, x + feet_length/3.0 - feet_length/2.0, y - feet_length);
}

function draw_bird_body(x, y, pc, dc){
  
}

function draw_bird_base(x, y, pc, dc, p){
  // Draw Legs
  draw_bird_legs(x, y, p);
  
  // Draw Body
  p.stroke(dc.r, dc.g, dc.b);
  let body_bottom = y - feet_length/2.0;

  let body_one = {x: p.int(x - feet_length * 2.0),
                  y: p.int(body_bottom)};
  let body_two = {x: p.int(x + feet_length*1.5),
                  y: p.int(body_bottom)};
  let body_three = {x: p.int(x + feet_length*2.1),
                  y: p.int(body_bottom - body_height)};
  let body_four = {x: p.int(x),
                  y: p.int(body_bottom - body_height * 1.3)};

  let left_midpoint = {x: (body_four.x + body_one.x) / 2,
                       y: (body_four.y + body_one.y) / 2};
  let top_midpoint = {x: (body_four.x + body_three.x) / 2,
                      y: (body_four.y + body_three.y) / 2};
  let right_midpoint = {x: (body_two.x + body_three.x) / 2,
                        y: (body_two.y + body_three.y) / 2};
  let bottom_midpoint = {x: (body_one.x + body_two.x) / 2,
                         y: (body_one.y + body_two.y) / 2};

  let true_midpoint = {x: (left_midpoint.x + right_midpoint.x) / 2,
                       y: (left_midpoint.y + right_midpoint.y) / 2};

  let body_points = [ body_one, body_three, body_four, left_midpoint, top_midpoint, bottom_midpoint];

  p.fill(bc.r, bc.g, bc.b);
  p.beginShape();
  p.vertex(body_one.x, body_one.y);
  p.vertex(body_two.x, body_two.y);
  p.vertex(body_three.x, body_three.y);
  p.vertex(body_four.x, body_four.y);
  p.endShape(p.CLOSE);
  
  let range = p.random(1, 4);
  for(let i = 0; i< range; i++){
    point_one = get_random_element(body_points);
    point_two = get_random_element(body_points);
    point_three = get_random_element(body_points);
    point_four = get_random_element(body_points);

    p.fill(pc.r, pc.g, pc.b);
    p.beginShape();
    p.vertex(point_one.x, point_one.y);
    p.vertex(point_two.x, point_two.y);
    p.vertex(point_three.x, point_three.y);
    p.endShape(p.CLOSE);
    p.noFill();

    if (p.random(1) < .5){
      draw_lines([point_one, point_two, point_three], p);
    }
  } // for
  head_x = x + feet_length;
  head_y = body_bottom - body_height * 1.1;
  head_size = 90;
  
  // Draw Tail
  if (p.random(1) < tail_chance){
    p.stroke(dc.r, dc.g, dc.b);
    p.fill(pc.r, pc.g, pc.b);
    let var_width = p.random(15, 30);
    let var_x = p.random(-25, -15);
    let var_y = p.random(-50, -30);
    if (p.random(1) < 0.3){
      var_y *= -1
    }
    
    p.beginShape();
    p.vertex(body_one.x, body_one.y);
    p.vertex(body_one.x + var_width, body_one.y);
    p.vertex(body_one.x + + var_width + var_x, body_one.y + var_y);
    p.vertex(body_one.x + var_x, body_one.y + var_y);
    p.endShape(p.CLOSE);
  } // if < tail_chance
  
  // Draw Beak
  let y_variance = p.random(10, 40);
  let length_variance = p.random(50, 100);
  // pc = get_random_element(colors);
  // inc = .2 * 255;
  // stroke(pc[0] - inc, pc[1] - inc, pc[2] - inc);
  if (p.random(1) < body_fill_chance)
    p.fill(pc.r, pc.g, pc.b);
  else
    p.fill(bc.r, bc.g, bc.b);
  
  p.triangle(head_x, head_y - y_variance, 
           head_x, head_y + y_variance, 
           head_x + length_variance, head_y);
  
  // Draw Head
  p.fill(bc.r, bc.g, bc.b);
  p.circle(head_x, head_y, head_size);

  if (p.random(1) < arc_chance){
     p.fill(pc.r, pc.g, pc.b);
     p.noStroke();
     p.arc(head_x, head_y, head_size, head_size, p.random(.7, 1)*p.PI, 1.8*p.PI, p.PIE);
  }
  p.stroke(dc.r, dc.g, dc.b);
  if (p.random(1) < head_fill_chance)
    p.fill(pc.r, pc.g, pc.b);
  else
    p.noFill();
  p.circle(head_x, head_y, head_size);
  
  // Draw Eyes
  const eye_x = head_x + head_size/6.0;
  const eye_y = head_y - head_size/8.0;
  const eye_size = 25;
  p.fill(bc.r, bc.g, bc.b);
  p.circle(eye_x, eye_y, eye_size);

  p.stroke(0);
  p.fill(0);
  p.noStroke();
  p.circle(eye_x, eye_y, 10);
}

var sketch = (p) => {

  p.setup = () => {
    let c = p.createCanvas(256, 256);
    c.hide();

    p.background(bc.r, bc.g, bc.b);
    p.pixelDensity(2);
    p.stroke(0);
    p.strokeWeight(line_thickness);
    p.strokeJoin(p.ROUND);

    let current_x = w / 2.0 - grid_x_pixels / 2.0 + 10;
    let current_y = h / 2.0 - grid_y_pixels / 2.0 + body_height - 10;
    for (let i = 0; i < grid_x; i++) {
      for (let j = 0; j < grid_y; j++) {
        let pc = get_random_element(colors);
        let inc = .2 * 255;
        let dc = {
          r: pc.r - inc,
          g: pc.g - inc,
          b: pc.b - inc
        };
        draw_bird_base(current_x, current_y, pc, dc, p);
        current_y += sep_y;
      } // for grid_y
      current_y = h / 2.0 - grid_y_pixels / 2.0 + body_height;
      current_x += sep_x;
    } // for grid_x
    birdImageSrc = c.elt.toDataURL("image/png", 1.0);
    addBirdImage();
  }
};

const startSketch = () => {
  var myp5 = new p5(sketch);
}

