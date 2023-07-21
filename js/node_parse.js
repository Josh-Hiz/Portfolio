var data; 
var ring = [];
var ringLinks = [];
async function getNeighbors() {
    try {
        const response = await fetch("https://sitring.eric.si/josh_h/neighbors", {
            method: 'GET',
        });
        const neighbors = await response.json();
        return neighbors;
    } catch (error) {
        console.error(error);
    }
}

async function parseNeighbors(){
    data = await getNeighbors();
    for(var i = 0; i < data.length; i++) {
        ring.push(data[i]);
    }
    for(var i = 0; i < ring.length; i++) {
        createLinks(ring[i]);
    }
}

function createLinks(data){
    let link = window.document.createElement('a');
    link.href=data.url;
    link.innerText=data.name;
    link.target="_blank";
    ringLinks.push(link);
    console.log(ringLinks);
    window.document.body.append(a);
}

parseNeighbors();