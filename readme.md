## Setup:

```
npm install
```

## Local development:

### Start client webpack watcher/builder:

```
npm run vendor // build the initial vendor dll
npm run dev
```

### Start the server to host the site:

```
npm run server
```

Then go to http://localhost:8080 to view the site.

## Build/bundle for production:

```
npm run build
```

## Run on production:

```
pm2 start server/app.js
```