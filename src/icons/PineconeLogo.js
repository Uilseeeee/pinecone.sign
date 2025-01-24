import * as React from "react"
const PineLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h60v60H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.00195)" />
      </pattern>
      <image
        id="b"
        width={512}
        height={512}
      />
    </defs>
  </svg>
)
export default PineLogo