#include <vector>
#include <queue>
#include <algorithm>
class Solution {
public:

    int minGroups(vector<vector<int>>& intervals) {

        std::sort(intervals.begin(), intervals.end());
        std::priority_queue<int, std::vector<int>, std::greater<int>> endTimes;
        for (const auto& interval : intervals) {
            if (!endTimes.empty() && endTimes.top() < interval[0]) {
                endTimes.pop();
            }
            endTimes.push(interval[1]);
        }
        return endTimes.size();
    }
};