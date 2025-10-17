// Global Configuration Variables (from the top of the body in HTML)
const myPhoneNumber = '+233551217600';
const myEmailAddress = 'yakubuhalifatu@gmail.com';
const linkedInUrl = 'http://linkedin.com/in/halifatu-yakubu-68742a202';
const contactMessage = "Hello Halifatu, I saw your portfolio and would like to connect regarding an opportunity.";

// Typing Effect Variables (from the section id="hero")
//const typingText = document.getElementById("typing-text");
//const roles = [
    "Cybersecurity enthusiast",
    "Digital defender",
    "Public speaker",
    "IT Manager in progress",
    "Problem solver"
//];

let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingText) return; // Guard clause if the element isn't found

    const current = roles[index];
    typingText.textContent = current.substring(0, charIndex);

    if (!isDeleting && charIndex < current.length) {
        charIndex++;
        setTimeout(typeEffect, 80);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 40);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) index = (index + 1) % roles.length;
        setTimeout(typeEffect, 800);
    }
}


// DOMContentLoaded Event Listener (from the bottom of the body in HTML)
document.addEventListener('DOMContentLoaded', () => {
    // Start the typing effect
    typeEffect();

    // 1. Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
            });
        });
    }

    // 2. Set Current Year in Footer
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // 3. WhatsApp Link Generation (The original HTML code used an ID "whatsapp-link-btn" 
    // but the final button in the contact section didn't have it. We'll use the variables 
    // to show how it should be constructed for general use, but since your existing 
    // button has a hardcoded link, no direct manipulation is strictly necessary 
    // unless you want dynamic linking.)
    
    // Example of dynamic link generation (if needed):
    // const baseWhatsappUrl = `https://wa.me/${myPhoneNumber.replace(/[^0-9+]/g, '')}`;
    // const encodedMessage = encodeURIComponent(contactMessage);
    // const dynamicWhatsappHref = `${baseWhatsappUrl}?text=${encodedMessage}`;
    
    // To be strictly correct to your original code, we'd update the hardcoded link:
    // We'll trust the hardcoded link in the HTML is correct for now:
    // <a href="https://wa.me/233551217600?text=Hello%20Halifatu,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect." ...>
    
});