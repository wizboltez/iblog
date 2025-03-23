const newsData = [
    { image: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg", title: "iPhone 15 Pro Launched!", description: "Apple introduces the new titanium iPhone 15 Pro with A17 chip." },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEsme_Q-UsUOUdrpM4kpqM_-SPdFFxe-jAQ&s", title: "Apple Vision Pro", description: "Apple's new AR/VR headset is here to redefine immersive experiences." },
    { image: "https://www.apple.com/v/airpods-pro/m/images/meta/og__eui2mpgzwyaa_overview.png", title: "AirPods Pro 2", description: "Now with USB-C charging and improved noise cancellation." },
    { image: "https://images.fonearena.com/blog/wp-content/uploads/2024/09/Apple-Watch-Ultra-2-2024-1024x555.jpg", title: "Apple Watch Ultra 2", description: "A rugged watch built for extreme conditions and sports." },
    { image: "https://www.apple.com/newsroom/images/2023/10/apple-unveils-new-macbook-pro-featuring-m3-chips/article/Apple-MacBook-Pro-2up-231030_Full-Bleed-Image.jpg.large.jpg", title: "M3 MacBook Pro", description: "The powerful MacBook Pro now features the new M3 chip." },
    { image: "https://photos5.appleinsider.com/gallery/48067-93900-46982-91542-51815504495_8aa1e80fa4_o-xl-xl.jpg", title: "New iMac M3", description: "Experience the ultra-fast M3 chip in the latest iMac lineup." }
];

const newsSection = document.getElementById("news-section");

newsData.forEach(news => {
    let newsItem = document.createElement("div");
    newsItem.classList.add("news-item");
    newsItem.innerHTML = `
        <img src="${news.image}" alt="${news.title}">
        <h3>${news.title}</h3>
        <p>${news.description}</p>
    `;
    newsSection.appendChild(newsItem);
});
// Add smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').includes('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').split('#')[1];
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        }
    });
});