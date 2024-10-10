/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
const videoStitching = function (clips, T) {
    const dp = Array(T + 1).fill( T + 1)
    dp[0] = 0
  for(let i = 0; i <= T; i++) {
    for(let c of clips) {
      if(i >= c[0] && i <= c[1]) dp[i] = Math.min(dp[i], dp[c[0]] + 1)
    }
    if(dp[i] === T + 1) return -1
  }
  return dp[T] 
};