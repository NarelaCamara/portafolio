import React from "react";

import { useEffect, useRef } from "react";
import canvasSketch from "canvas-sketch";
import random from "canvas-sketch-util/random";
import math from "canvas-sketch-util/math";

const width = 320;
const height = 320;

interface Props {
  className?: string;
}

class Effect {
  width: number;
  height: number;
  slice: any;
  angle: number;
  radius: number;
  cx: number;
  cy: number;
  x: any;
  y: any;
  w: number;
  h: number;
  scaleX: any;
  scaleY: any;
  value: any;
  line: any;
  a1: number;
  a2: number;
  a3: number;
  constructor(i: number, width: number, height: number, num: number) {
    let s = math.degToRad(360 / num);
    let r = width * 0.3;
    let a = s * i;

    this.width = width;
    this.height = height;

    this.slice = s;
    this.angle = a;
    this.radius = r;

    this.cx = width * 0.5;
    this.cy = height * 0.5;

    this.cx = width * 0.5;
    this.cy = height * 0.5;

    this.x = this.cx + this.radius * Math.sin(this.angle);
    this.y = this.cy + this.radius * Math.cos(this.angle);
    this.w = this.width * 0.01;
    this.h = this.height * 0.1;

    this.scaleX = random.range(0.1, 2);
    this.scaleY = random.range(0.2, 0.5);
    this.value = random.range(0, -this.h * 0.5);
    this.line = random.range(5, 20);

    this.a1 = this.radius * random.range(0.7, 1.3);
    this.a2 = this.slice * random.range(1, -8);
    this.a3 = this.slice * random.range(1, 5);
  }

  draw(context: any) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(-this.angle);
    context.scale(this.scaleX, this.scaleY);

    context.beginPath();
    context.rect(-this.w * 0.5, this.value, this.w, this.h);
    context.fill();
    context.restore();

    context.save();
    context.translate(this.cx, this.cy);
    context.rotate(-this.angle);

    context.lineWidth = this.line;
    context.beginPath();
    context.arc(0, 0, this.a1, this.a2, this.a3);
    context.stroke();

    context.restore();
  }
}

class CircleEffect {
  width: number;
  height: number;
  effect: Effect[];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.effect = [];
  }

  create() {
    let NUM = 40;
    this.effect = [];
    for (let i = 0; i < NUM; i++) {
      this.effect.push(new Effect(i, this.width, this.height, NUM));
    }
  }

  draw(context: any) {
    context.fillStyle = "white";
    if (this.effect.length > 0) {
      this.effect.forEach((element) => {
        element.draw(context);
      });
    }
  }
}

export const Animation = ({ className }: Props) => {
  const canvasRef = useRef(null);
  const circleEffectRef = useRef(new CircleEffect(width, height));

  const settings = {
    dimensions: [width, height],
    animate: true,
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      circleEffectRef.current.create();
    }, 100);

    const sketch = () => {
      return ({ context, width, height }: any) => {
        context.fillRect(0, 0, width, height);
        circleEffectRef.current.draw(context);
      };
    };

    canvasSketch(sketch, {
      ...settings,
      canvas: canvasRef.current,
    });

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas ref={canvasRef} className={` ${className} -z-10 fixed`}></canvas>
  );
};
