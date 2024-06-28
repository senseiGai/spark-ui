import React, { useState, useEffect } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getBreakpoint } from "../../../utils/getBreakpoint";

interface IIconTextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconDefinition;
  margin?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  width?: string;
  height?: string;
  textDecoration?: string;
  borderRadius?: string;
  border?: string;
  color?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  hoverBorder?: string;
  transition?: string;
  cursor?: string;
  text: string;
  gap?: string;
  padding?: string;
  iconFontSize?: string;
  iconColor?: string;
  iconHoverColor?: string;
  id?: string;
  xxsWidth?: string;
  xsWidth?: string;
  sWidth?: string;
  mWidth?: string;
  smWidth?: string;
  lWidth?: string;
  mdWidth?: string;
  tabletWidth?: string;
  tabletSmWidth?: string;
  lgWidth?: string;
  xlWidth?: string;
  twoXlWidth?: string;
  threeXlWidth?: string;
  fourXlWidth?: string;
  fiveXlWidth?: string;
  sixXlWidth?: string;
  xxsHeight?: string;
  xsHeight?: string;
  sHeight?: string;
  mHeight?: string;
  smHeight?: string;
  lHeight?: string;
  mdHeight?: string;
  tabletHeight?: string;
  tabletSmHeight?: string;
  lgHeight?: string;
  xlHeight?: string;
  twoXlHeight?: string;
  threeXlHeight?: string;
  fourXlHeight?: string;
  fiveXlHeight?: string;
  sixXlHeight?: string;
  xxsFontSize?: string;
  xsFontSize?: string;
  sFontSize?: string;
  mFontSize?: string;
  smFontSize?: string;
  lFontSize?: string;
  mdFontSize?: string;
  tabletFontSize?: string;
  tabletSmFontSize?: string;
  lgFontSize?: string;
  xlFontSize?: string;
  twoXlFontSize?: string;
  threeXlFontSize?: string;
  fourXlFontSize?: string;
  fiveXlFontSize?: string;
  sixXlFontSize?: string;
  xxsIconFontSize?: string;
  xsIconFontSize?: string;
  sIconFontSize?: string;
  mIconFontSize?: string;
  smIconFontSize?: string;
  lIconFontSize?: string;
  mdIconFontSize?: string;
  tabletIconFontSize?: string;
  tabletSmIconFontSize?: string;
  lgIconFontSize?: string;
  xlIconFontSize?: string;
  twoXlIconFontSize?: string;
  threeXlIconFontSize?: string;
  fourXlIconFontSize?: string;
  fiveXlIconFontSize?: string;
  sixXlIconFontSize?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const IconTextButton: React.FC<IIconTextProps> = ({
  icon,
  text,
  onClick,
  id,
  margin,
  backgroundColor,
  fontSize,
  fontWeight,
  fontFamily,
  width,
  height,
  textDecoration,
  border,
  borderRadius,
  color,
  hoverBackgroundColor,
  hoverColor,
  hoverBorder,
  cursor,
  iconFontSize,
  iconColor,
  iconHoverColor,
  transition,
  gap,
  padding,
  xxsWidth,
  xsWidth,
  sWidth,
  mWidth,
  smWidth,
  lWidth,
  mdWidth,
  tabletWidth,
  tabletSmWidth,
  lgWidth,
  xlWidth,
  twoXlWidth,
  threeXlWidth,
  fourXlWidth,
  fiveXlWidth,
  sixXlWidth,
  xxsHeight,
  xsHeight,
  sHeight,
  mHeight,
  smHeight,
  lHeight,
  mdHeight,
  tabletHeight,
  tabletSmHeight,
  lgHeight,
  xlHeight,
  twoXlHeight,
  threeXlHeight,
  fourXlHeight,
  fiveXlHeight,
  sixXlHeight,
  xxsFontSize,
  xsFontSize,
  sFontSize,
  mFontSize,
  smFontSize,
  lFontSize,
  mdFontSize,
  tabletFontSize,
  tabletSmFontSize,
  lgFontSize,
  xlFontSize,
  twoXlFontSize,
  threeXlFontSize,
  fourXlFontSize,
  fiveXlFontSize,
  sixXlFontSize,
  xxsIconFontSize,
  xsIconFontSize,
  sIconFontSize,
  mIconFontSize,
  smIconFontSize,
  lIconFontSize,
  mdIconFontSize,
  tabletIconFontSize,
  tabletSmIconFontSize,
  lgIconFontSize,
  xlIconFontSize,
  twoXlIconFontSize,
  threeXlIconFontSize,
  fourXlIconFontSize,
  fiveXlIconFontSize,
  sixXlIconFontSize,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getWidth = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsWidth || width;
      case "xs":
        return xsWidth || width;
      case "s":
        return sWidth || width;
      case "m":
        return mWidth || width;
      case "sm":
        return smWidth || width;
      case "l":
        return lWidth || width;
      case "md":
        return mdWidth || width;
      case "tablet":
        return tabletWidth || width;
      case "tablet_sm":
        return tabletSmWidth || width;
      case "lg":
        return lgWidth || width;
      case "xl":
        return xlWidth || width;
      case "2xl":
        return twoXlWidth || width;
      case "3xl":
        return threeXlWidth || width;
      case "4xl":
        return fourXlWidth || width;
      case "5xl":
        return fiveXlWidth || width;
      case "6xl":
        return sixXlWidth || width;
      default:
        return width;
    }
  };

  const getHeight = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsHeight || height;
      case "xs":
        return xsHeight || height;
      case "s":
        return sHeight || height;
      case "m":
        return mHeight || height;
      case "sm":
        return smHeight || height;
      case "l":
        return lHeight || height;
      case "md":
        return mdHeight || height;
      case "tablet":
        return tabletHeight || height;
      case "tablet_sm":
        return tabletSmHeight || height;
      case "lg":
        return lgHeight || height;
      case "xl":
        return xlHeight || height;
      case "2xl":
        return twoXlHeight || height;
      case "3xl":
        return threeXlHeight || height;
      case "4xl":
        return fourXlHeight || height;
      case "5xl":
        return fiveXlHeight || height;
      case "6xl":
        return sixXlHeight || height;
      default:
        return height;
    }
  };

  const getFontSize = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsFontSize || fontSize;
      case "xs":
        return xsFontSize || fontSize;
      case "s":
        return sFontSize || fontSize;
      case "m":
        return mFontSize || fontSize;
      case "sm":
        return smFontSize || fontSize;
      case "l":
        return lFontSize || fontSize;
      case "md":
        return mdFontSize || fontSize;
      case "tablet":
        return tabletFontSize || fontSize;
      case "tablet_sm":
        return tabletSmFontSize || fontSize;
      case "lg":
        return lgFontSize || fontSize;
      case "xl":
        return xlFontSize || fontSize;
      case "2xl":
        return twoXlFontSize || fontSize;
      case "3xl":
        return threeXlFontSize || fontSize;
      case "4xl":
        return fourXlFontSize || fontSize;
      case "5xl":
        return fiveXlFontSize || fontSize;
      case "6xl":
        return sixXlFontSize || fontSize;
      default:
        return fontSize;
    }
  };

  const getIconFontSize = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsIconFontSize || iconFontSize;
      case "xs":
        return xsIconFontSize || iconFontSize;
      case "s":
        return sIconFontSize || iconFontSize;
      case "m":
        return mIconFontSize || iconFontSize;
      case "sm":
        return smIconFontSize || iconFontSize;
      case "l":
        return lIconFontSize || iconFontSize;
      case "md":
        return mdIconFontSize || iconFontSize;
      case "tablet":
        return tabletIconFontSize || iconFontSize;
      case "tablet_sm":
        return tabletSmIconFontSize || iconFontSize;
      case "lg":
        return lgIconFontSize || iconFontSize;
      case "xl":
        return xlIconFontSize || iconFontSize;
      case "2xl":
        return twoXlIconFontSize || iconFontSize;
      case "3xl":
        return threeXlIconFontSize || iconFontSize;
      case "4xl":
        return fourXlIconFontSize || iconFontSize;
      case "5xl":
        return fiveXlIconFontSize || iconFontSize;
      case "6xl":
        return sixXlIconFontSize || iconFontSize;
      default:
        return iconFontSize;
    }
  };

  return (
    <button
      id={id}
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin,
        backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
        borderRadius,
        height: getHeight(),
        border: isHovered ? hoverBorder : border,
        gap,
        padding,
        transition,
        cursor: "pointer",
        outline: "none",
        width: getWidth(),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      <FontAwesomeIcon
        icon={icon}
        style={{
          color: isHovered ? iconHoverColor : iconColor || color,
          fontSize: getIconFontSize(),
          transition,
        }}
      />
      <span
        style={{
          fontFamily,
          fontSize: getFontSize(),
          color: isHovered ? hoverColor : color,
          fontWeight,
          textDecoration,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </span>
    </button>
  );
};
