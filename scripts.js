

    async function trans(inp, from, to) {

        let res = await fetch("https://libretranslate.de/translate", {
            method: "POST",
            body: JSON.stringify({
                q: `${inp}`,
                source: `${from}`,
                target: `${to}`
            }),
            headers: { "Content-Type": "application/json" }
        });

        let data = await res.json()
        console.log("data :", data);

        let OPtext = document.getElementById("op")
        OPtext.innerHTML = null
        let appnd = document.createElement("p")
        appnd.textContent = data.translatedText

        OPtext.append(appnd)



    }



    var from;
    var to;


    function getSelectValue() {
        var selectedValue = document.getElementById("lang-select").value;

        from = selectedValue

    }

    function getSelectValue1() {

        var selectedValue1 = document.getElementById("lang-select1").value;
        to = selectedValue1

        console.log(from, to)
    }


    let inp = document.getElementById("translate")

    inp.addEventListener('keyup', (e) => {

        if (e.keyCode === 13) {
            // console.log(e.target.value)

            let inpText = e.target.value;
            trans(inpText, from, to)

        }
    })




