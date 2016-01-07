## Jekyll with a splash of Gulp for Github Pages.
> Jekyll is great for static site generation. But since we're not allowed to use Jekyll plugins, we're not left with many options to do things like minify javascript or compress images if we choose to. This gives you a simple build system as a starting point to go wherever you need to get to.

### What makes this useful?
This tool uses one simple approach to make sure your assets are where they need to be for build time, whether locally, or on your `gh-pages` branch. Jekyll functions as normal and copies the appropriate directories over during a build. The `gulp` watch tasks injects the `css` and `js`, when files are saved, into both their respective `_site` and `root` directories to take advantage of live reloading, as well as make sure the updated code is present when Jekyll rebuilds. This assures that code is in the right place when you're pushing to Github Pages.

## Usage

```
$ gulp
```

On the command line, this runs the default gulp task in gulpfile.js which creates the initial build. After that, `browserSync` handles the rest with live reloading when you modify files. All but the `assets` directory are live reloaded.

## License
MIT &copy; [Chris Sciolla](https://twitter.com/csciolla)
