// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle hamburger icon between bars and times (close)
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            if(icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Scroll Spy (Active Nav Link) ---
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjust 150px for offset due to fixed navbar
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // --- Typewriter Effect ---
    const typeWriterElement = document.getElementById('typewriter');
    const roles = ['Web Developer', 'Computer Science Student', 'Problem Solver', 'Technology Enthusiast'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    
    function type() {
        if(!typeWriterElement) return;
        
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typeWriterElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            typeWriterElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingDelay = 1500; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingDelay = 500; // Pause before typing next word
        }
        
        setTimeout(type, typingDelay);
    }
    
    // Start typewriter
    setTimeout(type, 1000);

    // --- Project Filtering ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.filter-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'flex';
                    // Small timeout to allow display change before fading in
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    // Wait for transition to complete before setting display none
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // --- Intersection Observer for Scroll Animations ---
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);
    
    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });

    // --- Back to Top Button ---
    const backToTopBtn = document.getElementById('backToTop');
    
    if(backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Get fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            // Get error spans
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');
            
            // Reset errors
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
            
            // Validate Name
            if (name.value.trim() === '') {
                nameError.textContent = 'Name is required';
                isValid = false;
            }
            
            // Validate Email
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (email.value.trim() === '') {
                emailError.textContent = 'Email is required';
                isValid = false;
            } else if (!email.value.match(emailPattern)) {
                emailError.textContent = 'Please enter a valid email address';
                isValid = false;
            }
            
            // Validate Message
            if (message.value.trim() === '') {
                messageError.textContent = 'Message is required';
                isValid = false;
            } else if (message.value.trim().length < 10) {
                messageError.textContent = 'Message must be at least 10 characters long';
                isValid = false;
            }
            
            if (isValid) {
                // Simulate form submission
                const successMsg = document.getElementById('formSuccess');
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
                
                setTimeout(() => {
                    successMsg.style.display = 'block';
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMsg.style.display = 'none';
                    }, 5000);
                }, 1500);
            }
        });
    }
});
