import nightOwl from "@theme-ui/prism/presets/vs-dark.json";

const heading = {
  color: "#d1d5dd",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading"
};

export default {
  useCustomProperties: true,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      "system-ui,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif !important",
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontSizes: [16, 18, 20, 24, 32, 48, 64, 96],
  radii: [0, 6, 12, 24, 48],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: "#abb2bf",
    heading: heading.color,
    background: "#212529",
    primary: "#77b6e7",
    secondary: "#d7ff27",
    highlight: "#ffb701",
    muted: "rgba(0,0,0,0.2)",
    accent: "#23e7a9",
    darken: "#63a5df",
    social: {
      twitter: "#1da1f2",
      bookmark: "#8e44ad",
      like: "rgb(224, 36, 94)",
      retweet: "rgb(23, 191, 99)",
      reply: "rgb(27, 149, 224)"
    },
    modes: {
      light: {
        text: "#333652",
        background: "#e9eaec",
        primary: "#2980b9",
        secondary: "#27ae60",
        muted: "#f6f6f9",
        gray: "#555",
        darkGray: "rgb(43, 43, 43)",
        black: "#111",
        code: "#ddd",
        social: {
          twitter: "#1da1f2",
          bookmark: "#8e44ad",
          like: "rgb(224, 36, 94)",
          retweet: "rgb(23, 191, 99)",
          reply: "rgb(27, 149, 224)"
        }
      }
    }
  },
  variants: {
    // link: {
    //   color: "primary"
    // }
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: "bold",
      color: "background",
      bg: "primary",
      borderRadius: "default"
    },
    outline: {
      variant: "buttons.primary",
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 2px"
    },
    secondary: {
      variant: "buttons.primary",
      color: "background",
      bg: "secondary"
    }
  },
  styles: {
    root: {
      fontSize: 2,
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      img: {
        width: "100%"
      },
      pre: {
        padding: 3,
        fontSize: 0,
        overflowX: "auto",
        borderLeft: "4px solid #333",
        ...nightOwl,
        ".mdx-marker": {
          backgroundColor: "rgba(255,255,255,0.1)",
          display: "block",
          marginLeft: "-1em",
          marginRight: "-.9em",
          paddingRight: "1em",
          paddingLeft: "1em",
          borderLeft: `.25em solid ${nightOwl[".punctuation"].color}`
        }
      },
      code: {
        fontFamily: "monospace",
        fontSize: "inherit"
      },
      article: {
        header: {
          h2: {
            a: {
              color: "heading"
            }
          },
          time: {
            color: "#8d939d"
          }
        },
        a: {
          color: "primary"
        }
      }
    },
    h1: {
      ...heading,
      fontSize: 4
    },
    h2: {
      ...heading,
      fontSize: 4
    },
    h3: {
      ...heading,
      fontSize: 3
    },
    h4: {
      ...heading,
      fontSize: 2
    },
    h5: {
      ...heading,
      fontSize: 1
    },
    h6: {
      ...heading,
      fontSize: 0
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      code: {
        bg: nightOwl.backgroundColor,
        color: nightOwl.color,
        padding: 1
      }
    },
    li: {
      a: {
        color: "primary"
      }
    },
    a: {
      color: "primary"
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    img: {
      maxWidth: "100%"
    },
    blockquote: {
      padding: ".5em .5em .5em 1.5em",
      marginLeft: 0,
      borderLeft: ".3em solid",
      borderColor: "primary",
      "& > p:first-of-type": {
        marginTop: 0
      }
    }
  }
};
