let repos
fetch('https://cors-anywhere.herokuapp.com/https://github.com/profsucrose?tab=repositories')
    .then(raw => raw.text())
    .then(html => {
        const rawRepos = html.match(/Code">[\s\S]*?<\/li/g).map(x => x.match(/>[\s\S]*?</g))
        const repos = rawRepos.map(x => x.map(y => y.split('').filter(c => c !== '<' && c !== '>' && c !== '\n').join('').trim()).filter(x => x))

        repos.forEach((repo, index) => {
            console.log(repo)
            const title = repo[0]
            const link = `https://github.com/profsucrose/${title}`
            const date = repo[repo.length - 1]
            const language = repo[2] === 'Updated' ? '' : repo[2]
            const description = !(title === 'profsucrose.github.io')
                                    ? !repo[1].toLowerCase().includes('fork')
                                            ? repo[1].split(' ').length > 1 
                                                ? repo[1] 
                                                : '[No description]'
                                            : 'Forked repo'
                                    : 'The source for THIS very website!'
            document.querySelector('.cards').innerHTML += `
                <div class="box" onClick="() => {alert('click'); location.href='${link}'}" style="animation-delay:${index / 20}s">
                    <div class="media-content">
                        <strong><a href="${link}">${title}</a></strong>
                        <p class="description">${description}</p>
                        <p class="language">${language}</p>
                        <footer>${date}</footer>
                    </div>
                </div>
            `
        })
        
    })

