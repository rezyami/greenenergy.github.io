// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        animation: {
          'bounce-up': 'bounceUp 1s ease-in-out infinite', // Create the custom animation
        },
        keyframes: {
          bounceUp: {
            '0%': { transform: 'translateY(100%)' }, // Start at bottom
            '100%': { transform: 'translateY(0%)' }, // End at top (original position)
          },
        },
      },
    },
    plugins: [],
  };
  