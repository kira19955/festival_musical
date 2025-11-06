import {src, dest, watch, series}from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export function js(done){

    src('src/js/app.js')
    .pipe(dest('dist/js'))

    done()
}

export function css(done){

    src('src/scss/app.scss', {sourcemaps:true})
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist/css'), {sourcemaps:true})

    done()
}

export function dev(){
    //watch('src/scss/app.scss',css)  //un archivo en especifico 
    watch('src/scss/**/*.scss',css) //le decimos para que compile todos los archivos de scss 
    watch('src/js/**/*.js',js) //le decimos para que compile todos los archivos de scss 
}

export default series(js,css,dev)