function info(selected) {
    console.log(selected);

    if ((selected == 'Tykk' || selected == 'Tynn') &&
        (selected == 'Taco' || selected == 'Kylling' || selected == 'Pepperoni' || selected == 'Biff') &&
        (selected == 'Stor' || selected == 'Middels' || selected == 'Liten') &&
        (selected == 'Firkantet' || selected == 'Rund')) {
        infoDiv = 'Du har fylt ut alt og er klar til å bestille!';
        btnBestill.disabled = false;
     } else {
        infoDiv = 'Du har ikke valgt:';
        if (!selected == 'Tykk' && !selected == 'Tynn'){
            infoDiv += '<li>bunn</li>';
        }
        if (!selected == 'Taco' && !selected == 'Kylling' && !selected == 'Pepperoni' && !selected == 'Biff'){
            infoDiv += '<li>fyll</li>';
        }
        if (!selected == 'Stor' && !selected == 'Middels' && !selected == 'Liten'){
            infoDiv += '<li>størrelse</li>';
        }
        if (!selected == 'Firkantet' && !selected == 'Rund'){
            infoDiv += '<li>type</li>';
        }
    }
    showTopping();
}

function showTopping(){
document.getElementById('showTopping').innerHTML = infoDiv;
}