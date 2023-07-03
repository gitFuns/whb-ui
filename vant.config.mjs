import svgLoader from "vite-svg-loader";

export default {
  name: 'whb-ui',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/whb-ui/',
    },
    configureVite(config) {
      config.server.port = 3000;

      config.plugins.push(svgLoader({
        defaultImport: "component",
        svgoConfig: {
          plugins: [
            {
              name: "removeAttrs",
              params: {
                attrs: "fill",
              },
            },
          ],
        },
      }),);

      return config;
    },
  },
  site: {
    title: 'whb-ui',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'whb-button',
            title: 'Button',
          },
          {
            path: 'whb-icon',
            title: 'Icon',
          },
        ],
      },
    ],
  },
};
