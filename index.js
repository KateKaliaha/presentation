import Reveal from './node_modules/reveal.js/dist/reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

let deck = new Reveal({
   plugins: [ Markdown ]
})
deck.initialize();