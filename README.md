MyPage
======


Summary:
--------

  This application is a sandbox for meteor.js package development.


Package being development:
--------------------------

  Package fullscreen is a meteor package based on Riccardo Caroli's writeup
  found at:
  [minimit article](http://www.minimit.com/articles/lets-animate/parallax-backgrounds-with-centered-content).
  I've made some modifications to the code and am attempting to package it for
  meteor. Any help will be greatly appreciated. Thank you in advance :)

Known issues:
-------------

1. Meteor is currently throwing:
        Error invoking Method 'fullscreen': Method not found [404]
However, method fullscreen is being executed properly.

2. Meteor method fullscreen found at:
        packages/eokeefe:fullscreen/lib/src/eokeefe:helper.js
Currently only works when it is called with the template that requires it. This makes package 'fullscreen' not self contained. I need to find away to call fullscreen when it's needed internally.
