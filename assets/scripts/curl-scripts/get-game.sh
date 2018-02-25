#!/bin/bash

# sh assets/scripts/curl-scripts/get-game.sh

curl "http://tic-tac-toe.wdibos.com/games/${ID}" \
    --include \
    --request GET \
    --header "Content-Type: application/json" \
    --header "Authorization: Token token=${TOKEN}" \

echo
