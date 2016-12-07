## Jekyll with a splash of Gulp for Github Pages.
> Jekyll is great for static site generation. But since we're not allowed to use Jekyll plugins, we're not left with many options to do things like minify javascript or compress images if we choose to. This gives you a simple build system as a starting point to go wherever you need to get to.

### What makes this useful?
This tool uses one simple approach to make sure your assets are where they need to be for build time, whether locally, or on your `gh-pages` branch. Jekyll functions as normal and copies the appropriate directories over during a build. The `gulp.watch` tasks injects the `css` and `js`, when files are saved, into both their respective `_site` and `root` directories to take advantage of live reloading, as well as make sure the updated code is present when Jekyll rebuilds. This assures that code is in the right place when you're pushing to Github Pages.

## Setup

There is one mandatory step to get this working from development to production. The main reason is the sitemap generator. In order to create a sitemap with the correct url, we need to add it to our gulpfile.

You **must** add your website url to the `buildVars` variable on line 32 in `gulpfile.js`:

```
buildVars.url = ''; // Add your production url
```

## Usage

**Development Build**

```
$ gulp run
```

**Production Build**

```
$ JEKYLL_ENV=PROD gulp build
```

The reason we set `JEKYLL_ENV=PROD` is to tell the build system we want to use our production url and we want to minify all our files. YAY!

All but the `assets` directory are live reloaded.

When you're ready to push production ready code, run `gulp build`, commit everything, and then push to your `gh-pages` branch.

## License
MIT &copy; [Chris Sciolla](https://twitter.com/csciolla)
