import Throttle from 'throttle';
import streamPromises from 'stream/promises';
import childProcess from "child_process";
 
// create a "Throttle" instance that reads at 1 bps
var throttle = new Throttle(1);
 
// process.stdin.pipe(throttle).pipe(process.stdout);

// streamPromises.pipeline(
//     process.stdin,
//     throttle,
//     process.stdout
// )

const {
    stdin,
    stdout
} = childProcess.spawn('node', ['-v']);

stdout.pipe(process.stdout);

