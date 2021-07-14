// import libs
import React, { Component } from "react"
import { DateTime } from "luxon"
import { getTimeZones } from "@vvo/tzdb"
import uniqBy from "lodash/uniqBy"
import filter from "lodash/filter"
import isObject from "lodash/isObject"

// import styles
import styles from "./datetimezone-styles.js"

/**
 * DateTimeZoneControl Component
 *
 * Displays Netlify CMS Widget that allows you to set
 * a time, date, and timezone
 */
class DateTimeZoneControl extends Component {
  /**
   * Constructor for DateTimeZoneControl
   * @param {object} props
   */
  constructor(props) {
    super(props)

    // component state
    this.state = {
      date: ``,
      time: ``,
      tz: ``,
      timezones: getTimeZones(),
      filteredTimezones: getTimeZones(),
      filters: null,
    }
  }

  /**
   * Get Timezone Data
   * @param {string} name
   * @returns array
   */
  getTzData = (name) => {
    const tzData = this.state.timezones.filter((timezone) => timezone.name === name)

    return tzData
  }

  /**
   * Check if data is valid
   * @returns boolean
   */
  isValid = () => {
    const { datetime, timezone, field } = this.props.value || {}

    if (datetime === undefined || timezone === undefined) {
      return true
    }

    // datetime valid check
    const datetimeCheck = DateTime.fromISO(datetime)

    if (!datetimeCheck.isValid) {
      return {
        error: { message: `Please use YYYY-MM-DD HH:MM 24-hour format` },
      }
    }

    // timezone valid check
    const timezoneCheck = this.getTzData(timezone)
    const timezoneValid = timezoneCheck.length > 0

    if (!timezoneValid) {
      return {
        error: { message: `Please select a timezone` },
      }
    }

    return true
  }

  /**
   * Setup initial values for field
   */
  componentDidMount = () => {
    const { value } = this.props

    // set the current value
    if (isObject(value)) {
      const datetime = DateTime.fromISO(value.get(`datetime`), {
        zone: value.get(`timezone`),
      })

      const date = datetime.toISODate()
      const time = datetime.toLocaleString(DateTime.TIME_24_SIMPLE)

      this.setState({
        datetime: value.get(`datetime`),
        date,
        time,
        tz: value.get(`timezone`),
      })
    }
    // value does not exist
    else {
      // set current timezone name
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
      this.setState({
        tz,
      })
    }
  }

  /**
   * Handle Form Change
   *
   * Sets datetime in ISO format as well as timezone name for use
   * in libraries like luxon.
   */
  handleChange = () => {
    const { date, time, tz } = this.state

    // get timezone data
    const tzData = this.getTzData(tz)

    // timezone data exists
    const tzDataExists = tzData.length > 0

    if (tzDataExists) {
      const datestring = `${date}T${time}`
      const datetime = DateTime.fromISO(datestring, { zone: tz })

      const datetimezone = {
        datetime: datetime.toISO(),
        timezone: tz,
      }

      this.props.onChange(datetimezone)
    }
  }

  /**
   * Set date to state
   * @param {object} e
   */
  setDate = (e) => {
    const date = e.target.value
    this.setState({ date }, this.handleChange)
  }

  /**
   * Set time to state
   * @param {object} e
   */
  setTime = (e) => {
    const time = e.target.value
    this.setState({ time }, this.handleChange)
  }

  /**
   * Set timezone to state
   * @param {object} e
   */
  setTz = (e) => {
    const tz = e.target.value

    const tzData = this.getTzData(tz)

    const tzDataExists = tzData.length > 0

    if (tzDataExists) {
      this.setState(
        {
          tz,
        },
        this.handleChange
      )
    }
  }

  /**
   * Filter timezone list by continent
   * @param {object} e
   */
  setFilter = (e) => {
    const filterValue = e.target.value
    const { timezones } = this.state

    // set filtered timezones
    const filteredTimezones =
      filterValue !== `nofilter` ? filter(timezones, (code) => code.continentCode === filterValue) : timezones
    this.setState({ filteredTimezones })
  }

  /**
   * Render HTML for field
   * @returns html
   */
  render = () => {
    const { forId, classNameWrapper } = this.props

    const { timezones, filteredTimezones } = this.state

    const filteredContinents = uniqBy(timezones, `continentName`)

    return (
      <div id={forId} styles={styles.wrapper}>
        <div style={styles.datetime}>
          <div style={styles.date}>
            <input
              maxLength="10"
              placeholder="YYYY-MM-DD"
              value={this.state.date}
              className={classNameWrapper}
              onChange={this.setDate}
            />
            <span style={styles.hint}>YYYY-MM-DD Date</span>
          </div>

          <div style={styles.time}>
            <input
              placeholder="HH:MM"
              maxLength="5"
              pattern={`^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d))`}
              value={this.state.time}
              className={classNameWrapper}
              onChange={this.setTime}
              style={{
                borderRadius: `5px`,
              }}
            />
            <span style={styles.hint}>24-hour HH:MM Time</span>
          </div>
        </div>

        <div style={styles.timezone}>
          <div style={styles.timezoneSelector}>
            <select
              style={{
                textIndent: `0`,
                borderRadius: `5px`,
              }}
              className={classNameWrapper}
              onChange={this.setTz}
              value={this.state.tz}
            >
              {filteredTimezones.map((timezone) => (
                <option key={timezone.name} value={timezone.name}>
                  {timezone.currentTimeFormat}
                </option>
              ))}
            </select>
            <span style={styles.hint}>Select a Timezone</span>
          </div>
          <div style={styles.filter}>
            <select
              style={{
                textIndent: `0`,
                borderRadius: `5px`,
              }}
              className={classNameWrapper}
              onChange={this.setFilter}
              value={this.state.filter}
            >
              <option value="nofilter">Filter by Continent</option>
              {filteredContinents.map((continent) => (
                <option key={continent.continentCode} value={continent.continentCode}>
                  {continent.continentName}
                </option>
              ))}
            </select>
            <span style={styles.hint}>Filter Timezones</span>
          </div>
        </div>
      </div>
    )
  }
}

export default DateTimeZoneControl
