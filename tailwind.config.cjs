/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                black: "#17171B",
                white: "#FFFFFF",
            },
            fontFamily: {
                sans: ["Poppins"],
                display: ["Poppins"],
                body: ["Poppins"]
            },
            screens: {
                "tiny": "480px",
                "micro": "360px"
            }
        }
    },
    plugins: []
}
