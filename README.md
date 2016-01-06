## Jekyll with a splash of Gulp.
> Jekyll is great but if you want, or need, to avoid its plugin world (for example you're planning on using Github Pages) you're not left to do things like minify javascript or compress images. This gives you a simple build system as a starting point to go wherever you need to get to.

### What makes this useful?
This tool uses `exclude` to exclude specific directories from the Jekyll build system. By default:
 - `css`
 - `js`
 - `_sass`
 - `assets`

_Jekyll doesn't automatically add `js` and `assets` directories but I'm making the assumption you will
so I'm adding them to save you a little work_

This tool also uses `keep_files` to keep Jekyll from wiping out directories in the `_site` directory when
it rebuilds.

Example of this in the `_config.yaml` file:

```
exclude: ["assets", "css", "_sass", "js"]
keep_files: ["assets", "css", "js"]
```

## Usage

```
$ gulp
```

On the command line, this runs the default gulp task in gulpfile.js which creates the initial build. After that, `browserSync` handles the rest with live reloading when you modify files. All but the `asset` directory are live reloaded.

## License
MIT &copy; [Chris Sciolla](https://twitter.com/csciolla)
