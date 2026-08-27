import re
import os

# Read the HTML file
html_path = r"C:\Users\ADMIN\Desktop\The Backstory Media\index.html"
with open(html_path, "r", encoding="utf-8") as f:
    html_content = f.read()

# Extract body content (between <body> and </body>)
body_match = re.search(r"<body[^>]*>(.*?)</body>", html_content, re.DOTALL | re.IGNORECASE)
if body_match:
    body_content = body_match.group(1)
else:
    body_content = html_content

# Basic JSX conversions
# 1. class to className
jsx_content = re.sub(r'\bclass=', 'className=', body_content)

# 2. Fix self-closing tags (img, input, hr, br, source, path)
tags_to_close = ['img', 'input', 'hr', 'br', 'source']
for tag in tags_to_close:
    # Match tag that doesn't end with />
    jsx_content = re.sub(rf'(<{tag}[^>]*?)(?<!/)>', r'\1 />', jsx_content, flags=re.IGNORECASE)

# Special handling for inline styles (convert style="x: y" to style={{x: 'y'}})
# This is complex for regex, so we'll just remove complex inline styles or try a simple replace for now.
# E.g. style="display: none;" -> style={{ display: 'none' }}
jsx_content = re.sub(r'style="([^"]+)"', r'style={{ /* \1 */ }}', jsx_content)

# Remove script tags from body for now (we will add them in layout.tsx or useEffect)
jsx_content = re.sub(r'<script\b[^>]*>.*?</script>', '', jsx_content, flags=re.DOTALL | re.IGNORECASE)
jsx_content = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', jsx_content, flags=re.DOTALL)

# Remove svg tag unclosed issue if any, or just let it be.
# Replace stroke-width to strokeWidth, stroke-miterlimit to strokeMiterlimit, stroke-linecap to strokeLinecap
jsx_content = jsx_content.replace('stroke-width', 'strokeWidth')
jsx_content = jsx_content.replace('stroke-miterlimit', 'strokeMiterlimit')
jsx_content = jsx_content.replace('stroke-linecap', 'strokeLinecap')
jsx_content = jsx_content.replace('stroke-linejoin', 'strokeLinejoin')
jsx_content = jsx_content.replace('fill-rule', 'fillRule')
jsx_content = jsx_content.replace('clip-rule', 'clipRule')
jsx_content = jsx_content.replace('viewbox', 'viewBox')
jsx_content = jsx_content.replace('viewBox', 'viewBox') # ensure case
jsx_content = re.sub(r'viewbox', 'viewBox', jsx_content, flags=re.IGNORECASE)
jsx_content = jsx_content.replace('tabindex', 'tabIndex')

page_tsx = f"""
'use client';
import React, { { useEffect } } from 'react';

export default function Home() {{
  useEffect(() => {{
    // Animations and custom scripts will go here
  }}, []);

  return (
    <>
      {jsx_content}
    </>
  );
}}
"""

out_path = r"C:\Users\ADMIN\Desktop\the-backstory-media\app\page.tsx"
with open(out_path, "w", encoding="utf-8") as f:
    f.write(page_tsx)

print("page.tsx created successfully!")
