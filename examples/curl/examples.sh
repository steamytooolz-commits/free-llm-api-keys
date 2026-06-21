#!/bin/bash
# FreeLLMShare — cURL Examples.
# Usage: OPENAI_API_KEY="paste-your-key-here" ./examples.sh

: "${OPENAI_API_KEY:?Set OPENAI_API_KEY before running this example.}"

curl -s https://aiapiv2.pekpik.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{"model":"gpt-5.5","messages":[{"role":"user","content":"Hello!"}]}' | python3 -m json.tool
