
import '../assets/index.scss';	//style sheet
import 'babel-polyfill';		//pollyfill for latest features

import defaultRoute from './route/routes';

angular.module('WhoWhatWhere', ['ui.router', 'angular-loading-bar', 'ngAnimate'])
    .config(defaultRoute);