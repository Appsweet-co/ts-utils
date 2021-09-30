#!/usr/bin/env bash

set -euo pipefail
IFS=$'\n\t'

########

readonly PARENT_DIR="$(dirname "${PWD}")"

########

main () {
  local FILES=$(ls -1 ./lib)
  local OUT_FILE="index.ts"

  echo "" > ${OUT_FILE}

  for FILE in ${FILES[@]}; do
    echo "export * from './lib/${FILE/\.ts/}';" >> ${OUT_FILE}
  done
}

main
