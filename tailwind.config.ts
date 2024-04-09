import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            boxShadow: {
                icon: "1px 1px 8px 0px #5554D929",
                icon2: "-1px -1px 8px 0px #5554D929"
                
            },
            fontFamily: {
                Lato: ["Lato", "sans-serif"],
                mdi:"Material Design Icons"
            },
            colors: {
                primary: {
                    DEFAULT: '#0D0F11',
                    50: '#5D6B79',
                    100: '#54616D',
                    200: '#424C56',
                    300: '#30383F',
                    400: '#1F2328',
                    500: '#0D0F11',
                    600: '#000000',
                    700: '#000000',
                    800: '#000000',
                    900: '#000000',
                    950: '#000000'
                },
                secondary: {
                    DEFAULT: '#007AFF',
                    50: '#B8DAFF',
                    100: '#A3CFFF',
                    200: '#7ABAFF',
                    300: '#52A5FF',
                    400: '#298FFF',
                    500: '#007AFF',
                    600: '#005FC7',
                    700: '#00448F',
                    800: '#002957',
                    900: '#000F1F',
                    950: '#000103'
                },
                bg1: "#0D0F11",
                bg2: "#191D23",
                bg3: "#13161A",
                aaa: "#AAAAAA",
                eee: "#EEEEEE",
                ccc: "#CCCCCC",
                project: "#5554D9"
                // secondary:{
                //   DEFAULT: '#191D23',
                //   50: '#66768E',
                //   100: '#5D6C82',
                //   200: '#4C586A',
                //   300: '#3B4453',
                //   400: '#2A313B',
                //   500: '#191D23',
                //   600: '#020202',
                //   700: '#000000',
                //   800: '#000000',
                //   900: '#000000',
                //   950: '#000000'
                // },
            }
        },
    },
    plugins: [],
};
export default config;
