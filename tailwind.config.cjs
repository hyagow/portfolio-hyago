/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    // Primary color / gradients
    'text-sky-400',
    'bg-gradient-to-r',
    'from-sky-500',
    'to-cyan-400',
    'from-purple-600',
    'to-indigo-500',
    
    // Borders
    'border-gray-700',
    'border-gray-800',
    'border-sky-700',
    
    // Backgrounds
    'bg-gray-950',
    'bg-gray-900',
    'bg-gray-800',
    'bg-sky-500',
    'bg-purple-500',
    'bg-green-500',
    
    // Text / hover
    'text-white',
    'text-gray-100',
    'text-gray-300',
    'text-gray-400',
    'text-gray-200',
    'text-purple-400',
    'text-green-400',
    'text-lime-400',
    'text-indigo-400',
    'text-blue-400',
    'text-yellow-400',
    'hover:text-white',
    'hover:text-sky-400',
    
    // Shadow
    'shadow-xl',
    'shadow-2xl',
    'shadow-md',
    'shadow-lg',
    'shadow-sky-500/50',
    'shadow-sky-500/30',
    'shadow-purple-500/30',
    'shadow-inner',
    'shadow-gray-700/20',
    
    // Hover effects / transform
    'hover:scale-[1.02]',
    'hover:scale-[1.03]',
    'hover:scale-[1.05]',
    'hover:scale-105',
    'hover:bg-opacity-0',
    'group-hover:text-sky-400',
    'group-hover:bg-sky-900/40',
    'group-hover:rotate-6',
    'animate-blob',
    'animation-delay-2000',
    
    // Opacity
    'opacity-10',
    'opacity-20',
    'opacity-25',
    'opacity-75',
    
    // Misc / spacing
    'rounded-xl',
    'rounded-2xl',
    'rounded-3xl',
    'rounded-full',
    'p-1',
    'p-3',
    'p-4',
    'p-6',
    'p-8',
    'px-3',
    'px-6',
    'py-1',
    'py-3',
    'text-sm',
    'text-xl',
    'text-2xl',
    'text-4xl',
    'text-5xl',
    'text-7xl',
    'font-medium',
    'font-semibold',
    'font-bold',
    'font-extrabold',
    'leading-tight',
    'leading-relaxed',
    'tracking-widest',
  ],
}
