module.exports = function(grunt) {

  var bindir = 'bin/igweb';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bindir: 'bin/igweb',

    clean: {
      build: {
        src: ['<%= bindir %>']
      }
    },

    concat: {
      dnd4: {
        src: ['src/igweb/js/dnd4/**/*.js'],
        dest: '<%= bindir %>/js/dnd4data.js'
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
      rules: [
        'src/igweb/js/dnd4/**/*.js',
      ]
    },

    qunit: {
      files: ['src/igweb/test/**/*.html']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['jshint', 'concat:dnd4']);
  grunt.registerTask('test',  ['qunit']);  

  grunt.registerTask('default', ['build', 'test']);
};
