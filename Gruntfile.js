"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    less: {
      style: {
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")({browsers: [
              "last 1 version",
              "last 2 Chrome versions",
              "last 2 Firefox versions",
              "last 2 Opera versions",
              "last 2 Edge versions"
            ]}),
            require("css-mqpacker")({
              sort: true
            })
          ]
        },
        src: "css/*.css"
      }
    },

    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "css/style.min.css": ["css/style.css"]
        }
      }
    },

    svgstore: {
      options: {
        svg: {
          style: "display: none"
        }
      },
      symbols: {
        files: {
          "img/symbols.svg": ["img/icons/*.svg"]
        }
      }
    },

    svgmin: {
      symbols: {
        files: [{
          expand: true,
          src: ["img/sv"]
        }]
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["img/**/*.{png, jpg, gif}"]
        }]
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
          "*.html",
          "css/*.css"
          ]
        },
        options: {
          server: ".",
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },

    watch: {
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss"],
        options: {
          spawn: false
        }
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            "fonts/**/*.{woff,woff2}",
            "img/**",
            "js/**",
            "*.html"
          ],
          dest: "build"
        }]
      }
    },

    clean: {
      build: ["build"]
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("symbols", ["svgmin", "svgstore"]);

  grunt.registerTask("build", [
    "clean",
    "copy",
    "less",
    "postcss",
    "csso",
    "symbols",
    "imagemin"
  ])
};
