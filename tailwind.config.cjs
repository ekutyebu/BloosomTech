module.exports = {
    content: [
        './index.html',
        './**/*.{ts,tsx,js,jsx,html}'
    ],
    theme: {
        extend: {
            colors: {
                blossom: '#FDF2F8',
                roseGold: '#FB7185',
                magenta: '#BE185D',
                charcoal: '#374151'
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif']
            }
        }
    },
    plugins: []
};
