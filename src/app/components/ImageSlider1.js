"use client"

import React, { useState, useEffect, useRef } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

export default function ImageSlider1(props) {
  const imageGap = 16;
  const maxX = 0;

  const parentRef = useRef(0);
  const sliderRef = useRef(0);
  const [parentWidth, setParentWidth] = useState(0);
  const [xPosition, changeXPosition] = useState(0);
  const [minX, setMinX] = useState(0);
  const [count, setCount] = useState(0);
  const [startPosition, setStartPosition] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [slideDuration, setSlideDuration] = useState("0.3s");

  useEffect(() => {
    const handleResize = () => {
      if (parentRef.current) {
        setParentWidth(parentRef.current.offsetWidth);
        updateSlider();
        setCount(count + 1);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [parentRef.current.offsetWidth]);

  useEffect(() => {
    endX();
  }, [minX]);

  useEffect(() => {
    if (dragging) {
      function handleMouseMove(event) {
        console.log(xPosition);
        const distance = event.clientX - startPosition;
        if (distance + xPosition > minX) {
          if (distance + xPosition < 0) {
            changeXPosition(xPosition + distance);
          }
        }
      }
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [dragging]);

  let averageWidth = 0;
  let totalWidth = -imageGap;
  for (let i = 0; i < props.slides.length; i++) {
    totalWidth = totalWidth + props.slides[i].width + imageGap;
  }
  console.log('total width :', totalWidth)
  console.log('parent width :', parentWidth)
  averageWidth = totalWidth / props.slides.length;

  const updateSlider = () => {
    const diff = parentWidth - totalWidth;
    setMinX(diff);
  };

  const prevX = () => {
    const newX = xPosition + averageWidth;
    if (newX > maxX) {
      changeXPosition(maxX);
    } else {
      changeXPosition(xPosition + averageWidth);
    }
  };

  const nextX = () => {
    const newX = xPosition - averageWidth;
    console.log(xPosition, '-', averageWidth, '=', newX)
    console.log('minimum =', minX)
    if (newX < minX) {
      changeXPosition(minX);
      console.log('min x :', minX)
    } else {
      changeXPosition(xPosition - averageWidth);
    }
  };

  const endX = () => {
    const diff = parentWidth - totalWidth;
    if (xPosition < minX) {
      changeXPosition(minX);
      return true;
    } else if (xPosition > 0) {
      changeXPosition(0);
      return true;
    }
    return false;
  };

  function handleMouseDown(event) {
    event.preventDefault(); // Prevents the default behavior of the browser for dragging
    if (event.target.closest(".slider") === sliderRef.current) {
      console.log("down");
      setDragging(true);
      setStartPosition(event.clientX);
      setSlideDuration("0s");
      document.addEventListener("mouseup", handleMouseUp);
    }
  }

  function handleMouseUp() {
    if (dragging) {
      setDragging(false);
      setStartPosition(null);
      setSlideDuration("0.3s");
      document.removeEventListener("mouseup", handleMouseUp);
    }
  }

  return (
    <div className="flex w-full justify-center overflow-hidden px-4 ">
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        ref={parentRef}
        className="flex flex-col w-full relative h-auto pb-24 max-w-[1440px] gap-12"
      >
        <p className="module-title">{props.title}</p>
        <div
          ref={sliderRef}
          style={{
            display: 'flex',
            transform: `translateX(${xPosition}px)`,
            gap: imageGap,
            transitionDuration: slideDuration,
          }}
          className="slider"
        >
          {props.children}
        </div>
        <div className="flex justify-between w-full h-auto overflow-visible">
          <button
            onClick={() => prevX()}
            className="text-xl flex items-center gap-2 ml-4 hover:scale-125 duration-200 "
          >
            <FiArrowLeft />
            Previous
          </button>
          <button
            onClick={() => nextX()}
            className="text-xl flex items-center gap-2 mr-4 hover:scale-125 duration-200"
          >
            Next
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
