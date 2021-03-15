export const areaInjection = () => {
  const area = document.getElementById("TestTextArea")
  if (area) {
    area.value += "\n FOCK ME" // MUST USE \\ instead for RaidBots
  }
}

export const areaTrigger = () => {
  const input = "MASSIVE SUCCESS?"
  const area = document.getElementById("TestTextArea")
  if (area) {
    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLTextAreaElement.prototype,
      "value"
    ).set
    nativeInputValueSetter.call(area, "react 16 value")
    var ev2 = new Event("input", { bubbles: true })
    area.dispatchEvent(ev2)
  }
}

export const fieldTrigger = () => {}
