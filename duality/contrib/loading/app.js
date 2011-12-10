/**
 * Values exported from this module will automatically be used to generate
 * the design doc pushed to CouchDB.
 */

var events = require('duality/events'),
    isAfterResponse = false,
    timeout = 300;

events.on('init', function () {

    var div = $('<div id="duality-contrib-loading">Loading...</div>');
    div.hide();
    div.appendTo('body');

    events.on('afterResponse', function () {
        isAfterResponse = true;
        div.slideUp();
    });

    events.on('beforeResource', function () {
        // only show loading message after the timeout
        isAfterResponse = false;
        setTimeout(function () {
            if (!isAfterResponse) {
                div.slideDown();
            }
        }, timeout);
    });

});
