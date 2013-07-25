play-angular-test
=================

Sample project for [Play Framework] (http://www.playframework.com/) and [AngularJS] (http://angularjs.org/ ) integration with [Yeoman] (http://yeoman.io/), by using the [play-yeoman] (https://github.com/tuplejump/play-yeoman) plugin

Dependencies
------------

The following dependencies are expected (installation is for Mac OS X)

1. Play Framework

```brew install scala```

```brew install play```

2. Yeoman and dependencies

```brew install node```

```npm install -g yo```

```npm install -g generator-angular```




Running
-------

SBT prompt can do both Play and Yeoman commands. So for instance, from the Play command prompt, in order to create a new directive, you would run:

```yo angular:directive MyDirective```

Yeoman will then create the directive, reference it in the index.html file, update Grunt config file, etc. You can also use Bower to include new dependencies, for example to add angular-ui

```bower install angular-ui```

The application can be run from the Play prompt by issuing ```run```. With the livereoad plugin any file that is changed triggers a refresh on the browser upon saving.
