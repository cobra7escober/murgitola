const home = document.getElementById("home");
const profile = document.getElementById("profile");
const profileCard = document.getElementById("profileCard");
const openProfile = document.getElementById("openProfile");
const homeBtn = document.getElementById("homeBtn");
const backBtn = document.getElementById("backBtn");

// Click on your profile
openProfile.addEventListener("click", () => {
  showProfile({
    name: "Saadman Rahim",
    pic: "mypic.jpg",
    birth: "10 January 2007",
    age: "19",
    college: "BAF Shaheen Kurmitola",
    section: "SIGMA",
    social: true
  });
});

// Back button
backBtn.addEventListener("click", () => {
  profile.classList.remove("active");
  home.classList.add("active");
  document.body.classList.remove("profile-theme");
  backBtn.style.display = "none";
});

// Navbar click
homeBtn.addEventListener("click", () => { backBtn.click(); });

// Friends click
document.querySelectorAll(".friend-pic").forEach(pic => {
  pic.addEventListener("click", () => {
    const friendName = pic.dataset.name;
    showProfile({
      name: friendName,
      pic: pic.src,
      birth: "N/A",
      age: "N/A",
      college: "BAF Shaheen Kurmitola",
      section: "SIGMA",
      social: false
    });
  });
});

// Function to show profile dynamically
function showProfile(data){
  home.classList.remove("active");
  profile.classList.add("active");
  document.body.classList.add("profile-theme");
  backBtn.style.display = "block";

  profileCard.innerHTML = "";

  const bigPic = document.createElement("img");
  bigPic.src = data.pic;
  bigPic.className = "profile-pic big";
  profileCard.appendChild(bigPic);

  const h2 = document.createElement("h2");
  h2.textContent = data.name;
  profileCard.appendChild(h2);

  if(data.birth !== "N/A"){
    const p1 = document.createElement("p");
    p1.innerHTML = `<b>Birth Date:</b> ${data.birth}`;
    profileCard.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerHTML = `<b>Age:</b> ${data.age}`;
    profileCard.appendChild(p2);
  }

  const p3 = document.createElement("p");
  p3.innerHTML = `<b>College:</b> ${data.college}`;
  profileCard.appendChild(p3);

  const p4 = document.createElement("p");
  p4.innerHTML = `<b>Section:</b> ${data.section}`;
  profileCard.appendChild(p4);

  if(data.social){
    const socialDiv = document.createElement("div");
    socialDiv.className = "social-links";

    const fb = document.createElement("a");
    fb.href = "https://www.facebook.com/YOUR_FACEBOOK_USERNAME";
    fb.target="_blank";
    const fbImg = document.createElement("img");
    fbImg.src = "facebook.png";
    fbImg.alt="Facebook";
    fb.appendChild(fbImg);

    const ig = document.createElement("a");
    ig.href = "https://www.instagram.com/YOUR_INSTAGRAM_USERNAME";
    ig.target="_blank";
    const igImg = document.createElement("img");
    igImg.src = "instagram.png";
    igImg.alt="Instagram";
    ig.appendChild(igImg);

    socialDiv.appendChild(fb);
    socialDiv.appendChild(ig);

    profileCard.appendChild(socialDiv);
  }
}