const home = document.getElementById("home");
const profile = document.getElementById("profile");
const profileLayout = document.getElementById("profileLayout");
const openProfile = document.getElementById("openProfile");
const homeBtn = document.getElementById("homeBtn");
const backBtn = document.getElementById("backBtn");

// Helper function to attach click handler safely (avoid duplicates)
function attachClickHandlers() {
  // Remove old handlers by cloning elements
  document.querySelectorAll(".friend-pic").forEach(pic => pic.replaceWith(pic.cloneNode(true)));
  document.querySelectorAll(".friend-card h3").forEach(name => name.replaceWith(name.cloneNode(true)));

  // Friend pics click
  document.querySelectorAll(".friend-pic").forEach(pic=>{
    pic.addEventListener("click", ()=>{
      const data={
        name: pic.dataset.name,
        pic: pic.src,
        birth: pic.dataset.birth,
        age: pic.dataset.age,
        desc: pic.dataset.desc,
        social:false,
        socialLinks:{facebook:"#", instagram:"#"}
      };
      showProfile(data);
    });
  });

  // Friend names click
  document.querySelectorAll(".friend-card h3").forEach(nameEl=>{
    nameEl.addEventListener("click", ()=>{
      const parent = nameEl.closest(".friend-card");
      const pic = parent.querySelector(".friend-pic");
      const data={
        name: pic.dataset.name,
        pic: pic.src,
        birth: pic.dataset.birth,
        age: pic.dataset.age,
        desc: pic.dataset.desc,
        social:false,
        socialLinks:{facebook:"#", instagram:"#"}
      };
      showProfile(data);
    });
  });
}

// Open your profile
openProfile.addEventListener("click", () => {
  showProfile({
    name: "Saadman Rahim",
    pic: "mypic.jpg",
    birth: "10 January 2007",
    age: "19",
    desc: "Hey! I'm Saadman. I love coding, chatting, and making fun websites!",
    social: true,
    socialLinks: { facebook:"https://facebook.com/YOUR_FB", instagram:"https://instagram.com/YOUR_IG" }
  });
});

// Back button
backBtn.addEventListener("click", () => {
  profile.classList.remove("active");
  home.classList.add("active");
  document.body.classList.remove("profile-theme");
  backBtn.style.display="none";
});

// Navbar home click
homeBtn.addEventListener("click", ()=>{ backBtn.click(); });

// Show profile function
function showProfile(data){
  // Clear old cards to avoid duplicates
  profileLayout.innerHTML = "";

  home.classList.remove("active");
  profile.classList.add("active");
  document.body.classList.add("profile-theme");
  backBtn.style.display="block";

  const wrapper = document.createElement("div");
  wrapper.className="card";
  wrapper.style.background="linear-gradient(135deg,#fff1, #fff3)";

  // Big profile pic
  const bigPic = document.createElement("img");
  bigPic.src = data.pic;
  bigPic.className="profile-pic big";
  wrapper.appendChild(bigPic);

  // Name
  const h2 = document.createElement("h2");
  h2.textContent = data.name;
  wrapper.appendChild(h2);

  // Birth
  if(data.birth){
    const p1 = document.createElement("p");
    p1.innerHTML = `<b>Birth Date:</b> ${data.birth}`;
    wrapper.appendChild(p1);
  }

  // Age
  if(data.age){
    const p2 = document.createElement("p");
    p2.innerHTML = `<b>Age:</b> ${data.age}`;
    wrapper.appendChild(p2);
  }

  // Description
  const desc = document.createElement("p");
  desc.textContent = data.desc || "";
  wrapper.appendChild(desc);

  // Social links
  const socialDiv = document.createElement("div");
  socialDiv.className="social-links";

  const fb = document.createElement("a");
  fb.href = data.socialLinks.facebook;
  fb.target="_blank";
  const fbImg = document.createElement("img");
  fbImg.src="facebook.png";
  fbImg.alt="Facebook";
  fb.appendChild(fbImg);

  const ig = document.createElement("a");
  ig.href = data.socialLinks.instagram;
  ig.target="_blank";
  const igImg = document.createElement("img");
  igImg.src="instagram.png";
  igImg.alt="Instagram";
  ig.appendChild(igImg);

  socialDiv.appendChild(fb);
  socialDiv.appendChild(ig);

  wrapper.appendChild(socialDiv);

  profileLayout.appendChild(wrapper);
}

// Initialize click handlers for friends
attachClickHandlers();