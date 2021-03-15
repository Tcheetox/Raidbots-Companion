#!/bin/bash

build() {
    echo 'building react'

    rm -rf dist/*

    export INLINE_RUNTIME_CHUNK=false
    export GENERATE_SOURCEMAP=false

    react-scripts build

    mkdir -p dist
    cp -r build/* dist

    mv dist/index.html dist/popup.html
    rm dist/manifest.json
    cp dist/foxifest.json dist/manifest.json
    rm dist/foxifest.json
    cd dist/
    C:/Windows/System32/tar.exe -a -c -f C:/Users/kevin/PartialSync/raidbots-extension/distZip/RaidBots-Fox-Extension.zip *
    #read
}

build