//** LED Board **//

// Build 16 rows with 32 divs
export function getBoard(grid, boardName, ledName, defaultColor = "") {
  let hidden = ""
  if (ledName == "light") {
    hidden = "hidden"
  }

  // place the LED's
  for (let r = 0; r < grid.height; r++) {
    let currentRow = 'row-' + r
    document.getElementById(boardName).innerHTML += "<ul id='row-" + r + "'></ul>"

    for (let c = 0; c < grid.width; c++) {
      document.getElementById(currentRow).innerHTML += "<li id='" + r + "-" + c + "-" + ledName + "' class='dib led-size led-spacing br-100 " + hidden + " " + defaultColor + "'></li>"
    }
  }
}

// Turn on a single light
export function turnOn(grid, location, color) {
  // Dont turn on the light if it isn't on the grid
  if (location.column >= grid.width || location.column < 0 || location.row >= grid.height || location.row < 0) {
    return
  }

  document.getElementById(location.row + "-" + location.column + "-light").classList.add(color)
  document.getElementById(location.row + "-" + location.column + "-light").classList.remove("hidden")
}

// Turn off a single light
export function turnOff(location) {
  document.getElementById(location.row + "-" + location.column + "-light").className = "dib led-size led-spacing br-100"
  document.getElementById(location.row + "-" + location.column + "-light").classList.add("hidden")
}


export function getPreviewBoard(boardName, ledName, defaultColor = "") {
  let hidden = ""
  if (ledName == "light") {
    hidden = "hidden"
  }

  // place the LED's
  for (let  r = 0; r < 16; r++) {
    let currentRow = boardName + '-row-' + r
    document.getElementById(boardName).innerHTML += "<ul id='" + boardName + "-row-" + r + "' class='flex'></ul>"

    for (let c = 0; c < 32; c++) {
      document.getElementById(currentRow).innerHTML += "<li id='" + r + "-" + c + "-" + ledName + "' class='dib led-size led-spacing br-100 " + hidden + " " + defaultColor + "'></li>"
    }
  }
}
