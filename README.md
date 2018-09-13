# Isaac Oluwatemilorun (A personal portfolio)

> A personal portfolio of Isaac Oluwatemilorun. (PWA, Webpack, Vue)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### Tools used

• Vue.js
• Vuetify.js
• Webpack
• Service Workers

## Publishing

This portfolio makes use of [Vue Router](https://router.vuejs.org/) for Navigation, which makes use of HTML5 History Mode. For this project, I have configured the route mode to `history` to leverage the `history.pushState` API making the webpage a [SPA](https://msdn.microsoft.com/en-us/magazine/dn463786.aspx)

To prevent a 404 error if they access `http://temilorun.com/me/` directly in their browser, you need to do is add a simple catch-all fallback route to your server. 

### Apache
	<IfModule mod_rewrite.c>
		RewriteEngine On
		RewriteBase /
		RewriteRule ^index\.html$ - [L]
		RewriteCond %{REQUEST_FILENAME} !-f
		RewriteCond %{REQUEST_FILENAME} !-d
		RewriteRule . /index.html [L]
	</IfModule>
Instead of `mod_rewrite`, you could also use [`FallbackResource`](https://httpd.apache.org/docs/2.2/mod/mod_dir.html#fallbackresource)

### Nginx
	location / {
		try_files $uri $uri/ /index.html;
	}

For more configuration settings, check the [vue-router's doc](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)

## Caching

You should configure your web server to add HTTP headers to prevent caching of critical service worker files.
If you don't do this, [browsers might cache the content for up to 24 hours](https://stackoverflow.com/questions/38843970/service-worker-javascript-update-frequency-every-24-hours/38854905#38854905).

In addition, you should add HTTP headers to prevent the contents of the static folder to be cached unintentionally long.

### Apache: Disable all caching for the two essential files

    <Files index.html|service-worker.js>
    FileETag None
    Header unset ETag
    Header set Cache-Control "max-age=0, no-cache, no-store, must-revalidate"
    Header set Pragma "no-cache"
    Header set Expires "Wed, 11 Jan 1984 05:00:00 GMT"
    </Files>
    
### Apache: Limit caching to five minutes to all files to prevent unlimited caching also for files in static

    Header set Cache-Control "max-age=300, must-revalidate"
    
### Nginx: Limit caching for the two essential files

    location ~ (index.html|service-worker.js)$ {
      # ...
      add_header Last-Modified $date_gmt;
      add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
      if_modified_since off;
      expires off;
      etag off;
    }

## Other resources
> [The webpack guide](http://vuejs-templates.github.io/webpack/)

> [Docs for vue-loader](http://vuejs.github.io/vue-loader).

> [The Vue.js guide](http://vuejs.org/guide/)
