import React from 'react';

const Icons = () => (
  <svg
    aria-hidden="true"
    style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <symbol id="icon-menu-close" viewBox="0 0 32 32">
        <path d="M7.995 6l17.868 17.868-1.995 1.995-17.868-17.868z"></path>
        <path d="M7.995 25.863l17.868-17.868-1.995-1.995-17.868 17.868z"></path>
      </symbol>
      <symbol id="icon-menu" viewBox="0 0 32 32">
        <path fill="#fff" style={{ fill: "var(--color1, #fff)" }} d="M6 7h20.667v2.667h-20.667v-2.667z"></path>
        <path fill="#fff" style={{ fill: "var(--color1, #fff)" }} d="M6 14.333h20.667v2.667h-20.667v-2.667z"></path>
        <path fill="#fff" style={{ fill: "var(--color1, #fff)" }} d="M6 22.333h20.667v2.667h-20.667v-2.667z"></path>
      </symbol>
      <symbol id="icon-play" viewBox="0 0 22 28">
        <path style={{ fill: "#000" }} d="M21.625 14.484l-20.75 11.531c-0.484 0.266-0.875 0.031-0.875-0.516v-23c0-0.547 0.391-0.781 0.875-0.516l20.75 11.531c0.484 0.266 0.484 0.703 0 0.969z"></path>
      </symbol>
      <symbol id="icon-download" viewBox="0 0 32 32">
        <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.1818" d="M16.001 21.946v-11.901"></path>
        <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.1818" d="M20.96 16.988l-4.959 4.959-4.959-4.959"></path>
        <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.1818" d="M29.886 15.996c0 7.668-6.216 13.884-13.884 13.884s-13.884-6.216-13.884-13.884c0-7.668 6.216-13.884 13.884-13.884s13.884 6.216 13.884 13.884z"></path>
      </symbol>
      <symbol id="icon-github" viewBox="0 0 26 32">
        <path d="M1.457 14.653c-0.409-1.202-0.589-2.578-0.589-4.115 0-2.729 0.851-3.759 1.993-5.214-0.873-3.111 0.314-5.238 0.314-5.238s1.836-0.381 5.308 2.104c1.881-0.806 6.898-0.873 9.272-0.179 1.456-0.962 4.121-2.328 5.196-1.946 0.291 0.468 0.918 1.834 0.381 4.833 0.365 0.658 2.262 2.059 2.269 6.021-0.030 1.461-0.183 2.695-0.465 3.738 0.054-0-0.36 1.293-0.459 1.29-1.259 2.763-3.84 3.794-8.012 4.223 1.352 0.851 1.74 1.918 1.74 4.805s-0.039 3.275-0.030 3.939c0.014 1.090 1.613 1.612 1.552 1.963s-1.337 0.294-1.934 0.085c-1.691-0.589-1.522-1.996-1.522-1.996l-0.056-3.861c0 0 0.116-2.078-0.653-2.078v6.319c0 1.373 0.963 1.791 0.963 2.298 0 0.873-1.758-0.082-2.3-0.627-0.825-0.828-0.731-2.585-0.711-3.974 0.019-1.341-0.013-4.275-0.013-4.275l-0.56 0.012c0 0 0.229 6.409-0.296 7.576-0.679 1.5-2.728 2.015-2.728 1.332 0-0.459 0.504-0.313 0.784-1.343 0.238-0.876 0.157-7.409 0.157-7.409s-0.657 0.388-0.657 1.612c0 0.56-0.015 3.76-0.015 4.711 0 1.198-1.702 1.88-2.52 1.88-0.414 0-0.929-0.021-0.929-0.24 0-0.554 1.556-0.879 1.556-2.032 0-0.999-0.021-3.57-0.021-3.57s-0.785 0.134-1.905 0.134c-2.822 0-3.714-1.8-4.139-2.807-0.553-1.312-1.269-1.928-2.031-2.42-0.468-0.303-0.575-0.659-0.034-0.761 2.498-0.47 3.136 2.831 4.804 3.358 1.191 0.375 2.722 0.213 3.483-0.279 0.1-1.008 0.828-1.88 1.433-2.34-4.243-0.407-6.758-1.88-8.063-4.247-0.017 0-0.614-1.287-0.564-1.287z"></path>
      </symbol>
      <symbol id="icon-twitter" viewBox="0 0 39 32">
        <path d="M38.4 3.68c-1.44 0.64-2.88 1.12-4.48 1.28 1.6-0.96 2.88-2.56 3.52-4.32-1.6 0.96-3.2 1.6-4.96 1.92-1.44-1.6-3.52-2.56-5.76-2.56-4.32 0-7.84 3.52-7.84 7.84 0 0.64 0 1.28 0.16 1.76-6.72-0.32-12.48-3.52-16.32-8.32-0.8 1.28-1.12 2.56-1.12 4 0 2.72 1.44 5.12 3.52 6.56-1.28 0-2.56-0.32-3.52-0.96 0 0 0 0 0 0.16 0 3.84 2.72 7.040 6.24 7.68-0.64 0.16-1.28 0.32-2.080 0.32-0.48 0-0.96 0-1.44-0.16 0.96 3.2 3.84 5.44 7.36 5.44-2.72 2.080-6.080 3.36-9.76 3.36-0.64 0-1.28 0-1.92-0.16 3.52 2.24 7.68 3.52 12 3.52 14.56 0 22.4-12 22.4-22.4 0-0.32 0-0.64 0-0.96 1.6-1.12 2.88-2.56 4-4z"></path>
      </symbol>
      <symbol id="icon-facebook" viewBox="0 0 20 32">
        <path d="M5.864 32l-0.046-14.545h-5.818v-5.818h5.818v-3.636c0-5.398 3.343-8 8.159-8 2.307 0 4.289 0.172 4.867 0.248v5.642l-3.34 0.002c-2.619 0-3.126 1.245-3.126 3.071v2.674h7.622l-2.909 5.818h-4.713v14.545h-6.514z"></path>
      </symbol>
      <symbol id="icon-linkedin" viewBox="0 0 32 32">
        <path d="M22.667 9.6c6.4 0 7.467 4.267 7.467 9.6v11.2h-6.133l-0.001-10.428c-0.017-2.272-0.245-4.772-3.199-4.772-3.2 0-3.733 2.667-3.733 5.333v10.133h-6.4v-20.533h6.133v2.667c0.8-1.6 2.933-3.2 5.867-3.2zM6.933 10.133v20.267h-6.4v-20.267h6.4zM3.733 0c2.133 0 3.733 1.6 3.733 3.733-0.267 1.867-1.867 3.733-3.733 3.733-2.133 0-3.733-1.867-3.733-3.733 0-2.133 1.6-3.733 3.733-3.733z"></path>
      </symbol>
      <symbol id="icon-close" viewBox="0 0 32 32">
        <path fill="#fff" style={{ fill: "var(--color1, #fff)" }} d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
        <path fill="none" stroke="#000" style={{ stroke: "var(--color2, #000)" }} strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="1.3714" d="M11.429 11.429l9.143 9.143"></path>
        <path fill="none" stroke="#000" style={{ stroke: "var(--color2, #000)" }} strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="1.3714" d="M11.429 20.571l9.143-9.143"></path>
      </symbol>
    </defs>
  </svg>
);

export default Icons;
