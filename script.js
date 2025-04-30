// Toggle sidebar
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.querySelector('.sidebar');
const videoGrid = document.querySelector('.video-grid');

let sidebarVisible = true;

menuIcon.addEventListener('click', () => {
    sidebarVisible = !sidebarVisible;
    sidebar.style.display = sidebarVisible ? 'block' : 'none';
    videoGrid.style.marginLeft = sidebarVisible ? '240px' : '0';
});

// Add hover effect to video cards
document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.thumbnail img').style.transform = 'scale(1.05)';
        card.querySelector('.thumbnail img').style.transition = 'transform 0.2s';
    });

    card.addEventListener('mouseleave', () => {
        card.querySelector('.thumbnail img').style.transform = 'scale(1)';
    });
});

// Simulate video loading
function createVideoCard(title, channelName, views, timeAgo, duration) {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    videoCard.innerHTML = `
        <div class="thumbnail">
            <img src="https://via.placeholder.com/320x180" alt="Video thumbnail">
            <span class="video-time">${duration}</span>
        </div>
        <div class="video-info">
            <img src="https://via.placeholder.com/40" alt="Channel avatar" class="channel-icon">
            <div class="video-details">
                <h3 class="video-title">${title}</h3>
                <p class="channel-name">${channelName}</p>
                <p class="video-metadata">${views} views • ${timeAgo}</p>
            </div>
        </div>
    `;
    return videoCard;
}

// Add some sample videos
const sampleVideos = [
    {
        title: 'Amazing Video Title 1',
        channel: 'Cool Channel',
        views: '1.2M',
        timeAgo: '3 days ago',
        duration: '10:30'
    },
    {
        title: 'Interesting Tutorial About Something Really Cool',
        channel: 'Tech Channel',
        views: '856K',
        timeAgo: '1 week ago',
        duration: '15:45'
    },
    {
        title: 'Must Watch Video 2023',
        channel: 'Top Content',
        views: '2.3M',
        timeAgo: '2 days ago',
        duration: '8:20'
    }
];

// Add sample videos to the grid
sampleVideos.forEach(video => {
    const card = createVideoCard(
        video.title,
        video.channel,
        video.views,
        video.timeAgo,
        video.duration
    );
    videoGrid.appendChild(card);
});