let repos
fetch('https://cors-anywhere.herokuapp.com/https://github.com/profsucrose?tab=repositories')
    .then(raw => raw.text())
    .then(html => {
        const rawRepos = html.match(/Code">[\s\S]*?<\/li/g).map(x => x.match(/>[\s\S]*?</g))
        const repos = rawRepos.map(x => x.map(y => y.split('').filter(c => c !== '<' && c !== '>' && c !== '\n').join('').trim()).filter(x => x))
        
        repos.forEach(repo => {
            console.log(repo)
            const title = repo[0]
            const link = `https://github.com/profsucrose/${title}`
            const description = !repo[1].toLowerCase().includes('fork')
                                    ? repo[1].split(' ').length > 1 
                                        ? repo[1] 
                                        : '[No description]'
                                    : 'Forked repo'
            document.querySelector('.cards').innerHTML += `
                <div class="box" onClick="() => {alert('click'); location.href='${link}'}">
                    <div class="media-content">
                        <p>
                            <strong><a href="${link}">${title}</a></strong>
                            <br>${description}</br>
                        </p>
                    </div>
                </div>
            `
        })
        
    })

