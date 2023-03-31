
fetch("https://api.quotable.io/random?maxLength=50")
	.then((response) => { 
		return response.json()
	})
		.then((data) => {
			 let quote = data.content
			 let author = data.author
             document.getElementById("quoteline").innerText = quote;
             document.getElementById("auther").innerText = author;
		})






