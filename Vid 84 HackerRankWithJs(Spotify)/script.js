// Access elements after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    let rMenu = document.getElementsByClassName("rightMenu")[0];
    let menuMob = document.getElementById("menumob");
    let menuDesk = document.getElementById("menuDesk");

    //let rMClose = document.getElementById("close");
    //let mainweb = document.getElementById("mainweb");
    //let pythonPrep = document.getElementById("pythonPrep");
    console.log(document.body);

    //console.log(pythonPrep);
    //pythonPrep.style.display = "none";

    // Event listener for menuMob (touchstart)
    menuMob.addEventListener("touchstart", (event) => {
        event.stopPropagation()
            rMenu.style.display = "block";
        // rMenu.style.left = "0";
    });

    // Event listener for menuMob (click)
    menuMob.addEventListener("click", (event) => {
        event.stopPropagation()
        rMenu.style.display = "block";
        // rMenu.style.left = "0";
    });

    // Event listener for DeskMenu (click)
    menuDesk.addEventListener("click", (event) => {
        event.stopPropagation()
        rMenu.style.display = "block";
        // rMenu.style.left = "0";
    });
    // Event listener for DeskMenu (touchstart)
    menuDesk.addEventListener("touchstart", (event) => {
        event.stopPropagation()
        rMenu.style.display = "block";
        // rMenu.style.left = "0";
    });

    // Event listener for mainContent(close rMenu)
    document.getElementsByClassName("mainContent")[0].addEventListener("touchstart", () => {
        rMenu.style.display = "none";
    });

    document.getElementsByClassName("mainContent")[0].addEventListener("click", () => {
        rMenu.style.display = "none";
    });


    document.getElementById("close").addEventListener("touchstart", () => {
        rMenu.style.display = "none";
    });

    // PythonPrep (Method 2 of page adding)
    /*document.getElementsByClassName("pybox")[0].addEventListener("touchstart", (event) => {
        event.preventDefault();
        event.stopPropagation();
        pythonPrep.style.display = "block";
    });*/

    /*document.getElementById("pybox").addEventListener("touchstart", (event) => {
        event.preventDefault();
        mainweb.style.display = "none";
        //console.log(pythonPrep);
        // pythonPrep.style.display = "block";
    });*/

    const inputs = document.querySelectorAll(".search");
    list = ["Search...","Python","C","C++","Html","CSS","JS","Java","PHP","SQL","MongoDB","NodeJS","ReactJS","AngularJS","Django","Bootstrap"]

    inputs.forEach((input) => {
        let r = 0;
        let placeholderText = list[r];
        let index = 0;

        const typePlaceholder = () => {
            if (index < placeholderText.length) {
                input.placeholder += placeholderText[index];
                index++;
                setTimeout(typePlaceholder, 75);
            }
        };

        setInterval(() => {
            r = Math.floor(Math.random() * list.length); // Get a random index from list
            placeholderText = list[r]; // Set the random word from the list
            input.placeholder = ""; // Clear the placeholder
            index = 0; // Reset index
            typePlaceholder(); // Call the function to type the placeholder
        }, 2000); // Adjusted delay for re-triggering typing effect
    });

    console.log(document.body);
});



//By ChatGpt


//Event listener domContentLoaded added to complete code bacause pythonPrep us giving null as it wasn't loaded but its event listn. starts thus throeing null.
//So now pythonPrep event list. works after dom is loaded fully
//Added C page by href = "abc.html"
//Added python page by using Js to display pythonpage and hide mainpage concurrenty 
//Removed close button to prevent mistouch on logo


//change placwholder to get random words