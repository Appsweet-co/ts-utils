#!/usr/bin/env bash

set -euo pipefail
IFS=$'\n\t'

########

readonly PARENT_DIR="$(dirname "${PWD}")"

########

main () {
  local DIR="${PWD}/lib/${1}"

  [[ -d "${DIR}" ]] && echo "[ERROR] => ${1}/ already exists." && exit 1

  mkdir -p ${DIR} \
    && touch "${DIR}/index.ts" \
    && echo "export * from './lib/${1}';" >> ./index.ts
}

main "${@}"
