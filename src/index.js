import 'bootstrap';
import 'han-css';
import 'marked';
import hljs from 'highlight.js';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import '../assets/sass/style.scss';
import "highlight.js/styles/github.css";

var marked = require('marked');
marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    },
  });
var article_elem = document.getElementById("marked-article");

var s = document.getElementById("marked-src").innerHTML;
article_elem.innerHTML = marked(s);

var Han = require( 'han-css' )
Han().render()
