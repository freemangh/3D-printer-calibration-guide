#!/usr/bin/env sh

set -e

vue build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:pavver/3D-printer-calibration-guide.git master:gh-pages

cd -