// import libs
import React, { useContext } from "react"
import { GlobalStylesProps } from "./_props"

// import components
import { Context } from "../../../services/theme"

// import styles
import { Global, css } from "@emotion/react"
import mq from "../../../utils/media"

// global styles
export default ({ config }: GlobalStylesProps) => {
  const context = useContext(Context)

  const { darkMode } = context

  let { primaryColor, primaryColorHover } = config.frontmatter.colors

  if (!primaryColor) {
    primaryColor = "#E3053E"
  }

  if (!primaryColorHover) {
    primaryColorHover = "#ff0050"
  }

  return (
    <Global
      styles={css`
        :root {
          // layout sizes
          --sidebar-width: 300px;

          // basic colors
          --text-color: ${darkMode ? "#eee" : "#333"};
          --background: ${darkMode ? "#3c4043" : "#fff"};
          --html-background: #222;
          --content-background: ${darkMode ? "#333" : "#f7f7f7"};
          --content-background-darker: ${darkMode ? "#222" : "#eee"};
          --content-background-hover: ${darkMode ? "#555" : "#eee"};
          --callout-background: ${darkMode ? "#2a2a2a" : "#fff"};

          // hero colors
          --hero-overlay: ${
            darkMode ? "rgba(0, 0, 0, 0.25)" : "rgba(255, 255, 255, 0.75)"
          };

          // logo colors
          --logo-hover: ${darkMode ? primaryColorHover : primaryColorHover};
          --logo-background: ${darkMode ? primaryColor : primaryColor};
          --logo-color: ${darkMode ? "#fff" : "#fff"};

          // anchor colors
          --anchor-color: ${darkMode ? primaryColor : primaryColor};
          --anchor-active: ${darkMode ? primaryColor : primaryColor};
          --nav-anchor-color: ${darkMode ? "#888" : "#aaa"};
          --nav-anchor-active: ${darkMode ? "#fff" : "#888"};

          // border-colors
          --border-color: ${darkMode ? "#373737" : "#efefef"};

          // button colors
          --button-background: ${darkMode ? "#373737" : "#efefef"};
          --button-background-hover: ${darkMode ? primaryColor : primaryColor};
          --button-text-hover: ${darkMode ? "#fff" : "#fff"};
          --disabled-button-background: ${darkMode ? "#373737" : "#ddd"};
          --disabled-button-color: ${darkMode ? "#888" : "#aaa"};
          --outline-button-color: ${darkMode ? "#fff" : primaryColor};

          // overlay colors
          --overlay: ${darkMode ? "rgb(17,72,119)" : "rgb(17,72,119)"};
          --overlay-gradient: ${
            darkMode
              ? "linear-gradient(55deg, rgba(103,37,80,0.8) 0%, rgba(0, 0, 0, 0) 100%)"
              : "linear-gradient(55deg, rgba(145,37,107,0.8) 0%, rgba(0, 0, 0, 0) 100%)"
          };
          --overlay-hover: ${
            darkMode
              ? "linear-gradient(55deg, rgba(103,37,80,0.7) 0%, rgba(0, 0, 0, 0) 100%)"
              : "linear-gradient(55deg, rgba(145,37,107,0.7) 0%, rgba(0, 0, 0, 0) 100%)"
          };

          // form colors
          --placeholder-color: ${darkMode ? "#aaa" : "#333"};
          --form-background: ${darkMode ? "#2a2a2a" : "#efefef"};
          --form-disabled-color: ${darkMode ? "#444" : "#ccc"};
          --form-enabled-color: ${darkMode ? "#eee" : "#fff"};
          --form-button-background: ${darkMode ? "#009965" : "#009965"};

          // list colors
          --list-header-background: ${darkMode ? "#2f2f2f" : "#efefef"};
          --list-header-background-callout: ${darkMode ? "#3f3f3f" : "#e7e7e7"};
          --list-header-background-darker: ${darkMode ? "#2f2f2f" : "#ddd"};

          // form colors
          --form-boder: ${darkMode ? "#aaa" : "#777"};
          --form-input-background: ${darkMode ? "#444" : "#fff"};
          --form-input-color: ${darkMode ? "#bbb" : "#333"};
          --form-input-placeholder: ${darkMode ? "#bbb" : "#333"}
          --form-error-color: ${darkMode ? "#d23331" : "#d23331"};
          --form-button-bg: ${darkMode ? "#2f2f2f" : "#eeeeee"};
          --form-button-color: ${darkMode ? "#ddd" : "#333"};
          --form-button-bg-hover: ${darkMode ? primaryColor : primaryColor};
          --form-button-color-hover: ${darkMode ? "#fff" : "#fff"};

          // error colors
          --error-background: ${darkMode ? "#ff8c87" : "#ff8c87"};
          --error-color: ${darkMode ? "#fff" : "#fff"};

          // question and answer
          --qa-secondary-color: ${darkMode ? "#fff" : "#aaa"};
          --qa-secondary-background: ${darkMode ? "#666 " : "#efefef"};
          --qa-header-color: ${darkMode ? "#333" : "#e7e7e7"};
        }

        html {
          background: var(--html-background);
        }

        body {
          color: var(--text-color);
          background: var(--background);
          font-family: "Quattrocento Sans", sans-serif;

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: var(--text-color);
            font-family: "Work Sans", sans-serif;
          }

          a {
            color: var(--anchor-color);
            text-decoration: none;
            transition: all 95ms east-out;

            &:hover {
              text-decoration: underline;
            }
          }
        }

        input {
          color: var(--text-color);

          &::placeholder {
            color: var(--placeholder-color);
          }
        }

        table {
          border-radius: 4px;
          border-collapse: collapse;
          width: 100%;
          margin-bottom: 0;

          ${mq("tablet_up")} {
            background: var(--callout-background);
          }

          th {
            border-bottom: 0;
            vertical-align: bottom;
          }

          td {
            border-bottom: 0;
            vertical-align: top;
          }

          thead {
            background: var(--logo-background);
            color: var(--logo-color);

            th:first-of-type {
              border-top-left-radius: 4px;
            }

            th:last-of-type {
              border-top-right-radius: 4px;
            }
          }

          tbody {
            tr {
              &:nth-of-type(2n) {
                background: var(--form-background);
              }

              td:first-of-type {
                border-left: 1px solid var(--border-color);
              }

              td:last-of-type {
                border-right: 1px solid var(--border-color);
              }

              &:first-of-type {
                border-top: 1px solid var(--border-color);
              }

              &:last-of-type {
                td {
                  border-bottom: 1px solid var(--border-color);
                }

                td:first-of-type {
                  border-top-left-radius: 4px;
                }

                td:last-of-type {
                  border-top-right-radius: 4px;
                }
              }
            }
          }
          tfoot {

            td {
              background: var(--form-background);
              
              &:first-of-type {
                border-bottom-left-radius: 4px;
                font-weight: bold;
              }

              &:last-of-type {
                border-bottom-right-radius: 4px;
              }
            }
          }

          td,
          th {
            padding: 0.25rem 0.75rem !important;
            text-align: left;
          }

          @media screen and (max-width: 600px) {
            thead {
              display: none;
            }

            tbody {
              tr {
                border-bottom: 1px solid var(--border-color);

                &:nth-of-type(2n) {
                  background: transparent;
                }

                &:last-of-type {
                  td {
                    border-bottom: none;
                  }
                }
              }

              &.no-data-labels {
                tr {
                  td {
                    &::before {
                      content: none;
                    }
                  }
                }
              }
            }

            tr {
              display: block;
              border-bottom-left-radius: 4px;
              border-bottom-right-radius: 4px;
              margin-bottom: 1rem;
            }

            td {
              background: var(--callout-background);
              display: flex;
              border-left: 1px solid var(--border-color);
              border-right: 1px solid var(--border-color);

              &::before {
                content: attr(data-label);
                font-weight: bold;
                width: 120px;
                min-width: 120px;
              }

              &:first-of-type {
                background: var(--logo-background);
                color: var(--logo-color);
                border-top-right-radius: 4px;
                border-top-left-radius: 4px;

                a {
                  color: var(--logo-color);
                }
              }

              &:last-of-type {
                border-bottom-right-radius: 4px;
                border-bottom-left-radius: 4px;
              }
            }
          }
        }
      `}
    />
  )
}
