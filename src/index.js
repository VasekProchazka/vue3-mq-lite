import { ref } from "vue";

const DEFAULT_BREAKPOINTS = {
    sm: 450,
    md: 1250,
    lg: Infinity,
};

let windowWidth = ref(window.innerWidth);

const onWidthChange = () => {
    windowWidth.value = window.innerWidth;
};

const mqPlugin = {
    install: (app, options = DEFAULT_BREAKPOINTS) => {
        window.addEventListener("resize", onWidthChange);
        app.mixin({
            computed: {
                $mq() {
                    const mq = Object.keys(options).find((key) => windowWidth.value < options[key]);
                    return { [mq]: true };
                },
            },
        });
    },
};

export default mqPlugin;

