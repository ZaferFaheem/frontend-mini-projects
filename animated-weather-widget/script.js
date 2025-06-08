$(document).ready(function() {
    // Update date
    function updateDate() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        $('.date').text(today.toLocaleDateString('en-US', options));
    }
    
    // Simulate weather data update
    function updateWeather() {
        // In a real app, you would fetch this from a weather API
        const weatherConditions = [
            { temp: 22, icon: '1163/1163661', desc: 'Partly Cloudy', humidity: 65, wind: 12, pressure: 1012 },
            { temp: 26, icon: '1163/1163621', desc: 'Sunny', humidity: 45, wind: 8, pressure: 1015 },
            { temp: 18, icon: '1163/1163675', desc: 'Rainy', humidity: 85, wind: 15, pressure: 1008 },
            { temp: 15, icon: '1163/1163657', desc: 'Cloudy', humidity: 70, wind: 10, pressure: 1010 }
        ];
        
        const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
        
        // Animate temperature change
        const currentTemp = parseInt($('#temperature').text());
        const tempDiff = randomWeather.temp - currentTemp;
        const steps = 20;
        const stepTime = 50;
        
        for (let i = 1; i <= steps; i++) {
            setTimeout(() => {
                $('#temperature').text(Math.round(currentTemp + (tempDiff * i / steps)));
            }, i * stepTime);
        }
        
        // Update other values
        $('#weatherIcon').attr('src', `https://cdn-icons-png.flaticon.com/512/${randomWeather.icon}.png`);
        $('#description').text(randomWeather.desc);
        $('#humidity').text(randomWeather.humidity + '%');
        $('#wind').text(randomWeather.wind + ' km/h');
        $('#pressure').text(randomWeather.pressure + ' hPa');
        
        // Change header gradient based on temperature
        let primary, secondary;
        if (randomWeather.temp > 25) {
            primary = '#ff7e5f';
            secondary = '#feb47b';
        } else if (randomWeather.temp > 15) {
            primary = '#4361ee';
            secondary = '#3f37c9';
        } else {
            primary = '#4b6cb7';
            secondary = '#182848';
        }
        
        $('.weather-header').css('background', `linear-gradient(to right, ${primary}, ${secondary})`);
    }
    
    // Initial setup
    updateDate();
    updateWeather();
    
    // Refresh button click
    $('#refreshBtn').click(function() {
        $(this).css('transform', 'rotate(360deg)');
        setTimeout(() => {
            $(this).css('transform', 'rotate(0deg)');
        }, 500);
        updateWeather();
    });
    
    // Simulate periodic updates (every 30 seconds)
    setInterval(updateWeather, 30000);
});