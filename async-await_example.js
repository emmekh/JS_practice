const timerPromise = (delay) =>
    new Promise((resolve, reject) => {
        if (typeof delay !== 'number' || delay < 0) {
            return reject(new Error('Please type correct delay number'));
        }
        setTimeout(() => resolve(), delay);
    });

const asyncFn = async () => {
    try {
        console.log('Timer started');
        await timerPromise(2000);
        console.log('Timer ended in');
    } catch (error) {
        console.error('Error: ', error.message);
    }
}
asyncFn();