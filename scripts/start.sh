#!/bin/sh

set -e

main_folder="$(dirname "$(dirname "$(realpath $0)")")"
bundle exec jekyll clean

bundle exec jekyll serve --livereload --drafts --incremental --config $main_folder/_config.yml,$main_folder/_dev.yml
