#!/usr/bin/env bash

echo "┏━━━ 🕵️‍♀️ LINT: eslint src --ext ts,js,tsx,jsx ━━━━━━━"
# it is also okay to use 'yarn lerna ..'
lerna run lint --stream --parallel