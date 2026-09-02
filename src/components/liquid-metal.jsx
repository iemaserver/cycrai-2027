import React, { useEffect, useRef, useState } from "react";

const LiquidMetalButton = ({
  children,
  icon,
  size = "md",
  borderWidth = 3,
  metalConfig = {},
  className = "",
  disabled = false,
  type = "button",
  onClick,
  ...props
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  /*
   * =========================================================
   * BUTTON PRESS STATE
   * =========================================================
   */

  const [isPressed, setIsPressed] = useState(false);

  /*
   * =========================================================
   * IEEE BLUE CONFIGURATION
   * =========================================================
   */

  const {
    colorBack = "#075DB8",
    colorTint = "#4DA3FF",
    speed = 0.8,
    repetition = 3,
    distortion = 0.25,
  } = metalConfig;

  /*
   * =========================================================
   * BUTTON SIZES
   * =========================================================
   */

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  /*
   * =========================================================
   * LIQUID METAL ANIMATION
   * =========================================================
   */

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let width = 0;
    let height = 0;
    let time = 0;

    /*
     * =======================================================
     * RESIZE
     * =======================================================
     */

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );
    };

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    /*
     * =======================================================
     * HEX → RGB
     * =======================================================
     */

    const hexToRgb = (hex) => {
      const value = hex.replace("#", "");

      return {
        r: parseInt(
          value.substring(0, 2),
          16
        ),

        g: parseInt(
          value.substring(2, 4),
          16
        ),

        b: parseInt(
          value.substring(4, 6),
          16
        ),
      };
    };

    const back = hexToRgb(colorBack);
    const tint = hexToRgb(colorTint);

    /*
     * =======================================================
     * ANIMATION
     * =======================================================
     */

    const animate = () => {
      time += 0.015 * speed;

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      /*
       * -----------------------------------------------------
       * LIQUID WAVES
       * -----------------------------------------------------
       */

      const wave1 =
        Math.sin(
          time * repetition
        ) *
          0.5 +
        0.5;

      const wave2 =
        Math.sin(
          time *
            repetition *
            1.7 +
            2
        ) *
          0.5 +
        0.5;

      const wave3 =
        Math.cos(
          time *
            repetition *
            0.8
        ) *
          0.5 +
        0.5;

      /*
       * -----------------------------------------------------
       * MAIN IEEE BLUE GRADIENT
       * -----------------------------------------------------
       */

      const gradient =
        ctx.createLinearGradient(
          0,
          0,
          width,
          height
        );

      gradient.addColorStop(
        0,
        `rgb(
          ${back.r},
          ${back.g},
          ${back.b}
        )`
      );

      gradient.addColorStop(
        Math.max(
          0.15,
          wave1 * 0.35
        ),
        `rgb(
          ${tint.r},
          ${tint.g},
          ${tint.b}
        )`
      );

      /*
       * -----------------------------------------------------
       * MIXED BLUE
       * -----------------------------------------------------
       */

      const mixedR =
        Math.round(
          back.r +
            (tint.r - back.r) *
              wave2
        );

      const mixedG =
        Math.round(
          back.g +
            (tint.g - back.g) *
              wave2
        );

      const mixedB =
        Math.round(
          back.b +
            (tint.b - back.b) *
              wave2
        );

      gradient.addColorStop(
        0.5,
        `rgb(
          ${mixedR},
          ${mixedG},
          ${mixedB}
        )`
      );

      /*
       * -----------------------------------------------------
       * BRIGHT BLUE
       * -----------------------------------------------------
       */

      gradient.addColorStop(
        0.75 +
          wave3 * 0.15,

        `rgb(
          ${tint.r},
          ${tint.g},
          ${tint.b}
        )`
      );

      gradient.addColorStop(
        1,

        `rgb(
          ${back.r},
          ${back.g},
          ${back.b}
        )`
      );

      ctx.fillStyle =
        gradient;

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      /*
       * =====================================================
       * MOVING BLUE HIGHLIGHT
       * =====================================================
       */

      const highlightX =
        width *
        (
          0.5 +
          Math.sin(
            time * 1.2
          ) *
            0.45
        );

      const highlightY =
        height *
        (
          0.5 +
          Math.cos(
            time * 0.9
          ) *
            0.25
        );

      const highlightRadius =
        Math.max(
          width,
          height
        ) * 0.8;

      const highlight =
        ctx.createRadialGradient(
          highlightX,
          highlightY,
          0,
          highlightX,
          highlightY,
          highlightRadius
        );

      highlight.addColorStop(
        0,
        `rgba(
          ${tint.r},
          ${tint.g},
          ${tint.b},
          0.95
        )`
      );

      highlight.addColorStop(
        0.18,
        `rgba(
          ${tint.r},
          ${tint.g},
          ${tint.b},
          0.65
        )`
      );

      highlight.addColorStop(
        0.45,
        `rgba(
          ${tint.r},
          ${tint.g},
          ${tint.b},
          0.18
        )`
      );

      highlight.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );

      ctx.globalCompositeOperation =
        "screen";

      ctx.fillStyle =
        highlight;

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      /*
       * =====================================================
       * WHITE METALLIC SHINE
       * =====================================================
       */

      const shinePosition =
        ((time * 0.18) %
          1.4) -
        0.2;

      const shine =
        ctx.createLinearGradient(
          width *
            shinePosition,
          0,
          width *
            (shinePosition +
              0.25),
          height
        );

      shine.addColorStop(
        0,
        "rgba(255,255,255,0)"
      );

      shine.addColorStop(
        0.45,
        "rgba(255,255,255,0.08)"
      );

      shine.addColorStop(
        0.5,
        "rgba(255,255,255,0.9)"
      );

      shine.addColorStop(
        0.55,
        "rgba(255,255,255,0.08)"
      );

      shine.addColorStop(
        1,
        "rgba(255,255,255,0)"
      );

      ctx.fillStyle =
        shine;

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      /*
       * =====================================================
       * RESET
       * =====================================================
       */

      ctx.globalCompositeOperation =
        "source-over";

      animationRef.current =
        requestAnimationFrame(
          animate
        );
    };

    animate();

    /*
     * =======================================================
     * CLEANUP
     * =======================================================
     */

    return () => {
      window.removeEventListener(
        "resize",
        resize
      );

      if (animationRef.current) {
        cancelAnimationFrame(
          animationRef.current
        );
      }
    };
  }, [
    colorBack,
    colorTint,
    speed,
    repetition,
    distortion,
  ]);

  /*
   * =========================================================
   * CLICK / PRESS HANDLERS
   * =========================================================
   */

  const handlePointerDown = () => {
    if (!disabled) {
      setIsPressed(true);
    }
  };

  const handlePointerUp = () => {
    setIsPressed(false);
  };

  const handlePointerLeave = () => {
    setIsPressed(false);
  };

  /*
   * =========================================================
   * BUTTON
   * =========================================================
   */

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}

      onPointerDown={
        handlePointerDown
      }

      onPointerUp={
        handlePointerUp
      }

      onPointerLeave={
        handlePointerLeave
      }

      className={`
        relative
        isolate
        overflow-hidden

        rounded-xl

        ${sizes[size]}

        ${
          disabled
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer"
        }

        transition-all
        duration-150
        ease-out

        ${
          isPressed
            ? "scale-[0.96]"
            : "scale-100"
        }

        ${className}
      `}

      style={{
        border: `${borderWidth}px solid ${
          isPressed
            ? "#020B1C"
            : "#075DB8"
        }`,

        backgroundColor:
          isPressed
            ? "#020B1C"
            : "transparent",

        boxShadow:
          isPressed
            ? "0 0 0 2px rgba(2,11,28,0.5), 0 0 25px rgba(2,11,28,0.7)"
            : "0 0 20px rgba(7,93,184,0.25)",

        transition:
          "all 150ms ease-out",
      }}

      {...props}
    >

      {/* ====================================================
          LIQUID METAL CANVAS
      ==================================================== */}

      <canvas
        ref={canvasRef}
        className={`
          absolute
          inset-0
          w-full
          h-full
          z-0
          pointer-events-none

          transition-opacity
          duration-150

          ${
            isPressed
              ? "opacity-0"
              : "opacity-100"
          }
        `}
      />

      {/* ====================================================
          DEEP NAVY CLICK LAYER
      ==================================================== */}

      <span
        className={`
          absolute
          inset-0
          z-[1]
          pointer-events-none

          bg-[#020B1C]

          transition-opacity
          duration-150

          ${
            isPressed
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      />

      {/* ====================================================
          BLUE INNER GLOW
      ==================================================== */}

      <span
        className={`
          absolute
          inset-0
          z-[1]
          pointer-events-none

          transition-opacity
          duration-150

          ${
            isPressed
              ? "opacity-100"
              : "opacity-0"
          }
        `}
        style={{
          boxShadow:
            "inset 0 0 25px rgba(7,93,184,0.45)",
        }}
      />

      {/* ====================================================
          CONTENT
      ==================================================== */}

      <span
        className="
          relative
          z-[2]

          flex
          items-center
          justify-center
          gap-2

          whitespace-nowrap

          text-white
          font-bold

          drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
        "
      >
        {icon}

        {children}
      </span>

    </button>
  );
};

export default LiquidMetalButton;