$(document).ready(function() {
    // Like button functionality
    $("#likeButton").click(function() {
        $(this).find("i").toggleClass("fa-heart fa-heart");
        $(this).find("i").toggleClass("far fas");
        $(this).toggleClass("active");
        
        // Update like count
        const likesCount = $("#likesCount");
        let likes = parseInt(likesCount.text().replace(/,/g, ''));
        
        if ($(this).hasClass("active")) {
            likes += 1;
        } else {
            likes -= 1;
        }
        
        // Format number with commas
        likesCount.text(likes.toLocaleString() + " likes");
    });
    
    // Comment input functionality
    $("#commentInput").on("input", function() {
        const commentText = $(this).val().trim();
        if (commentText.length > 0) {
            $("#postComment").addClass("active").prop("disabled", false);
        } else {
            $("#postComment").removeClass("active").prop("disabled", true);
        }
    });
    
    // Post comment functionality
    $("#postComment").click(function() {
        const commentText = $("#commentInput").val().trim();
        if (commentText.length > 0) {
            // Create new comment element
            const newComment = $('<div class="comment"></div>');
            newComment.append('<span class="comment-user">you</span>');
            newComment.append('<span class="comment-text">' + commentText + '</span>');
            newComment.append('<span class="comment-time">Just now</span>');
            newComment.append('<span class="comment-like"><i class="far fa-heart"></i></span>');
            
            // Add to comments section
            $(".comments").append(newComment);
            
            // Clear input
            $("#commentInput").val("");
            $("#postComment").removeClass("active").prop("disabled", true);
            
            // Scroll to new comment
            $(".comments").scrollTop($(".comments")[0].scrollHeight);
        }
    });
    
    // Press Enter to post comment
    $("#commentInput").keypress(function(e) {
        if (e.which === 13 && !e.shiftKey) {
            e.preventDefault();
            $("#postComment").click();
        }
    });
    
    // Add hover effects to buttons
    $(".btn").hover(function() {
        $(this).css("opacity", "0.7");
    }, function() {
        $(this).css("opacity", "1");
    });
});