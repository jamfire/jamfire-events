/** @license Netlify CMS Widget DateTimeZone v0.9.0
 * main.js
 *
 * Copyright (c) Kaleb Heitzman
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DateTimeZoneControl from "./DateTimeZoneControl"
import DateTimeZonePreview from "./DateTimeZonePreview"

if (typeof window !== `undefined`) {
  window.DateTimeZoneControl = DateTimeZoneControl
  window.DateTimeZonePreview = DateTimeZonePreview
}

export { DateTimeZoneControl, DateTimeZonePreview }
