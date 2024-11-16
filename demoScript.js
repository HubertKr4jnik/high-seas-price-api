async function getData() {
    let radioButtons = document.getElementsByName('type');
    let activeRadio = document.getElementsByName('type')[0];

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            activeRadio = radioButtons[i];
        }
    }

    let url = "https://high-seas-shop-api.hubert-krajnik.hackclub.app/api";

    if (activeRadio.id == "radioOne") {
        url = "https://high-seas-shop-api.hubert-krajnik.hackclub.app/api/iPad";
    }

    document.getElementById("resultOutput").innerText = "Fetching. Please wait...";

    try {
        // const timeout = setTimeout(()=>{
        //     document.getElementById("resultOutput").innerText = "error: fetch request timeout"
        // },30000)

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();

      let stringified = JSON.stringify(json);
      document.getElementById("resultOutput").innerText = stringified;

    //   clearTimeout(timeout)
    } catch (error) {
        // clearTimeout(timeout)
        document.getElementById("resultOutput").innerText = error.message + ". See console for more detail";
        console.error(error.message);
    }
}

document.getElementById("submitBtn").addEventListener('click', getData)