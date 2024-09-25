const decodeTheRing = function (s, p) {
  const m = s.length;
  const n = p.length;

  // Create a 2D array for dynamic programming
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

  // Empty pattern matches empty message
  dp[0][0] = true;

  for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
          dp[0][j] = dp[0][j - 1];
      }
  }

  // Fill the dp array
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
              dp[i][j] = dp[i - 1][j - 1];
          } else if (p[j - 1] === '*') {
              dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
          }
      }
  }

  return dp[m][n];
};

module.exports = decodeTheRing;
