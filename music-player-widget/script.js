 $(document).ready(function() {
    // Music player state
    const player = {
        currentSong: 0,
        isPlaying: false,
        songs: [
            {
                title: "Blinding Lights",
                artist: "The Weeknd",
                cover: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                duration: 200,
                audio: new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")
            },
            {
                title: "Save Your Tears",
                artist: "The Weeknd",
                cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                duration: 215,
                audio: new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3")
            },
            {
                title: "Levitating",
                artist: "Dua Lipa",
                cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                duration: 223,
                audio: new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3")
            },
            {
                title: "Stay",
                artist: "The Kid LAROI, Justin Bieber",
                cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                duration: 138,
                audio: new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3")
            },
            {
                title: "Don't Start Now",
                artist: "Dua Lipa",
                cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                duration: 183,
                audio: new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3")
            }
        ]
    };
    
    // Initialize player
    function initPlayer() {
        updateSongInfo();
        
        // Format time display
        $('.duration').text(formatTime(player.songs[player.currentSong].duration));
        
        // Playlist click handler
        $('.playlist-item').click(function() {
            const index = $(this).index('.playlist-item');
            playSong(index);
        });

        
        // Play/pause button
        $('.play-btn').click(togglePlay);
        
        // Previous button
        $('.prev-btn').click(prevSong);
        
        // Next button
        $('.next-btn').click(nextSong);
        
        // Progress bar click
        $('.progress-bar').click(function(e) {
            const percent = e.offsetX / $(this).width();
            const currentSong = player.songs[player.currentSong];
            currentSong.audio.currentTime = percent * currentSong.duration;
            $('.progress').width(percent * 100 + '%');
        });
        
        // Volume bar click
        $('.volume-bar').click(function(e) {
            const percent = e.offsetX / $(this).width();
            const currentSong = player.songs[player.currentSong];
            currentSong.audio.volume = percent;
            $('.volume-progress').width(percent * 100 + '%');
        });
        
        // Time update
        player.songs.forEach(song => {
            song.audio.addEventListener('timeupdate', function() {
                if (player.currentSong === player.songs.indexOf(song)) {
                    updateProgress();
                }
            });
        });
        
        // Song ended
        player.songs.forEach(song => {
            song.audio.addEventListener('ended', function() {
                if (player.currentSong === player.songs.indexOf(song)) {
                    nextSong();
                }
            });
        });
        
        // Playlist toggle
        $('.playlist-btn, .close-playlist').click(function() {
            $('.playlist').toggleClass('active');
        });
        
        // Set initial volume
        player.songs.forEach(song => {
            song.audio.volume = 0.8;
        });
    }
    
    // Toggle play/pause
    function togglePlay() {
        const currentSong = player.songs[player.currentSong];
        
        if (player.isPlaying) {
            currentSong.audio.pause();
            $('.play-btn i').removeClass('fa-pause').addClass('fa-play');
            $('.music-player').removeClass('playing');
        } else {
            currentSong.audio.play();
            $('.play-btn i').removeClass('fa-play').addClass('fa-pause');
            $('.music-player').addClass('playing');
        }
        player.isPlaying = !player.isPlaying;
    }
    
    // Play specific song
    function playSong(index) {
        // Pause current song if playing
        player.songs.forEach(song => song.audio.pause());
        player.songs.forEach(song => song.audio.currentTime = 0);

        player.currentSong = index;
        const currentSong = player.songs[index];
        
        currentSong.audio.play(); // always play the selected song
        player.isPlaying = true;

        $('.play-btn i').removeClass('fa-play').addClass('fa-pause');
        $('.music-player').addClass('playing');

        updateSongInfo();

        // Update active song in playlist
        $('.playlist-item').removeClass('active');
        $('.playlist-item').eq(index).addClass('active');
    }

    
    // Next song
    function nextSong() {
        player.currentSong = (player.currentSong + 1) % player.songs.length;
        playSong(player.currentSong);
    }
    
    // Previous song
    function prevSong() {
        player.currentSong = (player.currentSong - 1 + player.songs.length) % player.songs.length;
        playSong(player.currentSong);
    }
    
    // Update song info
    function updateSongInfo() {
        const song = player.songs[player.currentSong];
        $('.song-title').text(song.title);
        $('.song-artist').text(song.artist);
        $('.album-art img').attr('src', song.cover);
        $('.duration').text(formatTime(song.duration));
    }
    
    // Update progress bar
    function updateProgress() {
        const currentSong = player.songs[player.currentSong];
        const currentTime = currentSong.audio.currentTime;
        const duration = currentSong.duration;
        const percent = (currentTime / duration) * 100;
        
        $('.progress').width(percent + '%');
        $('.current-time').text(formatTime(currentTime));
    }
    
    // Format time (seconds to MM:SS)
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
    
    // Initialize the player
    initPlayer();
});