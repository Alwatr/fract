import plugin from 'tailwindcss/plugin.js';

export const rtlDirectionPlugin = plugin(({addVariant}) => {
  addVariant('rtl2', ['[dir="rtl"] &', '&[dir="rtl"]'])
});
