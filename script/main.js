//The function fetch the json info for the left side of the page
async function getObjectTest() {
  //fetch and check
  const respons = await fetch("./data/personalInfo.json");
  if (respons.ok) {
    const data = await respons.json();
    //go through the data and sort object keys and content
    for (const element in data) {
      //create new elements
      const newUl = document.createElement("ul");
      const newTitle = document.createElement("h4");
      const container = document.querySelector(".personal-summary");
      //keys are turned into titles
      newTitle.textContent = element;
      container.appendChild(newTitle);
      //class assigned
      newUl.className = "personal-info-items";
      //info will contain all attributes of the key / title
      let info = data[element];
      info.forEach((infoBlock) => {
        let newLi = document.createElement("li");
        //if the attribute is just a string then it will be added as a new LI element
        if (typeof infoBlock == "string") {
          newLi.textContent = infoBlock;
        } else {
          //if it is an array a function to create sublists is called
          createSubList(infoBlock, newUl);
        }
        newUl.appendChild(newLi);
      });
      container.appendChild(newUl);
    }
  }
}

function createSubList(subList, upperUl) {
  subList.forEach((element) => {
    const newLi = document.createElement("li");
    if (typeof element == "string" && element.length != 0) {
      newLi.textContent = element;
      upperUl.appendChild(newLi);
    } else {
      const ul = document.createElement("ul");
      ul.className = "personal-info-items";
      newLi.appendChild(ul);
      upperUl.appendChild(newLi);
      createSubList(element, ul);
    }
  });
}

async function createMain() {
  const mainElement = document.querySelector("main");
  const respons = await fetch("./data/cv.json");
  if (respons.ok) {
    const mainData = await respons.json();

    const mainAtt = Object.keys(mainData);
    const newH1 = document.createElement("h1");

    newH1.textContent = mainAtt[0];
    mainElement.appendChild(newH1);

    for (const element in mainData[mainAtt]) {
      const newH4title = document.createElement("h4");
      newH4title.textContent = element;
      mainElement.appendChild(newH4title);
      let something = mainData[mainAtt];
      if (typeof something[element] == "string") {
        const newP = document.createElement("p");
        newP.className = "description";
        newP.textContent = something[element];
        mainElement.appendChild(newP);
      } else {
        const newUL = document.createElement("Ul");
        newUL.className = "sublist";

        createCvSublist(something[element], newUL);
        mainElement.appendChild(newUL);
      }
    }
  }
}

function createCvSublist(sublist, parentUl) {
  const keys = Object.keys(sublist);

  keys.forEach((element) => {
    const newBoldLi = document.createElement("li");
    if (element.length > 1) {
      newBoldLi.textContent = element;
      newBoldLi.className = "bold-sublist";
      parentUl.appendChild(newBoldLi);
    }

    if (typeof sublist[element] == "string") {
      const newLi = document.createElement("li");
      newLi.textContent = sublist[element];
      parentUl.appendChild(newLi);
    } else {
      const newLi = document.createElement("li");
      const subUL = document.createElement("ul");

      subUL.className += "sub-" + parentUl.className;
      createCvSublist(sublist[element], subUL);
      parentUl.appendChild(newLi);
      newLi.appendChild(subUL);
    }
  });
}

createMain();
getObjectTest();
