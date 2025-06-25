const jokes = [
    "Why don’t scientists trust atoms? Because they make up everything! 🧪",
    "I told my computer I needed a break, and it said: 'No problem, I’ll go to sleep.' 💻",
    "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾",
    "Why don’t skeletons fight each other? They don’t have the guts. 💀",
    "What do you call fake spaghetti? An impasta! 🍝",
    "Parallel lines have so much in common. It’s a shame they’ll never meet. 📏",
    "Why can’t your nose be 12 inches long? Because then it would be a foot. 👃👣"
];

$('#new-joke').click(function() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    $('#joke').fadeOut(200, function() {
        $(this).text(jokes[randomIndex]).fadeIn(200);
    });
});