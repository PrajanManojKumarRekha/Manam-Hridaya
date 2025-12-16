/* ============================================
   MAANAM HRIDAYA - MAIN JAVASCRIPT
   Easy to customize animations and effects!
   ============================================ */

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // ============================================
    // SMOOTH SCROLL ANIMATIONS
    // ============================================
    
    // Animate sections on scroll
    gsap.utils.toArray('.section').forEach(function(section) {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Animate cards with stagger
    gsap.utils.toArray('.card-3d').forEach(function(card, index) {
        gsap.from(card, {
            opacity: 0,
            y: 60,
            rotationX: -10,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // ============================================
    // PARALLAX EFFECT FOR HERO
    // ============================================
    
    gsap.to('.floating-shape', {
        y: function(index) {
            return (index + 1) * -100;
        },
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    });
    
    // ============================================
    // 3D TILT EFFECT ON CARDS
    // ============================================
    
    document.querySelectorAll('.card-3d').forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
            var rect = card.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            
            var centerX = rect.width / 2;
            var centerY = rect.height / 2;
            
            var rotateX = (y - centerY) / 20;
            var rotateY = (centerX - x) / 20;
            
            card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // ============================================
    // STATS COUNTER ANIMATION
    // ============================================
    
    var statsAnimated = false;
    
    function animateStats() {
        if (statsAnimated) return;
        
        document.querySelectorAll('.stat-number').forEach(function(stat) {
            var target = parseInt(stat.textContent);
            var duration = 2000;
            var start = 0;
            var startTime = null;
            
            function animate(currentTime) {
                if (!startTime) startTime = currentTime;
                var progress = Math.min((currentTime - startTime) / duration, 1);
                var value = Math.floor(progress * target);
                stat.textContent = value + '+';
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }
            
            requestAnimationFrame(animate);
        });
        
        statsAnimated = true;
    }
    
    // Trigger stats animation when in view
    ScrollTrigger.create({
        trigger: '.stats-grid',
        start: 'top 80%',
        onEnter: animateStats
    });
    
    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    
    var header = document.querySelector('.header');
    var lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        var currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 20px rgba(45, 95, 63, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // ============================================
    // BUTTON CLICK EFFECTS
    // ============================================
    
    document.querySelectorAll('.btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            // Create ripple effect
            var ripple = document.createElement('span');
            ripple.style.cssText = 'position:absolute;background:rgba(255,255,255,0.3);border-radius:50%;transform:scale(0);animation:ripple 0.6s linear;pointer-events:none;';
            
            var rect = this.getBoundingClientRect();
            var size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(function() {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation
    var style = document.createElement('style');
    style.textContent = '@keyframes ripple { to { transform: scale(4); opacity: 0; } }';
    document.head.appendChild(style);
    
    console.log('Maanam Hridaya website initialized!');
});
