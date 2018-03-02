gae-init-vue

## Requirements

* [Google App Engine SDK for Python][]
* [Node.js][], [pip][], [virtualenv][]
* [macOS][] or [Linux][] or [Windows][]

Make sure you have all of the above or refer to the docs on how to [install the requirements](http://docs.gae-init.appspot.com/requirement/).

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Running the Backend Development Environment
-------------------------------------------
In a dedicated terminal start your python appengine server, to serve the API.

```bash
$ cd /path/to/project-name/backend
$ npm install
# If you run it on a different port, change frontend/config/index.js accordingly
$ gulp -p 3000
```

To test it visit `http://localhost:3000/api/v1/test/` in your browser.

---

Running the Frontend Development Environment
--------------------------------------------
> There is a major change in the way we develop our frontend. The file that we
will be working with is served from webpack port `:8080` and not from our
flask which responds at port `:3000`. During development the calls on `:8080` are
getting proxied to `:3000`. The configuration is at `frontend/config/index.js`.

In another terminal start your front end development.
``` bash
$ cd /path/to/project-name/frontend

# install dependencies, this is needed only the first time
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

# the production build will be automatically executed when deploy and
# will be created at backend/main/static/dist/
# --report shows bundle analyzer report, and can be omitted
$ npm run build --report
```

When you start the dev server `http://localhost:8080` will open in your browser to test the application.
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Deploying Production build on Google App Engine
-----------------------------------------------
> The production build of the frontend is generated at `backend/main/static/dist`,
and the necessary `HTML` templates are automatically generated at `backend/main/templates/vue`.
(These files do not need to be commited to source control, only to be deployed)

```bash
$ cd /path/to/project-name/backend
$ gulp deploy --project=foo --version=bar
```

After the build you can test production build by starting the backend server
and visit http://localhost:3000

[google app engine sdk for python]: https://developers.google.com/appengine/downloads
[linux]: http://www.ubuntu.com
[macos]: http://www.apple.com/macos/
[node.js]: http://nodejs.org/
[pip]: http://www.pip-installer.org/
[virtualenv]: http://www.virtualenv.org/
[windows]: http://windows.microsoft.com/
