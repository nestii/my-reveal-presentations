import Reveal from 'reveal';

Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    overview: true,
    touch: true,
    theme: window.Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: 'linear' // default/cube/page/concave/zoom/linear/fade/none
});

export default Reveal;
