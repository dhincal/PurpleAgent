"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

export default function Slider({
  images,
  className,
}: {
  images: Array<string>;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  function Arrow(props: {
    disabled: boolean;
    left?: boolean;
    onClick: (e: any) => void;
  }) {
    return (
      <svg
        onClick={props.onClick}
        className={`h-5 w-5 md:w-9 md:h-9 absolute top-1/2 -translate-y-1/2 fill-white p-1 md:p-2 bg-agent-purple rounded-full cursor-pointer z-50 ${
          props.left ? "left-2" : "left-auto right-2"
        } `}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    );
  }

  return (
    <>
      <div className={"w-full"}>
        <div ref={sliderRef} className="keen-slider h-full">
          {loaded && instanceRef.current && (
            <div>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={false}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={false}
              />
            </div>
          )}

          <div className="keen-slider__slide relative w-screen h-full my-auto border-b-[20px] border-agent-orange">
            <Image
              src={"/slider1.jpg"}
              height={1080}
              width={1920}
              className="object-cover"
              alt="sliderImage1"
            />
          </div>
          <div className="keen-slider__slide relative w-screen h-full my-auto border-b-[20px] border-agent-orange">
            <Image
              src={"/slider2.jpg"}
              height={1080}
              width={1920}
              className="object-cover"
              alt="sliderImage1"
            />
          </div>
          <div className="keen-slider__slide relative w-screen h-full my-auto border-b-[20px] border-agent-orange">
            <Image
              src={"/slider3.jpg"}
              height={1080}
              width={1920}
              className="object-cover"
              alt="sliderImage1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
