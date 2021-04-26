# cp-netsmysql

###### Scripts:

-"build": Deletes existing 'dist' folder, runs "tsc" to build the project anew.
-"preserve": Creates a build and recompiles over the old version of 'dist' via "tsc".
-"serve": Uses cross-env to set NODE_ENV, concurrently run "tsc --watch" for watch mode to rebuild/live reload on a save.
-"prestart": Same as "preserve". Run this prior to "start".
-"start": Uses cross-env to set NODE_ENV, then runs "node dist/index.js" to run the pre-compiled code from running the "prestart" script.
-"test": Runs test suite.
