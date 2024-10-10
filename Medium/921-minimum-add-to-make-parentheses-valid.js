class Solution:
def minAddToMakeValid(self, s: str) -> int:
    depth = 0  # 'dept' yerine 'depth' olmalı
moves = 0

for c in s:
if c == "(":
depth += 1
else:
depth -= 1

if depth < 0:
moves += 1
depth += 1  # depth sıfırlanmalı

moves += depth
return moves