// 1.


/*
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        let wraper = document.createElement('div');
        wraper.classList.add('wraper');
        for (const post of posts) {
            let divCard = document.createElement('div');
            divCard.classList.add('post');
            divCard.innerHTML = `
                    <h3>ID: ${post.id}</h3>
                    <h4>Title: ${post.title}</h4>
                    <h5>Body: ${post.body}</h5>
                    `;
            wraper.appendChild(divCard);
            document.body.appendChild(wraper);
        }
    });
*/



// 2.



/*
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let wraper = document.createElement('div');
        wraper.classList.add('wraper');
        for (const comment of comments) {
            let divCard = document.createElement('div');
            divCard.classList.add('comment');
            divCard.innerHTML = `
                        <h3>ID: ${comment.id}</h3>
                        <h4>Name: ${comment.name}</h4>
                        <h5>Email: ${comment.email}</h5>
                        <h6>Body: ${comment.body}</h6>
                        `;
            wraper.appendChild(divCard);
            document.body.appendChild(wraper);
        }
    })*/
