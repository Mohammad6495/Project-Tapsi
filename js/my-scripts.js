

document.getElementById("nav-btn")
    .addEventListener("click", () => {
        var line = document.getElementById("bar-line");
        var line2 = document.getElementById("bar-line-2");
        var opace = document.getElementById("bar-opac");
        var border = document.querySelector(".border-line-menu");
        if (line.style.transform == "rotateZ(-45deg)") {
            line.style.transform = "rotateZ(-0deg)";
            line2.style.transform = "rotateZ(0deg)";
            opace.style.opacity = 1;
            border.style.display = "none";

        }
        else {
            line.style.transform = "rotateZ(-45deg)";
            line2.style.transform = "rotateZ(45deg)";
            opace.style.opacity = 0;
            border.style.display = "block";
        }
    })

//////////////////////////////////////////////////////////////////////
