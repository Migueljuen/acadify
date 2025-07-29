// tailwind.config.js
export default {
    theme: {
        extend: {
            fontFamily: {
                display: ['Bricolage Grotesque', 'sans-serif'],
                secondary: ['Poppins', 'sans-serif'],
            },

            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },

            animation: {
                float: 'float 3s ease-in-out infinite',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}
