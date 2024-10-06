// vite.config.js
import { defineConfig } from "file:///D:/User/Desktop/moon-like/node_modules/vite/dist/node/index.js";
import { ViteEjsPlugin } from "file:///D:/User/Desktop/moon-like/node_modules/vite-plugin-ejs/index.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { glob } from "file:///D:/User/Desktop/moon-like/node_modules/glob/dist/mjs/index.js";
import liveReload from "file:///D:/User/Desktop/moon-like/node_modules/vite-plugin-live-reload/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/User/Desktop/moon-like/vite.config.js";
function moveOutputPlugin() {
  return {
    name: "move-output",
    enforce: "post",
    apply: "build",
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith("pages/")) {
          const newFileName = fileName.slice("pages/".length);
          bundle[fileName].fileName = newFileName;
        }
      }
    }
  };
}
var vite_config_default = defineConfig({
  // base 的寫法：
  // base: '/Repository 的名稱/'
  base: "/moon-like/",
  plugins: [
    liveReload(["./layout/**/*.ejs", "./pages/**/*.ejs", "./pages/**/*.html"]),
    ViteEjsPlugin(),
    moveOutputPlugin()
  ],
  server: {
    // 啟動 server 時預設開啟的頁面
    open: "pages/index.html"
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync("pages/**/*.html").map((file) => [
          path.relative("pages", file.slice(0, file.length - path.extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      )
    },
    outDir: "dist"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxVc2VyXFxcXERlc2t0b3BcXFxcbW9vbi1saWtlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxVc2VyXFxcXERlc2t0b3BcXFxcbW9vbi1saWtlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Vc2VyL0Rlc2t0b3AvbW9vbi1saWtlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB7IFZpdGVFanNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1lanMnO1xyXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xyXG5pbXBvcnQgeyBnbG9iIH0gZnJvbSAnZ2xvYic7XHJcblxyXG5pbXBvcnQgbGl2ZVJlbG9hZCBmcm9tICd2aXRlLXBsdWdpbi1saXZlLXJlbG9hZCc7XHJcblxyXG5mdW5jdGlvbiBtb3ZlT3V0cHV0UGx1Z2luKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiAnbW92ZS1vdXRwdXQnLFxyXG4gICAgZW5mb3JjZTogJ3Bvc3QnLFxyXG4gICAgYXBwbHk6ICdidWlsZCcsXHJcbiAgICBhc3luYyBnZW5lcmF0ZUJ1bmRsZShvcHRpb25zLCBidW5kbGUpIHtcclxuICAgICAgZm9yIChjb25zdCBmaWxlTmFtZSBpbiBidW5kbGUpIHtcclxuICAgICAgICBpZiAoZmlsZU5hbWUuc3RhcnRzV2l0aCgncGFnZXMvJykpIHtcclxuICAgICAgICAgIGNvbnN0IG5ld0ZpbGVOYW1lID0gZmlsZU5hbWUuc2xpY2UoJ3BhZ2VzLycubGVuZ3RoKTtcclxuICAgICAgICAgIGJ1bmRsZVtmaWxlTmFtZV0uZmlsZU5hbWUgPSBuZXdGaWxlTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAvLyBiYXNlIFx1NzY4NFx1NUJFQlx1NkNENVx1RkYxQVxyXG4gIC8vIGJhc2U6ICcvUmVwb3NpdG9yeSBcdTc2ODRcdTU0MERcdTdBMzEvJ1xyXG4gIGJhc2U6ICcvbW9vbi1saWtlLycsXHJcbiAgcGx1Z2luczogW1xyXG4gICAgbGl2ZVJlbG9hZChbJy4vbGF5b3V0LyoqLyouZWpzJywgJy4vcGFnZXMvKiovKi5lanMnLCAnLi9wYWdlcy8qKi8qLmh0bWwnXSksXHJcbiAgICBWaXRlRWpzUGx1Z2luKCksXHJcbiAgICBtb3ZlT3V0cHV0UGx1Z2luKCksXHJcbiAgXSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIC8vIFx1NTU1Rlx1NTJENSBzZXJ2ZXIgXHU2NjQyXHU5ODEwXHU4QTJEXHU5NThCXHU1NTVGXHU3Njg0XHU5ODAxXHU5NzYyXHJcbiAgICBvcGVuOiAncGFnZXMvaW5kZXguaHRtbCcsXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDogT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICAgIGdsb2JcclxuICAgICAgICAgIC5zeW5jKCdwYWdlcy8qKi8qLmh0bWwnKVxyXG4gICAgICAgICAgLm1hcCgoZmlsZSkgPT4gW1xyXG4gICAgICAgICAgICBwYXRoLnJlbGF0aXZlKCdwYWdlcycsIGZpbGUuc2xpY2UoMCwgZmlsZS5sZW5ndGggLSBwYXRoLmV4dG5hbWUoZmlsZSkubGVuZ3RoKSksXHJcbiAgICAgICAgICAgIGZpbGVVUkxUb1BhdGgobmV3IFVSTChmaWxlLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgICAgICAgIF0pXHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gICAgb3V0RGlyOiAnZGlzdCcsXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVEsU0FBUyxvQkFBb0I7QUFDbFMsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsWUFBWTtBQUVyQixPQUFPLGdCQUFnQjtBQU4wSSxJQUFNLDJDQUEyQztBQVFsTixTQUFTLG1CQUFtQjtBQUMxQixTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxNQUFNLGVBQWUsU0FBUyxRQUFRO0FBQ3BDLGlCQUFXLFlBQVksUUFBUTtBQUM3QixZQUFJLFNBQVMsV0FBVyxRQUFRLEdBQUc7QUFDakMsZ0JBQU0sY0FBYyxTQUFTLE1BQU0sU0FBUyxNQUFNO0FBQ2xELGlCQUFPLFFBQVEsRUFBRSxXQUFXO0FBQUEsUUFDOUI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBO0FBQUE7QUFBQSxFQUcxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxXQUFXLENBQUMscUJBQXFCLG9CQUFvQixtQkFBbUIsQ0FBQztBQUFBLElBQ3pFLGNBQWM7QUFBQSxJQUNkLGlCQUFpQjtBQUFBLEVBQ25CO0FBQUEsRUFDQSxRQUFRO0FBQUE7QUFBQSxJQUVOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixPQUFPLE9BQU87QUFBQSxRQUNaLEtBQ0csS0FBSyxpQkFBaUIsRUFDdEIsSUFBSSxDQUFDLFNBQVM7QUFBQSxVQUNiLEtBQUssU0FBUyxTQUFTLEtBQUssTUFBTSxHQUFHLEtBQUssU0FBUyxLQUFLLFFBQVEsSUFBSSxFQUFFLE1BQU0sQ0FBQztBQUFBLFVBQzdFLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLFFBQzlDLENBQUM7QUFBQSxNQUNMO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLEVBQ1Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
