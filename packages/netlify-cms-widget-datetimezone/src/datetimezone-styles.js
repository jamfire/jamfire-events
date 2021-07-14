export default {
  wrapper: {
    display: `grid`,
    gridGap: `1rem`,
  },
  hint: {
    fontSize: `12px`,
    color: `rgb(122, 130, 145)`,
  },
  datetime: {
    display: `grid`,
    gridTemplateColumns: `1fr 1fr`,
    gridTemplateAreas: `
      "date time"
    `,
    gridGap: `1rem`,
  },
  date: {
    gridArea: `date`,
  },
  time: {
    gridArea: `time`,
  },
  timezone: {
    display: `grid`,
    gridTemplateAreas: `2fr 1fr`,
    gridTemplateAreas: `
      "timezone filter"
    `,
    gridGap: `1rem`,
  },
  timezoneSelector: {
    gridArea: `timezone`,
  },
  filter: {
    gridArea: `filter`,
  },
  rounded: {
    borderRadius: `5px !important`,
  },
}
