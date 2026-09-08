// ========================================
// REDEEM CODES
// ========================================

const redeemCodes = [

  "JBGW394HHDCW4S7P",
  "L0R2A083VP0GP8UG",
  "5WKK1602CDWW8JAW",
  "4N228JL4S21VF2MZ"

];


// ========================================
// GET ELEMENTS
// ========================================

const subscribeBtn =
  document.getElementById("subscribeBtn");

const likeBtn =
  document.getElementById("likeBtn");

const videosBtn =
  document.getElementById("videosBtn");

const shareBtn =
  document.getElementById("shareBtn");


const next1 =
  document.getElementById("next1");

const next2 =
  document.getElementById("next2");

const next3 =
  document.getElementById("next3");

const next4 =
  document.getElementById("next4");


const getCodeBtn =
  document.getElementById("getCodeBtn");


const step1 =
  document.getElementById("step1");

const step2 =
  document.getElementById("step2");

const step3 =
  document.getElementById("step3");

const step4 =
  document.getElementById("step4");

const step5 =
  document.getElementById("step5");


const reward =
  document.getElementById("reward");

const redeemCode =
  document.getElementById("redeemCode");


// ========================================
// STEP FLAGS
// ========================================

let subscribeOpened = false;
let likeOpened = false;
let videosOpened = false;
let shareOpened = false;


// ========================================
// STEP 1 - SUBSCRIBE
// ========================================

subscribeBtn.addEventListener("click", () => {

  subscribeOpened = true;

});


// ========================================
// STEP 2 - LIKE VIDEO
// ========================================

likeBtn.addEventListener("click", () => {

  likeOpened = true;

});


// ========================================
// STEP 3 - VIEW VIDEOS
// ========================================

videosBtn.addEventListener("click", () => {

  videosOpened = true;

});


// ========================================
// STEP 4 - WHATSAPP SHARE
// ========================================

shareBtn.addEventListener("click", () => {

  shareOpened = true;


  const channelLink =
    "https://youtube.com/@aistoriesv7?si=wqxJXIz5C0YBh8Rx";


  const message =
    "Check out this YouTube channel! 👇\n\n" +
    channelLink;


  const whatsappLink =
    "https://wa.me/?text=" +
    encodeURIComponent(message);


  window.open(
    whatsappLink,
    "_blank"
  );

});


// ========================================
// UNLOCK WHEN USER RETURNS
// ========================================

window.addEventListener(
  "focus",
  checkReturn
);


document.addEventListener(
  "visibilitychange",
  () => {

    if (!document.hidden) {

      checkReturn();

    }

  }
);


// ========================================
// CHECK RETURN
// ========================================

function checkReturn() {


  // STEP 1

  if (subscribeOpened) {

    next1.disabled = false;

    next1.classList.remove("locked");

    next1.classList.add("gold");

    next1.innerHTML = "Next →";

  }


  // STEP 2

  if (likeOpened) {

    next2.disabled = false;

    next2.classList.remove("locked");

    next2.classList.add("gold");

    next2.innerHTML = "Next →";

  }


  // STEP 3

  if (videosOpened) {

    next3.disabled = false;

    next3.classList.remove("locked");

    next3.classList.add("gold");

    next3.innerHTML = "Next →";

  }


  // STEP 4

  if (shareOpened) {

    next4.disabled = false;

    next4.classList.remove("locked");

    next4.classList.add("gold");

    next4.innerHTML = "Next →";

  }

}


// ========================================
// GO TO STEP 2
// ========================================

next1.addEventListener("click", () => {

  step1.classList.add("hidden");

  step2.classList.remove("hidden");

});


// ========================================
// GO TO STEP 3
// ========================================

next2.addEventListener("click", () => {

  step2.classList.add("hidden");

  step3.classList.remove("hidden");

});


// ========================================
// GO TO STEP 4
// ========================================

next3.addEventListener("click", () => {

  step3.classList.add("hidden");

  step4.classList.remove("hidden");

});


// ========================================
// GO TO FINAL STEP
// ========================================

next4.addEventListener("click", () => {

  step4.classList.add("hidden");

  step5.classList.remove("hidden");

});


// ========================================
// RANDOM REDEEM CODE
// ========================================

getCodeBtn.addEventListener("click", () => {


  // Hide final step

  step5.classList.add("hidden");


  // Show reward

  reward.classList.remove("hidden");


  // Pick random code

  const randomIndex =
    Math.floor(
      Math.random() *
      redeemCodes.length
    );


  // Display selected code

  redeemCode.textContent =
    redeemCodes[randomIndex];

});
