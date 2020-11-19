'use strict';
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'element-matches-polyfill';


import countTimer from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";
import togglePopup from "./modules/togglePopup";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import command from "./modules/command";
import sendForm from "./modules/sendForm";

//Timer
countTimer('20 november 2020');
// menu
toggleMenu();
// popup
togglePopup();
// tabs
tabs();
// slider
slider();
//calculator
calc(100);
// command
command();
// send-ajax-form
sendForm();