const snowflakes = {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 700
            }
        },
        "color": {
            "value": "#a4b2d3"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#a4b2d3"
            }
        },
        "size": {
            "value": 16,
            "random": true
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "bottom",
            "straight": false
        },
        "opacity": {
            "value": 0.5,
            "random": true
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