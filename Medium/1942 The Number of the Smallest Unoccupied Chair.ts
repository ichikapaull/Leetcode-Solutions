import { PriorityQueue } from './path/to/priorityQueue'; 
type Pair = [number, number];
let availableChairs = new PriorityQueue<number>((a, b) => a - b);
let occupiedChairs = new PriorityQueue<Pair>((a, b) => a[0] - b[0]);
function smallestChair(times: number[][], targetFriend: number): number {
    times.map((time, index) => [...time, index])
        .sort((a, b) => a[0] - b[0])
        .forEach(time => {
            let [arriveTime, leaveTime, index] = time;

            while (!occupiedChairs.isEmpty() && occupiedChairs.peek()[0] <= arriveTime) {
                availableChairs.add(occupiedChairs.poll()[1]); 

            if (availableChairs.isEmpty()) {
                for (let chair = 0; chair < times.length; chair++) {
                    availableChairs.add(chair);
                }
            }
          
            let chair = availableChairs.poll();

            if (index === targetFriend) {
                return chair;
            }
          
            occupiedChairs.add([leaveTime, chair]);
        });

    throw new Error("The target friend's chair was not found");
}