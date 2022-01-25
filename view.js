updateView();
function updateView() {
    
    document.getElementById("app").innerHTML =/*html*/`

    <p>Ferdighet 9f - Valgsetninger - Sammenligne flere ting på en gang (og og eller sammen)</p>
    <h3>Pizza-bestilling</h3>
    <div style="padding-bottom: 20px;">Gjør ett valg på hver linje:</div>

    Bunn: 
    <input type="radio" name="bunn" ${pizzaDiv.bread === 'Tykk' ? 'checked' : ''} onchange="setBread('Tykk')" />Tykk
    <input type="radio" name="bunn" ${pizzaDiv.bread === 'Tynn' ? 'checked' : ''} onchange="setBread('Tynn')" />Tynn
    <br>

    Fyll: 
    <input type="radio" name="fyll" ${pizzaDiv.fill === 'Taco' ? 'checked' : ''} onchange="setFill('Taco')"/>Taco
    <input type="radio" name="fyll" ${pizzaDiv.fill === 'Kylling' ? 'checked' : ''} onchange="setFill('Kylling')"/>Kylling
    <input type="radio" name="fyll" ${pizzaDiv.fill === 'Pepperoni' ? 'checked' : ''} onchange="setFill('Pepperoni')"/>Pepperoni
    <input type="radio" name="fyll" ${pizzaDiv.fill === 'Biff' ? 'checked' : ''} onchange="setFill('Biff')"/>Biff
    <br>

    Størrelse: 
    <input type="radio" name="str" ${pizzaDiv.str === 'Stor' ? 'checked' : ''} onchange="setStr('Stor')"/>Stor
    <input type="radio" name="str" ${pizzaDiv.str === 'Middels' ? 'checked' : ''} onchange="setStr('Middels')"/>Middels
    <input type="radio" name="str" ${pizzaDiv.str === 'Liten' ? 'checked' : ''} onchange="setStr('Liten')"/>Liten
    <br>

    Type:
    <input type="radio" name="type" ${pizzaDiv.shape === 'Firkantet' ? 'checked' : ''} onchange="setShape('Firkantet')"/>Firkantet
    <input type="radio" name="type" ${pizzaDiv.shape === 'Rund' ? 'checked' : ''} onchange="setShape('Rund')"/>Rund
    <br>
    <button ${isOrderReady() ? '' : 'disabled'} onclick="alert('Bestilt!');">Bestill</button><br>
    ${isOrderReady() ? 'Du har fylt ut alt og er klar til å bestille!' :/*html*/`
    <div>Du har ikke valgt:</div>
    <ul>
        ${isBreadSelected() ? '' : '<li>Bunn</li>'}
        ${isFillSelected() ? '' : '<li>Fyll</li>'}
        ${isStrSelected() ? '' : '<li>Størrelse</li>'}
        ${isShapeSelected() ? '' : '<li>Type</li>'}
    </ul>
    `}
    `;
}

// Det over er en IF setning i viewet også kallt "Ternary Operator"
// Statement ? true : false