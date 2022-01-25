updateView();
function updateView() {
    
    const html =/*html*/`

    <p>Ferdighet 9f - Valgsetninger - Sammenligne flere ting på en gang (og og eller sammen)</p>
    <h3>Pizza-bestilling</h3>
    <div style="padding-bottom: 20px;">Gjør ett valg på hver linje:<br>${infoDiv}</div>

    Bunn: 
    <input  type="radio" name="bunn" onchange="info('Tykk')" />Tykk
    <input type="radio" name="bunn" onchange="info('Tynn')" />Tynn
    <br>

    Fyll: 
    <input type="radio" name="fyll" onchange="info('Taco')"/>Taco
    <input type="radio" name="fyll" onchange="info('Kylling')"/>Kylling
    <input type="radio" name="fyll" onchange="info('Pepperoni')"/>Pepperoni
    <input type="radio" name="fyll" onchange="info('Biff')"/>Biff
    <br>

    Størrelse: 
    <input type="radio" name="str" onchange="info('Stor')"/>Stor
    <input type="radio" name="str" onchange="info('Middels')"/>Middels
    <input type="radio" name="str" onchange="info('Liten')"/>Liten
    <br>

    Type:
    <input type="radio" name="type" onchange="info('Firkantet')"/>Firkantet
    <input type="radio" name="type" onchange="info('Rund')"/>Rund
    <br>

    <button id="bestill" disabled="" onclick="alert('Bestilt!');">Bestill</button>
    <ul>
        <li>Oppgave: Legg til et fyll til</li>
        <li>Oppgave: Legg til en ting til i pizza-bestillingen, for eksempel firkantet eller rund pizza</li>
    </ul>

    `;
    app.innerHTML = html;
}