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

const convertArrayToObject = (array) => {
    if (!array.length) return {};
    return Object.assign(...array.map((k) => ({ [k]: true })));
};

const mqPlugin = {
    install: (app, options = DEFAULT_BREAKPOINTS) => {
        window.addEventListener("resize", onWidthChange);
        app.mixin({
            computed: {
                $mq() {
                    const keys = Object.keys(options);
                    const mq = keys.find((key) => windowWidth.value < options[key]);
                    const minMq = keys.filter((key) => windowWidth.value > options[key]);
                    const maxMq = keys.filter((key) => windowWidth.value < options[key]);
                    return {
                        min: {
                            ...convertArrayToObject(minMq),
                            [mq]: true,
                        },
                        max: {
                            ...convertArrayToObject(maxMq),
                            [mq]: true,
                        },
                        [mq]: true,
                    };
                },
            },
        });
    },
};

export default mqPlugin;
