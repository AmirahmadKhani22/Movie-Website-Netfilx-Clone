function slidersWidgetHandller($) {
    const socialMedias = `
    <div class = "social-medias">
        <button class = "icon-share-nodes share-nodes social-media"></button>
        <a class = "youtube icon-youtube social-media" href = "https://youtube.com" target = "_blank"></a>
        <a class = "instagram icon-instagram social-media" href = "https://instagram.com" target = "_blank"></a>
    </div>`
    $(".social-medias-container").append(socialMedias).on("click" , function (event) {
        const socialMedias = $(this).children(".social-medias")
        if(socialMedias.hasClass("show-social-medias")) {
            $(".show-social-medias").removeClass("show-social-medias")
        } else {
            socialMedias.addClass("show-social-medias")
        }
    })
    $(".main-area-slides").on('mouseleave' , (event) => {
        if($(".social-medias").hasClass("show-social-medias")) {
            $(".show-social-medias").removeClass("show-social-medias")
        }
    })
}

export default slidersWidgetHandller