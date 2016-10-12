"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    less: {
      style: {
        files: {
          "build/css/style.css": "less/style.less"
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
        src: "build/css/*.css"
      }
    },

    // csso: {
    //   style: {
    //     options: {
    //       report: "gzip"
    //     },
    //     files: {
    //       "build/css/style.min.css": ["build/css/style.css"]
    //     }
    //   }
    // },

    cssnano: {
      options: {
          sourcemap: true
        },
      dist: {
        files: {
          "build/css/style.min.css": "build/css/style.css"
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
          "build/img/svg/symbols.svg": ["img/svg/*.svg"]
        }
      }
    },

    svgmin: {
      symbols: {
        files: [{
          expand: true,
          src: ["build/img/svg/*.svg"]
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
          src: ["build/img/**/*.{png, jpg, gif}"]
        }]
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
          "build/*.html",
          "build/css/*.css"
          ]
        },
        options: {
          server: "build",
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },

    watch: {
      html: {
        files: ["*.html"],
        tasks: ["copy:html"]
      },

      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss", "cssnano"],
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
      },

      html: {
        files: [{
          expand: true,
          src: ["*.html"],
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
    // "csso",
    "cssnano",
    "symbols",
    "imagemin"
  ])
};
