const videos = {
    miq: {
        lecture: [
            "yXtGc12IeeU", // MIQ Series Lecture 1
            "sBspPc94rrk", // MIQ Series Lecture 2
            "bZV5Qko8sSE", // MIQ Series Lecture 3
        ],
        notes: [
            "https://example.com/note1", // MIQ Notes Link 1
            "https://example.com/note2", // MIQ Notes Link 2
        ],
    },
    midterm: [
        "PLbewfresVs", // Mid-Term Marathon Video 1
        "z5_nBNYipLQ", // Mid-Term Marathon Video 2
        "xpMj5QF8oTM", // Mid-Term Marathon Video 3
        "Em69L-wbVAs", // Mid-Term Marathon Video 4
    ],
    fullmarathon: [
        "213ONwc8BXM", // Full Marathon Video 1
        "as1jXVVDUKo", // Full Marathon Video 2
        "n1mVNiem9xE", // Full Marathon Video 3
        "kB-j8Bk7AFM", // Full Marathon Video 4
        "PLbewfresVs", // Full Marathon Video 5
    ],
};

function showCourse(course) {
    const videoSection = document.getElementById('video-section');
    const videoList = document.getElementById('video-list');
    const courseOptions = document.getElementById('course-options');
    const videoTitle = document.getElementById('video-title');
    
    // Show the video section
    videoSection.style.display = 'block';
    videoList.innerHTML = ''; // Clear previous content
    courseOptions.innerHTML = ''; // Clear previous content

    if(course === 'miq') {
        videoTitle.innerText = "Class 9th MIQ Series - Choose Section";
        // Create buttons for Notes and Lectures
        courseOptions.innerHTML = `
            <button onclick="showLecture('miq')">Lecture Videos</button>
            <button onclick="showNotes('miq')">Notes</button>
        `;
    } else if(course === 'midterm') {
        videoTitle.innerText = "Class 9th Mid-Term Marathon";
        showVideoList('midterm');
    } else if(course === 'fullmarathon') {
        videoTitle.innerText = "Complete Marathon for Class 9th";
        showVideoList('fullmarathon');
    }
}

function showLecture(course) {
    const videoList = document.getElementById('video-list');
    videoList.innerHTML = ''; // Clear previous content
    videos[course].lecture.forEach(videoId => {
        videoList.innerHTML += `
            <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
    });
}

function showNotes(course) {
    const videoList = document.getElementById('video-list');
    videoList.innerHTML = ''; // Clear previous content
    videos[course].notes.forEach(noteLink => {
        videoList.innerHTML += `<a href="${noteLink}" target="_blank">View Notes</a><br>`;
    });
}

function showVideoList(course) {
    const videoList = document.getElementById('video-list');
    videoList.innerHTML = ''; // Clear previous content
    videos[course].forEach(videoId => {
        videoList.innerHTML += `
            <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
    });
}

function goBack() {
    document.getElementById('video-section').style.display = 'none';
}
