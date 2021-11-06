#!/usr/bin/env bash

set -euo pipefail
IFS=$'\n\t'

########

readonly PARENT_DIR="$(dirname "${PWD}")"

########

main () {
  local FOLDERS=$(ls -1 ./lib)
  local OUT_FILE="deno/mod.ts"

  echo "" > ${OUT_FILE}

  for FOLDER in ${FOLDERS[@]}; do
    local FILES=$(ls -1 ./lib/${FOLDER})

    for FILE in ${FILES[@]}; do
      echo "export * from '../lib/${FOLDER}/${FILE}';" >> ${OUT_FILE}
    done
  done
}

main
