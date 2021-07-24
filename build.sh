#!/bin/bash

build() {
    echo 'building react'

    rm -rf dist/*

    export INLINE_RUNTIME_CHUNK=false
    export GENERATE_SOURCEMAP=false

    react-scripts build

    mkdir -p dist
    mkdir -p distZip
    cp -r build/* dist

    rm dist/manifest.json
    cp public/foxifest.json dist/manifest.json
    cd dist/
    C:/Windows/System32/tar.exe -a -c -f C:/Users/kevin/PartialSync/raidbots-extension/distZip/RaidBots-Fox-Extension.zip *

    cd  ..
    rm dist/manifest.json
    cp public/manifest.json dist/manifest.json
    cd dist/
    C:/Windows/System32/tar.exe -a -c -f C:/Users/kevin/PartialSync/raidbots-extension/distZip/RaidBots-Chrome-Extension.zip *

    #read
}

build