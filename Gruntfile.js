module.exports = function(grunt) {

  var bindir = 'bin/igweb';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bindir: 'bin/igweb',

    clean: {
      build: {
        src: ['bin/igweb']
      }
    },

    concat: {
      dnd4: {
        src: ['bin/igweb/js/dnd4/**/*.js'],
        dest: 'bin/igweb/js/dnd4data.js'
      },
    },

    copy: {
      web: {
        files: [
          {expand: true, cwd: 'src/igweb', src: ['**'], dest: 'bin/igweb'}
        ]
      },
    },

    jshint: {
      options: {
        jquery: true,
        sub: true
      },
      libs: [
        'src/igweb/js/*.js',
      ],
      dnd4: [
        'src/igweb/js/dnd4/**/*.js',
      ]
    },

    qunit: {
      files: ['bin/igweb/test/**/*.html']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('build', ['jshint:libs', 'copy', 'concat:dnd4']);
  grunt.registerTask('test',  ['qunit']);  

  grunt.registerTask('default', ['build', 'test']);
};
