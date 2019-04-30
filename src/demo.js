import 'bootstrap';
import 'han-css';
import 'marked';
import hljs from 'highlight.js';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import '../assets/sass/style.scss';
import "highlight.js/styles/solarized-dark.css";

var Han = require('han-css');
Han(document.body).render()