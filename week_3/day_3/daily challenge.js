const apiKey = "6126a4030b146d9aab3ed265";
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const amountInput = document.getElementById("amount");
const resultDiv = document.getElementById("result");
const convertBtn = document.getElementById("convert");
const switchBtn = document.getElementById("switch");

async function loadCurrencies() {
  try {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);
    if (!res.ok) throw new Error("Failed to load currencies");

    const data = await res.json();
    const currencies = data.supported_codes;

    currencies.forEach(currency => {
      const option1 = document.createElement("option");
      const option2 = document.createElement("option");

      option1.value = option2.value = currency[0];
      option1.textContent = option2.textContent = `${currency[0]} - ${currency[1]}`;

      fromSelect.appendChild(option1);
      toSelect.appendChild(option2);
    });

  } catch (error) {
    resultDiv.textContent = "Error loading currencies.";
  }
}

async function convertCurrency() {
  const amount = amountInput.value;
  const from = fromSelect.value;
  const to = toSelect.value;

  if (!amount) return;

  try {
    const res = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`
    );

    if (!res.ok) throw new Error("Conversion failed");

    const data = await res.json();
    resultDiv.textContent = `${amount} ${from} = ${data.conversion_result} ${to}`;

  } catch (error) {
    resultDiv.textContent = "Error converting currency.";
  }
}

function switchCurrencies() {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;

  convertCurrency();
}

convertBtn.addEventListener("click", convertCurrency);
switchBtn.addEventListener("click", switchCurrencies);

loadCurrencies();