
# Front End Task

Front end task completed for CMO Group. The project is a static webpage with the injection of Vue components. 

Parcel web bundler was chosen over Webpack or Vite due to the light touch of this project
and the lack of need for advanced customisation although Parcel can offer the majority of this.

Main.scss imports what is needed globally and any other customisation is done on the component for performance reasons as well as the idea of self containing components to avoid conflicts.

No SCSS mixins are being used to avoid complicating the project as it is so small but I would recommend a SCSS PX to REM mixin to help with calculations. This mixin should include a variable pointer to the base font size normally 16px.

SVG icon is used from Bootstrap icons. No Bootstrap Icons dependancy is installed due to the usage of only 1 icon.

.parcelrc file being used to handle static assets that have the url abbreviation. This is where alias and general config settings should be set.


## Run Locally

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run serve
```

Build for production

```bash
  npm run build
```

