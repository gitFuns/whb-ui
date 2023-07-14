import path from 'path';
import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [path.join(__dirname, './src/whb-icon/svg')],
      symbolId: 'whbui-icon-[name]',
      customDomId: '__whbui_svg_icons_dom__',
      svgoOptions: {
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: 'fill',
            },
          },
        ],
      },
    }),
    svgLoader({
      defaultImport: 'component',
      svgoConfig: {
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: 'fill',
            },
          },
        ],
      },
    }),
  ],
});
