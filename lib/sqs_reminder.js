/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var AWS = require('aws-sdk')

module.exports = function (log) {

  function SQSReminder(region) {
    this.sqs = new AWS.SQS({ region : region })
  }

  SQSReminder.prototype.enqueue = function (options) {
    options = options || {}
    // TODO
  }

  return SQSReminder
}
