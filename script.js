const imagePaths = [
    'images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg',
    'images/img4.jpg', 'images/img5.jpg', 'images/img6.jpg',
    'images/img7.jpg', 'images/img8.jpg', 'images/img9.jpg', 'images/img10.jpg'
  ];
  
  let currentImage = 0;
  let yesIndex = 0, noIndex = 0, maybeIndex = 0;
  
  const yesShayaris = [
    `"Mujh se pehli si mohabbat mere mehboob na maang Mein ne samjha tha ke tu hai to darakhshaan hai hayaat Tera gham hai to gham-e-dahar ka jhagdha kya hai"`,
    // Add up to 50...
  ];
  
  const noShayaris = [
    `"Woh jo kehte the tumse nafrat hai, Woh bhi aksar tumhein dekhte hain. Yeh mohabbat bhi ajeeb silsila hai."`,
    // Add up to 50...
  ];
  
  const maybeShayaris = [
    `"Woh keh gayi sochungi ab tak soch rahi hai,Bechaari meri mohabbat mein khud se rooth rahi hai.Aankhon mein kuch lamhe ruk gaye hain."`,
    // Add up to 50...
  ];
  
  function showNextImage() {
    currentImage++;
    if (currentImage < imagePaths.length) {
      document.getElementById("memoryImage").src = imagePaths[currentImage];
    } else {
      document.getElementById("imageContainer").style.display = "none";
      document.getElementById("proposalSection").style.display = "block";
      document.getElementById("title").innerText = "Will You Be Mine?";
    }
  }
  
  function handleResponse(response) {
    const shayari = document.getElementById("shayari");
    let line = "";
  
    if (response === "yes") {
      line = yesShayaris[yesIndex % yesShayaris.length];
      yesIndex++;
    } else if (response === "no") {
      line = noShayaris[noIndex % noShayaris.length];
      noIndex++;
    } else if (response === "maybe") {
      line = maybeShayaris[maybeIndex % maybeShayaris.length];
      maybeIndex++;
    }
  
    typewriterEffect(shayari, line);
  }
  
  function typewriterEffect(element, text) {
    element.classList.remove("typewriter-text");
    element.innerHTML = "";
    let i = 0;
    const speed = 40;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        element.classList.add("typewriter-text");
      }
    }
    type();
  }
  