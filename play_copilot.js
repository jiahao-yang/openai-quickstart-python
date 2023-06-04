function calculateDaysBetweenDates(begin, end) {
    const beginDate = new Date(begin);
    const endDate = new Date(end);
    const daysBetween = (endDate - beginDate) / (1000 * 60 * 60 * 24);
    return daysBetween;
}

// find all images without alternate text
// and give them a red border
function process() {
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img) => {
        img.style.border = '5px solid red';
    });
}

// Express server on port 3000
const app = express();
app.listen(3000, () => {
    console.log('Server running on port 3000');
});


// Return the current time
app.get('/time', (req, res) => {
    res.send(new Date().toString());
}
);
