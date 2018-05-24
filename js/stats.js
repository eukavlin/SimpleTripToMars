"use strict"

const statsFunc = function() {
  const tables = document.getElementById("statspage").getElementsByTagName("table");
  const theads = document.getElementById("statspage").getElementsByTagName("thead");
  const tbodys = document.getElementById("statspage").getElementsByTagName("tbody");
  let key;
  let trs;
  let value;

  //Write page number in second th
  for (let i = 0; i < theads.length; i++) {
    trs = theads[i].getElementsByTagName("tr")[0];
    trs.children[1].textContent = (i + 1) + "/" + tables.length;

  }
  //Gather localStorage stats
  for (let i = 0; i < tbodys.length; i++) {
    trs = tbodys[i].getElementsByTagName("tr");
    for (let j = 0; j < trs.length; j++) {
      key = trs[j].children[0].textContent;
      key = key.toLowerCase();
      key = key.split("\n").join("");
      key = key.split(":").join("");
      key = key.split(" ").join("");
      value = localStorage.getItem(key);
      trs[j].children[1].textContent = value;
    }
  }

  //Set table display
  for (let i = 1; i < tables.length; i++) {
    tables[i].style["display"] = "none";
  }
}

//Get the one table being displayed
const displayedElementIndex = function(array) {
  let displayed;
  for (let i = 0; i < array.length; i++) {
    if (displayed == undefined) {
      if (array[i].style["display"] != "none") {
        displayed = i;
      }
    }
  }
  return displayed;
}

const statsPages = function(button) {
  const pages = document.getElementById("statspage").getElementsByTagName("table");
  const num = displayedElementIndex(pages);
  const prev = pages[num - 1];
  const next = pages[num + 1];
  let curr = pages[num];

  if (button == "next" && next != null && next != undefined) {
    //Set the current display table to none, displays the next one
    curr.style["display"] = "none";
    next.style["display"] = "";
  } else if (button == "previous" && prev != null && prev != undefined) {
    //Set the current display table to none, displays the last one
      curr.style["display"] = "none";
      prev.style["display"] = "";
  } else {
    curr = pages[0]
  }
};

const statsFuncReady = function() {
  document.getElementById("statsbutton").addEventListener("click", statsFunc);
  document.getElementById("nextstats").addEventListener("click", function() { statsPages('next') });
  document.getElementById("prevstats").addEventListener("click", function() { statsPages('previous') });
}

document.addEventListener("DOMContentLoaded", statsFuncReady);
