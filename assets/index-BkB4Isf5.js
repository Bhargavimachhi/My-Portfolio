import { j as e, b as _, r as n } from "./react-4LNk7ehu.js";
import { c as O } from "./react-dom-D2FGI1Lc.js";
import { L, u as k, R as G, a as z, B as $ } from "./react-router-CwDmsMYh.js";
import { c as J } from "./clsx-B-dksMZM.js";
import { t as Y } from "./tailwind-merge-BJOqOzcM.js";
import { m, A as T, u as K, a as S, b as I } from "./motion-DKoi2KR0.js";
import { F as V } from "./react-icons-B_AvRILM.js";
import { I as U, a as Q, b as Z } from "./@tabler-B2i8shF7.js";
import { V as R, O as ee } from "./react-hot-toast-BrH2bQ_I.js";
import { D as te } from "./react-draggable-ZobLexNa.js";
import { R as oe, T as se, P as ae, C as ie } from "./@radix-ui-BFC2lG74.js";
import {
  C as re,
  a as ne,
  B as D,
  L as le,
  H as ce,
  V as de,
  G as me,
  b as pe,
  U as ue,
  c as ge,
  d as he,
  P as xe,
} from "./lucide-react-DmITzusq.js";
import { m as fe } from "./framer-motion-D1zLmY4z.js";
import "./cookie-CkgcL9oV.js";
import "./goober-np-fLvOt.js";
import "./prop-types-Chjiymov.js";
import "./@floating-ui-B9p8gmmv.js";
import "./aria-hidden-DQ5UC2Eg.js";
import "./react-remove-scroll-BhriLtuE.js";
import "./tslib-CDuPK5Eb.js";
import "./react-remove-scroll-bar-ykmlklHg.js";
import "./react-style-singleton-CrfxO7Tb.js";
import "./get-nonce-C-Z93AgS.js";
import "./use-sidecar-xDi164Qn.js";
import "./use-callback-ref-BBM3vRm1.js";
import "./motion-dom-BAJt9UHZ.js";
import "./motion-utils-rpnQiP0J.js";
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) a(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const c of r.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && a(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function a(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = o(i);
    fetch(i.href, r);
  }
})();
window.$RefreshReg$ = () => {};
window.$RefreshSig$ = () => (t) => t;
window.__vite_plugin_react_preamble_installed__ = !0;
const A = () => {
    const t = [
      { name: "Work", url: "/projects" },
      { name: "AboutMe", url: "/about-me" },
      {
        name: "Resume",
        url: "https://drive.google.com/file/d/1_WlpZjqprmosIAp85O-xUK0-X1cu4ADT/view?usp=sharing",
      },
    ];
    return e.jsx("nav", {
      className:
        "w-full flex items-center justify-center sm:justify-end gap-3 px-6 pt-6 mb-4",
      children: t.map((s) =>
        e.jsx(
          L,
          {
            to: s.url,
            className:
              "border border-black px-5 py-2 rounded-full text-xl font-medium transition-transform duration-300 ease-out hover:scale-110",
            children: s.name,
          },
          s.name
        )
      ),
    });
  },
  M =
    "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969893/portfolio/cujqet8yikjstqeawzru.png";
function v(...t) {
  return Y(J(t));
}
const F = ({
    children: t,
    className: s,
    containerClassName: o,
    animate: a = !0,
  }) => {
    const i = {
      initial: { backgroundPosition: "0 50%" },
      animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
    };
    return e.jsxs("div", {
      className: v("relative p-[6px] group", o),
      children: [
        e.jsx(m.div, {
          variants: a ? i : void 0,
          initial: a ? "initial" : void 0,
          animate: a ? "animate" : void 0,
          transition: a
            ? { duration: 5, repeat: 1 / 0, repeatType: "reverse" }
            : void 0,
          style: { backgroundSize: a ? "400% 400%" : void 0 },
          className: v(
            "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform",
            " bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
          ),
        }),
        e.jsx(m.div, {
          variants: a ? i : void 0,
          initial: a ? "initial" : void 0,
          animate: a ? "animate" : void 0,
          transition: a
            ? { duration: 5, repeat: 1 / 0, repeatType: "reverse" }
            : void 0,
          style: { backgroundSize: a ? "400% 400%" : void 0 },
          className: v(
            "absolute inset-0 rounded-3xl z-[1] will-change-transform",
            "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
          ),
        }),
        e.jsx("div", { className: v("relative z-10", s), children: t }),
      ],
    });
  },
  ve = () =>
    e.jsx("div", {
      className:
        "min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4",
      children: e.jsxs("div", {
        className:
          "flex flex-col md:flex-row items-center justify-between w-full max-w-7xl py-12 gap-12",
        children: [
          e.jsxs("div", {
            className: "md:w-1/2 text-center md:text-left",
            children: [
              e.jsxs("h1", {
                className: "text-4xl md:text-5xl font-light mb-6",
                children: [
                  e.jsxs("div", {
                    children: [
                      "Hey, This is",
                      "  ",
                      e.jsxs("div", {
                        className:
                          "relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(17,_17,_70,_0.14))]",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-violet-500 via-blue-500 to-emerald-500 [text-shadow:0_0_rgba(0,0,0,0.1)]",
                            children: e.jsx("span", {
                              className: "",
                              children: " Bhargavi",
                            }),
                          }),
                          e.jsx("div", {
                            className:
                              "relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-500 py-4",
                            children: e.jsx("span", {
                              className: "",
                              children: " Bhargavi",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    children: "I learn to build the future of Technology.",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "flex justify-center md:justify-start",
                children: e.jsx(L, {
                  to: "/projects",
                  className:
                    "border border-black px-8 py-2 rounded-full text-lg font-medium transition-transform duration-300 ease-out hover:scale-105",
                  children: "Wanna know my work?",
                }),
              }),
            ],
          }),
          e.jsx(F, {
            className: "rounded-[22px] bg-white dark:bg-zinc-900",
            children: e.jsx("img", {
              src: M,
              alt: "Bhargavi",
              className: "w-64 md:w-80 p-[0.5] rounded-[22px]",
            }),
          }),
        ],
      }),
    }),
  ye = [
    { name: "HTML", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    {
      name: "JavaScript",
      logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    },
    {
      name: "Java",
      logo: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969826/portfolio/ylrlbkiiwt2xxuiebylx.webp",
    },
    {
      name: "Python",
      logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    },
    {
      name: "C",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    },
    {
      name: "SQL",
      logo: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969862/portfolio/xzzwfkalqvs8d4urclnn.png",
    },
    {
      name: "LangChain",
      logo: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969827/portfolio/jakjxa2kfs1p4lx6f1ur.png",
    },
    {
      name: "Express",
      logo: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969829/portfolio/f8n7rkm6kxwhes693ens.png",
    },
    {
      name: "React",
      logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      name: "NodeJS",
      logo: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969831/portfolio/uudtyicmykdnakasfxsf.png",
    },
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "AI",
      logo: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969826/portfolio/zkd2gvgyivua3e7jk4b9.jpg",
    },
    { name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    {
      name: "Data Science",
      logo: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969829/portfolio/ds6tdk9h5sav9vfvkkns.png",
    },
    {
      name: "DSA",
      logo: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969828/portfolio/mkjqmofj1aoptdn07r8a.png",
    },
    {
      name: "Linux",
      logo: "https://cdn.worldvectorlogo.com/logos/linux-tux.svg",
    },
    {
      name: "Figma",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    {
      name: "Canva",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/bb/Canva_Logo.svg",
    },
    {
      name: "OOPs",
      logo: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969832/portfolio/uis0ccp0qu3yyy86lwb3.jpg",
    },
  ],
  be = () =>
    e.jsx(e.Fragment, {
      children: e.jsxs("div", {
        className: "min-h-screen p-8 ",
        children: [
          e.jsx("h1", {
            className: "text-4xl font-bold mb-8 text-center",
            children: "My Skills",
          }),
          e.jsx("div", {
            className:
              "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 justify-items-center",
            children: ye.map((t, s) =>
              e.jsxs(
                "div",
                {
                  className:
                    "transition-transform duration-300 border-1 border-gray-400 shadow-lg hover:scale-110 hover:shadow-2xl shadow-black/20 bg-white rounded-3xl p-4 flex flex-col items-center justify-center w-40 h-52 mb-6 cursor-pointer",
                  children: [
                    e.jsx(
                      "img",
                      {
                        src: t.logo,
                        alt: t.name,
                        className: "w-20 h-20 object-contain mb-4",
                      },
                      "Image"
                    ),
                    e.jsx(
                      "label",
                      {
                        className:
                          "text-center text-sm font-semibold text-gray-700",
                        children: t.name,
                      },
                      "label"
                    ),
                  ],
                },
                s
              )
            ),
          }),
        ],
      }),
    }),
  we = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/bhargavi-machhi/" },
    { name: "Leetcode", url: "https://leetcode.com/u/bhargavimachhi/" },
    { name: "GitHub", url: "https://github.com/Bhargavimachhi/" },
  ],
  P = () =>
    e.jsxs("nav", {
      className:
        "w-full flex flex-col sm:flex-row items-center justify-between px-5 pt-6 mb-5 space-y-4 sm:space-y-0",
      children: [
        e.jsxs("p", {
          className:
            "flex items-center text-center text-base sm:text-lg font-medium",
          children: [
            "Made by me with ",
            e.jsx(V, { className: "text-red-500 ml-2" }),
          ],
        }),
        e.jsx("div", {
          className: "flex flex-wrap justify-center sm:justify-end gap-3",
          children: we.map((t) =>
            e.jsx(
              L,
              {
                to: t.url,
                className:
                  "border border-black px-5 py-2 rounded-full text-xl font-medium transition-transform duration-300 ease-out hover:scale-110 underline-f4ece4",
                children: t.name,
              },
              t.name
            )
          ),
        }),
      ],
    }),
  B = ({ children: t, className: s }) => {
    const o = n.useRef(null),
      a = n.useRef(null),
      i = [
        { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2 },
        {
          initialX: 400,
          translateX: 450,
          duration: 7,
          repeatDelay: 3,
          delay: 2,
        },
        {
          initialX: 535,
          translateX: 600,
          duration: 7,
          repeatDelay: 3,
          delay: 2,
        },
        {
          initialX: 600,
          translateX: 600,
          duration: 3,
          repeatDelay: 3,
          delay: 4,
        },
        {
          initialX: 100,
          translateX: 100,
          duration: 7,
          repeatDelay: 7,
          className: "h-6",
        },
        {
          initialX: 400,
          translateX: 400,
          duration: 5,
          repeatDelay: 14,
          delay: 4,
        },
        {
          initialX: 800,
          translateX: 800,
          duration: 11,
          repeatDelay: 2,
          className: "h-20",
        },
        {
          initialX: 1e3,
          translateX: 1e3,
          duration: 4,
          repeatDelay: 2,
          className: "h-12",
        },
        {
          initialX: 1200,
          translateX: 1200,
          duration: 6,
          repeatDelay: 4,
          delay: 2,
          className: "h-6",
        },
        {
          initialX: 200,
          translateX: 200,
          duration: 4,
          repeatDelay: 2,
          className: "h-12",
        },
        {
          initialX: 100,
          translateX: 100,
          duration: 6,
          repeatDelay: 4,
          delay: 2,
          className: "h-6",
        },
      ];
    return e.jsxs("div", {
      ref: a,
      className: v(
        " bg-white from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative flex flex-col items-center w-full justify-center overflow-hidden",
        s
      ),
      children: [
        i.map((r) =>
          e.jsx(
            W,
            { beamOptions: r, containerRef: o, parentRef: a },
            r.initialX + "beam-idx"
          )
        ),
        t,
        e.jsx("div", {
          ref: o,
          className:
            "absolute bottom-0 bg-white w-full inset-x-0 pointer-events-none",
          style: {
            boxShadow:
              "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
          },
        }),
      ],
    });
  },
  W = _.forwardRef(
    ({ parentRef: t, containerRef: s, beamOptions: o = {} }, a) => {
      const i = n.useRef(null),
        [r, c] = n.useState({ detected: !1, coordinates: null }),
        [g, x] = n.useState(0),
        [l, y] = n.useState(!1);
      return (
        n.useEffect(() => {
          const N = setInterval(() => {
            if (i.current && s.current && t.current && !l) {
              const b = i.current.getBoundingClientRect(),
                h = s.current.getBoundingClientRect(),
                u = t.current.getBoundingClientRect();
              if (b.bottom >= h.top) {
                const d = b.left - u.left + b.width / 2,
                  j = b.bottom - u.top;
                c({ detected: !0, coordinates: { x: d, y: j } }), y(!0);
              }
            }
          }, 50);
          return () => clearInterval(N);
        }, [l, s]),
        n.useEffect(() => {
          r.detected &&
            r.coordinates &&
            (setTimeout(() => {
              c({ detected: !1, coordinates: null }), y(!1);
            }, 2e3),
            setTimeout(() => {
              x((w) => w + 1);
            }, 2e3));
        }, [r]),
        e.jsxs(e.Fragment, {
          children: [
            e.jsx(
              m.div,
              {
                ref: i,
                animate: "animate",
                initial: {
                  translateY: o.initialY || "-200px",
                  translateX: o.initialX || "0px",
                  rotate: o.rotate || 0,
                },
                variants: {
                  animate: {
                    translateY: o.translateY || "1800px",
                    translateX: o.translateX || "0px",
                    rotate: o.rotate || 0,
                  },
                },
                transition: {
                  duration: o.duration || 8,
                  repeat: 1 / 0,
                  repeatType: "loop",
                  ease: "linear",
                  delay: o.delay || 0,
                  repeatDelay: o.repeatDelay || 0,
                },
                className: v(
                  "z-30 absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent",
                  o.className
                ),
              },
              g
            ),
            e.jsx(T, {
              children:
                r.detected &&
                r.coordinates &&
                e.jsx(
                  je,
                  {
                    className: "",
                    style: {
                      left: `${r.coordinates.x}px`,
                      top: `${r.coordinates.y}px`,
                      transform: "translate(-50%, -50%)",
                    },
                  },
                  `${r.coordinates.x}-${r.coordinates.y}`
                ),
            }),
          ],
        })
      );
    }
  );
W.displayName = "CollisionMechanism";
const je = ({ ...t }) => {
    const s = Array.from({ length: 20 }, (o, a) => ({
      id: a,
      initialX: 0,
      initialY: 0,
      directionX: Math.floor(Math.random() * 80 - 40),
      directionY: Math.floor(Math.random() * -50 - 10),
    }));
    return e.jsxs("div", {
      ...t,
      className: v("absolute z-50 h-2 w-2", t.className),
      children: [
        e.jsx(m.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 1.5, ease: "easeOut" },
          className:
            "absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm",
        }),
        s.map((o) =>
          e.jsx(
            m.span,
            {
              initial: { x: o.initialX, y: o.initialY, opacity: 1 },
              animate: { x: o.directionX, y: o.directionY, opacity: 0 },
              transition: {
                duration: Math.random() * 1.5 + 0.5,
                ease: "easeOut",
              },
              className:
                "absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500",
            },
            o.id
          )
        ),
      ],
    });
  },
  Ne = () => {
    const t = k();
    return (
      n.useEffect(() => {
        const s = JSON.parse(localStorage.getItem("puzzle"));
        (s != null && s.puzzleSolved) || t("/puzzle");
      }, [t]),
      e.jsxs(e.Fragment, {
        children: [
          e.jsx(A, {}),
          e.jsx(B, { children: e.jsx(ve, {}) }),
          e.jsx(B, { children: e.jsx(be, {}) }),
          e.jsx(P, {}),
        ],
      })
    );
  },
  ke = [
    {
      id: "freelancer-app",
      name: "Freelancing Website",
      image:
        "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969831/portfolio/paoephb4lqhnec0o53b0.png",
      description: "PS: it has some unique features",
      github: "https://github.com/Bhargavimachhi/Freelancer-App",
    },
    {
      id: "smart-shala",
      name: "School Management System",
      image:
        "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969862/portfolio/xiomjwvpvsrwmtptbm3h.png",
      description: "A website to manage school work virtually",
      github: "https://github.com/Bhargavimachhi/Smart-Shala",
    },
    {
      id: "health-pie",
      name: "Health Pie",
      image:
        "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969841/portfolio/djjnvp3juqmr7e98wxxp.png",
      description: "A website for fitness enthusiastics",
      github: "https://github.com/Bhargavimachhi/Health-Pie",
    },
    {
      id: "simon-says",
      name: "Simon Says Game",
      image:
        "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969857/portfolio/zrb6ezrbf8i7583i5xvc.png",
      description: "PS : Simon Says you are Awesome",
      github: "https://github.com/Bhargavimachhi/Simon-Game",
    },
    {
      id: "wanderlust",
      name: "Wanderlust",
      image:
        "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969890/portfolio/qnkgmopvfjfcnv7y3luo.png",
      description: "A website to find and review hotels",
      github: "https://github.com/Bhargavimachhi/Wanderlust",
    },
    {
      id: "chat-system",
      name: "Chatting Website",
      image:
        "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969831/portfolio/rdrpnf3optmhxsqxs4g1.png",
      description: "A website to chat globally",
      github: "https://github.com/Bhargavimachhi/REST-Web-Services",
    },
    {
      id: "switch-controller",
      name: "Switch Controller",
      image:
        "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969866/portfolio/c7k8xo63n4moxsj97ewg.png",
      description: "Switch toggles after specified time",
      github: "https://github.com/Bhargavimachhi/Switch-Controller",
    },
  ],
  ze = () => {
    const t = k();
    return (
      n.useEffect(() => {
        const s = JSON.parse(localStorage.getItem("puzzle"));
        (s != null && s.puzzleSolved) || t("/puzzle");
      }, [t]),
      e.jsxs(e.Fragment, {
        children: [
          e.jsx(A, {}),
          e.jsx("div", {
            className: "min-h-screen bg-white p-10",
            children: e.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 ",
              children: ke.map((s) =>
                e.jsxs("div", {
                  className: "flex flex-col items-center text-center sm:p-15",
                  children: [
                    e.jsx("img", {
                      src: s.image,
                      alt: s.name,
                      className:
                        "w-full h-auto transition-transform transform duration-500 hover:scale-80 p-5",
                    }),
                    e.jsx("h2", {
                      className: "text-2xl font-semibold mt-6",
                      children: s.name,
                    }),
                    e.jsx("p", {
                      className: "text-gray-600 mt-2",
                      children: s.description,
                    }),
                  ],
                })
              ),
            }),
          }),
          e.jsx(P, {}),
        ],
      })
    );
  },
  Se = () =>
    e.jsx(e.Fragment, {
      children: e.jsx("div", {
        className:
          "min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4",
        children: e.jsxs("div", {
          className:
            "flex flex-col md:flex-row items-center justify-between w-full max-w-7xl py-12 gap-12",
          children: [
            e.jsxs("div", {
              className: "md:w-1/2 text-center md:text-left",
              children: [
                e.jsx("h1", {
                  className: "text-4xl md:text-5xl font-light mb-6",
                  children: e.jsxs("div", {
                    children: [
                      "Hey, This is",
                      "  ",
                      e.jsxs("div", {
                        className:
                          "relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(17,_17,_70,_0.14))]",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-violet-500 via-blue-500 to-emerald-500 [text-shadow:0_0_rgba(0,0,0,0.1)]",
                            children: e.jsx("span", {
                              className: "",
                              children: " Bhargavi",
                            }),
                          }),
                          e.jsx("div", {
                            className:
                              "relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-500 py-4",
                            children: e.jsx("span", {
                              className: "",
                              children: " Bhargavi",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx("h2", {
                  className: "text-lg font-light mb-3",
                  children: "😊 I am borned and raised in India.",
                }),
                e.jsx("h2", {
                  className: "text-lg font-light mb-3",
                  children:
                    "✨ From a young age, I've always been fascinated by technology. I especially enjoyed learning about technologies during my school days, which sparked a deep interest in how things work behind the scenes.",
                }),
                e.jsx("h2", {
                  className: "text-lg font-light mb-3",
                  children:
                    "💡 This curiosity and enthusiasm naturally led me to pursue my journey in higher education with a Bachelor's degree in Computer Engineering.",
                }),
                e.jsx("h1", {
                  className: "text-2xl md:text-3xl font-light mb-3 mt-6",
                  children: "Fun Fact About Me",
                }),
                e.jsx("h2", {
                  className: "text-lg font-light mb-3",
                  children:
                    "♟️🏋️‍♀️ When i am not coding you will find me playing chess or exercising",
                }),
                e.jsxs("h2", {
                  className: "text-lg font-light mb-3",
                  children: [
                    "📖 I also love reading books ",
                    e.jsx("br", {}),
                    "PS : Atomic Habits is my personal favourite book",
                  ],
                }),
              ],
            }),
            e.jsx(F, {
              className: "rounded-[22px] bg-white dark:bg-zinc-900",
              children: e.jsx("img", {
                src: M,
                alt: "Bhargavi",
                className: "w-64 sm:w-70 md:w-80 p-[0.5] rounded-[22px]",
              }),
            }),
          ],
        }),
      }),
    }),
  Ce = [
    {
      description: [
        "Interned At Amazon Hyderabad",
        "Automated an internal task with AWS Lambda, saving SDE time.",
        "Built auditing to track and verify task-related data.",
        "Learned unit testing, AWS tools, and clean coding.",
      ],
      image:
        "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969825/portfolio/hbsrgbp73jghuq4mwamc.png",
      link: "https://drive.google.com/file/d/1WbsN8FygHd2Lj0R-mrzDnOORSubW--1h/view?usp=sharing",
    },
    {
      description: [
        "Among top 8% of coders at Leetcode",
        "1800+ Rating on Contests",
        "LEETCODE BiWeekly Contest 153 - RANK 2089",
        "LEETCODE Weekly Contest 124 - RANK 2289",
      ],
      image:
        "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969833/portfolio/wcpfpewcm7ri2rykin4o.png",
      link: "https://leetcode.com/u/bhargavimachhi/",
    },
    {
      description: [
        "Selected for SIH 2024",
        "Top 5 teams of India out of 800+ teams",
        "Delivered functional website",
        "key-skills : MERN stack, LLM, Python",
      ],
      image:
        "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969836/portfolio/c6vsvqm1aai7aswxxttm.jpg",
      link: "https://www.linkedin.com/posts/bhargavi-machhi_smartindiahackathon2024-innovation-learningexperience-activity-7280158682787573760-6UKR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4DrRIBgseqhhJdLd9D-ZeyBg5iQNiqXWU",
    },
    {
      description: [
        "Among top 3% of coders at GeeksForGeeks",
        "1850+ Rating on Contests",
        "GFG Contest 133 - RANK 40",
        "GFG Contest 143 - RANK 60",
        "GFG Contest 138 - RANK 155",
      ],
      image:
        "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969832/portfolio/evgxs6ktxyzquftefv1r.png",
      link: "https://www.geeksforgeeks.org/user/bhargavimachhi/",
    },
    {
      description: [
        "3 star coder At Codechef",
        "1600+ Rating at Codechef",
        "Highest Rating 1701",
        "Global Rank 11841",
      ],
      image:
        "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969827/portfolio/ckeepnoylnqcwowp7uoa.jpg",
      link: "https://www.codechef.com/users/machhibhargavi",
    },
    {
      description: ["Achieved AIR 6277 on my first attempt of gate 2025"],
      image:
        "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969831/portfolio/km3d4fvsl7r0gxpleo6i.jpg",
      link: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969831/portfolio/km3d4fvsl7r0gxpleo6i.jpg",
    },
  ],
  Ie = () =>
    e.jsx(e.Fragment, {
      children: e.jsxs("div", {
        className: "items-center",
        children: [
          e.jsx("h1", {
            className:
              "text-4xl md:text-5xl font-light mb-6 text-center mt-10 mb-30",
            children: "My Achievements",
          }),
          e.jsx("div", {
            className: "mx-auto max-w-7xl px-4",
            children: Ce.map((t, s) => {
              const o = s % 2 === 0;
              return e.jsxs(
                "div",
                {
                  onClick: () => window.open(t.link, "_blank"),
                  className: `transition-transform duration-300 ease-out hover:scale-115 cursor-pointer flex flex-col sm:flex-row items-center gap-4 my-12 mb-30 ${
                    o ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`,
                  children: [
                    e.jsx("div", {
                      className: "flex-[0.6] text-center sm:text-left",
                      children: t.description.map((a, i) =>
                        e.jsx(
                          "p",
                          {
                            className: `text-base sm:text-lg md:text-xl font-medium p-1 ${
                              o ? "sm:text-right max-sm:text-center" : ""
                            }`,
                            children: a,
                          },
                          i
                        )
                      ),
                    }),
                    e.jsx("div", {
                      className: "flex justify-center flex-[0.4]",
                      children: e.jsx("img", {
                        src: t.image,
                        alt: "achievement",
                        className: "h-40 w-40 rounded-full object-cover",
                      }),
                    }),
                  ],
                },
                s
              );
            }),
          }),
        ],
      }),
    }),
  _e = (t, s) => {
    n.useEffect(() => {
      const o = (a) => {
        !t.current || t.current.contains(a.target) || s(a);
      };
      return (
        document.addEventListener("mousedown", o),
        document.addEventListener("touchstart", o),
        () => {
          document.removeEventListener("mousedown", o),
            document.removeEventListener("touchstart", o);
        }
      );
    }, [t, s]);
  },
  X = n.createContext({ onCardClose: () => {}, currentIndex: 0 }),
  Re = ({ items: t, initialScroll: s = 0 }) => {
    const o = _.useRef(null),
      [a, i] = _.useState(!1),
      [r, c] = _.useState(!0),
      [g, x] = n.useState(0);
    n.useEffect(() => {
      o.current && ((o.current.scrollLeft = s), l());
    }, [s]);
    const l = () => {
        if (o.current) {
          const { scrollLeft: h, scrollWidth: u, clientWidth: d } = o.current;
          i(h > 0), c(h < u - d);
        }
      },
      y = () => {
        o.current && o.current.scrollBy({ left: -300, behavior: "smooth" });
      },
      w = () => {
        o.current && o.current.scrollBy({ left: 300, behavior: "smooth" });
      },
      N = (h) => {
        if (o.current) {
          const u = b() ? 230 : 384,
            d = b() ? 4 : 8,
            j = (u + d) * (h + 1);
          o.current.scrollTo({ left: j, behavior: "smooth" }), x(h);
        }
      },
      b = () => window && window.innerWidth < 768;
    return e.jsx(X.Provider, {
      value: { onCardClose: N, currentIndex: g },
      children: e.jsxs("div", {
        className: "relative w-full",
        children: [
          e.jsxs("div", {
            className:
              "flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20",
            ref: o,
            onScroll: l,
            children: [
              e.jsx("div", {
                className: v(
                  "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
                ),
              }),
              e.jsx("div", {
                className: v(
                  "flex flex-row justify-start gap-4 pl-4",
                  "mx-auto max-w-7xl"
                ),
                children: t.map((h, u) =>
                  e.jsx(
                    m.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: 0.2 * u,
                          ease: "easeOut",
                          once: !0,
                        },
                      },
                      className: "rounded-3xl last:pr-[5%] md:last:pr-[33%]",
                      children: h,
                    },
                    "card" + u
                  )
                ),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "mr-10 flex justify-end gap-2",
            children: [
              e.jsx("button", {
                className:
                  "relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50",
                onClick: y,
                disabled: !a,
                children: e.jsx(Q, { className: "h-6 w-6 text-gray-500" }),
              }),
              e.jsx("button", {
                className:
                  "relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50",
                onClick: w,
                disabled: !r,
                children: e.jsx(Z, { className: "h-6 w-6 text-gray-500" }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  Be = ({ card: t, index: s, layout: o = !1 }) => {
    const [a, i] = n.useState(!1),
      r = n.useRef(null),
      { onCardClose: c, currentIndex: g } = n.useContext(X);
    n.useEffect(() => {
      function y(w) {
        w.key === "Escape" && l();
      }
      return (
        a
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "auto"),
        window.addEventListener("keydown", y),
        () => window.removeEventListener("keydown", y)
      );
    }, [a]),
      _e(r, () => l());
    const x = () => {
        i(!0);
      },
      l = () => {
        i(!1), c(s);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(T, {
          children:
            a &&
            e.jsxs("div", {
              className: "fixed inset-0 z-50 h-screen overflow-auto",
              children: [
                e.jsx(m.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className:
                    "fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg",
                }),
                e.jsxs(m.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  ref: r,
                  layoutId: o ? `card-${t.title}` : void 0,
                  className:
                    "relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900",
                  children: [
                    e.jsx("button", {
                      className:
                        "sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white",
                      onClick: l,
                      children: e.jsx(U, {
                        className:
                          "h-6 w-6 text-neutral-100 dark:text-neutral-900",
                      }),
                    }),
                    e.jsx(m.p, {
                      layoutId: o ? `category-${t.title}` : void 0,
                      className:
                        "text-base font-medium text-black dark:text-white",
                      children: t.category,
                    }),
                    e.jsx(m.p, {
                      layoutId: o ? `title-${t.title}` : void 0,
                      className:
                        "mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white",
                      children: t.title,
                    }),
                    e.jsx("div", { className: "py-10", children: t.content }),
                  ],
                }),
              ],
            }),
        }),
        e.jsxs(m.button, {
          layoutId: o ? `card-${t.title}` : void 0,
          onClick: x,
          className:
            "relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900",
          children: [
            e.jsx("div", {
              className:
                "pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent",
            }),
            e.jsxs("div", {
              className: "relative z-40 p-8",
              children: [
                e.jsx(m.p, {
                  layoutId: o ? `category-${t.category}` : void 0,
                  className:
                    "text-left font-sans text-sm font-medium text-white md:text-base",
                  children: t.category,
                }),
                e.jsx(m.p, {
                  layoutId: o ? `title-${t.title}` : void 0,
                  className:
                    "mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl",
                  children: t.title,
                }),
              ],
            }),
            e.jsx(Le, {
              src: t.src,
              alt: t.title,
              fill: !0,
              className: "absolute inset-0 z-10 object-cover",
            }),
          ],
        }),
      ],
    });
  },
  Le = ({ height: t, width: s, src: o, className: a, alt: i, ...r }) => {
    const [c, g] = n.useState(!0);
    return e.jsx("img", {
      className: v(
        "h-full w-full transition duration-300",
        c ? "blur-sm" : "blur-0",
        a
      ),
      onLoad: () => g(!1),
      src: o,
      width: s,
      height: t,
      loading: "lazy",
      decoding: "async",
      blurDataURL: typeof o == "string" ? o : void 0,
      alt: i || "Background of a beautiful view",
      ...r,
    });
  },
  Te = [
    {
      title: "My Day 1 At Amazon",
      src: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969830/portfolio/h5j3mbqoc2nmy5ynasr3.jpg",
    },
    {
      title: "Selected as Top 5 teams of india in Smart India Hackathon 2024",
      src: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969847/portfolio/vp4m8n1gnc1ynbdtiibu.jpg",
    },
    {
      title: "Led Team as Team Leader at Smart India Hackathon 2024",
      src: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969856/portfolio/qnqwwebk6g4qzu0ifi3z.jpg",
    },
    {
      title: "Top 6 teams of Tic Tech Toe Hackathon 2022",
      src: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969873/portfolio/hkxclifjgjvimbd12c3p.jpg",
    },
    {
      title: "Led Team as Team Leader at Tic Tech Toe 2022",
      src: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969872/portfolio/wi26axtmaws7afimxop9.jpg",
    },
    {
      title: "This is what Preperation for Final Presentation looks like",
      src: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969872/portfolio/mke3sxsl1lny1clawvxa.jpg",
    },
    {
      title: "Pitching our idea at Hack the Spring 2025",
      src: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969843/portfolio/xyyegoxb77i5vkorkjsc.jpg",
    },
    {
      title:
        "Final Presentation at Hack the Spring'25, Selected as top 3 teams of our PS",
      src: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969865/portfolio/l475hutk43njbwqxxcdo.jpg",
    },
    {
      title: "Receiving Certificate of Hack the spring'25",
      src: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969829/portfolio/onskjzvaseprvlbhbf4i.jpg",
    },
    {
      title: "Hack The Spring 2024",
      src: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969848/portfolio/azaza1iyqucfhbxg4fhq.jpg",
    },
    {
      title: "Pitching at Hack The Spring 2024",
      src: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969833/portfolio/kmbdnmyt9emgp02uyqsk.jpg",
    },
    {
      title: "Achieved AIR 6277 on my first attempt of gate 2025",
      src: "https://res.cloudinary.com/dwvppu30v/image/upload/v1744969831/portfolio/km3d4fvsl7r0gxpleo6i.jpg",
    },
  ],
  Ae = () => {
    const t = Te.map((s, o) => e.jsx(Be, { card: s, index: o }, s.src));
    return e.jsx(e.Fragment, {
      children: e.jsx("div", {
        className: "w-full h-full py-20",
        children: e.jsx(Re, { items: t }),
      }),
    });
  },
  Pe = () => {
    const t = k(),
      [s, o] = n.useState(!0);
    return (
      n.useEffect(() => {
        const a = JSON.parse(localStorage.getItem("puzzle"));
        (a != null && a.puzzleSolved) || t("/puzzle"), o(!1);
      }, [t]),
      s
        ? e.jsx(e.Fragment, {})
        : e.jsxs(e.Fragment, {
            children: [
              e.jsx(A, {}),
              e.jsx(B, { children: e.jsx(Se, {}) }),
              e.jsx(B, { children: e.jsx(Ie, {}) }),
              e.jsx(Ae, {}),
              e.jsx(P, {}),
            ],
          })
    );
  };
function Ee({ ...t }) {
  return e.jsx(oe, { "data-slot": "popover", ...t });
}
function He({ ...t }) {
  return e.jsx(se, { "data-slot": "popover-trigger", ...t });
}
function De({ className: t, align: s = "center", sideOffset: o = 4, ...a }) {
  return e.jsx(ae, {
    children: e.jsx(ie, {
      "data-slot": "popover-content",
      align: s,
      sideOffset: o,
      className: v(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        t
      ),
      ...a,
    }),
  });
}
const Me = () => {
    const t = n.useRef(null),
      s = k(),
      [o, a] = n.useState(0),
      i = [
        "There are 4 Different Ways to solve this Puzzle, Explore Hints to Solve the Puzzle 🧩",
        "Give Dog Something He can focus On 🐶... Where would you find the bone? 🦴 Look Closely 👀",
        "Think like a coder 👩‍💻... How can you use tailwind css to get rid of the dog? 💻",
        "Have you worked with Local Storage ? 📠...Try changing something in local storage ✍️",
        "Skipping the puzzle would be the 4th way to solve the puzzle 😁",
      ],
      r = () => {
        R.success("Puzzle Skipped !!!"),
          setTimeout(() => {
            c();
          }, 2e3);
      },
      c = () => {
        localStorage.setItem("puzzle", JSON.stringify({ puzzleSolved: !0 })),
          s("/");
      },
      g = () => {
        a((l) => (l + 1) % i.length);
      },
      x = () => {
        a((l) => (l - 1 + i.length) % i.length);
      };
    return e.jsx(e.Fragment, {
      children: e.jsx(te, {
        nodeRef: t,
        children: e.jsx("div", {
          ref: t,
          className: "cursor-grab active:cursor-grabbing",
          children: e.jsxs("div", {
            className:
              "flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-5xl bg-white p-6 rounded-2xl shadow-md",
            children: [
              e.jsxs("h2", {
                className:
                  "w-full text-lg max-sm:text-base md:text-xl font-bold text-center md:text-left leading-snug text-gray-700",
                children: [
                  "Wanna See My Portfolio? Uhhh Ahhh 👀",
                  e.jsx("br", {}),
                  "You need to solve this puzzle first 🧩",
                  e.jsx("br", {}),
                  "Get Rid of Dog Somehow 🐶",
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-4 mt-4 md:mt-0",
                children: [
                  e.jsx("button", {
                    className:
                      "cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300",
                    onClick: r,
                    children: "Skip",
                  }),
                  e.jsxs(Ee, {
                    children: [
                      e.jsx(He, {
                        className:
                          "cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-300",
                        children: "Hint",
                      }),
                      e.jsxs(De, {
                        className:
                          "w-72 p-4 rounded-xl shadow-xl bg-white flex flex-col items-center relative space-y-4",
                        children: [
                          e.jsx("p", {
                            className: "text-center text-sm md:text-base mt-2",
                            children: i[o],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              e.jsx("button", {
                                onClick: x,
                                className:
                                  "p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer",
                                children: e.jsx(re, {}),
                              }),
                              e.jsxs("span", {
                                className: "text-xs text-gray-500",
                                children: ["Hint ", o + 1, " of ", i.length],
                              }),
                              e.jsx("button", {
                                onClick: g,
                                className:
                                  "p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer",
                                children: e.jsx(ne, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  },
  Fe = Array.from({ length: 10 }),
  We = ({ size: t = 40 }) => {
    const [s, o] = n.useState(!1),
      [a, i] = n.useState(!0),
      r = () => {
        o(!0), i(!1), setTimeout(() => o(!1), 1e3);
      };
    return e.jsxs("div", {
      className: "relative z-20 w-fit h-fit",
      onClick: r,
      children: [
        a && e.jsx(D, { size: t, className: "cursor-pointer text-gray-800" }),
        s &&
          Fe.map((c, g) =>
            e.jsx(
              fe.div,
              {
                className: "absolute w-2 h-2 rounded-full",
                style: {
                  backgroundColor: Xe(),
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: -1,
                },
                initial: { opacity: 1, scale: 1 },
                animate: { x: E(), y: E(), opacity: 0, scale: 2 },
                transition: { duration: 0.8 },
              },
              g
            )
          ),
      ],
    });
  };
function E() {
  return Math.floor(Math.random() * 100 - 50);
}
function Xe() {
  const t = ["#f43f5e", "#f59e0b", "#10b981", "#3b82f6", "#a855f7"];
  return t[Math.floor(Math.random() * t.length)];
}
const f = {
    dogEating:
      "https://res.cloudinary.com/dwvppu30v/video/upload/v1744972116/portfolio/dog%20videos/rblguyagroy4goum2ulu.mp4",
    dogSitting:
      "https://res.cloudinary.com/dwvppu30v/video/upload/v1744972105/portfolio/dog%20videos/kg5p1wrigoblxx0acauq.mp4",
    dogJumping:
      "https://res.cloudinary.com/dwvppu30v/video/upload/v1744972115/portfolio/dog%20videos/hpjpj0ik5u931oh9ofxf.mp4",
    dogWantsFood:
      "https://res.cloudinary.com/dwvppu30v/video/upload/v1744972080/portfolio/dog%20videos/vbuqxfld9hu3lktuysvd.mp4",
    dogWithBall:
      "https://res.cloudinary.com/dwvppu30v/video/upload/v1744972068/portfolio/dog%20videos/hp30r2w0dvw4bwmoph4n.mp4",
    dogWithBone:
      "https://res.cloudinary.com/dwvppu30v/video/upload/v1744972107/portfolio/dog%20videos/pozs6hiol8u16nmmrrpr.mp4",
    dogBarking:
      "https://res.cloudinary.com/dwvppu30v/video/upload/v1744972060/portfolio/dog%20videos/hzlkmw2lgsgm9nmmdyvy.mp4",
    dogBarkingInEnglish:
      "https://res.cloudinary.com/dwvppu30v/video/upload/v1744972060/portfolio/dog%20videos/cgpybfpnc2r8hb48ejoz.mp4",
    dogWithHome:
      "https://res.cloudinary.com/dwvppu30v/video/upload/v1744972099/portfolio/dog%20videos/wwocnpcne27usvpqxdct.mp4",
    dogWithBalloons:
      "https://res.cloudinary.com/dwvppu30v/video/upload/v1744972071/portfolio/dog%20videos/hnilshswtffememfvpih.mp4",
    dogWithMirror:
      "https://res.cloudinary.com/dwvppu30v/video/upload/v1744972101/portfolio/dog%20videos/obp6o3ozf6jkvnx9ssgd.mp4",
  },
  H = ({ items: t, desktopClassName: s, mobileClassName: o }) =>
    e.jsx(e.Fragment, { children: e.jsx(qe, { items: t, className: s }) }),
  qe = ({ items: t, className: s }) => {
    let o = K(1 / 0);
    return e.jsx(m.div, {
      onMouseMove: (a) => o.set(a.pageX),
      onMouseLeave: () => o.set(1 / 0),
      className: v(
        "mx-auto h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 flex dark:bg-neutral-900",
        s
      ),
      children: t.map((a) => e.jsx(Oe, { mouseX: o, ...a }, a.title)),
    });
  };
function Oe({ mouseX: t, title: s, icon: o, href: a }) {
  let i = n.useRef(null),
    r = S(t, (d) => {
      var C;
      let j = ((C = i.current) == null
        ? void 0
        : C.getBoundingClientRect()) ?? { x: 0, width: 0 };
      return d - j.x - j.width / 2;
    }),
    c = S(r, [-150, 0, 150], [40, 80, 40]),
    g = S(r, [-150, 0, 150], [40, 80, 40]),
    x = S(r, [-150, 0, 150], [20, 40, 20]),
    l = S(r, [-150, 0, 150], [20, 40, 20]),
    y = I(c, { mass: 0.1, stiffness: 150, damping: 12 }),
    w = I(g, { mass: 0.1, stiffness: 150, damping: 12 }),
    N = I(x, { mass: 0.1, stiffness: 150, damping: 12 }),
    b = I(l, { mass: 0.1, stiffness: 150, damping: 12 });
  const [h, u] = n.useState(!1);
  return e.jsx("a", {
    href: a,
    children: e.jsxs(m.div, {
      ref: i,
      style: { width: y, height: w },
      onMouseEnter: () => u(!0),
      onMouseLeave: () => u(!1),
      className:
        "relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800",
      children: [
        e.jsx(T, {
          children:
            h &&
            e.jsx(m.div, {
              initial: { opacity: 0, y: 10, x: "-50%" },
              animate: { opacity: 1, y: 0, x: "-50%" },
              exit: { opacity: 0, y: 2, x: "-50%" },
              className:
                "absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white",
              children: s,
            }),
        }),
        e.jsx(m.div, {
          style: { width: N, height: b },
          className: "flex items-center justify-center",
          children: o,
        }),
      ],
    }),
  });
}
const Ge = () => {
    const t = k(),
      [s, o] = n.useState(!1),
      [a, i] = n.useState(""),
      [r, c] = n.useState(f.dogBarking),
      [g, x] = n.useState(!0),
      l = n.useRef(null),
      [y, w] = n.useState([
        "You got the wrong one again 😜",
        "Uhh Ahh Neither This One 🤷‍♀️",
        "Not This Bone Dear 🚫",
      ]),
      N = () => {
        d(f.dogWithBone),
          R.success(
            "Hurray !!! You Found the Bone, now doggy can focus on bone"
          ),
          setTimeout(() => {
            u();
          }, 3e3);
      },
      b = () => {
        let p = y;
        R.error(p.pop()), w(p);
      },
      h = (p) => {
        i(p),
          (p === "hidden" || p === "invisible" || p === "opacity-0") &&
            (o(!1),
            document.getElementById("dog-video-container").classList.add(p),
            R.success(
              `Hurray !!! ${p} class name Makes the Division Invisible in Tailwind CSS`
            ),
            setTimeout(() => {
              u();
            }, 3e3));
      },
      u = () => {
        localStorage.setItem("puzzle", JSON.stringify({ puzzleSolved: !0 })),
          t("/");
      },
      d = (p) => {
        x(!1),
          setTimeout(() => {
            c(p), l.current && ((l.src = p), l.current.play());
          }, 500);
      },
      j = [
        {
          title: "Lunch Time",
          icon: e.jsx(ce, {
            size: 50,
            className: "text-rose-400 cursor-pointer",
            onClick: () => d(f.dogEating),
          }),
        },
        {
          title: "Let's Play",
          icon: e.jsx(de, {
            size: 50,
            className: "text-blue-500 cursor-pointer",
            onClick: () => d(f.dogWithBall),
          }),
        },
        {
          title: "I have a Gift",
          icon: e.jsx(me, {
            size: 50,
            className: "text-red-500 cursor-pointer",
            onClick: () => d(f.dogWithBalloons),
          }),
        },
        {
          title: "Let's get Ready",
          icon: e.jsx(pe, {
            size: 50,
            className: "text-gray-500 cursor-pointer",
            onClick: () => d(f.dogWithMirror),
          }),
        },
        {
          title: "Hungry",
          icon: e.jsx(ue, {
            size: 50,
            className: "text-violet-500 cursor-pointer",
            onClick: () => d(f.dogWantsFood),
          }),
        },
        {
          title: "Home Sweet Home",
          icon: e.jsx(ge, {
            size: 50,
            className: "text-orange-500 cursor-pointer",
            onClick: () => d(f.dogWithHome),
          }),
        },
        {
          title: "Let's Dance",
          icon: e.jsx(he, {
            size: 50,
            className: "text-yellow-500 cursor-pointer",
            onClick: () => d(f.dogJumping),
          }),
        },
      ],
      C = [
        { className: "absolute left-1/3 top-1/2" },
        { className: "absolute left-2/3 top-2/3" },
        { className: "absolute left-1/2 mt-300 pb-100" },
      ];
    return e.jsxs("div", {
      className:
        "relative w-full bg-[rgba(253,253,253,1)] p-6 flex flex-col items-center",
      children: [
        e.jsx(ee, {}),
        e.jsxs("div", {
          className: "relative w-fit h-fit ",
          children: [
            e.jsx("div", {
              className:
                "hover:cursor-pointer relative left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mt-2 w-fit h-fit",
              onClick: N,
              children: e.jsx(D, {
                size: 40,
                className:
                  "text-gray-50 hover:scale-110 transition-transform duration-200 hover:text-gray-300",
              }),
            }),
            e.jsx("div", {
              className: "relative z-30 top-0",
              children: e.jsx(Me, {}),
            }),
          ],
        }),
        C.map((p) =>
          e.jsx("div", {
            onClick: b,
            className: p.className,
            children: e.jsx(We, {}),
          })
        ),
        e.jsxs("div", {
          className: "relative z-10",
          children: [
            e.jsxs("div", {
              className: "flex items-center",
              id: "dog-video-container",
              children: [
                e.jsx("video", {
                  ref: l,
                  width: 800,
                  height: 800,
                  autoPlay: !0,
                  loop: r === f.dogSitting,
                  muted: !0,
                  id: "dog-video",
                  onClick: () => o(!s),
                  onCanPlay: () => x(!0),
                  className: `relative transition-opacity duration-500 ${
                    g ? "opacity-100" : "opacity-0"
                  }`,
                  src: r,
                  onEnded: () => d(f.dogBarking),
                }),
                e.jsx(H, {
                  items: [
                    {
                      title: "Use Translator",
                      icon: e.jsx(le, {
                        size: 50,
                        className: "text-yellow-500 cursor-pointer",
                        onClick: () => d(f.dogBarkingInEnglish),
                      }),
                    },
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "absolute flex flex-wrap items-center justify-center w-full mt-0",
              children: e.jsx(H, {
                mobileClassName: "translate-y-40 h-50",
                items: j,
              }),
            }),
            s &&
              e.jsx("div", {
                className: "absolute top-4 right-4 z-20 px-4 py-2 rounded-lg",
                children: e.jsx("div", {
                  className: "items-center gap-4",
                  children: e.jsx("input", {
                    id: "width",
                    placeholder: "Class Name ?",
                    className: "border border-gray-300 rounded-md px-2 py-1",
                    value: a,
                    onChange: (p) => h(p.target.value),
                  }),
                }),
              }),
          ],
        }),
      ],
    });
  },
  $e = () => {
    const t = k();
    return e.jsx("div", {
      className:
        "fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full shadow-xl bg-violet-500 hover:bg-violet-600 text-white flex items-center justify-center cursor-pointer transition-transform duration-300 ease-out hover:scale-110",
      onClick: () => t("/puzzle"),
      title: "Puzzle",
      children: e.jsx(xe, { size: 40 }),
    });
  },
  Je = () =>
    e.jsx("main", {
      className: "grid px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8",
      children: e.jsxs("div", {
        className: "text-center",
        children: [
          e.jsx("p", {
            className: "text-base font-semibold text-btn",
            children: "404",
          }),
          e.jsx("h1", {
            className:
              "mt-4 text-5xl font-semibold tracking-tight text-gray-900 text-balance sm:text-7xl",
            children: "Page not found",
          }),
          e.jsx("p", {
            className:
              "mt-6 text-lg font-medium text-gray-500 text-pretty sm:text-xl/8",
            children: "Sorry, we couldn't find the page you're looking for.",
          }),
          e.jsx("div", {
            className: "flex items-center justify-center mt-10 gap-x-6",
            children: e.jsxs(L, {
              to: "/",
              className: "text-sm font-semibold text-text",
              children: [
                "Go Back Home ",
                e.jsx("span", { "aria-hidden": "true", children: "→" }),
              ],
            }),
          }),
        ],
      }),
    });
function Ye() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx($e, {}),
      e.jsxs(G, {
        children: [
          e.jsx(z, { path: "/puzzle", element: e.jsx(Ge, {}) }),
          e.jsx(z, { path: "/", element: e.jsx(Ne, {}) }),
          e.jsx(z, { path: "/about-me", element: e.jsx(Pe, {}) }),
          e.jsx(z, { path: "/projects", element: e.jsx(ze, {}) }),
          e.jsx(z, { path: "*", element: e.jsx(Je, {}) }),
        ],
      }),
    ],
  });
}
const Ke = n.createContext(),
  Ve = ({ children: t }) => {
    const [s, o] = n.useState(
      () =>
        localStorage.getItem("puzzle") || JSON.stringify({ puzzleSolved: !1 })
    );
    return (
      n.useEffect(() => {
        localStorage.setItem("puzzle", s);
      }, []),
      e.jsx(Ke.Provider, { value: [s, o], children: t })
    );
  };
O.createRoot(document.getElementById("root")).render(
  e.jsx(n.StrictMode, {
    children: e.jsx($, { children: e.jsx(Ve, { children: e.jsx(Ye, {}) }) }),
  })
);
