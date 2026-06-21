"""FreeLLMShare — Basic Chat Example.

Usage:
    pip install openai
    export OPENAI_API_KEY="paste-your-key-here"
    python chat.py
"""
import os

from openai import OpenAI

api_key = os.environ.get("OPENAI_API_KEY")
if not api_key:
    raise SystemExit("Set OPENAI_API_KEY before running this example.")

client = OpenAI(base_url="https://aiapiv2.pekpik.com/v1", api_key=api_key)
response = client.chat.completions.create(
    model="gpt-5.5",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)
