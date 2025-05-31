document.addEventListener('DOMContentLoaded', function() {
    // Thiết lập đếm ngược đến ngày sinh nhật
    const birthdayDate = new Date('2025-06-04T19:30:00').getTime();

    // Cập nhật đếm ngược mỗi giây
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = birthdayDate - now;

        // Tính toán ngày, giờ, phút, giây
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Hiển thị kết quả
        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

        // Nếu đếm ngược kết thúc
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = '<h3>Tiệc sinh nhật đã bắt đầu!</h3>';
        }
    }, 1000);

    // Hiệu ứng cuộn mượt cho các liên kết
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Xác định offset dựa trên kích thước màn hình
                let offset = 70;
                if (window.innerWidth <= 768) {
                    offset = 90;
                }
                if (window.innerWidth <= 480) {
                    offset = 120;
                }
                
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - offset,
                    behavior: 'smooth'
                });
                
                // Đóng menu mobile nếu có
                const header = document.querySelector('header');
                if (header.classList.contains('mobile-menu-open')) {
                    header.classList.remove('mobile-menu-open');
                }
            }
        });
    });

    // Hiệu ứng hiển thị khi cuộn
    const revealElements = document.querySelectorAll('section');
    
    function checkReveal() {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal();

    // Thay đổi header khi cuộn
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '10px 0';
            header.style.boxShadow = 'none';
        }
    });

    // Xử lý ảnh mặc định nếu không tìm thấy
    const profileImage = document.getElementById('profile-image');
    if (profileImage) {
        profileImage.onerror = function() {
            this.src = 'https://via.placeholder.com/300?text=Ảnh+của+tôi';
        };
    }

    // Xử lý ảnh gallery mặc định nếu không tìm thấy
    const galleryImages = document.querySelectorAll('.gallery-item img');
    galleryImages.forEach((img, index) => {
        img.onerror = function() {
            this.src = `https://via.placeholder.com/400x300?text=Hình+ảnh+${index + 1}`;
        };
    });

    // Hiệu ứng Parallax cho hero section
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const heroSection = document.querySelector('.hero');
        
        if (heroSection) {
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });

    // Hiệu ứng hover cho gallery
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            galleryItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.style.opacity = '0.7';
                    otherItem.style.transform = 'scale(0.95)';
                }
            });
        });
        
        item.addEventListener('mouseleave', function() {
            galleryItems.forEach(otherItem => {
                otherItem.style.opacity = '1';
                otherItem.style.transform = '';
            });
        });
    });

    // Hiệu ứng đếm ngược nổi bật
    const countdownElements = document.querySelectorAll('.countdown div');
    
    setInterval(() => {
        countdownElements.forEach(element => {
            element.classList.add('pulse-effect');
            
            setTimeout(() => {
                element.classList.remove('pulse-effect');
            }, 500);
        });
    }, 5000);

    // Thêm hiệu ứng cho thiệp mời
    const invitationCard = document.querySelector('.invitation-card');
    
    if (invitationCard) {
        invitationCard.addEventListener('mousemove', function(e) {
            const rect = invitationCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            invitationCard.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
        
        invitationCard.addEventListener('mouseleave', function() {
            invitationCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }

    // Thêm hiệu ứng nút nhấp nháy
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        setInterval(() => {
            button.classList.add('btn-pulse');
            
            setTimeout(() => {
                button.classList.remove('btn-pulse');
            }, 1000);
        }, 3000);
    });

    // Thêm CSS cho hiệu ứng mới
    const style = document.createElement('style');
    style.textContent = `
        .pulse-effect {
            animation: quick-pulse 0.5s ease-in-out;
        }
        
        @keyframes quick-pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        .btn-pulse {
            animation: btn-glow 1s ease-in-out;
        }
        
        @keyframes btn-glow {
            0% { box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); }
            50% { box-shadow: 0 0 20px rgba(255, 107, 149, 0.6); }
            100% { box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); }
        }
    `;
    
    document.head.appendChild(style);
}); 