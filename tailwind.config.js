module.exports = {
    theme: {
      extend: {
        colors: {
          gold: '#FFD700',
          'gray-600': '#353535',
        },
        keyframes: {
          pulse: {
            '0%, 100%': { transform: 'scale(1)', opacity: 1 },
            '50%': { transform: 'scale(1.05)', opacity: 0.7 },
          },
        },
        animation: {
          pulse: 'pulse 1.5s infinite',
        },
      },
    },
    variants: {},
    plugins: [],
  }
  