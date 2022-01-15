export default {
    port: parseInt(process.env.PORT, 10) || 3000,
    localhost: process.env.LOCALHOST || 'http://localhost/',
};