module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true,
      },
      sass: {
        files: ['src/sass/*.sass' , 'src/sass/includes/*.sass'],
        tasks: ['sass'],
      },
      jade: {
        files: ['src/jade/*.jade'],
        tasks: ['jade'],
      },
      uglify: {
        files: ['src/js/*.js'],
        tasks: ['uglify'],
      },
      postcss: {
        files: ['src/sass/*.sass'],
        tasks: ['postcss'],
      }
    },

    uglify: {
      build: {
        src: 'src/js/atop.js',
        dest:'dist/js/atop.min.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'dist/css/app.css': 'src/sass/app.sass',
        }
      }
    },
    postcss: {
      options: {
        map: false,
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
          require('cssnano')() // minify the result
          ]
        },
        dist: {
          src: 'dist/css/app.css'
        }
      },


      jade: {
        compile: {
          options: {
            data: {
              debug: false
            }
          },
          files: {
            "dist/index.html": ["src/jade/index.jade"],
            "dist/grid.html": ["src/jade/grid.jade"],
            "dist/svg.html": ["src/jade/svg.jade"],
            "dist/3qtr.html": ["src/jade/3qtr.jade"]
          }
        }
      }


    });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-uncss');
// Default task(s).
grunt.registerTask('default', ['uglify', 'sass', 'postcss','jade']);

};
