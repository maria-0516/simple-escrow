#!/bin/bash

build() {
    echo 'building react'
    rm -rf ../deploy/scan/build
    export INLINE_RUNTIME_CHUNK=false
    export GENERATE_SOURCEMAP=false

    react-scripts build
    mv build ../deploy/scan/build
}

build
exit 1