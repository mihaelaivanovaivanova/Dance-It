/* global SystemJS, System */

SystemJS.config({
    transpiler: 'plugin-babel',
    map: {

        'main': './../app.js',
        'router': './../config/sammy-config.js',

        'sammy': './../lib/scripts/sammy.js',
        'jquery': './../lib/scripts/jquery.min.js',
        'handlebars': './../lib/scripts/handlebars.js',

        'bootstrap': './../lib/scripts/bootstrap.min.js',
        'material': './../lib/scripts/material.min.js',
        'material-kit': './../lib/scripts/material-kit.js',

        'firebase': './../lib/scripts/firebase.js',
        'firebase-config': './../config/firebase-config.js',

        'movies-database': './../database/movies-database.js',
        'firebase-database': './../database/firebase-database.js',

        'html-handler': './../views/helpers/html-handler.js',
        'template-handler': './../views/helpers/template-handler.js',

        'user-controller': './../controllers/user-controller.js',
        'header-controller': './../controllers/header-controller.js',
        'group-controller': './../controllers/group-controller.js',
        'post-controller': './../controllers/post-controller.js',

        'user-model': './../models/user-model.js',
        'group-model': './../models/group-model.js',
        'post-model': './../models/post-model.js',
    },
});

System.import('main');
