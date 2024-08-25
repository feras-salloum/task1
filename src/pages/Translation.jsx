import { Label, TextInput } from "flowbite-react";
import { Button } from "@mui/material";
import { useState } from "react";

let raw = "";
let target = "";
let requestOptions = {
  method: "",
  redirect: "",
  headers: "",
  body: "",
};
const myHeaders = new Headers();
myHeaders.append("apikey", "WWqul5baB1lsWYtB4QcfL3T2Pz78DBoP");

function Translation() {
  const [TEXT, setTEXT] = useState("");

  function Gittranslation() {
    // النص المراد ترجمتة يوضع في المتغير التالي
    console.log(raw);
    console.log(target);
    requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: myHeaders,
      body: raw,
    };
  }

  function show() {
    fetch(
      `https://api.apilayer.com/language_translation/translate?target=${target}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => setTEXT(result))
      .catch((error) => setTEXT(error));
  }

  function tist() {
    const TextlInput = document.querySelectorAll("#T")[0];
    const languageInput = document.querySelectorAll("#L")[0];
    raw = TextlInput.value;
    target = languageInput.value;
  }

  return (
    <div className="Translation">
      <div className="flex max-w-md flex-col gap-4 divFOrm">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value="the text :" className="moviesLabel" />
            <TextInput id="T" type="text" sizing="sm" />
          </div>
          <div className="mb-2 block">
            <Label
              htmlFor="small"
              value="to language :"
              className="moviesLabel"
            />
            <TextInput id="L" type="text" sizing="sm" />
          </div>
        </div>
        <Button
          variant="contained"
          onClick={() => {
            tist();
            Gittranslation();
            show();
          }}
        >
          Translation
        </Button>
      </div>
      <textarea className="Textarea">{TEXT.match(/"translation": "\w+."/gi)}</textarea>
    </div>
  );
}

export default Translation;
