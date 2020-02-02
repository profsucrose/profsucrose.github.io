console.log(`%c
_____________________________________________________________________________________________________
____________________________________________________________________________________________________
__________________________________________________NNNNN_____________________________________________
__________________________________NmNNNNNNNNmmmddddddddddmN_________________________________________
________________________________NmmmmmmmmmNNmmmddddddddddhdddN______________________________________
________________________________mmmmmmmmmmmmmmmmdhyyyyyyhhhhddm_____________________________________
______________________________NmmmmmmmmmmmmmmmmmdhhhhhhhhhhhdddNN___________________________________
_______________________________mmmmdddddmmddddddhdddddddddhhddddmNNNNN______________________________
______________________________hmmmddddddddddddddddddddddhhhdddddmNNNNNNNNN__________________________
_________________________NNNNNmNNmmmmmmddddddddddddddddhhhhdddddmNNNNNNNNNNNNN______________________
___________________NmmNmNNNNNNNNNNmmmmmmmdmmddddddddddddddddddddmmmNNNNNmmmmNNN_____________________
________________mNNNmmmmmNNNmmNNNNNNmmmmmmmmmmmmmmmdddddddddddmmmmdmmmmmmmmmmmNN____________________
_________________NNNNNNNNNNmmN____NNNmmmmmmmmmmmmmmmmmmdmmdmmmmNNNmddddddddmmmmN____________________
____________________NNNNNNNNN_______NNNNNNNNNmdddmNNNNNNNNmdmN___NdddddhddddddmN____________________
________________________mdmNNNNNN____NNN_NNNNNdddN_______NmmNNmmddhhhhhhddddddmN____________________
________________________oossyhmmNNNNNNNmmdmmmmmdddddddddddddddddddhhhhddddddddN_____________________
_______________________d+ssooosydNmmmNNNNNmmmmmdddddddddddmdddddddddddddddddmN______________________
_______________________hossssssyd_NdyyyhdmmNNNNNmmmmmmmmmmmmmmmddddddddddyoy________________________
_______________________NosyyyyyyydN_myssssyyyhhhdddddmmmmmmmmmmdddhhhhyyso++________________________
________________________hysyyyhyyssyyyyysyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyysso+N_______________________
_________________________dsyyhhhhhhyyhhyyhhhhddhhdddhhhhyyyyyyyyyyyyyyyyssoy________________________
__________________________hyhhdhdhhhhhhhhdddddddddddddhdhyyyyyyyyyssssssysh_________________________
_________________________Nyhdddddddhdddddddddddddddddddhhhyyysoo+//+++++sm__________________________
________________________Nosyhddhhhhhddddddddddddddddhyss++++++ooooooosso____________________________
________________________y+osyhdddddddddddddhhy+ossssooooooooosoooooydN______________________________
________________________sosssyyhddddddddhhysss/ossoooossoooooosyhm__________________________________
_______________________h+osyyyyyyhdddddyssssssssssssssoooooo+N______________________________________
_____________________mo+oossssyyyyyhdddy+osyssssssssssso++/:-sm_____________________________________
____________________h+++oooosssyyyyyhhdy+++++++++/////::::---oysydN_________________________________
___________________hoydhossssssssyyyhhhh+//////////::::::----+hhyysyh_______________________________
__________________mydmmdossssssssssyyy++o+/////:::::::::-----/ddhhysod______________________________
__________________ydmNmssssssosssssss+/++o+//::::::::::::::--/hdhhhhyshN____________________________
_________________Nsdmdsssssssssssyyys//oooo+::::::::::::::---:ohmmmmmdd_____________________________
________________mdyssosssssssssssssyo//+oooo:::::::::::::---::/sN___________________________________
_______________yo+osssssssssssssssyo/++ooos/:::::::::::----::/om___________________________________
________________moo+ossssssssyyyyyyhhysoosss//::::::::::::::://oN___________________________________
_________________ssssyssyyyyyyyyhhhhhhhysoo//::::::::::::::///+h____________________________________
_________________mssyysyyyyyyhhhhhhhhhho///::::::::::::::////ohN____________________________________
__________________dssyyyyyyhhhhhhhhhhhy::::::::::::::://///ohN______________________________________
___________________ysyyyyyyyyyyyyhhhyhs::::::::::://////osdN________________________________________
___________________dsyyyyyyyyyyyyyyhyy+:::::::::///+oyhmN___________________________________________
___________________Nssyyyyyyyyyyyyyyys:::::////+oydmN_______________________________________________
____________________yosssssyyyyyyyyhy+:::/+oshmN____________________________________________________
____________________Noosssyyyyyyyyhyyo//sdN_________________________________________________________
_____________________dssssyyyyyhhhhyyyhm____________________________________________________________
______________________NhyyhhhhhhhhhhdN______________________________________________________________
_________________________NNNmmdmmNN_________________________________________________________________
____________________________________________________________________________________________________
____________________________________________________________________________________________________
____________________________________________________________________________________________________
____________________________________________________________________________________________________
`, 'color:red;')
console.log(`
    %cThat's right Timothy, COmputers ARE cool!
`, "color:green;font-size:30px;")
fetch('https://cors-anywhere.herokuapp.com/https://github.com/profsucrose?tab=repositories')
    .then(raw => raw.text())
    .then(html => {
        const rawRepos = html.match(/Code">[\s\S]*?<\/li/g).map(x => x.match(/>[\s\S]*?</g))
        const repos = rawRepos.map(x => x.map(y => y.split('').filter(c => c !== '<' && c !== '>' && c !== '\n').join('').trim()).filter(x => x))

        repos.forEach((repo, index) => {
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

