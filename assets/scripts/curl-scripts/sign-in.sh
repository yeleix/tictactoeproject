#!/bin/bash

# sh assets/scripts/curl-scripts/sign-in.sh

curl "http://tic-tac-toe.wdibos.com/sign-in" \
    --include \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
      "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'"
      }
    }'

echo
