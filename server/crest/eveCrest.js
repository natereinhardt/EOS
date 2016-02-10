'use strict';

var request = require('request');
//require('request').debug = true;

//var baseURl = 'https://public-crest.eveonline.com';
//var crestMarketHistory = '/market/10000002/types/34/history/';

var crestMarketHistoryFull = 'https://public-crest.eveonline.com/market/10000002/orders/buy/?type=https://public-crest.eveonline.com/types/40/';

//var eveCentralBaseMarketStat = 'http://api.eve-central.com/api/marketstat/json?typeid=34&typeid=35&typeid=36&typeid=37&typeid=38&typeid=39&regionlimit=10000002';

exports.getSearchResults = function (req, res) {
    request.get(crestMarketHistoryFull , function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.type('application/json');
            res.json(JSON.parse(body));
        } else {
            console.error(error);
        }
    });
};