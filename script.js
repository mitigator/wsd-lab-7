document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn");
    const list = document.getElementById("list");

    btn.addEventListener("click", function () {
        
        fetch("books.json") 
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not OK!");
                }
                return response.json();
            })
            .then((data) => {                
                displayBooks(data);
            })
            .catch((error) => {
                console.error("Unable to Fetch:", error);
            });
    });
    
    function displayBooks(books) {        
        list.innerHTML = "";
        books.forEach((book) => {
            const items = document.createElement("div");
            items.innerHTML = `<h2>${book.title}</h2><p>Author: ${book.author}</p> <p>Publication Year: ${book.published_year}</p><p>Genre: ${book.genre}</p><hr>`;
            list.appendChild(items);
        });
    }
});
