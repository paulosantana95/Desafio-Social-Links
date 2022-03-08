const linkSocialMedia = {
    github: "paulosantana95",
    linkedin: "in/paulosantana95",
    instagram: "paulosantana.sa",
    facebook: "p.santana95"
}


function changeSocialMediaLinks() {

    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`
    }
}

changeSocialMediaLinks();

function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${linkSocialMedia.github}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userAvatar.src = data.avatar_url;
        userName.textContent = data.name;
    })
}

getGithubProfileInfos();