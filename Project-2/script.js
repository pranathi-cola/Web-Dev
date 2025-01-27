const snowflakes = {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 600
            }
        },
        "color": {
            "value": ["#fff", "fcb732"]
        },
        "shape": {
            "type": "circle",
            "polygon":
            {
                "nb_sides": 5
            }
        },
        "size": {
            "value": 16,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 2,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "straight": false
        },
        "opacity": {
            "value": 4,
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false 
            }
        },
        "modes": {
            "push": {
                "particles_nb": 6
            }
        }
    }
}

function ready() 
{
    particlesJS("particles-js", snowflakes);
}

ready();