function toggleMenuHandler(window , sourceElements , targetElements) {
    sourceElements.on({
        click: function (event) {
            if(targetElements.css("left") === "-265px") {
                targetElements.animate({
                    left: 0,
                } , 350 , "swing")
            }
            event.stopPropagation()
        }
    })
    targetElements.on("click" , event => {
        event.stopPropagation()
    })
    window.on({
        click: function (event) {
            targetElements.animate({
                left: "-265px",
            } , 350 , "swing")
        }
    })
}

function toggleAccessibilityHandler(window , sourceElements , targetElements) {
    sourceElements.on({
        click: function (event) {
            if(targetElements.css("top") === "150px") {
                targetElements.css("display" , "flex")
                targetElements.animate({
                    top: "50px",
                    opacity: 1,
                } , 500 , "swing")
            } else {
                targetElements.animate({
                    top: "150px",
                    opacity: 0,
                } , 500 , "swing" , function () {
                    targetElements.css("display" , "none")
                })
            }
            event.stopPropagation()
        }
    })
    targetElements.on("click" , event => {
        event.stopPropagation()
    })
    window.on({
        click: event => {
            targetElements.animate({
                top: "150px",
                opacity: 0,
            } , 500 , "swing" , function () {
                targetElements.css("display" , "none")
            })
        },
        resize: event => {
            if(event.currentTarget.innerWidth >= 991) {
                targetElements.css({
                    display: "flex",
                    opacity: 1,
                })
            } else {
                targetElements.css({
                    display: "none",
                })
            }
        }
    })
}

export { toggleMenuHandler , toggleAccessibilityHandler }
