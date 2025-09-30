import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Create particles
    const createParticles = () => {
      // Increased particle count by 50% and made it scale better with screen size
      const particleCount = Math.min(150, Math.max(50, window.innerWidth / 12));
      particles = [];
      
      for (let i = 0; i < particleCount; i++) {
        // Increased minimum and maximum size for better visibility
        const size = Math.random() * 3 + 1.5;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: size,
          // Reduced speed for smoother animation
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          color: getRandomColor(),
          // Add pulsing effect
          pulseDirection: 1,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          originalRadius: size,
          maxRadius: size * 1.5
        });
      }
    };

    // Get random color with indigo/purple hues - increased opacity
    const getRandomColor = () => {
      const hue = Math.random() * 60 + 240; // Indigo to purple range (240-300)
      const saturation = 70 + Math.random() * 30; // 70-100%
      const lightness = 60 + Math.random() * 20; // 60-80%
      // Increased alpha for better visibility (0.4-0.8)
      const alpha = 0.4 + Math.random() * 0.4;
      return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
    };

    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        // Increased size multiplier from 2 to 2.5 for better visibility
        ctx.arc(particle.x, particle.y, particle.radius * 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Connect particles with lines if they're close enough
      connectParticles();
    };

    // Connect nearby particles with lines
    const connectParticles = () => {
      // Increased max distance for more connections
      const maxDistance = 180;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // Opacity based on distance - increased for better visibility
            const opacity = 1 - (distance / maxDistance);
            ctx.beginPath();
            // Increased line opacity from 0.2 to 0.3 and made lines thicker
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.3})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Update particle positions and add pulsing effect
    const updateParticles = () => {
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Add pulsing size effect
        if (particle.radius >= particle.maxRadius) {
          particle.pulseDirection = -1;
        } else if (particle.radius <= particle.originalRadius) {
          particle.pulseDirection = 1;
        }
        
        particle.radius += particle.pulseDirection * particle.pulseSpeed;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }
      });
    };

    // Animation loop
    const animate = () => {
      drawParticles();
      updateParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Mouse interaction to add movement to nearby particles
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const mouseRadius = 100; // Influence radius
      
      particles.forEach((particle) => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRadius) {
          // Repel particles from mouse - strength decreases with distance
          const repelStrength = 0.3 * (1 - distance / mouseRadius);
          particle.speedX -= dx * repelStrength * 0.01;
          particle.speedY -= dy * repelStrength * 0.01;
          
          // Limit max speed
          const maxSpeed = 1.5;
          const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
          if (speed > maxSpeed) {
            particle.speedX = (particle.speedX / speed) * maxSpeed;
            particle.speedY = (particle.speedY / speed) * maxSpeed;
          }
        }
      });
    };

    // Initialize canvas and particles
    resizeCanvas();
    createParticles();
    animate();

    // Add mouse interaction
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
